sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.sap.kt.bind.bindbyusemodel.controller.View2", {
            onInit: function () {
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.getRoute("RouteView2").attachMatched(this._onRouteMatched, this);

            },
            _onRouteMatched:function(oEvent) {
                var sArg = oEvent.getParameter("arguments").expId;
                var oData = this.getOwnerComponent().getModel("dataModel").getData().expenseData[sArg];
                var oModel = new sap.ui.model.json.JSONModel(oData);
                this.getView().setModel(oModel,"oexpenseModel");

            },
            onNavigationView1:function(){
                var oRouter1=this.getOwnerComponent().getRouter();
                oRouter1.navTo("RouteView1")
            }

        });
    });