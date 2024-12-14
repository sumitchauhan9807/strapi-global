import type { Struct, Schema } from '@strapi/strapi';

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    width: Schema.Attribute.Integer;
    height: Schema.Attribute.Integer;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    ext: Schema.Attribute.String;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    related: Schema.Attribute.Relation<'morphToMany'>;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    >;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    >;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    >;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    timezone: Schema.Attribute.String;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    >;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    entryDocumentId: Schema.Attribute.String;
    locale: Schema.Attribute.String;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Schema.Attribute.Boolean;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    name: 'Workflow';
    description: '';
    singularName: 'workflow';
    pluralName: 'workflows';
    displayName: 'Workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    name: 'Workflow Stage';
    description: '';
    singularName: 'workflow-stage';
    pluralName: 'workflow-stages';
    displayName: 'Stages';
  };
  options: {
    version: '1.1.0';
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String;
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Schema.Attribute.String;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    timestamps: true;
    draftAndPublish: false;
  };
  attributes: {
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface ApiAboutAbout extends Struct.SingleTypeSchema {
  collectionName: 'abouts';
  info: {
    singularName: 'about';
    pluralName: 'abouts';
    displayName: 'About';
    description: 'Write about yourself and the content you create';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    title: Schema.Attribute.String;
    blocks: Schema.Attribute.DynamicZone<[]>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::about.about'>;
  };
}

export interface ApiAccelerationOfSaleAccelerationOfSale
  extends Struct.SingleTypeSchema {
  collectionName: 'acceleration_of_sales';
  info: {
    singularName: 'acceleration-of-sale';
    pluralName: 'acceleration-of-sales';
    displayName: 'Acceleration of sales';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Description: Schema.Attribute.Component<
      'shared.product-description',
      false
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ProductSpecs: Schema.Attribute.Component<'shared.product-specs', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    DeployingSteps: Schema.Attribute.Component<
      'shared.deploying-steps',
      false
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::acceleration-of-sale.acceleration-of-sale'
    >;
  };
}

export interface ApiAiContactCenterAiContactCenter
  extends Struct.SingleTypeSchema {
  collectionName: 'ai_contact_centers';
  info: {
    singularName: 'ai-contact-center';
    pluralName: 'ai-contact-centers';
    displayName: 'AI Contact Center';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Description: Schema.Attribute.Component<
      'shared.product-description',
      false
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ProductSpecs: Schema.Attribute.Component<'shared.product-specs', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    DeployingSteps: Schema.Attribute.Component<
      'shared.deploying-steps',
      false
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::ai-contact-center.ai-contact-center'
    >;
  };
}

export interface ApiCallRecordingCallRecording extends Struct.SingleTypeSchema {
  collectionName: 'call_recordings';
  info: {
    singularName: 'call-recording';
    pluralName: 'call-recordings';
    displayName: 'Call Recording';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Description: Schema.Attribute.Component<
      'shared.product-description',
      false
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ProductSpecs: Schema.Attribute.Component<'shared.product-specs', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    DeployingSteps: Schema.Attribute.Component<
      'shared.deploying-steps',
      false
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::call-recording.call-recording'
    >;
  };
}

export interface ApiChatbotsVsNewsletterChatbotsVsNewsletter
  extends Struct.SingleTypeSchema {
  collectionName: 'chatbots_vs_newsletters';
  info: {
    singularName: 'chatbots-vs-newsletter';
    pluralName: 'chatbots-vs-newsletters';
    displayName: 'Chatbots VS newsletter';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Description: Schema.Attribute.Component<
      'shared.product-description',
      false
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ProductSpecs: Schema.Attribute.Component<'shared.product-specs', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    DeployingSteps: Schema.Attribute.Component<
      'shared.deploying-steps',
      false
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::chatbots-vs-newsletter.chatbots-vs-newsletter'
    >;
  };
}

export interface ApiContactUsContactUs extends Struct.SingleTypeSchema {
  collectionName: 'contact_uses';
  info: {
    singularName: 'contact-us';
    pluralName: 'contact-uses';
    displayName: 'Contact Us';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Heading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    SubHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Lists: Schema.Attribute.Component<'shared.text', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Form: Schema.Attribute.Component<'shared.form', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ContactLists: Schema.Attribute.Component<'shared.contact-lists', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::contact-us.contact-us'
    >;
  };
}

export interface ApiCountryCountry extends Struct.CollectionTypeSchema {
  collectionName: 'countries';
  info: {
    singularName: 'country';
    pluralName: 'countries';
    displayName: 'Country';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Schema.Attribute.String;
    flag: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    CallCenters: Schema.Attribute.String;
    Color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    IsoCode: Schema.Attribute.Enumeration<
      [
        'AF:Afghanistan',
        'AX:\u00C5land Islands',
        'AL:Albania',
        'DZ:Algeria',
        'AS:American Samoa',
        'AD:Andorra',
        'AO:Angola',
        'AI:Anguilla',
        'AQ:Antarctica',
        'AG:Antigua and Barbuda',
        'AR:Argentina',
        'AM:Armenia',
        'AW:Aruba',
        'AU:Australia',
        'AT:Austria',
        'AZ:Azerbaijan',
        'BS:Bahamas',
        'BH:Bahrain',
        'BD:Bangladesh',
        'BB:Barbados',
        'BY:Belarus',
        'BE:Belgium',
        'BZ:Belize',
        'BJ:Benin',
        'BM:Bermuda',
        'BT:Bhutan',
        'BO:Bolivia',
        'BA:Bosnia and Herzegovina',
        'BW:Botswana',
        'BV:Bouvet Island',
        'BR:Brazil',
        'IO:British Indian Ocean Territory',
        'BN:Brunei Darussalam',
        'BG:Bulgaria',
        'BF:Burkina Faso',
        'BI:Burundi',
        'KH:Cambodia',
        'CM:Cameroon',
        'CA:Canada',
        'CV:Cape Verde',
        'KY:Cayman Islands',
        'CF:Central African Republic',
        'TD:Chad',
        'CL:Chile',
        'CN:China',
        'CX:Christmas Island',
        'CC:Cocos (Keeling) Islands',
        'CO:Colombia',
        'KM:Comoros',
        'CG:Congo',
        'CD:Congo, The Democratic Republic of The',
        'CK:Cook Islands',
        'CR:Costa Rica',
        "CI:Cote D'ivoire",
        'HR:Croatia',
        'CU:Cuba',
        'CY:Cyprus',
        'CZ:Czechia',
        'DK:Denmark',
        'DJ:Djibouti',
        'DM:Dominica',
        'DO:Dominican Republic',
        'EC:Ecuador',
        'EG:Egypt',
        'SV:El Salvador',
        'GQ:Equatorial Guinea',
        'ER:Eritrea',
        'EE:Estonia',
        'ET:Ethiopia',
        'FK:Falkland Islands (Malvinas)',
        'FO:Faroe Islands',
        'FJ:Fiji',
        'FI:Finland',
        'FR:France',
        'GF:French Guiana',
        'PF:French Polynesia',
        'TF:French Southern Territories',
        'GA:Gabon',
        'GM:Gambia',
        'GE:Georgia',
        'DE:Germany',
        'GH:Ghana',
        'GI:Gibraltar',
        'GR:Greece',
        'GL:Greenland',
        'GD:Grenada',
        'GP:Guadeloupe',
        'GU:Guam',
        'GT:Guatemala',
        'GG:Guernsey',
        'GN:Guinea',
        'GW:Guinea-bissau',
        'GY:Guyana',
        'HT:Haiti',
        'HM:Heard Island and Mcdonald Islands',
        'VA:Holy See (Vatican City State)',
        'HN:Honduras',
        'HK:Hong Kong',
        'HU:Hungary',
        'IS:Iceland',
        'IN:India',
        'ID:Indonesia',
        'IR:Iran, Islamic Republic of',
        'IQ:Iraq',
        'IE:Ireland',
        'IM:Isle of Man',
        'IL:Israel',
        'IT:Italy',
        'JM:Jamaica',
        'JP:Japan',
        'JE:Jersey',
        'JO:Jordan',
        'KZ:Kazakhstan',
        'KI:Kiribati',
        "KP:Korea, Democratic People's Republic of",
        'KR:Korea, Republic of',
        'KW:Kuwait',
        'KG:Kyrgyzstan',
        "LA:Lao People's Democratic Republic",
        'LV:Latvia',
        'LB:Lebanon',
        'LS:Lesotho',
        'LR:Liberia',
        'LY:Libyan Arab Jamahiriya',
        'LI:Liechtenstein',
        'LT:Lithuania',
        'LU:Luxembourg',
        'MO:Macao',
        'MK:Macedonia, The Former Yugoslav Republic of',
        'MG:Madagascar',
        'MW:Malawi',
        'MY:Malaysia',
        'MV:Maldives',
        'ML:Mali',
        'MT:Malta',
        'MH:Marshall Islands',
        'MQ:Martinique',
        'MR:Mauritania',
        'MU:Mauritius',
        'YT:Mayotte',
        'MX:Mexico',
        'FM:Micronesia, Federated States of',
        'MD:Moldova, Republic of',
        'MC:Monaco',
        'MN:Mongolia',
        'ME:Montenegro',
        'MS:Montserrat',
        'MA:Morocco',
        'MZ:Mozambique',
        'MM:Myanmar',
        'NA:Namibia',
        'NR:Nauru',
        'NP:Nepal',
        'NL:Netherlands',
        'AN:Netherlands Antilles',
        'NC:New Caledonia',
        'NZ:New Zealand',
        'NI:Nicaragua',
        'NE:Niger',
        'NG:Nigeria',
        'NU:Niue',
        'NF:Norfolk Island',
        'MP:Northern Mariana Islands',
        'NO:Norway',
        'OM:Oman',
        'PK:Pakistan',
        'PW:Palau',
        'PS:Palestinian Territory, Occupied',
        'PA:Panama',
        'PG:Papua New Guinea',
        'PY:Paraguay',
        'PE:Peru',
        'PH:Philippines',
        'PN:Pitcairn',
        'PL:Poland',
        'PT:Portugal',
        'PR:Puerto Rico',
        'QA:Qatar',
        'RE:Reunion',
        'RO:Romania',
        'RU:Russian Federation',
        'RW:Rwanda',
        'SH:Saint Helena',
        'KN:Saint Kitts and Nevis',
        'LC:Saint Lucia',
        'PM:Saint Pierre and Miquelon',
        'VC:Saint Vincent and The Grenadines',
        'WS:Samoa',
        'SM:San Marino',
        'ST:Sao Tome and Principe',
        'SA:Saudi Arabia',
        'SN:Senegal',
        'RS:Serbia',
        'SC:Seychelles',
        'SL:Sierra Leone',
        'SG:Singapore',
        'SK:Slovakia',
        'SI:Slovenia',
        'SB:Solomon Islands',
        'SO:Somalia',
        'ZA:South Africa',
        'GS:South Georgia and The South Sandwich Islands',
        'ES:Spain',
        'LK:Sri Lanka',
        'SD:Sudan',
        'SR:Suriname',
        'SJ:Svalbard and Jan Mayen',
        'SZ:Swaziland',
        'SE:Sweden',
        'CH:Switzerland',
        'SY:Syrian Arab Republic',
        'TW:Taiwan, Province of China',
        'TJ:Tajikistan',
        'TZ:Tanzania, United Republic of',
        'TH:Thailand',
        'TL:Timor-leste',
        'TG:Togo',
        'TK:Tokelau',
        'TO:Tonga',
        'TT:Trinidad and Tobago',
        'TN:Tunisia',
        'TR:Turkey',
        'TM:Turkmenistan',
        'TC:Turks and Caicos Islands',
        'TV:Tuvalu',
        'UG:Uganda',
        'UA:Ukraine',
        'AE:United Arab Emirates',
        'GB:United Kingdom',
        'US:United States',
        'UM:United States Minor Outlying Islands',
        'UY:Uruguay',
        'UZ:Uzbekistan',
        'VU:Vanuatu',
        'VE:Venezuela',
        'VN:Viet Nam',
        'VG:Virgin Islands, British',
        'VI:Virgin Islands, U.S.',
        'WF:Wallis and Futuna',
        'EH:Western Sahara',
        'YE:Yemen',
        'ZM:Zambia',
        'ZW:Zimbabwe',
      ]
    >;
    CountryCode: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::country.country'
    >;
  };
}

export interface ApiDatenschutzDatenschutz extends Struct.SingleTypeSchema {
  collectionName: 'datenschutzs';
  info: {
    singularName: 'datenschutz';
    pluralName: 'datenschutzs';
    displayName: 'Datenschutz';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::datenschutz.datenschutz'
    >;
  };
}

export interface ApiFooterFooter extends Struct.SingleTypeSchema {
  collectionName: 'footers';
  info: {
    singularName: 'footer';
    pluralName: 'footers';
    displayName: 'Footer';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    WorkingHours: Schema.Attribute.Component<'shared.repetable-lists', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Location1: Schema.Attribute.RichText &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Location2: Schema.Attribute.RichText &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Location3: Schema.Attribute.RichText &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    MobileNumbers: Schema.Attribute.Component<'shared.mobile-numbers', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Location4: Schema.Attribute.RichText &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Location5: Schema.Attribute.RichText &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::footer.footer'>;
  };
}

export interface ApiFreelanceDeveloperFreelanceDeveloper
  extends Struct.SingleTypeSchema {
  collectionName: 'freelance_developers';
  info: {
    singularName: 'freelance-developer';
    pluralName: 'freelance-developers';
    displayName: 'freelance developers';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Description: Schema.Attribute.Component<
      'shared.product-description',
      false
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ProductSpecs: Schema.Attribute.Component<'shared.product-specs', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    DeployingSteps: Schema.Attribute.Component<
      'shared.deploying-steps',
      false
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::freelance-developer.freelance-developer'
    >;
  };
}

export interface ApiGlobalGlobal extends Struct.SingleTypeSchema {
  collectionName: 'globals';
  info: {
    singularName: 'global';
    pluralName: 'globals';
    displayName: 'Global';
    description: 'Define global settings';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    LightLogo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    DarkLogo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Email: Schema.Attribute.Email;
    Phonenumber: Schema.Attribute.String;
    linkedin: Schema.Attribute.String;
    facebook: Schema.Attribute.String;
    skype: Schema.Attribute.String;
    whatsapp: Schema.Attribute.String;
    xing: Schema.Attribute.String;
    signal: Schema.Attribute.String;
    instagram: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::global.global'>;
  };
}

export interface ApiGlobalWorldMapGlobalWorldMap
  extends Struct.SingleTypeSchema {
  collectionName: 'global_world_maps';
  info: {
    singularName: 'global-world-map';
    pluralName: 'global-world-maps';
    displayName: 'Global World Map';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Map: Schema.Attribute.Component<'shared.global-dialer-map', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::global-world-map.global-world-map'
    >;
  };
}

export interface ApiGoogleMapGoogleMap extends Struct.CollectionTypeSchema {
  collectionName: 'google_maps';
  info: {
    singularName: 'google-map';
    pluralName: 'google-maps';
    displayName: 'Google Maps';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    GoogleMaps: Schema.Attribute.Component<'shared.google-maps', false>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::google-map.google-map'
    >;
  };
}

export interface ApiHomeHome extends Struct.SingleTypeSchema {
  collectionName: 'homes';
  info: {
    singularName: 'home';
    pluralName: 'homes';
    displayName: 'Home';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Hero: Schema.Attribute.Component<'shared.hero', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    HomeSection1: Schema.Attribute.Component<'shared.home-section1', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    HomeSection2: Schema.Attribute.Component<'shared.home-section2', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    SubscribeSection: Schema.Attribute.Component<
      'shared.subscribe-section',
      false
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Pricing: Schema.Attribute.Component<'shared.pricing', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    HomeSection3: Schema.Attribute.Component<'shared.home-section3', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Countup: Schema.Attribute.Component<'shared.count-up', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::home.home'>;
  };
}

export interface ApiHomeOfficeHomeOffice extends Struct.SingleTypeSchema {
  collectionName: 'home_offices';
  info: {
    singularName: 'home-office';
    pluralName: 'home-offices';
    displayName: 'Home Office';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    TopImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    SolutionDescription: Schema.Attribute.Component<
      'shared.solution-description',
      false
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    SolutionsCTA: Schema.Attribute.Component<'shared.solutions-cta', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    WhatSolutionDO: Schema.Attribute.Component<
      'shared.what-solution-do',
      false
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    SolutionTip: Schema.Attribute.RichText &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    SolutionBenefits: Schema.Attribute.Component<
      'shared.repetable-lists',
      true
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    HowSolutionWorks: Schema.Attribute.Component<
      'shared.repatable-texts',
      true
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-office.home-office'
    >;
  };
}

export interface ApiImpressumImpressum extends Struct.SingleTypeSchema {
  collectionName: 'impressums';
  info: {
    singularName: 'impressum';
    pluralName: 'impressums';
    displayName: 'Impressum';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::impressum.impressum'
    >;
  };
}

export interface ApiImprintImprint extends Struct.SingleTypeSchema {
  collectionName: 'imprints';
  info: {
    singularName: 'imprint';
    pluralName: 'imprints';
    displayName: 'Imprint';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::imprint.imprint'
    >;
  };
}

export interface ApiPartnerPartner extends Struct.CollectionTypeSchema {
  collectionName: 'partners';
  info: {
    singularName: 'partner';
    pluralName: 'partners';
    displayName: 'Partner';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::partner.partner'
    >;
  };
}

export interface ApiPartnerPagePartnerPage extends Struct.SingleTypeSchema {
  collectionName: 'partner_pages';
  info: {
    singularName: 'partner-page';
    pluralName: 'partner-pages';
    displayName: 'Partner Page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    TopImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::partner-page.partner-page'
    >;
  };
}

export interface ApiPbxPbx extends Struct.SingleTypeSchema {
  collectionName: 'pbxes';
  info: {
    singularName: 'pbx';
    pluralName: 'pbxes';
    displayName: 'PBX';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Description: Schema.Attribute.Component<
      'shared.product-description',
      false
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ProductSpecs: Schema.Attribute.Component<'shared.product-specs', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    DeployingSteps: Schema.Attribute.Component<
      'shared.deploying-steps',
      false
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::pbx.pbx'>;
  };
}

export interface ApiPhoneNumberPhoneNumber extends Struct.SingleTypeSchema {
  collectionName: 'phone_numbers';
  info: {
    singularName: 'phone-number';
    pluralName: 'phone-numbers';
    displayName: 'Phone Number';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Description: Schema.Attribute.Component<
      'shared.product-description',
      false
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ProductSpecs: Schema.Attribute.Component<'shared.product-specs', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    DeployingSteps: Schema.Attribute.Component<
      'shared.deploying-steps',
      false
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::phone-number.phone-number'
    >;
  };
}

export interface ApiPricingPagePricingPage extends Struct.SingleTypeSchema {
  collectionName: 'pricing_pages';
  info: {
    singularName: 'pricing-page';
    pluralName: 'pricing-pages';
    displayName: 'Pricing Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Pricing: Schema.Attribute.Component<'shared.pricing', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    TopImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::pricing-page.pricing-page'
    >;
  };
}

export interface ApiPrivacyPolicyPrivacyPolicy extends Struct.SingleTypeSchema {
  collectionName: 'privacy_policies';
  info: {
    singularName: 'privacy-policy';
    pluralName: 'privacy-policies';
    displayName: 'Privacy Policy';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::privacy-policy.privacy-policy'
    >;
  };
}

export interface ApiProductProduct extends Struct.CollectionTypeSchema {
  collectionName: 'products';
  info: {
    singularName: 'product';
    pluralName: 'products';
    displayName: 'Product';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 71;
      }>;
    description: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::product.product'
    >;
  };
}

export interface ApiRobotControllerRobotController
  extends Struct.SingleTypeSchema {
  collectionName: 'robot_controllers';
  info: {
    singularName: 'robot-controller';
    pluralName: 'robot-controllers';
    displayName: 'Robot controller';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    TopImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    SolutionDescription: Schema.Attribute.Component<
      'shared.solution-description',
      false
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    SolutionsCTA: Schema.Attribute.Component<'shared.solutions-cta', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    WhatSolutionDO: Schema.Attribute.Component<
      'shared.what-solution-do',
      false
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    SolutionTip: Schema.Attribute.RichText &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    SolutionBenefits: Schema.Attribute.Component<
      'shared.repetable-lists',
      true
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    HowSolutionWorks: Schema.Attribute.Component<'shared.text', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::robot-controller.robot-controller'
    >;
  };
}

export interface ApiSipTrunkSipTrunk extends Struct.SingleTypeSchema {
  collectionName: 'sip_trunks';
  info: {
    singularName: 'sip-trunk';
    pluralName: 'sip-trunks';
    displayName: 'SIP Trunk';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Description: Schema.Attribute.Component<
      'shared.product-description',
      false
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ProductSpecs: Schema.Attribute.Component<'shared.product-specs', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    DeployingSteps: Schema.Attribute.Component<
      'shared.deploying-steps',
      false
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::sip-trunk.sip-trunk'
    >;
  };
}

export interface ApiSolutionPhoneNumberSolutionPhoneNumber
  extends Struct.SingleTypeSchema {
  collectionName: 'solution_phone_numbers';
  info: {
    singularName: 'solution-phone-number';
    pluralName: 'solution-phone-numbers';
    displayName: 'Solution Phone Numbers';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    TopImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    SolutionDescription: Schema.Attribute.Component<
      'shared.solution-description',
      false
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    SolutionsCTA: Schema.Attribute.Component<'shared.solutions-cta', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    WhatSolutionDO: Schema.Attribute.Component<
      'shared.what-solution-do',
      false
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    SolutionTip: Schema.Attribute.RichText &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    SolutionBenefits: Schema.Attribute.Component<
      'shared.repetable-lists',
      true
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    HowSolutionWorks: Schema.Attribute.Component<
      'shared.repatable-texts',
      true
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::solution-phone-number.solution-phone-number'
    >;
  };
}

export interface ApiSolutionVoiceRobotSolutionVoiceRobot
  extends Struct.SingleTypeSchema {
  collectionName: 'solution_voice_robots';
  info: {
    singularName: 'solution-voice-robot';
    pluralName: 'solution-voice-robots';
    displayName: 'Solution Voice Robot';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    TopImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    SolutionDescription: Schema.Attribute.Component<
      'shared.solution-description',
      false
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    SolutionsCTA: Schema.Attribute.Component<'shared.solutions-cta', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    WhatSolutionDO: Schema.Attribute.Component<
      'shared.what-solution-do',
      false
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    SolutionTip: Schema.Attribute.RichText &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    SolutionBenefits: Schema.Attribute.Component<
      'shared.repetable-lists',
      true
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    HowSolutionWorks: Schema.Attribute.Component<
      'shared.repatable-texts',
      true
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::solution-voice-robot.solution-voice-robot'
    >;
  };
}

export interface ApiTeamTeam extends Struct.CollectionTypeSchema {
  collectionName: 'teams';
  info: {
    singularName: 'team';
    pluralName: 'teams';
    displayName: 'Team';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Schema.Attribute.String;
    designation: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Schema.Attribute.RichText;
    facebook: Schema.Attribute.String;
    instagram: Schema.Attribute.String;
    skype: Schema.Attribute.String;
    xing: Schema.Attribute.String;
    linkedin: Schema.Attribute.String;
    whatsapp: Schema.Attribute.String;
    signal: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::team.team'>;
  };
}

export interface ApiTeamPageTeamPage extends Struct.SingleTypeSchema {
  collectionName: 'team_pages';
  info: {
    singularName: 'team-page';
    pluralName: 'team-pages';
    displayName: 'Team Page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    TopImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::team-page.team-page'
    >;
  };
}

export interface ApiTermsAndConditionTermsAndCondition
  extends Struct.SingleTypeSchema {
  collectionName: 'terms_and_conditions';
  info: {
    singularName: 'terms-and-condition';
    pluralName: 'terms-and-conditions';
    displayName: 'Terms & Conditions';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::terms-and-condition.terms-and-condition'
    >;
  };
}

export interface ApiTextToSpeachTextToSpeach extends Struct.SingleTypeSchema {
  collectionName: 'text_to_speaches';
  info: {
    singularName: 'text-to-speach';
    pluralName: 'text-to-speaches';
    displayName: 'Text to Speach';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Description: Schema.Attribute.Component<
      'shared.product-description',
      false
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ProductSpecs: Schema.Attribute.Component<'shared.product-specs', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    DeployingSteps: Schema.Attribute.Component<
      'shared.deploying-steps',
      false
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::text-to-speach.text-to-speach'
    >;
  };
}

export interface ApiVoiceRobotForInboundCallVoiceRobotForInboundCall
  extends Struct.SingleTypeSchema {
  collectionName: 'voice_robot_for_inbound_calls';
  info: {
    singularName: 'voice-robot-for-inbound-call';
    pluralName: 'voice-robot-for-inbound-calls';
    displayName: 'Voice Robot for inbound calls';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Description: Schema.Attribute.Component<
      'shared.product-description',
      false
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ProductSpecs: Schema.Attribute.Component<'shared.product-specs', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    DeployingSteps: Schema.Attribute.Component<
      'shared.deploying-steps',
      false
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::voice-robot-for-inbound-call.voice-robot-for-inbound-call'
    >;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Schema.Attribute.String;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    preferedLanguage: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'>;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Schema.Attribute.String;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'>;
  };
}

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Schema.Attribute.DateTime;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'>;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Schema.Attribute.DateTime;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    >;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::about.about': ApiAboutAbout;
      'api::acceleration-of-sale.acceleration-of-sale': ApiAccelerationOfSaleAccelerationOfSale;
      'api::ai-contact-center.ai-contact-center': ApiAiContactCenterAiContactCenter;
      'api::call-recording.call-recording': ApiCallRecordingCallRecording;
      'api::chatbots-vs-newsletter.chatbots-vs-newsletter': ApiChatbotsVsNewsletterChatbotsVsNewsletter;
      'api::contact-us.contact-us': ApiContactUsContactUs;
      'api::country.country': ApiCountryCountry;
      'api::datenschutz.datenschutz': ApiDatenschutzDatenschutz;
      'api::footer.footer': ApiFooterFooter;
      'api::freelance-developer.freelance-developer': ApiFreelanceDeveloperFreelanceDeveloper;
      'api::global.global': ApiGlobalGlobal;
      'api::global-world-map.global-world-map': ApiGlobalWorldMapGlobalWorldMap;
      'api::google-map.google-map': ApiGoogleMapGoogleMap;
      'api::home.home': ApiHomeHome;
      'api::home-office.home-office': ApiHomeOfficeHomeOffice;
      'api::impressum.impressum': ApiImpressumImpressum;
      'api::imprint.imprint': ApiImprintImprint;
      'api::partner.partner': ApiPartnerPartner;
      'api::partner-page.partner-page': ApiPartnerPagePartnerPage;
      'api::pbx.pbx': ApiPbxPbx;
      'api::phone-number.phone-number': ApiPhoneNumberPhoneNumber;
      'api::pricing-page.pricing-page': ApiPricingPagePricingPage;
      'api::privacy-policy.privacy-policy': ApiPrivacyPolicyPrivacyPolicy;
      'api::product.product': ApiProductProduct;
      'api::robot-controller.robot-controller': ApiRobotControllerRobotController;
      'api::sip-trunk.sip-trunk': ApiSipTrunkSipTrunk;
      'api::solution-phone-number.solution-phone-number': ApiSolutionPhoneNumberSolutionPhoneNumber;
      'api::solution-voice-robot.solution-voice-robot': ApiSolutionVoiceRobotSolutionVoiceRobot;
      'api::team.team': ApiTeamTeam;
      'api::team-page.team-page': ApiTeamPageTeamPage;
      'api::terms-and-condition.terms-and-condition': ApiTermsAndConditionTermsAndCondition;
      'api::text-to-speach.text-to-speach': ApiTextToSpeachTextToSpeach;
      'api::voice-robot-for-inbound-call.voice-robot-for-inbound-call': ApiVoiceRobotForInboundCallVoiceRobotForInboundCall;
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
    }
  }
}
