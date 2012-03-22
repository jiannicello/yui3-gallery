YUI().use('gallery-icello-nodeutil-select', 'node-event-simulate', function (Y) {
    var Select = Y.Icello.NodeUtil.Select;
    
    Y.on('domready', function (e) {
        Y.log('', 'info', 'domready');
        
        
        module('select tests');
        /*
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
        */
        test('render with 3 "items" should result in 3 option nodes', 5, function () {
            var option = null,
                ddl = new Select({
                    srcNode:'#ddl',
                    items: [
                        {text:'Yankees', value:'yanks'},
                        {text:'Mets', value:'mets', selected:true},
                        {text:'RedSox', value:'redsox'}
                    ]
                });
            
            equal(ddl.sizeSelected(), 0, 'sizeSelected() should return 0 before rendering');
            
            step(1, 'step 1: render and set "option" with "getOptionSelected() call');
            ddl.render();
            option = ddl.getOptionSelected();
            
            equal(ddl.sizeSelected(), 1, 'sizeSelected() should return 1 after rendering');
            equal(option.getContent(), 'Mets', 'option.getContent() should return "Mets"');
            equal(option.get('value'), 'mets', 'option.get("value") should return "mets"');
            
            ddl.destroy();
        });
    });
});