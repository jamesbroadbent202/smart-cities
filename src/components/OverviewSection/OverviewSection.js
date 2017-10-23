import React from 'react';
import PropTypes from 'prop-types';
// import PageBanner from '../PageBanner/PageBanner';
import CategoryIndicator from '../CategoryIndicator/CategoryIndicator';
import {
  CATEGORIES,
  CATEGORY_IDS,
  // STRINGS,
} from '../../constants/index';
import getColorVariant from '../../helpers/getColorVariant';
import style from './OverviewSection.scss';

// const HERO_INDICATOR = 'population';

// TODO (davidg): delete this
const OverviewSection = (props) => {
  console.log('  --  >  OverviewSection.js:16 > OverviewSection');
  // const description = props.city
  //   ? props.city.description
  //   : STRINGS.OVERVIEW_DESCRIPTION;
  //
  // const title = props.city
  //   ? props.city.shortName
  //   : STRINGS.OVERVIEW_TITLE;

  return (
    <div className={style.wrapper}>
      {/* <PageBanner */}
      {/* colorName="primary" */}
      {/* description={description} */}
      {/* indicator={HERO_INDICATOR} */}
      {/* title={title} */}
      {/* cities={props.cities} */}
      {/* city={props.city} */}
      {/* /> */}

      <div className={style.indicatorCards}>
        {CATEGORIES
          .filter(category => category.id !== CATEGORY_IDS.CONTEXT)
          .map(category => (
            <div
              key={category.id}
              className={style.indicatorCardWrapper}
              style={{
                background: getColorVariant(category.colorName, '040'),
              }}
            >
              <CategoryIndicator
                className={style.categoryIndicator}
                city={props.city}
                cities={props.cities}
                category={category}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

const cityPropShape = {
  description: PropTypes.string.isRequired,
  indices: PropTypes.object.isRequired,
  shortName: PropTypes.string.isRequired,
};

OverviewSection.propTypes = {
  city: PropTypes.shape(cityPropShape), // when on a city page
  cities: PropTypes.arrayOf(PropTypes.shape(cityPropShape)), // when on the all cities page
};

export default OverviewSection;
