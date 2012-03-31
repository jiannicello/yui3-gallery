YUI.add("gallery-icello-panel",function(b){b.namespace("Icello");var a={};a.CSS_INFO="info";a.CSS_PLAIN="plain";a.CSS_ERROR="error";a.CSS_WARNING="warning";a.createAlignTLBL=function(c){return{node:c,points:[b.WidgetPositionAlign.TL,b.WidgetPositionAlign.BL]};};a.createAlignTLTR=function(c){return{node:c,points:[b.WidgetPositionAlign.TL,b.WidgetPositionAlign.TR]};};a.createBodyContent=function(i,f){var e=b.Lang.sub,g={css:i},h=b.Node.create(e('<div class="yui3-icello-panel-state-{css}"></div>',g)),d=b.Node.create(e('<span class="yui3-icello-panel-icon yui3-icello-panel-icon-{css}"></span>',g)),c=b.Node.create('<span class="yui3-icello-panel-msg"></span>');c.setContent(f);h.appendChild(d);h.appendChild(c);return h;};a.createBodyContentLoading=function(){return b.Node.create('<div class="yui3-icello-panel-loader"></div>');};a.createDefaultCloseButton=function(c){return{value:"Close",classNames:"yui3-icello-panel-icon yui3-button-close",action:function(d){d.preventDefault();this.hide();if(c&&c.action){c.action(d);}},section:b.WidgetStdMod.HEADER};};a.createCloseButton=function(c){return{value:c.value,action:function(d){d.preventDefault();this.hide();if(c&&c.action){c.action(d);}},section:b.WidgetStdMod.FOOTER};};a.createButton=function(c){return{value:c.value,action:c.action||function(d){d.preventDefault();this.hide();},section:c.section||b.WidgetStdMod.FOOTER};};a.render=function(c){var d=new b.Panel({bodyContent:c.bodyContent,buttons:c.buttons||[],centered:(c.centered===undefined)?true:c.centered,constrain:(c.constrain===undefined)?null:c.constrain,headerContent:c.headerContent||null,height:c.height||"",modal:(c.modal===undefined)?true:c.modal,visible:(c.visible===undefined)?true:c.visible,width:c.width||400,zIndex:c.zIndex||0});if(c.align){d.set("align",c.align);}if(c.draggable){d.plug(b.Plugin.Drag);}if(c.resizable){d.plug(b.Plugin.Resize);}d.render();return d;};a.renderError=function(c){var d=a.createBodyContent(a.CSS_ERROR,c.bodyContent);c.bodyContent=d;return a.render(c);};a.renderInfo=function(c){var d=a.createBodyContent(a.CSS_INFO,c.bodyContent);c.bodyContent=d;return a.render(c);};a.renderPlain=function(c){var d=a.createBodyContent(a.CSS_PLAIN,c.bodyContent);c.bodyContent=d;return a.render(c);};a.renderWarning=function(c){var d=a.createBodyContent(a.CSS_WARNING,c.bodyContent);c.bodyContent=d;return a.render(c);};a._loadingPanel=null;a.showLoading=function(){if(a._loadingPanel){a._loadingPanel.show();}else{a._loadingPanel=a.render({buttons:[],headerContent:"Loading, please wait...",bodyContent:a.createBodyContentLoading()});}};a.hideLoading=function(){if(a._loadingPanel){a._loadingPanel.hide();}};b.Icello.Panel=a;},"@VERSION@",{skinnable:true,requires:["panel","dd-plugin","resize-plugin"]});