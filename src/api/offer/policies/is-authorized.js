module.exports = async (policyContext, config, { strapi }) => {
  //console.log("Je passe dans ma policy");
  //console.log(policyContext.state.user);
  const requesterId = policyContext.state.user.id;
  // console.log(requesterId);

  if (policyContext.state.user.id) {
    const offerId = policyContext.request.params.id;
    //console.log(offerId);
    const offer = await strapi.entityService.findOne(
      "api::offer.offer",
      offerId,
      { populate: ["owner"] }
    );
    console.log(offer);
    if (requesterId === offer.owner.id) {
      return true;
    } else {
      return false;
    }
  } else {
    // Pour activer les instruction suivante il faut décommenté la route create dans la policy is-authorized
    // actuellement la fonction est rendue par une extension de la route create au niveau du controller
    console.log(policyContext.request.body);
    const ownerId = JSON.parse(policyContext.request.body.data);
    console.log(ownerId);
    if (requesterId !== ownerId) {
      return false;
    } else {
      return true;
    }
  }
};
