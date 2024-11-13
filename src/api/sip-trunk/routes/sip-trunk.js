'use strict';

/**
 * sip-trunk router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::sip-trunk.sip-trunk');
