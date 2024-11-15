'use strict';

/**
 * robot-controller controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::robot-controller.robot-controller');
