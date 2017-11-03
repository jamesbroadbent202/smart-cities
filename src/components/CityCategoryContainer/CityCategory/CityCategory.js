import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '../../PageWrapper/PageWrapper';
import PageBanner from '../../PageBanner/PageBanner';
import SubCategorySummary from '../../SubCategorySummary/SubCategorySummary';
import { CATEGORY_IDS, INDICATORS } from '../../../constants';
import SubCategoryDetails from '../../SubCategoryDetails/SubCategoryDetails';
import CompareCities from '../../CompareCities/CompareCities';

const CityCategory = props => (
  <PageWrapper
    cityId={props.city.id}
    categoryId={props.category.id}
    cityName={props.city.name}
    categoryColorName={props.category.colorName}
    categoryIconId={props.category.iconId}
  >
    <PageBanner
      colorName={props.category.colorName}
      description={props.category.description}
      indicator={props.category.heroIndicatorId}
      title={props.category.name}
      cities={props.cities}
      city={props.city}
      isContextPage={props.category.id === CATEGORY_IDS.CONTEXT}
    />

    {props.category.subCategories.map(subCategory => (
      <SubCategorySummary
        key={subCategory.name}
        {...subCategory}
        categoryId={props.category.id}
        city={props.city}
      />
    ))}

    <CompareCities
      category={props.category}
      city={props.city}
      cities={props.cities}
      toggleCitySelected={props.toggleCitySelected}
    />

    {props.category.subCategories.map(subCategory => (
      <SubCategoryDetails
        key={subCategory.name}
        subCategory={subCategory}
        colorName={props.category.colorName}
        cities={props.cities}
        city={props.city}
        heroIndicatorId={props.category.heroIndicatorId}
        highlightColorDark={subCategory.highlightColorDark}
      />
    ))}
  </PageWrapper>
);

CityCategory.propTypes = {
  category: PropTypes.shape({
    colorName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    iconId: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    heroIndicatorId: PropTypes.string.isRequired,
    subCategories: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      summaryIndicatorIds: PropTypes.arrayOf(PropTypes.string).isRequired,
      charts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        indicatorIds: PropTypes.arrayOf(
          PropTypes.oneOf(Object.keys(INDICATORS)),
        ).isRequired,
      })),
    })).isRequired,
  }).isRequired,
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  cities: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  toggleCitySelected: PropTypes.func.isRequired,
};

export default CityCategory;
