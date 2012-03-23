YUI().use('gallery-icello-nodeutil-select', 'node-event-simulate', function (Y) {
    var Select = Y.Icello.NodeUtil.Select;

    Y.on('domready', function (e) {
        Y.log('', 'info', 'domready');


        module('constructor render tests');
        test('render with 3 "items" onto existing select element should result in 3 option nodes', 7, function () {
            var option = null,
                ddl = new Select({
                    srcNode: '#ddl',
                    items: [
                        { text: 'Yankees', value: 'yanks' },
                        { text: 'Mets', value: 'mets', selected: true },
                        { text: 'RedSox', value: 'redsox' }
                    ]
                });

            equal(ddl.size(), 0, 'size() should be 0 before rendering');
            equal(ddl.sizeSelected(), 0, 'sizeSelected() should return 0 before rendering');

            step(1, 'step 1: render and set "option" with "getOptionSelected() call');
            ddl.render();
            option = ddl.getOptionSelected();

            equal(ddl.size(), 3, 'size() should be 3 after rendering');
            equal(ddl.sizeSelected(), 1, 'sizeSelected() should return 1 after rendering');
            equal(option.getContent(), 'Mets', 'option.getContent() should return "Mets"');
            equal(option.get('value'), 'mets', 'option.get("value") should return "mets"');


            ddl.destroy();
        });
        test('render progressive mark up with 3 option items should result in size of three', 7, function () {
            var option = null,
                ddl = new Select({ srcNode: '#ddlMarkup' });

            equal(ddl.size(), 0, 'size() should be 0 before rendering');
            equal(ddl.sizeSelected(), 0, 'sizeSelected() should return 0 before rendering');

            step(1, 'step 1: render and set "option" with "getOptionSelected() call');
            ddl.render();
            option = ddl.getOptionSelected();

            equal(ddl.size(), 3, 'size() should be 3 after rendering');
            equal(ddl.sizeSelected(), 1, 'sizeSelected() should return 1 after rendering');
            equal(option.getContent(), 'Two', 'option.getContent() should return "Two"');
            equal(option.get('value'), '2', 'option.get("value") should return "two"');
            
            ddl.destroy();
        });
        test('rendering into div 3 items should result in size 3', 7, function () {
            var output = null,
                ddl = new Select({
                items: [
                    { text: 'Yankees', value: 'yanks' },
                    { text: 'Mets', value: 'mets', selected: true },
                    { text: 'RedSox', value: 'redsox' }
                ]
            });
            
            equal(ddl.size(), 0, 'size() should be 0 before rendering');
            equal(ddl.sizeSelected(), 0, 'sizeSelected() should return 0 before rendering');
            
            step(1, 'step 1L render into "#option" div and call "getOptionSelected()"');
            ddl.render('#output');
            option = ddl.getOptionSelected();
            
            equal(ddl.size(), 3, 'size() should be 3 after rendering');
            equal(ddl.sizeSelected(), 1, 'sizeSelected() should return 1 after rendering');
            equal(option.getContent(), 'Mets', 'option.getContent() should return "Mets"');
            equal(option.get('value'), 'mets', 'option.get("value") should return "mets"');
            
            ddl.destroy();
        });
        module('append tests');
        test('appending before and after render should affect node option count', 7, function () {
            var ddl = new Select({
                srcNode: '#ddl'
            });
            
            step(1, 'step 1: append 3 items before rendering');
            ddl.append({ text: 'Yankees', value: 'yanks' });
            ddl.append({ text: 'Mets', value: 'mets', selected: true });
            ddl.append({ text: 'RedSox', value: 'redsox' });
            
            ddl.render();
            
            equal(ddl.size(), 3, 'size() after render should be 3');
            equal(ddl.getValueSelected(), 'mets', 'getValueSelected() should equal "mets"');
            
            step(2, 'step 2: append 1 item after rendering');
            ddl.append({text:'Dodgers', value:'la', selected:true});
            
            equal(ddl.size(), 4, 'size() after last append should be 4');
            equal(ddl.sizeSelected(), 1, 'sizeSelected() should remain 1');
            equal(ddl.getValueSelected(), 'la', 'getValueSelected() should now return "la"');
        });
        
    });
});