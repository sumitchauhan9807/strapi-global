import type { Struct, Schema } from '@strapi/strapi';

export interface SharedText extends Struct.ComponentSchema {
  collectionName: 'components_shared_texts';
  info: {
    displayName: 'Text';
    icon: 'alien';
  };
  attributes: {};
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
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.text': SharedText;
      'shared.seo': SharedSeo;
      'shared.repatable-texts': SharedRepatableTexts;
      'shared.hero': SharedHero;
    }
  }
}
