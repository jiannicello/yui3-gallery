YUI.add('gallery-icello-nodeutil-select', function(Y) {

/**
* helper Widget that makes working with Node wrapped 'select' element easier
* @module icello-nodeutil-select
*/
var CB = 'contentBox',
    ITEMS = 'items',
    NAME = 'icello-nodeutil-select';
    OPTION = 'option',
    OPTION_CHECKED = 'option:checked',
    SELECTED = 'selected',
    SRC_NODE = 'srcNode',
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
    Y.Base,
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
        render: function () {
            Y.log('', 'info', 'Select render');
            var that = this;
            Y.Array.each(this.get(ITEMS), function (item) {
                that.append(item);
            });
        },
        /** 
        * @method append
        * @param {Object} item object literal with this properties: text, value, selected (Boolean)
        */
        append: function(item) {
            Y.log('', 'info', 'Select append');
            var template = '<option value="{value}">{text}</option>',
                html = null,
                option = null,
                srcNode = this.get(SRC_NODE);
            
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
            
            srcNode.append(option);
        },
        getOptionSelected: function() {
            Y.log('', 'info', 'Select getOptionSelected');
            var srcNode = this.get(SRC_NODE);
            return srcNode.one(OPTION_CHECKED);
        },
        size: function () {
            Y.log('', 'info', 'Select size');
            var srcNode = this.get(SRC_NODE);
            return srcNode.all(OPTION).size();
        },
        sizeSelected: function () {
            Y.log('', 'info', 'Select sizeSelected');
            var srcNode = this.get(SRC_NODE);
            return srcNode.all(OPTION_CHECKED).size();
        }
    },
    {
        ATTRS: {
            items: {
                value: []
            },
            srcNode: {
                setter: function (nodeOrId) {
                    Y.log(typeof nodeOrId, 'info', 'Select srcNode setter');
                    if (typeof nodeOrId === 'string') {
                        return Y.one(nodeOrId);
                    } else {
                        return nodeOrId;
                    }
                }
            }
        }
    }
);

/*
var Select = {};

Select.append = function (ddl, txt, val, selectedVal) {
    Y.log('', 'info', 'icello SelectUtil append');
    var option_str = Y.Lang.sub('<option value="{val}">{txt}</option>', { val: val, txt: txt }),
        option = Y.Node.create(option_str);

    if (selectedVal === val) {
        option.set('selected', true);
    }

    ddl.append(option);
};
Select.getSelectedOption = function (ddl) {
    return ddl.one('option:checked');
};
Select.getSelectedValue = function (ddl) {
    var v = ddl.one('option:checked');

    if (v) {
        return v.get('value');
    } else {
        return null;
    }
};
*/



}, '@VERSION@' ,{skinnable:false, requires:['base-build', 'node']});
