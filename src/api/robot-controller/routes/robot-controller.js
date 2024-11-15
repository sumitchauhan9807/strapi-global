'use strict';

/**
 * robot-controller router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::robot-controller.robot-controller');
