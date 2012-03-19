YUI.add('gallery-icello-nodeutil-select', function(Y) {

Y.namespace('Icello.NodeUtil');

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

Y.Icello.NodeUtil.Select = Select;


}, '@VERSION@' ,{skinnable:false, requires:['node', 'selector-css3']});
