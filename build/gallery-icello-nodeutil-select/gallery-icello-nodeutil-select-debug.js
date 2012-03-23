YUI.add('gallery-icello-nodeutil-select', function(Y) {

﻿var CB = 'contentBox',
    ITEMS = 'items',
    NAME = 'icello-nodeutil-select',
    OPTION = 'option',
    OPTION_CHECKED = 'option:checked',
    OPTIONS = 'options',
    SELECT = 'select',
    SELECTED = 'selected',
    SRC_NODE = 'srcNode',
    STRING = 'string',
    TAG_NAME = 'tagName',
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
                option.set(SELECTED, true);
            }
            cb.append(option);
        },
        getOptionSelected: function () {
            Y.log('', 'info', 'Select getOptionSelected');
            var cb = this.get(CB);
            return cb.one(OPTION_CHECKED);
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
            options: {}
        },
        HTML_PARSER: {
            options: [OPTION]
        }
    }
);



}, '@VERSION@' ,{requires:['base-build', 'widget'], skinnable:false});
