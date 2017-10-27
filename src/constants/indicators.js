import {
  DATA_TYPES,
  AGGREGATION_METHODS,
} from './misc';

// Different length text is used like so:
// name: shows in an indicator card and as the
// title of a chart (or in the legend for stacked charts)
// shortDescription: shows on the axis of a chart
// longDescription: shows in the tooltip for a chart
export default {
  population: {
    name: 'The population',
    shortDescription: 'TODO',
    longDescription: 'TODO',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.SUM,
    format: '0[.]0a',
    contextual: true,
    source: 'Population, All persons, People',
  },
  growthRate: {
    name: 'Annual population growth rate',
    shortDescription: 'Annual growth',
    longDescription: 'Population growth rate, percentage per annum',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: true,
    source: 'Population, persons, Annual Growth %',
  },
  indigenousPopulation: {
    name: 'Indigenous population',
    shortDescription: 'Indigenous status, percentage of total population',
    longDescription: 'Indigenous status, percentage of total population',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: true,
    source: 'Indigenous status, % of population',
  },
  population10yr: {
    name: '10-year population growth rate',
    shortDescription: '10-year growth',
    longDescription: 'Population growth rate, percentage per decade',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: true,
    source: 'Population, persons, 10-year Growth %',
  },
  householdSize: {
    name: 'Average household size',
    shortDescription: 'Household size',
    longDescription: 'TODO',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0',
    contextual: true,
    source: 'Average Household Size, People per household',
  },
  medianHousePrice: {
    name: 'Median house price',
    shortDescription: 'Median house price',
    longDescription: 'TODO',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '$0,0a',
    contextual: true,
    source: 'Median housing price, AUD',
  },
  householdIncome: {
    name: 'Median annual household income',
    shortDescription: 'Median annual household income',
    longDescription: 'TODO',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '$0,0a',
    contextual: true,
    source: 'Median Household Income, AUD per year',
  },
  lifeExpectancy: {
    name: 'Life expectancy at birth',
    shortDescription: 'Life expectancy',
    longDescription: 'TODO',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0,0a',
    contextual: true,
    source: 'Life expectancy, All persons, years',
  },
  shareInBottomIncomeQuintile: {
    name: 'Share in bottom household income quintile',
    shortDescription: 'Share in bottom household income quintile',
    longDescription: 'TODO',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: true,
    source: 'Share of households in lowest national income quintile, % of households',
  },
  socioEconomicIndex: {
    name: 'Socio economic indexes for areas',
    shortDescription: 'Socio economic indexes for areas',
    longDescription: 'TODO',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0,0[.]a',
    contextual: true,
    source: 'Socio-Economic Indexes for Areas, Index of Relative Socio-economic Disadvantage, Index',
  },
  goodsProducingSector: {
    name: 'Goods producing sector',
    shortDescription: 'Goods producing sector',
    longDescription: 'TODO',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]%',
    contextual: true,
    source: 'Goods Producing Sector, % of jobs in city',
  },
  marketServices: {
    name: 'Market services',
    shortDescription: 'Market services',
    longDescription: 'TODO',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]%',
    contextual: true,
    source: 'Market Services, % of jobs in city',
  },
  nonMarketServices: {
    name: 'Non-market services',
    shortDescription: 'Non-market services',
    longDescription: 'TODO',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]%',
    contextual: true,
    source: 'Non-market Services, % of jobs in city',
  },
  participationRateGeneral: {
    name: 'General participation rate',
    shortDescription: 'General',
    longDescription: 'TODO',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Participation rate, all persons, % of population aged over 15 years',
  },
  participationRateMale: {
    name: 'Male participation rate',
    shortDescription: 'Male',
    longDescription: 'TODO',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Participation rate, Male, % of population aged over 15 years',
  },
  participationRateFemale: {
    name: 'Female participation rate',
    shortDescription: 'Female',
    longDescription: 'TODO',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Participation rate, Female, % of population aged over 15 years',
  },
  educationalAttainmentYr12: {
    name: 'Educational attainment - year 12',
    shortDescription: 'TODO',
    longDescription: 'TODO',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Education attainment - Completed Year 12, % of population',
  },
  educationalAttainmentCertificate: {
    name: 'Educational attainment - Certificate',
    shortDescription: 'TODO',
    longDescription: 'TODO',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Education attainment - Completed Certificate III or IV, % of population',
  },
  educationalAttainmentTertiary: {
    name: 'Educational attainment - Tertiary',
    shortDescription: 'TODO',
    longDescription: 'TODO',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Education attainment - Completed Bachelor Degree or Higher, % of population',
  },
  dispersion: {
    name: 'Local government dispersion',
    shortDescription: 'Local government dispersion',
    longDescription: 'Local government dispersion',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Government Dispersion, Number of Local Government Areas per 100 000 persons',
  },
  dwellingHouse: {
    name: 'Dwelling type ratio: house',
    shortDescription: 'House',
    longDescription: 'Dwelling type ratio: house',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Dwelling type ratio, Separate house, Percentage of Dwellings',
  },
  dwellingSemi: {
    name: 'Dwelling type ratio: semi-detatched',
    shortDescription: 'Semi-detatched',
    longDescription: 'Dwelling type ratio: semi-detatched',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Dwelling type ratio, Semi-detached, Percentage of Dwellings',
  },
  dwellingApartment: {
    name: 'Dwelling type ratio: flat or apartment',
    shortDescription: 'Flat or apartment',
    longDescription: 'Dwelling type ratio: flat or apartment',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Dwelling type ratio, Flat or Apartment, Percentage of Dwellings',
  },
  dwellingOther: {
    name: 'Dwelling type ratio: other',
    shortDescription: 'Other',
    longDescription: 'Dwelling type ratio: other',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Dwelling type ratio, Other, Percentage of Dwellings',
  },
  dwellingPriceToIncomeRatio: {
    name: 'Dwelling price to household income ratio',
    shortDescription: 'Dwelling price to household income ratio',
    longDescription: 'Dwelling price to household income ratio',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Dwelling price to income ratio, Ratio',
  },
  jobsCar: {
    name: 'Jobs accessible within 30 minutes by car',
    shortDescription: 'Proportion of jobs accessible within 30 minutes by car',
    longDescription: 'TODO',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Proportion of jobs accessible within 30 minutes, By Car, % of all jobs in city',
  },
  activeJourneys: {
    name: 'Active transport use',
    shortDescription: 'Active transport use, % of journeys to work',
    longDescription: 'TODO',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Active transport use, % of journeys to work',
  },
  publicJourneys: {
    name: 'Public transport use',
    shortDescription: 'Public transport use, % of journeys to work',
    longDescription: 'TODO',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Public transport use, % of journeys to work',
  },
  unemploymentRateGeneral: {
    name: 'General unemployment rate',
    shortDescription: 'General',
    longDescription: 'General',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Unemployment rate, All persons',
  },
  unemploymentRateIndigenous: {
    name: 'Indigenous unemployment rate',
    shortDescription: 'Indigenous',
    longDescription: 'Indigenous',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Unemployment rate, Unemployed, % of indigenous population',
  },
  unemploymentRateYouth: {
    name: 'Youth unemployment rate',
    shortDescription: 'Youth',
    longDescription: 'Youth',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Unemployment rate, Unemployed, % of youth population',
  },
  employmentGrowth: {
    name: 'Employment growth',
    shortDescription: 'Annual growth in number of jobs',
    longDescription: 'Annual growth in number of jobs',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Full-time employment growth, Persons',
  },
  publicHousingUnits: {
    name: 'Public housing units',
    shortDescription: 'Public housing units per 100,000 persons',
    longDescription: 'Public housing units per 100,000 persons',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0,0',
    contextual: false,
    source: 'Public housing, Dwelling units per 100 000 persons',
  },
  homelessnessRate: {
    name: 'Homelessness rate',
    shortDescription: 'Homelessness per 100,000 persons',
    longDescription: 'Homelessness per 100,000 persons',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0,0',
    contextual: false,
    source: 'Homelessness, number of homeless per 100 000',
  },
  housingConstructionCosts: {
    name: 'Housing construction costs',
    shortDescription: 'Housing construction cost, $/m²',
    longDescription: 'Housing construction cost, $/m²',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Residential construction costs, AUD per square metre',
  },
  rentStress: {
    name: 'Rent stress',
    shortDescription: 'Proportion of households under rent stress',
    longDescription: 'Proportion of households under rent stress',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Rent Stress, Proportion of households under rent stress, Dwellings',
  },
  mortgageStress: {
    name: 'Mortgage stress',
    shortDescription: 'Proportion of households under mortgage stress',
    longDescription: 'Proportion of households under mortgage stress',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Mortgage stress, Proportion of households under mortgage stress, Dwellings',
  },
  residentialBuildingApprovalsTotal: {
    name: 'Total residential building approvals',
    shortDescription: 'Total residential building approvals',
    longDescription: 'Total residential building approvals',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0,0a',
    contextual: false,
    source: 'Annual Building Approvals, Dwellings',
  },
  residentialBuildingApprovalsGrowth: {
    name: 'Residential building approvals and growth',
    shortDescription: 'Residential building approvals per annual population change',
    longDescription: 'Residential building approvals per annual population change',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Annual Building Approvals, population change per Approvals annually, Ratio',
  },
  peakDelay: {
    name: 'Peak travel delay',
    shortDescription: 'Percentage increase in car trip duration at peak time',
    longDescription: 'Percentage increase in 30 minute car trip time at AM PM peak compared to no congestion',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Percentage increase in 30 minute car trip time at AM PM peak compared to no congestion, % ', // Final space in string is intentional and necessary
  },
  accessToPublicTransport: {
    name: 'Access to public transport',
    shortDescription: 'Percentage dwellings within 400m of public transport',
    longDescription: 'Percentage dwellings within 400m of a frequently serviced transport spot',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Access to public transport, dwellings within 400m of frequently serviced transport stop, % of dwellings',
  },
  grossParklandArea: {
    name: 'Gross parkland area',
    shortDescription: 'Percentage of gross land area that is parkland',
    longDescription: 'Percentage of gross land area that is parkland',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Land area that is parkland, % of gross land area',
  },
  greenhouseGasEmissions: {
    name: 'Greenhouse gas emissions',
    shortDescription: 'Kilograms of greenhouse gas emissions per capita per year',
    longDescription: 'Kilograms of greenhouse gas emissions per capita per year',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Greenhouse gas emissions  per capita, kilograms per capita per year',
  },
  accessToGreenSpace: {
    name: 'Access to green space',
    shortDescription: 'Percentage of dwellings with access to green space',
    longDescription: 'Percentage of dwellings with access to green space',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Access to green space, % of dwellings',
  },
  airPollutionPm10: {
    name: 'Air pollution, >PM10',
    shortDescription: 'Partical pollution greater than PM10',
    longDescription: 'Air quality, annual mean: partical pollution greater than PM10',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Air quality, Annual mean, >PM10, ug/m3',
  },
  airPollutionPm2point5: {
    name: 'Air pollution, <PM2.5',
    shortDescription: 'Partical pollution less than PM2.5',
    longDescription: 'Air quality, annual mean: partical pollution less than PM2.5',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Air quality, Annual mean, <PM2.5, ug/m3',
  },
  energyEfficiencyOfBuildings: {
    name: 'Energy effiency of buildings',
    shortDescription: 'Average energy efficiency rating of commercial buildings',
    longDescription: 'Average energy efficiency rating of commercial buildings',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0',
    contextual: false,
    source: 'Building energy efficiency, Average rating',
  },
  volunteeringRate: {
    name: 'Volunteering rate',
    shortDescription: 'Percentage of population over 15 years who volunteer',
    longDescription: 'Percentage of population over 15 years who volunteer',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Number of volunteers, All persons, % of Persons 15 or over',
  },
  // perceivedSafety: {
  //   name: 'Perceived safety',
  //   shortDescription: 'TODO',
  //   longDescription: 'TODO',
  //   dataType: DATA_TYPES.NUMBER,
  //   aggregationMethod: AGGREGATION_METHODS.MEDIAN,
  //   format: '0[.]0%',
  //   contextual: false,
  //   source: 'TODO',
  // },
  homicideRate: {
    name: 'Homicide rate',
    shortDescription: 'Homicides per 100,000 persons',
    longDescription: 'Homicides per 100,000 persons',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0',
    contextual: false,
    source: 'Violent crime rate, Homicides, Crimes against the person per 100,000',
  },
  adultObesity: {
    name: 'Adult obesity rate',
    shortDescription: 'Proportion of adults who are obese',
    longDescription: 'Proportion of adults who are obese',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Percentage of the adult population who are obese, Estimated population, aged 18 years and over, who were obese, % of population',
  },
  crisisSupport: {
    name: 'Support in times of crisis',
    shortDescription: 'Percentage of population able to get crisis support',
    longDescription: 'Percentage of population able to get support in times of crisis',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Able to get support in times of crisis , % of population',
  },
  suicideRate: {
    name: 'Suicide rate',
    shortDescription: 'Number of suicides per 100,000 persons',
    longDescription: 'Number of suicides per 100,000 persons',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0',
    contextual: false,
    source: 'Suicides, per 100 000',
  },
  householdsWithBroadband: {
    name: 'Households with broadband',
    shortDescription: 'Percentage of households with broadband',
    longDescription: 'Percentage of households with a broadband internet connection',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Percentage of households with a broadband connection, Internet accessed from dwelling, % of dwellings',
  },
  patentApplications: {
    name: 'Patent applications',
    shortDescription: 'Patent applications per 100,000 persons',
    longDescription: 'Patent applications per 100,000 persons',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0',
    contextual: false,
    source: 'Patents applications, Patent applications per 100 000',
  },
  newBusinessEntrants: {
    name: 'New business entrants',
    shortDescription: 'New business entrants',
    longDescription: 'New business entrants',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'New business entrants and exits, New Businesses as a share of the stock',
  },
  newBusinessExits: {
    name: 'New business exits',
    shortDescription: 'New business exits',
    longDescription: 'New business exits',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'New business entrants and exits, Business exits as a share of the stock',
  },
  knowledgeWorkersRatio: {
    name: 'Knowledge workers ratio',
    shortDescription: 'Percentage of employment as knowledge workers',
    longDescription: 'Percentage of employment as knowledge workers',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Knowledge workers, All persons, % of total employment',
  },
  linkedInConnectivityLocal: {
    name: 'LinkedIn connectivity: local',
    shortDescription: 'Local',
    longDescription: 'LinkedIn connectivity, proportion of connections from local area',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'LinkedIn connectivity, Average number of connections from local area, % of connections average',
  },
  linkedInConnectivityRestOfNation: {
    name: 'LinkedIn connectivity: rest of Australia',
    shortDescription: 'National',
    longDescription: 'LinkedIn connectivity, proportion of connections from rest of Australia',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'LinkedIn connectivity, Average number of connections from the rest of Australia, % of connections average',
  },
  linkedInConnectivityInternational: {
    name: 'LinkedIn connectivity: international',
    shortDescription: 'International',
    longDescription: 'LinkedIn connectivity, proportion of connections from outside Australia',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'LinkedIn connectivity, Average number of international connections, % of connections average',
  },
  localGovernmentDispersion: {
    name: 'Local government dispersion',
    shortDescription: 'Number of LGAs per 100,000 persons',
    longDescription: 'Number of Local Government Areas per 100,000 persons',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0',
    contextual: false,
    source: 'Government Dispersion, Number of Local Government Areas per 100 000 persons',
  },
  populationDensity: {
    name: 'Population density',
    shortDescription: 'Persons per square kilometre',
    longDescription: 'Population density: persons per square kilometre',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0',
    contextual: false,
    source: 'Population-weighted density, Persons per square kilometre',
  },
  dependencyRatioNotWorkingAge: {
    name: 'Dependency ratio: not of working age',
    shortDescription: 'Not of working age',
    longDescription: 'Dependency ratio: not of working age, percentage of population',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Dependency ratio, Ratio not of working age to working age, % ', // intentional space at end
  },
  dependencyRatio14OrYounger: {
    name: 'Dependency ratio: 14 or younger',
    shortDescription: '14 or younger',
    longDescription: 'Dependency ratio: 14 or younger, percentage of population',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Dependency ratio, All persons 0-14, % of population',
  },
  dependencyRatio15To64: {
    name: 'Dependency ratio: 15-64',
    shortDescription: '15-64',
    longDescription: 'Dependency ratio: 15-64, percentage of population',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Dependency ratio, All persons 15-64, % of population',
  },
  dependencyRatio65OrOlder: {
    name: 'Dependency ratio: 65 or older',
    shortDescription: '65 or older',
    longDescription: 'Dependency ratio: 65 or older, percentage of population',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Dependency ratio, All persons 65+, % of population',
  },
  dependencyRatioMedianAge: {
    name: 'Dependency ratio: median age',
    shortDescription: 'Dependency ratio: median age',
    longDescription: 'Dependency ratio: median age',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0',
    contextual: false,
    source: 'Dependency ratio, median age, All persons, years',
  },
  disabilityRate: {
    name: 'Disability rate',
    shortDescription: 'Population share with disability',
    longDescription: 'Population share with disability',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Disability, all persons, % of population',
  },
  tenureRatioOwnedOutright: {
    name: 'Tenure ratio: owned outright',
    shortDescription: 'Owned outright',
    longDescription: 'Tenure ratio: owned outright',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Tenure ratio, Owned outright, %',
  },
  tenureRatioMortgage: {
    name: 'Tenure ratio: owned with mortgage',
    shortDescription: 'Owned with mortgage',
    longDescription: 'Tenure ratio: owned with mortgage',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Tenure ratio, Owned with a mortgage, %',
  },
  tenureRatioRented: {
    name: 'Tenure ratio: rented',
    shortDescription: 'Rented',
    longDescription: 'Tenure ratio: rented',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Tenure ratio, Rented, %',
  },
  tenureRatioOther: {
    name: 'Tenure ratio: other',
    shortDescription: 'Other',
    longDescription: 'Tenure ratio: other',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Tenure ratio, Other, %',
  },
  languagesOtherThanEnglish: {
    name: 'Languages other than English',
    shortDescription: 'Language other than English spoken at home',
    longDescription: 'Language other than English spoken at home, percentage of population',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: 'Language other than English spoken at home, All persons, % of population',
  },
};

/*
  : {
    name: '',
    shortDescription: '',
    longDescription: '',
    dataType: DATA_TYPES.NUMBER,
    aggregationMethod: AGGREGATION_METHODS.MEDIAN,
    format: '0[.]0%',
    contextual: false,
    source: '',
  },
*/
