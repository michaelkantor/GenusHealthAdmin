dojo.declare("SessionsPage", wm.Page, {
	start: function() {
		
	},
	"preferredDevice": "desktop",

	toCSVButtonClick: function(inSender) {
		this.sessionsGrid.showCSVData();
	},
	sessionsGridSelect1: function(inSender) {
		var selectedPatientId = inSender.selectedItem.getValue("patientId");
        var currentPatientId = this.filterSessionsSVar.input.getValue("patientId");
        if (this.showUserToggle.clicked) {
            if (selectedPatientId != currentPatientId) {
                this.filterSessionsSVar.input.setValue("patientId", selectedPatientId);
            }
        } else if (currentPatientId) {
            this.filterSessionsSVar.input.setValue("patientId", null);
        }
	},
	showUserToggleClick: function(inSender) {
		if (!this.sessionsGrid.selectedItem.isEmpty()) {
            this.sessionsGridSelect1(this.sessionsGrid);
		}
	},
	_end: 0
});