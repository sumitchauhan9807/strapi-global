'use strict';

/**
 * global-world-map service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-world-map.global-world-map');
