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
	"projectSubVersion": "Alpha43", 
	"projectVersion": 1, 
	"studioVersion": "6.5.3.Release", 
	"tabletMain": "", 
	"theme": "wm_default", 
	"toastPosition": "br", 
	"touchToClickDelay": 500, 
	"touchToRightClickDelay": 1500,
	"widgets": {
		silkIconList: ["wm.ImageList", {"colCount":39,"height":16,"iconCount":90,"url":"lib/images/silkIcons/silk.png","width":16}, {}], 
		loginPageDialog: ["wm.PageDialog", {"hideControls":true,"pageName":"Login","title":"Login"}, {}]
	},
	_end: 0
});

/* On Reimport of DB:
 * NodeGroup needs a relationship named "node"
 * Messages table needs a relationship named "userSessions"
 * Node does NOT get a relationship named "node"; but DOES need a field named "parent_id" not "parentId".
 */

GenusHealthAdmin.extend({
	onSessionExpiration: function() {
        this.loginPageDialog.show();
    },
    _end: 0
});