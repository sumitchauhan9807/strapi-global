'use strict';

/**
 * sip-trunk service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sip-trunk.sip-trunk');
