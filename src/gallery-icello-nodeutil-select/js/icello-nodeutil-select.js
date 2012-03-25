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
            Y.log('', 'info', 'Select initializer');
            this.on('change', Y.bind(function (e) {
                Y.log('', 'info', 'Select change handler');
                var optionSelected = this.getOptionSelected();
                e.optionSelected = optionSelected;
            }, this));
            
            if(this.get(MULTIPLE)) {
                this.get(CB).set(MULTIPLE, true);
            }
        },
        destructor: function () {
            Y.log('', 'info', 'Select initializer');
        },
        renderUI: function () {
            Y.log('', 'info', 'Select renderUI');
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
            Y.log('', 'info', 'Select bindUI');
        },
        /** 
        * @method append
        * @param {Object} item object literal with this properties: text, value, selected (Boolean)
        */
        append: function (item) {
            Y.log('', 'info', 'Select appendItem');
            var template = '<option value="{value}">{text}</option>',
                html = null,
                option = null,
                cb = this.get(CB);
            
            this._normalizeItem(item);
            
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
        _normalizeItem: function (item) {
            Y.log('', 'info', 'Select _normalizeItem');
            if (item.text && !item.value) {
                item.value = item.text;
            } else if (item.value && !item.text) {
                item.text = item.value;
            } else if (!item.value && !item.text) {
                throw {
                    name: 'TextAndValueNotDefinedSelectException',
                    message: "Icello.NodeUtil.Select append _normalizeItem: at least 'text' or 'value' must be defined in parameter 'item'"
                };
            }
        },
		_unselectCurrentSelected: function () {
			Y.log('', 'info', 'Select _unselectCurrentSelected');
			var option = this.getOptionSelected();
			if(option) {
				option.set(SELECTED, false);
			}
		},
        getOptionSelected: function () {
            Y.log('', 'info', 'Select getOptionSelected');
            var cb = this.get(CB);
            return cb.one(OPTION_CHECKED);
        },
        getOptionsSelected: function () {
            Y.log('', 'info', 'Select getOptionSelected');
            var cb = this.get(CB);
            return cb.all(OPTION_CHECKED);
        },
        getValueSelected: function () {
            Y.log('', 'info', 'Select getValueSelected');
            var cb = this.get(CB);
            var v = cb.one(OPTION_CHECKED);

            if (v) {
                return v.get(VALUE);
            } else {
                return null;
            }
        },
        item: function (index) {
            Y.log('', 'info', 'Select item');
            var cb = this.get(CB),
                options = cb.all(OPTION);
            
            return options.item(index);
        },
        size: function () {
            Y.log('', 'info', 'Select size');
            var cb = this.get(CB);
            return cb.all(OPTION).size();
        },
        sizeSelected: function () {
            Y.log('', 'info', 'Select sizeSelected');
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
				validator: Y.Lang.isBoolean,
				writeOnce: 'initOnly'
			},
            options: {}
        },
        HTML_PARSER: {
            options: [OPTION]
        }
    }
);