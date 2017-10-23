import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '../../PageWrapper/PageWrapper';
import CategoryOverviews from '../../CategoryOverviews/CategoryOverviews';
import PageBanner from '../../PageBanner/PageBanner';

const CityOverview = props => (
  <PageWrapper cityId={props.city.id}>
    <PageBanner
      colorName="primary"
      description={props.city.description}
      indicator="population"
      title={props.city.shortName}
      city={props.city}
    />

    <CategoryOverviews city={props.city} />
  </PageWrapper>
);

CityOverview.propTypes = {
  city: PropTypes.shape({
    shortName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default CityOverview;
