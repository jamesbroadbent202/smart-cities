import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '../../PageWrapper/PageWrapper';
import PageBanner from '../../PageBanner/PageBanner';
import SubCategorySummary from '../../SubCategorySummary/SubCategorySummary';
import { CATEGORY_IDS, INDICATORS } from '../../../constants';
import SubCategoryDetails from '../../SubCategoryDetails/SubCategoryDetails';
import CompareCities from '../../CompareCities/CompareCities';

class CityCategory extends Component {
  constructor(props) {
    super(props);
    this.state = { cities: props.cities };
    this.onCityToggle = this.onCityToggle.bind(this);
  }

  onCityToggle(cityId) {
    console.warn('fuckoo');
    const cities = this.state.cities.slice();
    const idx = cities.findIndex(c => c.id === cityId);
    const city = Object.assign({}, cities[idx]);

    city.selected = !city.selected;
    cities[idx] = city;
    this.setState({ cities });
  }

  render() {
    return (
      <PageWrapper
        cityId={this.props.city.id}
        categoryId={this.props.category.id}
        cityName={this.props.city.name}
        categoryColorName={this.props.category.colorName}
        categoryIconId={this.props.category.iconId}
      >
        <PageBanner
          colorName={this.props.category.colorName}
          description={this.props.category.description}
          indicator={this.props.category.heroIndicatorId}
          title={this.props.category.name}
          cities={this.state.cities}
          isCategoryPage
          isContextPage={this.props.category.id === CATEGORY_IDS.CONTEXT}
        />

        {this.props.category.subCategories.map(subCategory => (
          <SubCategorySummary
            key={subCategory.name}
            {...subCategory}
            categoryId={this.props.category.id}
            colorName={this.props.category.colorName}
            city={this.props.city}
          />
        ))}

        <CompareCities
          category={this.props.category}
          city={this.props.city}
          cities={this.state.cities}
          toggleCitySelected={this.onCityToggle}
        />

        {this.props.category.subCategories.map(subCategory => (
          <SubCategoryDetails
            key={subCategory.name}
            subCategory={subCategory}
            colorName={this.props.category.colorName}
            cities={this.state.cities}
            city={this.props.city}
            heroIndicatorId={this.props.category.heroIndicatorId}
          />
        ))}
      </PageWrapper>
    );
  }
}

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
