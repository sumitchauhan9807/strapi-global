'use strict';

/**
 * home-office service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-office.home-office');
