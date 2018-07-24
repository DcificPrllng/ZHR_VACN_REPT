sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("ZHR_VACATION_REPORT.controller.View1", {
		handleExcelButtonPressed: function() {
			sap.m.URLHelper.redirect("/sap/opu/odata/sap/ZVACATION_REPORT_SRV/QuotaRecords?$format=xlsx&$select=PersonnelNumber%2cName%2cQuotaName%2cUsed%2cRemaining%2cAnnualEntitlement%2cUnit", true);
		}
	});

});