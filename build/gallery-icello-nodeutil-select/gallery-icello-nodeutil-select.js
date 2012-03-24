YUI.add('gallery-icello-nodeutil-select', function(Y) {

var CB = 'contentBox',
    ITEMS = 'items',
    NAME = 'icello-nodeutil-select',
	MULTIPLE = 'multiple',
    OPTION = 'option',
    OPTION_CHECKED = 'option:checked',
    OPTIONS = 'options',
    SELECT = 'select',
    SELECTED = 'selected',
    SRC_NODE = 'srcNode',
    STRING = 'string',
    TAG_NAME = 'tagName',
    VALUE = 'value',
    Node = Y.Node,
    sub = Y.Lang.sub;
Y.namespace('Icello.NodeUtil');
/**
* @class Select
* @constructor
* @extends Base
*/
Y.Icello.NodeUtil.Select = Y.Base.create(
    NAME,
    Y.Widget,
    [],
    {
        BOUNDING_TEMPLATE: '<select></select>',
        CONTENT_TEMPLATE: null,
        initializer: function () {
            this.on('change', Y.bind(function (e) {
                var optionSelected = this.getOptionSelected();
                e.optionSelected = optionSelected;
            }, this));
        },
        destructor: function () {
        },
        renderUI: function () {
            var that = this,
                cb = this.get(CB),
                options = this.get(OPTIONS),
                items = this.get(ITEMS);

            if (options) {
                options.each(function (option) {
                    cb.appendChild(option);
                });
            }
            Y.Array.each(items, function (item) {
                that.append(item);
            });
        },
        bindUI: function () {
        },
        _defChangeFn: function (e) {
            console.dir(e);
            
        },
        /** 
        * @method append
        * @param {Object} item object literal with this properties: text, value, selected (Boolean)
        */
        append: function (item) {
            var template = '<option value="{value}">{text}</option>',
                html = null,
                option = null,
                cb = this.get(CB);
            if (item.text && !item.value) {
                item.value = item.text;
            } else if (item.value && !item.text) {
                item.text = item.value;
            } else if (!item.value && !item.text) {
                throw {
                    name: 'TextAndValueNotDefinedSelectException',
                    message: "Icello.NodeUtil.Select append: at least 'text' or 'value' must be defined in paramter 'item'"
                };
            }
            html = sub(template, item);
            option = Node.create(html);
            if (item.selected) {
                if(!this.get(MULTIPLE)) {
					this._unselectCurrentSelected();
				}
				
				option.set(SELECTED, true);
            }
            cb.append(option);
        },
		_unselectCurrentSelected: function () {
			var option = this.getOptionSelected();
			if(option) {
				option.set(SELECTED, false);
			}
		},
        getOptionSelected: function () {
            var cb = this.get(CB);
            return cb.one(OPTION_CHECKED);
        },
        getValueSelected: function () {
            var cb = this.get(CB);
            var v = cb.one(OPTION_CHECKED);

            if (v) {
                return v.get(VALUE);
            } else {
                return null;
            }
        },
        item: function (index) {
            var cb = this.get(CB),
                options = cb.all(OPTION);
            
            return options.item(index);
        },
        size: function () {
            var cb = this.get(CB);
            return cb.all(OPTION).size();
        },
        sizeSelected: function () {
            var cb = this.get(CB);
            return cb.all(OPTION_CHECKED).size();
        }
    },
    {
        ATTRS: {
            /** 
            * @attribute items
            * @type Array
            * @default []
            */
            items: {
                value: [],
                validator: Y.Lang.isArray
            },
			multiple: {
				value: false,
				validator: Y.Lang.isBoolean
			},
            options: {}
        },
        HTML_PARSER: {
            options: [OPTION]
        }
    }
);



}, '@VERSION@' ,{requires:['base-build', 'widget'], skinnable:false});
