'use strict';

/**
 * text-to-speach service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::text-to-speach.text-to-speach');
