import React from 'react';
import PropTypes from 'prop-types';
import getSubCategorySectionId from '../../helpers/getSubCategorySectionId';
import CityColumnChart from '../CityColumnChart/CityColumnChart';
import { INDICATORS } from '../../constants';
import style from './SubCategoryDetails.scss';

const SubCategoryDetails = (props) => {
  const sc = props.subCategory;

  const heroChart = sc.charts.find(chart => (
    chart.indicatorIds.includes(props.heroIndicatorId)));

  const otherCharts = sc.charts.filter(chart => (
    !chart.indicatorIds.includes(props.heroIndicatorId)));

  return (
    <div
      key={sc.name}
      id={getSubCategorySectionId(sc.name)}
      className={style.container}
    >
      <div className={style.heading}>
        <span className={style.iconWrapper} />
        <h3 className={style.title}>{sc.name}</h3>
      </div>
      <div className={style.chartGrid}>
        {heroChart && <div className={style.heroChartWrapper} key="hero">
          <CityColumnChart
            title={heroChart.name}
            cities={props.cities}
            colorBase={props.colorName}
            colorVariation={sc.shade}
            indicatorIds={heroChart.indicatorIds}
          />
        </div>}

        {otherCharts.map(chart => (
          <div
            className={style.chartWrapper}
            key={chart.name}
          >
            <CityColumnChart
              title={chart.name}
              cities={props.cities}
              colorBase={props.colorName}
              colorVariation={sc.shade}
              indicatorIds={chart.indicatorIds}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const cityType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  indices: PropTypes.object.isRequired,
});

SubCategoryDetails.propTypes = {
  subCategory: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tint: PropTypes.string.isRequired,
    charts: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      indicatorIds: PropTypes.arrayOf(
        PropTypes.oneOf(Object.keys(INDICATORS)),
      ).isRequired,
    })),
  }),
  colorName: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(cityType).isRequired,
  city: cityType,
  heroIndicatorId: PropTypes.string.isRequired,
};

export default SubCategoryDetails;
