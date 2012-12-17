dojo.declare("GenusHealthAdmin", wm.Application, {
	"disableDirtyEditorTracking": false, 
	"eventDelay": 0, 
	"i18n": false, 
	"isLoginPageEnabled": true, 
	"isSecurityEnabled": true, 
	"main": "Main2", 
	"manageHistory": true, 
	"manageURL": false, 
	"name": "", 
	"phoneGapLoginPage": "Login", 
	"phoneMain": "", 
	"projectSubVersion": "Alpha31", 
	"projectVersion": 1, 
	"studioVersion": "6.5.1.Release", 
	"tabletMain": "", 
	"theme": "wm_default", 
	"toastPosition": "br", 
	"touchToClickDelay": 500, 
	"touchToRightClickDelay": 1500,
	"widgets": {
		silkIconList: ["wm.ImageList", {"colCount":39,"height":16,"iconCount":90,"url":"lib/images/silkIcons/silk.png","width":16}, {}], 
		loginPageDialog: ["wm.PageDialog", {"hideControls":true,"title":"Login"}, {}]
	},
	_end: 0
});

GenusHealthAdmin.extend({
	onSessionExpiration: function() {
        this.loginPageDialog.show();
    },
    _end: 0
});