'use strict';

/**
 * robot-controller service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::robot-controller.robot-controller');
