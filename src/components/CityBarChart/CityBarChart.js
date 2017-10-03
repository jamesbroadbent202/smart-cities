import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { AbstractWidget } from '@gov.au/datavizkit';
import merge from 'lodash/merge';
import numeral from 'numeral';
import AboutTooltip from '../AboutTooltip/AboutTooltip';
import Legend from '../Legend/Legend';
import baseChartConfig from '../../helpers/baseChartConfig';
import getColorVariant from '../../helpers/getColorVariant';
import {
  COLOR_NAMES,
  DATA_TYPES,
  INDICATORS,
} from '../../constants';
import style from './CityBarChart.scss';

const SERIES_SHADES = [
  '700',
  '600',
  '400',
  '100',
  '050',
];

function getSeriesDataForIndicator(cities, indicator) {
  return cities.map((city) => {
    if (indicator in city.indices) {
      return city.indices[indicator];
    }

    console.warn(`${indicator} is not a recognised indicator for ${city.name}`);
    return null;
  });
}

// Bar charts are always sorted by descending value
// if there is more than one indicator the first is used
function sortChartData(cities, indicator) {
  const sortedCities = cities.slice(); // clone so we're not mutating state

  sortedCities.sort((a, b) => (
    Number(b.indices[indicator]) - Number(a.indices[indicator])
  ));

  return sortedCities;
}

const CityBarChart = (props) => {
  // If more than one indicator is passed in, this becomes a stacked bar chart
  const isStacked = props.indicators.length > 1;

  // The indicator data contains things like titles and descriptions. But these can
  // also be passed in explicitly (e.g. for stacked charts where there are more than one indicator)
  // so here we take the passed in value, or the value from the first indicator otherwise.
  const firstIndicator = INDICATORS[props.indicators[0]];

  // check for indicators that don't have a numeric data type
  const hasNonNumericIndicators = props.indicators.find(
    indicator => INDICATORS[indicator].dataType !== DATA_TYPES.NUMBER,
  );

  if (hasNonNumericIndicators) {
    console.warn(`All indicators passed to a bar chart must be numeric. Check ${props.indicators}`);
    return null;
  }

  const title = props.title || firstIndicator.name;
  const shortDescription = props.shortDescription || firstIndicator.shortDescription;
  const longDescription = props.longDescription || firstIndicator.longDescription;

  const data = sortChartData(props.cities, props.indicators[0]);

  // series is an array even if there is only one indicator
  // so this works for a normal or a stacked chart
  const series = props.indicators.map((indicator, i) => ({
    index: props.indicators.length - i, // reverse sort the series (to counteract Highcharts)
    name: INDICATORS[indicator].name,
    color: getColorVariant(props.colorBase, SERIES_SHADES[i]),
    data: getSeriesDataForIndicator(data, indicator),
  }));

  // we set a left margin on the chart explicitly
  // this means we can left align the title and the legend with the y axis
  const marginLeft = 120;

  // The below config will be merged with the base config.
  // colors, sizes, etc. that are shared across all charts belong in the base config
  // Anything specific to BAR charts belongs here.
  const barChartConfig = {
    series,
    chart: {
      type: 'bar',
      height: 500,
      marginLeft,
    },
    plotOptions: {
      bar: {
        animation: false,
        borderRadius: 4,
        pointWidth: 6,
      },
      series: {
        stacking: 'normal',
      },
    },
    xAxis: {
      type: 'category',
      categories: data.map(city => city.name),
    },
    yAxis: {
      ceiling: props.ceiling,
      labels: {
        formatter() {
          // format the number using the indicator's defined format, if available
          return firstIndicator.format
            ? numeral(this.value).format(firstIndicator.format)
            : this.value;
        },
      },
      title: {
        text: shortDescription,
      },
      gridZIndex: 1, // grid lines are in front of the bars
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
  };

  const config = merge({}, baseChartConfig, barChartConfig);

  return (
    <div className={classnames(style.wrapper, props.className)}>
      <div className={style.titleWrapper}>
        <h2
          className={style.title}
          style={{ marginLeft }}
        >
          {title}
        </h2>

        <AboutTooltip
          description={longDescription}
          position="bottom"
          size={18}
        />
      </div>

      <AbstractWidget config={config} />

      {isStacked && (
        <div style={{ marginLeft }}>
          <Legend
            // Legend is our own HTML so we can style and position it with CSS
            className={style.legendWrapper}
            series={series}
          />
        </div>
      )}
    </div>
  );
};

CityBarChart.propTypes = {
  ceiling: PropTypes.number,
  cities: PropTypes.arrayOf(PropTypes.shape({
    indices: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  className: PropTypes.string,
  colorBase: PropTypes.oneOf(Object.values(COLOR_NAMES)).isRequired,
  indicators: PropTypes.arrayOf(
    PropTypes.oneOf(Object.keys(INDICATORS)),
  ).isRequired,
  longDescription: PropTypes.string,
  shortDescription: PropTypes.string,
  title: PropTypes.string,
};

export default CityBarChart;
