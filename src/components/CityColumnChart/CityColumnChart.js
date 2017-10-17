import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { AbstractWidget } from '@gov.au/datavizkit';
import merge from 'lodash/merge';
import numeral from 'numeral';
import AboutTooltip from '../AboutTooltip/AboutTooltip';
import Legend from '../Legend/Legend';
import baseChartConfig from '../../helpers/baseChartConfig';
import getColorRange from '../../helpers/getColorRange';
import getColorVariant from '../../helpers/getColorVariant';
import {
  COLOR_NAMES,
  DATA_TYPES,
  INDICATORS,
} from '../../constants';
import style from './CityColumnChart.scss';

function getSeriesDataForIndicator(cities, indicator) {
  return cities.map((city) => {
    if (indicator in city.indices) {
      return city.indices[indicator];
    }

    console.warn(`${indicator} is not a recognised indicator for ${city.name}`);
    return null;
  });
}

// Column charts are always sorted by descending value
// if there is more than one indicator the first is used
function sortChartData(cities, indicator) {
  const sortedCities = cities.slice(); // clone so we're not mutating state

  sortedCities.sort((a, b) => (
    Number(b.indices[indicator]) - Number(a.indices[indicator])
  ));

  return sortedCities;
}

const CityColumnChart = (props) => {
  // If more than one indicator is passed in, this becomes a stacked column chart
  const isStacked = props.indicatorIds.length > 1;
  const baseColor = getColorVariant(props.colorBase, props.colorVariation);
  const chartColors = getColorRange(baseColor, props.indicatorIds.length);

  // The indicator data contains things like titles and descriptions. But these can
  // also be passed in explicitly (e.g. for stacked charts where there are more than one indicator)
  // so here we take the passed in value, or the value from the first indicator otherwise.
  const firstIndicator = INDICATORS[props.indicatorIds[0]];

  // check for indicators that don't have a numeric data type
  const hasNonNumericIndicators = props.indicatorIds.find(
    indicatorId => INDICATORS[indicatorId].dataType !== DATA_TYPES.NUMBER,
  );

  if (hasNonNumericIndicators) {
    console.warn(`All indicators passed to a column chart must be numeric. Check ${props.indicatorIds}`);
    return null;
  }

  const title = props.title || firstIndicator.name;
  const shortDescription = props.shortDescription || firstIndicator.shortDescription;
  const longDescription = props.longDescription || firstIndicator.longDescription;

  const data = sortChartData(props.cities, props.indicatorIds[0]);

  // series is an array even if there is only one indicator
  // so this works for a normal or a stacked chart
  const series = props.indicatorIds.map((indicatorId, i) => ({
    index: props.indicatorIds.length - i, // reverse sort the series (to counteract Highcharts)
    name: INDICATORS[indicatorId].shortDescription,
    color: chartColors[i],
    data: getSeriesDataForIndicator(data, indicatorId),
  }));

  // We only want to show the short description as the chart title
  // if the chart is not stacked
  const yAxisTitle = isStacked ? {} : { text: shortDescription };

  // The below config will be merged with the base config.
  // colors, sizes, etc. that are shared across all charts belong in the base config
  // Anything specific to *column* charts belongs here.
  const columnChartConfig = {
    series,
    chart: {
      type: 'column',
      height: 500,
      marginLeft: 60,
      marginRight: 0,
    },
    plotOptions: {
      bar: {
        animation: false,
        borderRadius: 4,
        pointWidth: 6,
      },
      series: {
        stacking: 'normal',
        pointWidth: 8,
        borderRadius: 4,
      },
    },
    xAxis: {
      type: 'category',
      categories: data.map(city => city.name),
      labels: {
        rotation: -45,
        style: {
          fontSize: '10px',
        },
      },
    },
    yAxis: {
      ceiling: props.ceiling,
      labels: {
        padding: 0,
        x: 0,
        y: 3,
        formatter() {
          // format the number using the indicator's defined format, if available
          return firstIndicator.format
            ? numeral(this.value).format(firstIndicator.format)
            : this.value;
        },
      },
      title: yAxisTitle,
      gridZIndex: 4, // magic highcharts value to position grid lines in front of the bars: http://api.highcharts.com/highcharts/yAxis.gridZIndex
    },
    title: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 450,
        },
        chartOptions: {
          chart: {
            height: 400,
            marginLeft: 15,
          },
          plotOptions: {
            series: {
              pointWidth: 3,
              borderRadius: 2,
            },
          },
          xAxis: {
            labels: {
              rotation: -90,
              padding: 0,
              style: {
                fontSize: '9px',
              },
            },
          },
        },
      }],
    },
  };

  const config = merge({}, baseChartConfig, columnChartConfig);

  return (
    <div className={classnames(style.wrapper, props.className)}>
      <div className={style.titleWrapper}>
        <h2 className={style.title}>
          {title}
        </h2>

        <AboutTooltip
          description={longDescription}
          position="bottom"
          size={18}
        />
      </div>

      {isStacked && (
        <Legend
          // Legend is our own HTML so we can style and position it with CSS
          className={style.legendWrapper}
          title={shortDescription}
          series={series}
        />
      )}

      {isStacked || (
        <div className={style.descriptionLabel}>
          {shortDescription}
        </div>
      )}

      <AbstractWidget config={config} />
    </div>
  );
};

const cityType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  indices: PropTypes.object.isRequired,
});

CityColumnChart.propTypes = {
  ceiling: PropTypes.number,
  cities: PropTypes.arrayOf(cityType).isRequired,
  city: cityType,
  className: PropTypes.string,
  colorBase: PropTypes.oneOf(Object.values(COLOR_NAMES)).isRequired,
  colorVariation: PropTypes.string.isRequired,
  indicatorIds: PropTypes.arrayOf(
    PropTypes.oneOf(Object.keys(INDICATORS)),
  ).isRequired,
  longDescription: PropTypes.string,
  shortDescription: PropTypes.string,
  title: PropTypes.string,
};

export default CityColumnChart;
