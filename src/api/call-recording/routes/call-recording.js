'use strict';

/**
 * call-recording router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::call-recording.call-recording');
