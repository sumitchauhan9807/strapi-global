'use strict';

/**
 * call-recording service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::call-recording.call-recording');
