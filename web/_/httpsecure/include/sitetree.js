/* [nodename, id, name, navigationtext, href, isnavigation, childs[], templatename] */

if (typeof(decodeURIComponent) == 'undefined') {
  decodeURIComponent = function(s) {
    return unescape(s);
  }
}

function jdecode(s) {
    s = s.replace(/\+/g, "%20")
    return decodeURIComponent(s);
}

var POS_NODENAME=0;
var POS_ID=1;
var POS_NAME=2;
var POS_NAVIGATIONTEXT=3;
var POS_HREF=4;
var POS_ISNAVIGATION=5;
var POS_CHILDS=6;
var POS_TEMPLATENAME=7;
var POS_TARGET=8;
var theSitetree=[ 
	['PAGE','1701',jdecode('Home'),jdecode(''), jdecode('%2F1701.html'), 'true',[],'',''],
	['PAGE','1752',jdecode('News'),jdecode(''), jdecode('%2F1752.html'), 'true',[],'',''],
	['PAGE','1773',jdecode('Contact'),jdecode(''), jdecode('%2F1773.html'), 'true',[],'','']];
var siteelementCount=3;
theSitetree.topTemplateName='Elegant';
theSitetree.paletteFamily='223892';
theSitetree.keyvisualId='-1';
theSitetree.keyvisualName='keyv.jpg';
theSitetree.fontsetId='32899';
theSitetree.graphicsetId='13974';
theSitetree.contentColor='FFFFFF';
theSitetree.contentBGColor='223892';
var localeDef={
  language: 'en',
  country: 'US'
};
var prodDef={
  wl_name: 'grp19-dulles',
  product: 'WSCSYSSSSLYTCVNO'
};
var theTemplate={
				hasFlashNavigation: 'false',
				hasFlashLogo: 	'false',
				hasFlashCompanyname: 'false',
				hasFlashElements: 'false',
				hasCompanyname: 'false',
				name: 			'Elegant',
				paletteFamily: 	'223892',
				keyvisualId: 	'-1',
				keyvisualName: 	'keyv.jpg',
				fontsetId: 		'32899',
				graphicsetId: 	'13974',
				contentColor: 	'FFFFFF',
				contentBGColor: '223892',
				a_color: 		'000000',
				b_color: 		'000000',
				c_color: 		'000000',
				d_color: 		'000000',
				e_color: 		'000000',
				f_color: 		'000000',
				hasCustomLogo: 	'false',
				contentFontFace:'Arial, Helvetica, sans-serif',
				contentFontSize:'12',
				useFavicon:     'false'
			  };
var webappMappings = {};
webappMappings['5000']=webappMappings['5000--']={
webappId:    '5000',
documentId:  '1701',
internalId:  '-',
customField: '20140315-170500'
};
webappMappings['5000']=webappMappings['5000--']={
webappId:    '5000',
documentId:  '1752',
internalId:  '-',
customField: '20140315-153037'
};
webappMappings['5000']=webappMappings['5000--']={
webappId:    '5000',
documentId:  '1773',
internalId:  '-',
customField: '20140315-153126'
};
var webAppHostname = 'diycgi.cluster.stngva01.us.diy-servers.net:80';
var canonHostname = 'diywk01.verio.stngva01.us.diy-servers.net';
var accountId     = 'AVF340I706SY';
var companyName   = 'Remotts%2C+Evoluci%C3%B3n+hacia+la+Inmortalidad';
var htmlTitle	  = 'Remotts%2C+Evoluci%C3%B3n+hacia+la+inmortalidad';
var metaKeywords  = '';
var metaContents  = '';
theSitetree.getById = function(id, ar) {
	if (typeof(ar) == 'undefined'){
		ar = this;
	}
	for (var i=0; i < ar.length; i++) {
		if (ar[i][POS_ID] == id){
			return ar[i];
		}
		if (ar[i][POS_CHILDS].length > 0) {
			var result=this.getById(id, ar[i][POS_CHILDS]);
			if (result != null){
				return result;
			}
		}
	}
	return null;
};

theSitetree.getParentById = function(id, ar) {
	if (typeof(ar) == 'undefined'){
		ar = this;
	}
	for (var i=0; i < ar.length; i++) {
		for (var j = 0; j < ar[i][POS_CHILDS].length; j++) {
			if (ar[i][POS_CHILDS][j][POS_ID] == id) {
				// child found
				return ar[i];
			}
			var result=this.getParentById(id, ar[i][POS_CHILDS]);
			if (result != null){
				return result;
			}
		}
	}
	return null;
};

theSitetree.getName = function(id) {
	var elem = this.getById(id);
	if (elem != null){
		return elem[POS_NAME];
	}
	return null;
};

theSitetree.getNavigationText = function(id) {
	var elem = this.getById(id);
	if (elem != null){
		return elem[POS_NAVIGATIONTEXT];
	}
	return null;
};

theSitetree.getHREF = function(id) {
	var elem = this.getById(id);
	if (elem != null){
		return elem[POS_HREF];
	}
	return null;
};

theSitetree.getIsNavigation = function(id) {
	var elem = this.getById(id);
	if (elem != null){
		return elem[POS_ISNAVIGATION];
	}
	return null;
};

theSitetree.getTemplateName = function(id, lastTemplateName, ar) {
	if (typeof(lastTemplateName) == 'undefined'){
		lastTemplateName = this.topTemplateName;
	}
	if (typeof(ar) == 'undefined'){
		ar = this;
	}
	for (var i=0; i < ar.length; i++) {
		var actTemplateName = ar[i][POS_TEMPLATENAME];
		if (actTemplateName == ''){
			actTemplateName = lastTemplateName;
		}
		if (ar[i][POS_ID] == id) {
			return actTemplateName;
		}
		if (ar[i][POS_CHILDS].length > 0) {
			var result=this.getTemplateName(id, actTemplateName, ar[i][POS_CHILDS]);
			if (result != null){
				return result;
			}
		}
	}
	return null;
};

theSitetree.getByXx = function(lookup, xx, ar) {
    if (typeof(ar) == 'undefined'){
    	ar = this;
    }
    for (var i=0; i < ar.length; i++) {
        if (ar[i][xx] == lookup){
        	return ar[i];
        }
        if (ar[i][POS_CHILDS].length > 0) {
        	var result=this.getByXx(lookup, xx, ar[i][POS_CHILDS]);
            if (result != null){
                return result;
               }
        }
    }
    return null;
};

function gotoPage(lookup) {
	if(__path_prefix__ == "/servlet/CMServeRES" && typeof (changePage) == 'function'){
		changePage(lookup);
		return;
	}
	var page = theSitetree.getHREF(lookup);
	if (!page) {
		var testFor = [ POS_NAME, POS_NAVIGATIONTEXT ];
		for (var i=0 ; i < testFor.length ; i++) {
			var p = theSitetree.getByXx(lookup, testFor[i]);
			if (p != null) {
				page = p[POS_HREF];
				break;
			}
		}
	}
	document.location.href = (new URL(__path_prefix__ + page, true, true)).toString();
};
