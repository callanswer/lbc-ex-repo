"use strict";

/**
 * offer router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::offer.offer", {
  config: {
    // Nous ajoutons une configuration à une de nos routes
    update: {
      policies: ["api::offer.is-authorized"], // Nous ajoutons la policy is-authorized à la route update
    },
    delete: {
      policies: ["api::offer.is-authorized"], // Nous ajoutons la policy is-authorized à la route delete
    },
    // IL n'y a pas de params pour create
    // create: {
    //   policies: ["api::offer.is-authorized"], // Nous ajoutons la policy is-authorized à la route create
    // },
  },
});
