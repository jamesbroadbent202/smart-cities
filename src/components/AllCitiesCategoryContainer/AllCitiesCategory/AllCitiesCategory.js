import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '../../PageWrapper/PageWrapper';
import PageBanner from '../../PageBanner/PageBanner';
import SubCategorySummary from '../../SubCategorySummary/SubCategorySummary';
import SubCategoryDetails from '../../SubCategoryDetails/SubCategoryDetails';
import { INDICATORS } from '../../../constants';

const AllCitiesCategory = props => (
  <PageWrapper categoryId={props.category.id}>
    <PageBanner
      colorName={props.category.colorName}
      description={props.category.description}
      indicator={props.category.heroIndicatorId}
      title={props.category.name}
      cities={props.cities}
      isCategoryPage
    />

    {props.category.subCategories.map(subCategory => (
      <SubCategorySummary
        key={subCategory.name}
        {...subCategory}
        colorName={props.category.colorName}
        cities={props.cities}
      />
    ))}

    {props.category.subCategories.map(subCategory => (
      <SubCategoryDetails
        key={subCategory.name}
        subCategory={subCategory}
        colorName={props.category.colorName}
        cities={props.cities}
      />
    ))}
  </PageWrapper>
);

AllCitiesCategory.propTypes = {
  category: PropTypes.shape({
    colorName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    heroIndicatorId: PropTypes.oneOf(Object.keys(INDICATORS)).isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    subCategories: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      indicatorIds: PropTypes.arrayOf(PropTypes.string).isRequired,
    })).isRequired,
  }).isRequired,
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    indices: PropTypes.object.isRequired,
  })).isRequired,
};

export default AllCitiesCategory;
