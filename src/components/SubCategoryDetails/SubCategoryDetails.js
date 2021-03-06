import React from 'react';
import PropTypes from 'prop-types';
import getSubCategorySectionId from '../../helpers/getSubCategorySectionId';
import CityColumnChart from '../CityColumnChart/CityColumnChart';
import Icon from '../Icon/Icon';
import { INDICATORS } from '../../constants';
import style from './SubCategoryDetails.scss';

const SubCategoryDetails = (props) => {
  const subCategory = props.subCategory;

  const heroChart = subCategory.charts.find(chart => (
    chart.indicatorIds.includes(props.heroIndicatorId)),
  );

  const otherCharts = subCategory.charts.filter(chart => (
    !chart.indicatorIds.includes(props.heroIndicatorId)),
  );

  return (
    <div
      className={style.wrapper}
      id={getSubCategorySectionId(subCategory.name)}
    >
      <div className={style.container}>
        <div className={style.heading}>
          <Icon
            className={style.iconWrapper}
            size={70}
            icon={subCategory.iconId}
          />

          <h3>{subCategory.name}</h3>
        </div>
        <div className={style.chartGrid}>
          {heroChart &&
            <div className={style.heroChartWrapper}>
              <CityColumnChart
                title={heroChart.name}
                longDescription={heroChart.longDescription}
                cities={props.cities}
                colorBase={props.colorName}
                highlightColorLight={subCategory.highlightColorLight}
                highlightColorDark={subCategory.highlightColorDark}
                indicatorIds={heroChart.indicatorIds}
                stacked={heroChart.stacked}
              />
            </div>
          }

          {otherCharts.map(chart => (
            <div
              className={style.chartWrapper}
              key={chart.name}
            >
              <CityColumnChart
                title={chart.name}
                longDescription={chart.longDescription}
                cities={props.cities}
                colorBase={props.colorName}
                highlightColorLight={subCategory.highlightColorLight}
                highlightColorDark={subCategory.highlightColorDark}
                indicatorIds={chart.indicatorIds}
                stacked={chart.stacked}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

SubCategoryDetails.propTypes = {
  subCategory: PropTypes.shape({
    name: PropTypes.string.isRequired,
    charts: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      indicatorIds: PropTypes.arrayOf(
        PropTypes.oneOf(Object.keys(INDICATORS)),
      ).isRequired,
    })),
  }),
  colorName: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    indices: PropTypes.object.isRequired,
  })).isRequired,
  heroIndicatorId: PropTypes.string.isRequired,
};

export default SubCategoryDetails;
