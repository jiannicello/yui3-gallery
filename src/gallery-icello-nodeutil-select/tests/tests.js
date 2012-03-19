YUI().use('gallery-icello-nodeutil-select', 'gallery-icello-qunit-step', 'node-event-simulate', function (Y) {
    var Select = Y.Icello.NodeUtil.Select;
    
    Y.on('domready', function (e) {
        Y.log('', 'info', 'domready');
        var ddl = Y.one('#ddl');
        
        module('select tests');
        test('getSelectedValue should return "mets"', 1, function () {
            var selectedValue = 'mets';
            Select.append(ddl, 'Please Select', selectedValue);
            Select.append(ddl, 'Mets', 'mets', selectedValue);
            Select.append(ddl, 'Yanks', 'yanks', selectedValue);

            equal(Select.getSelectedValue(ddl), selectedValue, '"getSelectedValue()" should return "mets"');

            ddl.empty();
        });
        test('getSelectedOption option.getContent should return "Mets"', 1, function () {
            var selectedValue = 'mets';
            Select.append(ddl, 'Please Select', selectedValue);
            Select.append(ddl, 'Mets', 'mets', selectedValue);
            Select.append(ddl, 'Yanks', 'yanks', selectedValue);

            var option = Select.getSelectedOption(ddl);

            equal(option.getContent(), 'Mets', '"getSelectedOption(ddl).getContent()" should equal "Mets"');

            ddl.empty();
        });
    });
});