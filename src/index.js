'use strict';

module.exports = {
  register({ strapi }) {
    strapi.contentType('plugin::my-plugin.content-type-name').attributes = {
      'toto': {
        type: 'string',
      }
    }
  },
  bootstrap({ strapi }) {},
};