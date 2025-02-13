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

export interface SharedTopMenu extends Struct.ComponentSchema {
  collectionName: 'components_shared_top_menus';
  info: {
    displayName: 'TopMenu';
    icon: 'clock';
  };
  attributes: {
    Name: Schema.Attribute.String;
    Link: Schema.Attribute.String;
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

export interface SharedSubMenu extends Struct.ComponentSchema {
  collectionName: 'components_shared_sub_menus';
  info: {
    displayName: 'SubMenu';
    icon: 'collapse';
    description: '';
  };
  attributes: {
    Name: Schema.Attribute.String;
    Text: Schema.Attribute.Text;
    Link: Schema.Attribute.String;
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

export interface SharedNavigation extends Struct.ComponentSchema {
  collectionName: 'components_shared_navigations';
  info: {
    displayName: 'Navigation';
    icon: 'book';
    description: '';
  };
  attributes: {
    MenuItem: Schema.Attribute.Component<'shared.menu-item', true>;
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

export interface SharedMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_menu_items';
  info: {
    displayName: 'Menu Item';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    Type: Schema.Attribute.Enumeration<['single', 'dropdown']>;
    Name: Schema.Attribute.String;
    Link: Schema.Attribute.String;
    SubMenu: Schema.Attribute.Component<'shared.sub-menu', true>;
    SubDivision: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<3>;
  };
}

export interface SharedLists extends Struct.ComponentSchema {
  collectionName: 'components_shared_lists';
  info: {
    displayName: 'Lists';
    description: '';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Heading: Schema.Attribute.String;
    Number: Schema.Attribute.String;
    Text: Schema.Attribute.String;
    Link: Schema.Attribute.String;
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

export interface SharedGoogleMaps extends Struct.ComponentSchema {
  collectionName: 'components_shared_google_maps';
  info: {
    displayName: 'Google Maps';
    icon: 'code';
  };
  attributes: {
    Latitude: Schema.Attribute.String;
    Longitude: Schema.Attribute.String;
    Address: Schema.Attribute.Text;
    Description: Schema.Attribute.RichText;
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

export interface SharedForm extends Struct.ComponentSchema {
  collectionName: 'components_shared_forms';
  info: {
    displayName: 'Form';
    description: '';
  };
  attributes: {
    info: Schema.Attribute.Component<'shared.form-info', true>;
    Purpose: Schema.Attribute.Component<'shared.text', true>;
    Declaration: Schema.Attribute.RichText;
    PrivacyPolicy: Schema.Attribute.RichText;
    Heading: Schema.Attribute.String;
    SubHeading: Schema.Attribute.Text;
    FormFields: Schema.Attribute.Component<'shared.form-fields', false>;
  };
}

export interface SharedFormInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_form_infos';
  info: {
    displayName: 'Form Info';
    icon: 'code';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedFormFields extends Struct.ComponentSchema {
  collectionName: 'components_shared_form_fields';
  info: {
    displayName: 'Form Fields';
    icon: 'code';
    description: '';
  };
  attributes: {
    Purpose: Schema.Attribute.String;
    Company: Schema.Attribute.String;
    FirstName: Schema.Attribute.String;
    LastName: Schema.Attribute.String;
    Email: Schema.Attribute.String;
    Phone: Schema.Attribute.String;
    Message: Schema.Attribute.String;
    PhoneFix: Schema.Attribute.String;
  };
}

export interface SharedDomainSpecificData extends Struct.ComponentSchema {
  collectionName: 'components_shared_domain_specific_data';
  info: {
    displayName: 'Domain Specific Data';
    icon: 'shield';
    description: '';
  };
  attributes: {
    domain: Schema.Attribute.String;
    Email: Schema.Attribute.Email;
    Phonenumber: Schema.Attribute.String;
    Phonenumber2: Schema.Attribute.String;
    Whatsapp: Schema.Attribute.String;
    Signal: Schema.Attribute.String;
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

export interface SharedCountUp extends Struct.ComponentSchema {
  collectionName: 'components_shared_count_ups';
  info: {
    displayName: 'Count Up';
    icon: 'cog';
  };
  attributes: {
    text: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    value: Schema.Attribute.BigInteger;
    duration: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<10>;
  };
}

export interface SharedContactLists extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_lists';
  info: {
    displayName: 'ContactLists';
    icon: 'exit';
    description: '';
  };
  attributes: {
    Heading: Schema.Attribute.String;
    SubHeading: Schema.Attribute.String;
    Lists: Schema.Attribute.Component<'shared.lists', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'mapcountries.countries': MapcountriesCountries;
      'shared.what-solution-do': SharedWhatSolutionDo;
      'shared.top-menu': SharedTopMenu;
      'shared.text': SharedText;
      'shared.subscribe-section': SharedSubscribeSection;
      'shared.sub-menu': SharedSubMenu;
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
      'shared.navigation': SharedNavigation;
      'shared.mobile-numbers': SharedMobileNumbers;
      'shared.menu-item': SharedMenuItem;
      'shared.lists': SharedLists;
      'shared.home-section3': SharedHomeSection3;
      'shared.home-section2': SharedHomeSection2;
      'shared.home-section1': SharedHomeSection1;
      'shared.hero': SharedHero;
      'shared.google-maps': SharedGoogleMaps;
      'shared.global-dialer-map': SharedGlobalDialerMap;
      'shared.form': SharedForm;
      'shared.form-info': SharedFormInfo;
      'shared.form-fields': SharedFormFields;
      'shared.domain-specific-data': SharedDomainSpecificData;
      'shared.deploying-steps': SharedDeployingSteps;
      'shared.count-up': SharedCountUp;
      'shared.contact-lists': SharedContactLists;
    }
  }
}
