import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import IndicatorCard from '../Card/IndicatorCard/IndicatorCard';
import Icon from '../Icon/Icon';
import Pill from '../Pill/Pill';
import aggregateIndicatorForCities from '../../helpers/aggregateIndicatorForCities';
import getColorVariant from '../../helpers/getColorVariant';
import {
  CATEGORY_IDS,
  INDICATORS,
  STRINGS,
} from '../../constants';
import COLORS from '../../style/_colors.scss';
import style from './CategoryOverview.scss';

const classnames = require('classnames/bind').bind(style);

const CategoryOverview = (props) => {
  const isContextCategory = props.category.id === CATEGORY_IDS.CONTEXT;
  const indicatorValue = props.city
    ? props.city.indices[props.category.heroIndicatorId]
    : aggregateIndicatorForCities(
      props.category.heroIndicatorId,
      props.cities,
    );

  const highlightColor = getColorVariant(props.category.colorName, '500');
  const categoryLinkStyle = isContextCategory
    ? {
      background: COLORS.WHITE,
      border: `2px solid ${highlightColor}`,
      color: COLORS.GREY_700,
    }
    : {
      background: highlightColor,
      border: `2px solid ${highlightColor}`,
      color: COLORS.WHITE,
    };

  const className = classnames(
    style.categoryWrapper,
    { category__context: isContextCategory },
  );

  return (
    <div
      className={className}
      style={{
        background: getColorVariant(props.category.colorName, '040'),
      }}
    >
      <div className={style.category}>
        {!isContextCategory && (
          <div className={style.categoryIcon}>
            <Icon
              icon={props.category.iconId}
              size={100}
              color={getColorVariant(props.category.colorName, '500')}
            />
          </div>
        )}

        <div className={style.categoryTextWrapper}>
          <h2 className={style.categoryTitle}>{props.category.name}</h2>

          <p className={style.categoryDescription}>{props.category.description}</p>

          <p className={style.subCategoryWrapperText}>{STRINGS.SUB_CATS_INCLUDE}</p>

          <div>
            {props.category.subCategories.map(subCategory => (
              <NavLink
                key={subCategory.name}
                to="TODO"
              >
                <Pill className={style.subCategoryLink} shadow>
                  {subCategory.name}
                </Pill>
              </NavLink>
            ))}
          </div>
        </div>

        <div className={style.indicatorCardAndLink}>
          <IndicatorCard
            className={style.indicatorCard}
            color={getColorVariant(props.category.colorName, '500')}
            colorName={props.category.colorName}
            indicator={props.category.heroIndicatorId}
            value={indicatorValue}
            showPerformanceIndicator={false}
          />

          <NavLink to="TODO">
            <Pill
              className={style.categoryLinkWrapper}
              style={categoryLinkStyle}
            >
              <span className={style.categoryLinkText}>
                View {props.category.name} section
              </span>

              <Icon
                icon={isContextCategory ? 'rightArrowInCircle' : 'rightArrowInCircleInverted'}
                size={20}
                color={getColorVariant(props.category.colorName, '500')}
              />
            </Pill>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

const cityPropShape = {
  id: PropTypes.string.isRequired,
  indices: PropTypes.object.isRequired,
};

CategoryOverview.propTypes = {
  category: PropTypes.shape({
    colorName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    heroIndicatorId: PropTypes.oneOf(Object.keys(INDICATORS)).isRequired,
    id: PropTypes.string.isRequired,
    iconId: PropTypes.string,
    name: PropTypes.string.isRequired,
    subCategories: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
    })),
  }).isRequired,
  city: PropTypes.shape(cityPropShape),
  cities: PropTypes.arrayOf(PropTypes.shape(cityPropShape)),
  className: PropTypes.string,
};

export default CategoryOverview;
