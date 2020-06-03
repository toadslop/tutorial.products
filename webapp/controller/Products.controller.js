sap.ui.define([
  "tutorial/products/controller/BaseController"
], function (Controller) {
  "use strict";

  return Controller.extend("tutorial.products.controller.Products", {
    onInit : function () {
      this.addHistoryEntry({
        title: "All Products",
        icon: "sap-icon://product",
        intent: "#display-data"
      }, true);
    },

    handleListItemPress: function (oEvent) {
      var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      var selectedProductId = oEvent.getSource().getBindingContext().getProperty("ProductID");
      oRouter.navTo("ProductDetail", {
        productId: selectedProductId
      });
    }
  });
});