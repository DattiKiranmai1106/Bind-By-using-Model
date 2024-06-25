sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.sap.kt.bind.bindbyusemodel.controller.View1", {
            onInit: function () {
             
            },
            onPressNavView:function(oEvent){
                var sPath= oEvent.getSource().getBindingContextPath().split("/")[2];
                var oRouter=this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView2",{
                    expId:sPath
                });
            }
        });
    });
