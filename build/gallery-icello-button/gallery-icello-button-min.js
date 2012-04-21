YUI.add("gallery-icello-button",function(b){var h="icello-button",i="contentBox",e={ICON_ONLY:"yui3-icello-button-icononly",LABEL_ONLY:"yui3-icello-button-labelonly",ICON_WITH_LABEL:"yui3-icello-button-iconwithlabel"},f=null,j={ICON_ONLY:1,LABEL_ONLY:2,ICON_WITH_LABEL:3},g=b.Node,a=b.Lang.sub,c=b.ClassNameManager.getClassName,d=function(k){return c(h,"icon",k);};f={ALERT:d("alert"),ARROWREFRESH_1_E:d("arrowrefresh-1-e"),ARROWREFRESH_1_N:d("arrowrefresh-1-n"),ARROWREFRESH_1_S:d("arrowrefresh-1-s"),ARROWREFRESH_1_W:d("arrowrefresh-1-w"),ARROWRETURNTHICK_1_E:d("arrowreturnthick-1-e"),ARROWRETURNTHICK_1_N:d("arrowreturnthick-1-n"),ARROWRETURNTHICK_1_S:d("arrowreturnthick-1-s"),ARROWRETURNTHICK_1_W:d("arrowreturnthick-1-w"),ARROWRETURN_1_E:d("arrowreturn-1-e"),ARROWRETURN_1_N:d("arrowreturn-1-n"),ARROWRETURN_1_S:d("arrowreturn-1-s"),ARROWRETURN_1_W:d("arrowreturn-1-w"),ARROWSTOP_1_E:d("arrowstop-1-e"),ARROWSTOP_1_N:d("arrowstop-1-n"),ARROWSTOP_1_S:d("arrowstop-1-s"),ARROWSTOP_1_W:d("arrowstop-1-w"),ARROWTHICKSTOP_1_E:d("arrowthickstop-1-e"),ARROWTHICKSTOP_1_N:d("arrowthickstop-1-n"),ARROWTHICKSTOP_1_S:d("arrowthickstop-1-s"),ARROWTHICKSTOP_1_W:d("arrowthickstop-1-w"),ARROWTHICK_1_E:d("arrowthick-1-e"),ARROWTHICK_1_N:d("arrowthick-1-n"),ARROWTHICK_1_NE:d("arrowthick-1-ne"),ARROWTHICK_1_NW:d("arrowthick-1-nw"),ARROWTHICK_1_S:d("arrowthick-1-s"),ARROWTHICK_1_SE:d("arrowthick-1-se"),ARROWTHICK_1_SW:d("arrowthick-1-sw"),ARROWTHICK_1_W:d("arrowthick-1-w"),ARROWTHICK_2_E_W:d("arrowthick-2-e-w"),ARROWTHICK_2_NE_SW:d("arrowthick-2-ne-sw"),ARROWTHICK_2_N_S:d("arrowthick-2-n-s"),ARROWTHICK_2_SE_NW:d("arrowthick-2-se-nw"),ARROW_1_E:d("arrow-1-e"),ARROW_1_N:d("arrow-1-n"),ARROW_1_NE:d("arrow-1-ne"),ARROW_1_NW:d("arrow-1-nw"),ARROW_1_S:d("arrow-1-s"),ARROW_1_SE:d("arrow-1-se"),ARROW_1_SW:d("arrow-1-sw"),ARROW_1_W:d("arrow-1-w"),ARROW_2_E_W:d("arrow-2-e-w"),ARROW_2_NE_SW:d("arrow-2-ne-sw"),ARROW_2_N_S:d("arrow-2-n-s"),ARROW_2_SE_NW:d("arrow-2-se-nw"),ARROW_4:d("arrow-4"),ARROW_4_DIAG:d("arrow-4-diag"),BATTERY_0:d("battery-0"),BATTERY_1:d("battery-1"),BATTERY_2:d("battery-2"),BATTERY_3:d("battery-3"),BOOKMARK:d("bookmark"),BULLET:d("bullet"),CALCULATOR:d("calculator"),CALENDAR:d("calendar"),CANCEL:d("cancel"),CARAT_1_E:d("carat-1-e"),CARAT_1_N:d("carat-1-n"),CARAT_1_NE:d("carat-1-ne"),CARAT_1_NW:d("carat-1-nw"),CARAT_1_S:d("carat-1-s"),CARAT_1_SE:d("carat-1-se"),CARAT_1_SW:d("carat-1-sw"),CARAT_1_W:d("carat-1-w"),CARAT_2_E_W:d("carat-2-e-w"),CARAT_2_N_S:d("carat-2-n-s"),CART:d("cart"),CHECK:d("check"),CIRCLESMALL_CLOSE:d("circlesmall-close"),CIRCLESMALL_MINUS:d("circlesmall-minus"),CIRCLESMALL_PLUS:d("circlesmall-plus"),CIRCLE_ARROW_E:d("circle-arrow-e"),CIRCLE_ARROW_N:d("circle-arrow-n"),CIRCLE_ARROW_S:d("circle-arrow-s"),CIRCLE_ARROW_W:d("circle-arrow-w"),CIRCLE_CHECK:d("circle-check"),CIRCLE_CLOSE:d("circle-close"),CIRCLE_MINUS:d("circle-minus"),CIRCLE_PLUS:d("circle-plus"),CIRCLE_TRIANGLE_E:d("circle-triangle-e"),CIRCLE_TRIANGLE_N:d("circle-triangle-n"),CIRCLE_TRIANGLE_S:d("circle-triangle-s"),CIRCLE_TRIANGLE_W:d("circle-triangle-w"),CIRCLE_ZOOMIN:d("circle-zoomin"),CIRCLE_ZOOMOUT:d("circle-zoomout"),CLIPBOARD:d("clipboard"),CLOCK:d("clock"),CLOSE:d("close"),CLOSETHICK:d("closethick"),COMMENT:d("comment"),CONTACT:d("contact"),COPY:d("copy"),DISK:d("disk"),DOCUMENT:d("document"),DOCUMENT_B:d("document-b"),EJECT:d("eject"),EXTLINK:d("extlink"),FLAG:d("flag"),FOLDER_COLLAPSED:d("folder-collapsed"),FOLDER_OPEN:d("folder-open"),GEAR:d("gear"),GRIPSMALL_DIAGONAL_SE:d("gripsmall-diagonal-se"),GRIP_DIAGONAL_SE:d("grip-diagonal-se"),GRIP_DOTTED_HORIZONTAL:d("grip-dotted-horizontal"),GRIP_DOTTED_VERTICAL:d("grip-dotted-vertical"),GRIP_SOLID_HORIZONTAL:d("grip-solid-horizontal"),GRIP_SOLID_VERTICAL:d("grip-solid-vertical"),HEART:d("heart"),HELP:d("help"),HOME:d("home"),IMAGE:d("image"),INFO:d("info"),KEY:d("key"),LIGHTBULB:d("lightbulb"),LINK:d("link"),LOCKED:d("locked"),MAIL_CLOSED:d("mail-closed"),MAIL_OPEN:d("mail-open"),MINUS:d("minus"),MINUSTHICK:d("minusthick"),NEWWIN:d("newwin"),NOTE:d("note"),NOTICE:d("notice"),PAUSE:d("pause"),PENCIL:d("pencil"),PERSON:d("person"),PIN_S:d("pin-s"),PIN_W:d("pin-w"),PLAY:d("play"),PLUS:d("plus"),PLUSTHICK:d("plusthick"),POWER:d("power"),PRINT:d("print"),RADIO_OFF:d("radio-off"),RADIO_ON:d("radio-on"),REFRESH:d("refresh"),SCISSORS:d("scissors"),SCRIPT:d("script"),SEARCH:d("search"),SEEK_END:d("seek-end"),SEEK_FIRST:d("seek-first"),SEEK_NEXT:d("seek-next"),SEEK_PREV:d("seek-prev"),SEEK_START:d("seek-start"),SHUFFLE:d("shuffle"),SIGNAL:d("signal"),SIGNAL_DIAG:d("signal-diag"),SQUARESMALL_CLOSE:d("squaresmall-close"),SQUARESMALL_MINUS:d("squaresmall-minus"),SQUARESMALL_PLUS:d("squaresmall-plus"),STAR:d("star"),STOP:d("stop"),SUITCASE:d("suitcase"),TAG:d("tag"),TRANSFERTHICK_E_W:d("transferthick-e-w"),TRANSFER_E_W:d("transfer-e-w"),TRASH:d("trash"),TRIANGLE_1_E:d("triangle-1-e"),TRIANGLE_1_N:d("triangle-1-n"),TRIANGLE_1_NE:d("triangle-1-ne"),TRIANGLE_1_NW:d("triangle-1-nw"),TRIANGLE_1_S:d("triangle-1-s"),TRIANGLE_1_SE:d("triangle-1-se"),TRIANGLE_1_SW:d("triangle-1-sw"),TRIANGLE_1_W:d("triangle-1-w"),TRIANGLE_2_E_W:d("triangle-2-e-w"),TRIANGLE_2_N_S:d("triangle-2-n-s"),UNLOCKED:d("unlocked"),VIDEO:d("video"),VOLUME_OFF:d("volume-off"),VOLUME_ON:d("volume-on"),WRENCH:d("wrench"),ZOOMIN:d("zoomin"),ZOOMOUT:d("zoomout")};b.namespace("Icello");b.Icello.Button=b.Base.create("icello-button",b.Widget,[],{BOUNDING_TEMPLATE:"<button></button>",CONTENT_TEMPLATE:null,initializer:function(k){this.viewType=null;this.handlers=[];this.setOnButtonClickPreventDefault();this.set("disabled",k.disabled);if(this.get("disabled")){this.disableButton();}},destructor:function(){b.Array.each(this.handlers,function(k){k.detach();});},disable:function(){this.disableButton();b.Icello.Button.superclass.disable.call(this);},enable:function(){this.enableButton();b.Icello.Button.superclass.enable.call(this);},bindUI:function(){this.after("disabledChange",this.afterDisabledChange);},syncUI:function(){var k=this.get(i);
this.setViewType();k.removeClass(e.ICON_ONLY);k.removeClass(e.LABEL_ONLY);k.removeClass(e.ICON_WITH_LABEL);if(this.viewType===j.ICON_ONLY){k.addClass(e.ICON_ONLY);}else{if(this.viewType===j.LABEL_ONLY){k.addClass(e.LABEL_ONLY);}else{if(this.viewType===j.ICON_WITH_LABEL){k.addClass(e.ICON_WITH_LABEL);}}}k.empty();this.setUiTitle(this.get("title"));this.renderIcon();this.renderLabel();},afterDisabledChange:function(l){var k=l.newVal;if(k){this.disable();}else{this.enable();}},disableButton:function(){var k=this.get(i);k.set("disabled",true);},enableButton:function(){var k=this.get(i);k.set("disabled",false);},renderIcon:function(){var k=this.get("icon"),n=null,m=null,l=null;if(k){n={cssIcon:k};l='<span class="yui3-icello-button-icon {cssIcon}"></span>';m=g.create(a(l,n));this.get(i).appendChild(m);}},renderLabel:function(){var n=null,k=null,m=null,l='<span class="{css}">{label}</span>';k=(this.viewType===j.ICON_ONLY)?"&nbsp;":this.get("label");n={css:c(h,"label"),label:k};m=g.create(a(l,n));this.get(i).appendChild(m);},setOnButtonClickPreventDefault:function(){var k=this.get(i);this.handlers.push(k.on("click",function(l){l.preventDefault();}));},setUiTitle:function(l){var k=this.get(i);k.set("title",l);},setViewType:function(){var k=this.get("icon"),m=this.get("label"),l=m&&m.replace(/ /g,"")!=="";if(k&&l){this.viewType=j.ICON_WITH_LABEL;}else{if(k&&!l){this.viewType=j.ICON_ONLY;}else{if(!k&&l){this.viewType=j.LABEL_ONLY;}else{throw {name:"IconAndLabelNotDefinedButtonException",message:"Icello.Button setViewType: either 'icon' or 'label' must be defined"};}}}}},{ATTRS:{icon:{validator:b.Lang.isString},label:{validator:b.Lang.isString,value:null},disabled:{validator:b.Lang.isBoolean,value:false},title:{validator:b.Lang.isString,value:null,setter:function(k){}}},CSS_NAMES:e,ICONS:f,HTML_PARSER:{disabled:function(k){if(k){return k.get("disabled");}return false;},label:function(k){if(k){return k.getContent();}},title:function(l){var k=null;if(l&&l.hasAttribute("title")){k=l.getAttribute("title");}else{k=null;}return k;}},VIEW_TYPES:j});},"@VERSION@",{requires:["base-build","widget"],skinnable:true});