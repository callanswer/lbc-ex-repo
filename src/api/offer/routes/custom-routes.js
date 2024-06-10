"use strict";

/**
 * offer new route
 */

module.exports = {
  routes: [
    {
      method: "DELETE",
      path: "/offers/delete-all",
      handler: "offer.deleteAll",
    },
  ],
};
