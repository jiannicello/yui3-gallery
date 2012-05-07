YUI.add("gallery-icello-nodeutil-select",function(d){var p="contentBox",h="change",f="items",q="icello-nodeutil-select",e="multiple",i="option",c="option:checked",g="options",n="select",l="selected",b="srcNode",j="string",o="tagName",k="value",m=d.Node,a=d.Lang.sub;d.namespace("Icello.NodeUtil");d.Icello.NodeUtil.Select=d.Base.create(q,d.Widget,[],{BOUNDING_TEMPLATE:"<select></select>",CONTENT_TEMPLATE:null,initializer:function(){this.on("change",d.bind(function(r){var s=this.getOptionSelected();r.optionSelected=s;},this));if(this.get(e)){this.get(p).set(e,true);}},destructor:function(){},renderUI:function(){var u=this,r=this.get(p),t=this.get(g),s=this.get(f);if(t){t.each(function(v){r.appendChild(v);});}d.Array.each(s,function(v){u.append(v);});},bindUI:function(){},append:function(v){var u='<option value="{value}">{text}</option>',s=null,t=null,r=this.get(p);this._normalizeItem(v);s=a(u,v);t=m.create(s);if(v.selected){if(!this.get(e)){this._unselectCurrentSelected();}t.set(l,true);}r.append(t);},_normalizeItem:function(r){if(r.text&&!r.value){r.value=r.text;}else{if(r.value&&!r.text){r.text=r.value;}else{if(!r.value&&!r.text){throw {name:"TextAndValueNotDefinedSelectException",message:"Icello.NodeUtil.Select append _normalizeItem: at least 'text' or 'value' must be defined in parameter 'item'"};}}}},_unselectCurrentSelected:function(){var r=this.getOptionSelected();if(r){r.set(l,false);}},getOptionSelected:function(){var r=this.get(p);return r.one(c);},getOptionsSelected:function(){var r=this.get(p);return r.all(c);},getValueSelected:function(){var r=this.get(p);var s=r.one(c);if(s){return s.get(k);}else{return null;}},item:function(t){var r=this.get(p),s=r.all(i);return s.item(t);},simulateChange:function(s){var t=this.item(s),r=this.get(p);if(!this.get(e)){this._unselectCurrentSelected();}t.set(l,true);r.simulate(h);},size:function(){var r=this.get(p);return r.all(i).size();},sizeSelected:function(){var r=this.get(p);return r.all(c).size();}},{ATTRS:{items:{value:[],validator:d.Lang.isArray},multiple:{value:false,validator:d.Lang.isBoolean,writeOnce:"initOnly"},options:{}},HTML_PARSER:{options:[i]}});},"@VERSION@",{requires:["base-build","widget","selector-css3"],skinnable:false});