import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { AbstractWidget } from '@gov.au/datavizkit';
import merge from 'lodash/merge';
import numeral from 'numeral';
import AboutTooltip from '../AboutTooltip/AboutTooltip';
import Legend from '../Legend/Legend';
import Icon from '../Icon/Icon';
import baseChartConfig from '../../helpers/baseChartConfig';
import getColorRange from '../../helpers/getColorRange';
import getColorVariant from '../../helpers/getColorVariant';
import {
  COLOR_NAMES,
  INDICATORS,
} from '../../constants';
import style from './CityColumnChart.scss';

function getSeriesDataForIndicator(cities, indicator, mainCity = null) {
  return cities.map((city) => {
    if (indicator in city.indices) {
      const val = city.indices[indicator];

      if (mainCity && !city.selected && mainCity.id !== city.id) {
        return { y: val, color: getColorVariant('GREY', '200') };
      }

      return val;
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

function getPlotBands(cities, city, color) {
  if (city) {
    const idx = cities.findIndex(el => el.name === city.name);

    return [{
      color,
      from: idx - 0.5,
      to: idx + 0.5,
    }];
  }

  return [];
}

const CityColumnChart = (props) => {
  const isMultiple = props.indicatorIds.length > 1;
  const colorLight = getColorVariant(props.highlightColorLight);
  const colorMedium = getColorVariant(props.highlightColorDark);
  const colorDark = getColorVariant(props.colorBase, '900');
  const chartColors = getColorRange(colorMedium, props.indicatorIds.length);

  // The indicator data contains things like titles and descriptions. But these can
  // also be passed in explicitly (e.g. for charts where there are more than one indicator)
  // so here we take the passed in value, or the value from the first indicator otherwise.
  const firstIndicator = INDICATORS[props.indicatorIds[0]];
  const title = props.title || firstIndicator.name;
  const shortDescription = props.shortDescription || firstIndicator.shortDescription;
  const longDescription = props.longDescription || firstIndicator.longDescription;
  const mainCity = props.city;
  const selectedCategory = mainCity ? mainCity.name : null;

  const data = sortChartData(props.cities, props.indicatorIds[0]);

  // series is an array even if there is only one indicator
  // so this works for a normal or a stacked chart
  const series = props.indicatorIds.map((indicatorId, i) => ({
    index: props.indicatorIds.length - i, // reverse sort series (to counteract Highcharts)
    name: INDICATORS[indicatorId].shortDescription,
    color: chartColors[i],
    data: getSeriesDataForIndicator(data, indicatorId, mainCity),
  }));

  // We only want to show the short description as the chart title
  // if the chart is not stacked
  const yAxisTitle = isMultiple ? {} : { text: shortDescription };
  const ceiling = props.stacked ? 1 : null;
  const plotBands = getPlotBands(data, mainCity, getColorVariant(props.colorBase, '060'));

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
      style: {
        fontFamily: 'inherit', // to pick up the body font
      },
    },
    plotOptions: {
      series: {
        stacking: props.stacked ? 'normal' : null,
        pointWidth: 8,
        borderRadius: 4,
        borderWidth: 0,
        states: {
          hover: {
            color: null,
            brightness: 0,
          },
        },
      },
    },
    xAxis: {
      type: 'category',
      categories: data.map(city => city.name),
      selectedCategory,
      labels: {
        rotation: -45,
        style: {
          fontSize: '10px',
        },
        formatter() {
          if (this.value === this.axis.userOptions.selectedCategory) {
            return `<span style="font-weight: 800; font-size: 1.3em">${this.value}</span>`;
          }

          return this.value;
        },
      },
      plotBands,
      crosshair: {
        color: colorLight,
      },
    },
    yAxis: {
      ceiling,
      labels: {
        padding: 0,
        x: 0,
        y: 3,
        formatter() {
          // format the number using the indicator's defined format, if available
          return numeral(this.value).format(firstIndicator.format);
        },
      },
      title: yAxisTitle,
      gridZIndex: 4, // magic highcharts value to position grid lines in front of the bars: http://api.highcharts.com/highcharts/yAxis.gridZIndex
    },
    title: {
      enabled: false,
    },
    tooltip: {
      backgroundColor: '#fff',
      borderColor: colorDark,
      borderRadius: 4,
      // shared puts multiple series in the same tooltip
      // but also means you can hover anywhere on the chart to get the tooltip
      // (even for single series)
      shared: true,
      useHTML: true,
      headerFormat: '<div class="cityColumnChartTooltipHeader">{point.key}</div>',
      pointFormatter() {
        const formattedValue = numeral(this.y).format(firstIndicator.format);
        const seriesName = isMultiple ? `<span>${this.series.name}</span>` : '';

        return `
          <div class="cityColumnChartTooltipRow">
            <span class="cityColumnChartTooltipDot" style="background: ${this.color}"></span>
            
            ${seriesName}
            
            <span class="cityColumnChartTooltipValue">${formattedValue}</span>
          </div>
        `;
      },
      style: {
        fontFamily: 'inherit',
        color: 'inherit',
      },
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
            marginLeft: 20,
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
  const className = classnames(
    style.wrapper,
    props.className,
    { [style.stacked]: isMultiple });

  return (
    <div className={className}>
      <div className={style.titleWrapper}>
        <h4 className={style.title}>
          {title}
        </h4>

        <AboutTooltip
          description={longDescription}
          position="bottom"
          size={18}
        />
      </div>

      <div className={style.metaWrapper}>
        <Icon
          className={style.indicatorTypeMark}
          color={colorDark}
          icon={firstIndicator.contextual ? 'contextualIndicator' : 'performanceIndicator'}
          size={14}
        />
        <span>
          {firstIndicator.contextual ? 'Contextual' : 'Performance'} indicator
        </span>
      </div>

      {isMultiple && (
        <Legend
          // Legend is our own HTML so we can style and position it with CSS
          className={style.legendWrapper}
          series={series}
        />
      )}

      {isMultiple || (
        <div className={style.descriptionLabel}>
          {shortDescription}
        </div>
      )}

      <div className={style.chartWrapper}>
        <AbstractWidget ref={(c) => { this.chartWidget = c; }} config={config} />
      </div>
    </div>
  );
};

const cityType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  indices: PropTypes.object.isRequired,
});

CityColumnChart.propTypes = {
  cities: PropTypes.arrayOf(cityType).isRequired,
  city: cityType,
  className: PropTypes.string,
  colorBase: PropTypes.oneOf(Object.values(COLOR_NAMES)).isRequired,
  highlightColorLight: PropTypes.string.isRequired,
  highlightColorDark: PropTypes.string.isRequired,
  indicatorIds: PropTypes.arrayOf(
    PropTypes.oneOf(Object.keys(INDICATORS)),
  ).isRequired,
  longDescription: PropTypes.string,
  shortDescription: PropTypes.string,
  title: PropTypes.string,
  stacked: PropTypes.bool,
};

export default CityColumnChart;
