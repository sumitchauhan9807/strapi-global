import type { Struct, Schema } from '@strapi/strapi';

export interface MapcountriesCountries extends Struct.ComponentSchema {
  collectionName: 'components_mapcountries_countries';
  info: {
    displayName: 'Countries';
    icon: 'clock';
    description: '';
  };
  attributes: {
    IsoCode: Schema.Attribute.String;
    Callcenters: Schema.Attribute.String;
  };
}

export interface SharedWhatSolutionDo extends Struct.ComponentSchema {
  collectionName: 'components_shared_what_solution_dos';
  info: {
    displayName: 'What Solution Do';
    icon: 'collapse';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    SolutionDos: Schema.Attribute.Component<'shared.repetable-lists', true>;
  };
}

export interface SharedText extends Struct.ComponentSchema {
  collectionName: 'components_shared_texts';
  info: {
    displayName: 'Text';
    icon: 'alien';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedSubscribeSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_subscribe_sections';
  info: {
    displayName: 'SubscribeSection';
    description: '';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    SubText: Schema.Attribute.Text;
    FootText: Schema.Attribute.Text;
    ButtonText: Schema.Attribute.String;
  };
}

export interface SharedSolutionsCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_solutions_ctas';
  info: {
    displayName: 'Solutions CTA';
    icon: 'cloud';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    Description: Schema.Attribute.RichText;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedSolutionDescription extends Struct.ComponentSchema {
  collectionName: 'components_shared_solution_descriptions';
  info: {
    displayName: 'Solution Description';
    icon: 'book';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    SubHeading: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedRepetableLists extends Struct.ComponentSchema {
  collectionName: 'components_shared_repetable_lists';
  info: {
    displayName: 'RepetableLists';
    icon: 'chartBubble';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    SubHeading: Schema.Attribute.Text;
  };
}

export interface SharedRepatableTexts extends Struct.ComponentSchema {
  collectionName: 'components_shared_repatable_texts';
  info: {
    displayName: 'RepatableTexts';
    icon: 'apps';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface SharedProductSpecs extends Struct.ComponentSchema {
  collectionName: 'components_shared_product_specs';
  info: {
    displayName: 'ProductSpecs';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    SubHeading: Schema.Attribute.String;
    ProductSpecs: Schema.Attribute.Component<'shared.repetable-lists', true>;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedProductDescription extends Struct.ComponentSchema {
  collectionName: 'components_shared_product_descriptions';
  info: {
    displayName: 'Product Description';
    icon: 'bold';
    description: '';
  };
  attributes: {
    ProductName: Schema.Attribute.String;
    ProductDescription: Schema.Attribute.String;
    ProductSpecs: Schema.Attribute.Component<'shared.repatable-texts', true>;
    ProductPrice: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedPricing extends Struct.ComponentSchema {
  collectionName: 'components_shared_pricings';
  info: {
    displayName: 'Pricing';
    icon: 'monitor';
    description: '';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    SubText: Schema.Attribute.Text;
    Plans: Schema.Attribute.Component<'shared.plans', true>;
  };
}

export interface SharedPlans extends Struct.ComponentSchema {
  collectionName: 'components_shared_plans';
  info: {
    displayName: 'Plans';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    Name: Schema.Attribute.String;
    Features: Schema.Attribute.Component<'shared.text', true>;
    Currency: Schema.Attribute.String;
    Price: Schema.Attribute.String;
    MissingFeatures: Schema.Attribute.Component<'shared.text', true>;
  };
}

export interface SharedNumber extends Struct.ComponentSchema {
  collectionName: 'components_shared_numbers';
  info: {
    displayName: 'Number';
    icon: 'cup';
    description: '';
  };
  attributes: {
    Place: Schema.Attribute.String;
    Number: Schema.Attribute.String;
    LeftSpacing: Schema.Attribute.Enumeration<
      [
        's0',
        's1',
        's2',
        's3',
        's4',
        's5',
        's6',
        's7',
        's8',
        's9',
        's10',
        's11',
        's12',
        's13',
        's14',
        's15',
        's16',
        's17',
        's18',
        's19',
        's20',
      ]
    >;
  };
}

export interface SharedMobileNumbers extends Struct.ComponentSchema {
  collectionName: 'components_shared_mobile_numbers';
  info: {
    displayName: 'Mobile Numbers';
    icon: 'check';
    description: '';
  };
  attributes: {
    Number: Schema.Attribute.Component<'shared.number', true>;
  };
}

export interface SharedHomeSection3 extends Struct.ComponentSchema {
  collectionName: 'components_shared_home_section3s';
  info: {
    displayName: 'HomeSection3';
    description: '';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    SubText: Schema.Attribute.Text;
    Lists: Schema.Attribute.Component<'shared.repetable-lists', true>;
    ButtonText: Schema.Attribute.String;
  };
}

export interface SharedHomeSection2 extends Struct.ComponentSchema {
  collectionName: 'components_shared_home_section2s';
  info: {
    displayName: 'HomeSection2';
    icon: 'folder';
    description: '';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    Subtext: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Lists: Schema.Attribute.Component<'shared.repetable-lists', true>;
    Buttontext: Schema.Attribute.String;
  };
}

export interface SharedHomeSection1 extends Struct.ComponentSchema {
  collectionName: 'components_shared_home_section1s';
  info: {
    displayName: 'HomeSection1';
    icon: 'brush';
    description: '';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    SubHeading: Schema.Attribute.String;
    Images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Lists: Schema.Attribute.Component<'shared.repetable-lists', true>;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    displayName: 'Hero';
    icon: 'alien';
    description: '';
  };
  attributes: {
    HeroText: Schema.Attribute.Component<'shared.repatable-texts', true>;
    Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    SubText: Schema.Attribute.Text;
    ButtonText: Schema.Attribute.String;
  };
}

export interface SharedGlobalDialerMap extends Struct.ComponentSchema {
  collectionName: 'components_shared_global_dialer_maps';
  info: {
    displayName: 'Global Dialer Map';
    icon: 'plane';
    description: '';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    SubHeading: Schema.Attribute.String;
    Color: Schema.Attribute.String;
  };
}

export interface SharedDeployingSteps extends Struct.ComponentSchema {
  collectionName: 'components_shared_deploying_steps';
  info: {
    displayName: 'DeployingSteps';
    icon: 'emotionUnhappy';
    description: '';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    SubHeading: Schema.Attribute.String;
    Steps: Schema.Attribute.Component<'shared.repetable-lists', true>;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'mapcountries.countries': MapcountriesCountries;
      'shared.what-solution-do': SharedWhatSolutionDo;
      'shared.text': SharedText;
      'shared.subscribe-section': SharedSubscribeSection;
      'shared.solutions-cta': SharedSolutionsCta;
      'shared.solution-description': SharedSolutionDescription;
      'shared.seo': SharedSeo;
      'shared.repetable-lists': SharedRepetableLists;
      'shared.repatable-texts': SharedRepatableTexts;
      'shared.product-specs': SharedProductSpecs;
      'shared.product-description': SharedProductDescription;
      'shared.pricing': SharedPricing;
      'shared.plans': SharedPlans;
      'shared.number': SharedNumber;
      'shared.mobile-numbers': SharedMobileNumbers;
      'shared.home-section3': SharedHomeSection3;
      'shared.home-section2': SharedHomeSection2;
      'shared.home-section1': SharedHomeSection1;
      'shared.hero': SharedHero;
      'shared.global-dialer-map': SharedGlobalDialerMap;
      'shared.deploying-steps': SharedDeployingSteps;
    }
  }
}
