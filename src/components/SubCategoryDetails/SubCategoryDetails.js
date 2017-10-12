import React from 'react';
import PropTypes from 'prop-types';
import getSubCategorySectionId from '../../helpers/getSubCategorySectionId';
// import getColorVariant from '../../helpers/getColorVariant';
import CityColumnChart from '../CityColumnChart/CityColumnChart';
import { INDICATORS } from '../../constants';
import style from './SubCategoryDetails.scss';

const SubCategoryDetails = (props) => {
  const sc = props.subCategory;
  // const backgroundColor = getColorVariant(props.colorName, sc.tint);

  return (
    <div
      key={sc.name}
      id={getSubCategorySectionId(sc.name)}
      className={style.container}
      /* style={{ backgroundColor }} */
    >
      <div className={style.heading}>
        <span className={style.iconWrapper} />
        <h3 className={style.title}>{sc.name}</h3>
      </div>
      <div className={style.chartGrid}>
        {sc.indicatorIds.map(indicatorId => (
          <div className={style.chartWrapper}>
            <CityColumnChart
              key={indicatorId}
              cities={props.cities}
              colorBase={props.colorName}
              colorVariation={sc.shade}
              indicatorIds={[indicatorId]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

SubCategoryDetails.propTypes = {
  subCategory: PropTypes.shape({
    tint: PropTypes.string.isRequired,
    indicatorIds: PropTypes.arrayOf(
      PropTypes.oneOf(Object.keys(INDICATORS)),
    ).isRequired,
    name: PropTypes.string.isRequired,
  }),
  colorName: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    indices: PropTypes.object.isRequired,
  })).isRequired,
};

export default SubCategoryDetails;
