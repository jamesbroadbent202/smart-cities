import { COLOR_NAMES } from './misc';

export const CATEGORY_IDS = {
  CONTEXT: 'context',
  JOBS: 'jobs',
  HOUSING: 'housing',
  INFRASTRUCTURE: 'infrastructure',
  LIVEABILITY: 'liveability',
  INNOVATION: 'innovation',
  PLANNING: 'planning',
};

export const CATEGORIES = [
  {
    id: CATEGORY_IDS.CONTEXT,
    colorName: COLOR_NAMES.CONTEXT,
    navName: 'Context',
    name: 'Cities Context',
    description: 'Contextual indicators can help to understand why a city performs the way it does and what policies may be effective for improving economic performance and quality of life.',
    subCategories: [
      {
        name: 'Planning',
        highlightColorLight: 'PLANNING_020',
        highlightColorDark: 'PLANNING_500',
        iconId: 'planningLocalGovernment',
        summaryIndicatorIds: [
          'indigenousPopulation',
          'growthRate',
          'population10yr',
        ],
        charts: [],
      },
      {
        name: 'Housing',
        highlightColorLight: 'HOUSING_020',
        highlightColorDark: 'HOUSING_500',
        iconId: 'housingHousingAffordability',
        summaryIndicatorIds: [
          'householdSize',
          'medianHousePrice',
          'householdIncome',
        ],
        charts: [],
      },
      {
        name: 'Liveability',
        highlightColorLight: 'LIVEABILITY_020',
        highlightColorDark: 'LIVEABILITY_500',
        iconId: 'liveabilityLiveability',
        summaryIndicatorIds: [
          'lifeExpectancy',
          'shareInBottomIncomeQuintile',
          'socioEconomicIndex',
        ],
        charts: [],
      },
      {
        name: 'Jobs & Skills',
        highlightColorLight: 'JOBS_020',
        highlightColorDark: 'JOBS_500',
        iconId: 'jobsEmployment',
        summaryIndicatorIds: [
          'goodsProducingSector',
          'marketServices',
          'nonMarketServices',
        ],
        charts: [],
      },
    ],
    heroIndicatorId: 'population',
  },
  {
    id: CATEGORY_IDS.JOBS,
    colorName: COLOR_NAMES.JOBS,
    iconId: 'jobsEmployment',
    name: 'Jobs & Skills',
    description: 'Jobs and Skills encompasses all key elements of employment and training in our cities, including the performance of the employment market and the skill level of the workforce.',
    subCategories: [
      {
        name: 'Employment',
        highlightColorLight: 'JOBS_040',
        highlightColorDark: 'JOBS_600',
        iconId: 'jobsEmployment',
        summaryIndicatorIds: [
          'unemploymentRateGeneral',
          'unemploymentRateIndigenous',
          'employmentGrowth',
        ],
        charts: [
          {
            name: 'Youth unemployment',
            longDescription: 'TODO',
            indicatorIds: [
              'unemploymentRateYouth',
            ],
          },
          {
            name: 'Unemployment rate',
            longDescription: 'TODO',
            indicatorIds: [
              'unemploymentRateGeneral',
            ],
          },
          {
            name: 'Indigenous unemployment',
            longDescription: 'TODO',
            indicatorIds: [
              'unemploymentRateIndigenous',
            ],
          },
          {
            name: 'Participation rate',
            longDescription: 'TODO',
            indicatorIds: [
              'participationRateGeneral',
              'participationRateFemale',
              'participationRateMale',
            ],
          },
          {
            name: 'Employment growth',
            longDescription: 'TODO',
            indicatorIds: [
              'employmentGrowth',
            ],
          },
        ],
      },
      {
        name: 'Education',
        highlightColorLight: 'JOBS_060',
        highlightColorDark: 'JOBS_700',
        iconId: 'jobsEducation',
        summaryIndicatorIds: [
          'educationalAttainmentYr12',
        ],
        charts: [],
      },
    ],
    heroIndicatorId: 'unemploymentRateYouth',
  },
  {
    id: CATEGORY_IDS.HOUSING,
    colorName: COLOR_NAMES.HOUSING,
    iconId: 'housingHousingAffordability',
    name: 'Housing',
    description: 'Housing encompasses three broad dimensions: the affordability of housing in our cities; the supply and diversity of new housing stock; and where housing is located, including how accessible it is to jobs and services.',
    subCategories: [
      {
        name: 'Buying houses',
        highlightColorLight: 'HOUSING_040',
        highlightColorDark: 'HOUSING_600',
        iconId: 'housingHousingAffordability',
        summaryIndicatorIds: [],
        charts: [],
      },
      {
        name: 'Living in houses',
        highlightColorLight: 'HOUSING_060',
        highlightColorDark: 'HOUSING_700',
        iconId: 'housingLivingAffordability',
        summaryIndicatorIds: [],
        charts: [],
      },
    ],
    heroIndicatorId: 'growthRate',
  },
  {
    id: CATEGORY_IDS.INFRASTRUCTURE,
    colorName: COLOR_NAMES.INFRASTRUCTURE,
    iconId: 'infrastructureGettingToWork',
    name: 'Infrastructure',
    navName: 'Infrastructure',
    description: 'Infrastructure and Investment encompasses all key dimensions of the city’s investment environment, with a particular focus on the quality, efficiency and effectiveness of infrastructure.',
    subCategories: [
      {
        name: 'Getting to work',
        highlightColorLight: 'INFRASTRUCTURE_040',
        highlightColorDark: 'INFRASTRUCTURE_600',
        iconId: 'infrastructureGettingToWork',
        summaryIndicatorIds: [
          'jobsCar',
        ],
        charts: [],
      },
    ],
    heroIndicatorId: 'population',
  },
  {
    id: CATEGORY_IDS.LIVEABILITY,
    colorName: COLOR_NAMES.LIVEABILITY,
    iconId: 'liveabilityLiveability',
    name: 'Liveability',
    description: 'Liveability and Sustainability encompasses three broad dimensions: the health and wellbeing of residents; the attractiveness and amenity of the city; and the state of the environment and the local response to climate change.',
    subCategories: [
      {
        name: 'Environment',
        highlightColorLight: 'LIVEABILITY_040',
        highlightColorDark: 'LIVEABILITY_600',
        iconId: 'liveabilityEnvironment',
        summaryIndicatorIds: [],
        charts: [],
      },
      {
        name: 'Liveability',
        highlightColorLight: 'LIVEABILITY_060',
        highlightColorDark: 'LIVEABILITY_700',
        iconId: 'liveabilityLiveability',
        summaryIndicatorIds: [],
        charts: [],
      },
    ],
    heroIndicatorId: 'dispersion',
  },
  {
    id: CATEGORY_IDS.INNOVATION,
    colorName: COLOR_NAMES.INNOVATION,
    iconId: 'innovationInnovation',
    name: 'Innovation',
    description: 'Innovation and Digital Opportunities encompasses three broad dimensions: city productivity; innovation and entrepreneurship; and access to public data',
    subCategories: [
      {
        name: 'Innovation',
        highlightColorLight: 'INNOVATION_040',
        highlightColorDark: 'INNOVATION_600',
        iconId: 'innovationInnovation',
        summaryIndicatorIds: [],
        charts: [],
      },
      {
        name: 'Digital',
        highlightColorLight: 'INNOVATION_060',
        highlightColorDark: 'INNOVATION_700',
        iconId: 'innovationDigital',
        summaryIndicatorIds: [],
        charts: [],
      },
    ],
    heroIndicatorId: 'population',
  },
  {
    id: CATEGORY_IDS.PLANNING,
    colorName: COLOR_NAMES.PLANNING,
    iconId: 'planningLocalGovernment',
    name: 'Planning',
    description: 'Governance, Planning and Regulation encompasses land use planning in cities and its administration, as well as how effectively local governance and regulation support economic, social and environmental outcomes.',
    subCategories: [
      {
        name: 'Local government',
        highlightColorLight: 'PLANNING_040',
        highlightColorDark: 'PLANNING_600',
        iconId: 'planningLocalGovernment',
        summaryIndicatorIds: [],
        charts: [],
      },
      {
        name: 'Population',
        highlightColorLight: 'PLANNING_060',
        highlightColorDark: 'PLANNING_700',
        iconId: 'planningPopulation',
        summaryIndicatorIds: [],
        charts: [],
      },
    ],
    heroIndicatorId: 'population',
  },
];
