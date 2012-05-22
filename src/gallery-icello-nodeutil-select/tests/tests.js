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
			ddl.append({ text: 'Dodgers', value: 'la', selected: true });

			equal(ddl.size(), 4, 'size() after last append should be 4');
			equal(ddl.sizeSelected(), 1, 'sizeSelected() should remain 1');
			equal(ddl.getValueSelected(), 'la', 'getValueSelected() should now return "la"');

			ddl.destroy();
		});

		module('change event tests');
		test('changing the selected option should fire a "change" event', 5, function () {
			var option = null,
				ddl = new Select({
					srcNode: '#ddl',
					items: [
						{ text: 'One', value: '1' },
						{ text: 'Two', value: '2' },
						{ text: 'Three', value: '3' }
					]
				});

			ddl.on('change', function (e) {
				step(3, 'step 3: confirm "change" event handler was called');
				equal(e.optionSelected.get('value'), '3', '"e.optionSelected.get("value") should equal "3"');

				ddl.destroy();
			});

			step(1, 'step 1: render 3 items with default selected value of first item');
			ddl.render();
			equal(ddl.getValueSelected(), '1', 'getValueSelected() should start of returning "1"');

			step(2, 'step 2: simulate changing to index 2');
			ddl.simulateChange(2);
		});

		module('multiple tests');
		test('"multiple" should be true if "srcNode" has attribute "multiple"', 2, function () {
			var ddlMarkupMultiple = new Select({
				srcNode: '#ddlMarkupMultiple'
			});

			ddlMarkupMultiple.render();

			equal(ddlMarkupMultiple.get('multiple'), true, '"ddlMarkupMultiple" "multiple" should be true');
			equal(ddlMarkupMultiple.sizeSelected(), 2, '"ddlMarkupMultiple.sizeSelected()" should equal true');

			ddlMarkupMultiple.destroy();
		});
		test('two items selected should render two option elements selected', 4, function () {
			var options = null,
				ddl = new Select({
					srcNode: '#ddl',
					multiple: true,
					items: [
						{ text: 'One', value: '1', selected: true },
						{ text: 'Two', value: '2' },
						{ text: 'Three', value: '3', selected: true }
					]
				});

			ddl.render();
			optionsSelected = ddl.getOptionsSelected();

			equal(ddl.sizeSelected(), 2, 'sizeSelected should return 2');
			equal(optionsSelected.size(), 2, 'getOptionsSelected().size() should equal 2');
			equal(optionsSelected.item(0).get('value'), '1', 'first selected item is value "1"');
			equal(optionsSelected.item(1).get('value'), '3', '2nd selected item is value "3"');

			ddl.destroy();
		});
		test('two items selected with "multiple" false, should render 1 option element, the last, selected', 3, function () {
			var options = null,
				ddl = new Select({
					srcNode: '#ddl',
					multiple: false,
					items: [
						{ text: 'One', value: '1', selected: true },
						{ text: 'Two', value: '2' },
						{ text: 'Three', value: '3', selected: true }
					]
				});

			ddl.render();
			optionsSelected = ddl.getOptionsSelected();

			equal(ddl.sizeSelected(), 1, 'sizeSelected should return 1');
			equal(optionsSelected.size(), 1, 'getOptionsSelected().size() should equal 1');
			equal(optionsSelected.item(0).get('value'), '3', 'only selected item is value "1"');

			ddl.destroy();
		});

		module('getOptionByValue tests');
		test('getOptionByValue with number or with empty string should get option object', 2, function () {
			var option = null,
				ddl = new Select({
					srcNode: '#ddl',
					items: [
						{ text: 'Please Select', value: '' },
						{ text: 'One', value: '1' },
						{ text: 'Two', value: '2' },
						{ text: 'Three', value: '3' }
					]
				});

			ddl.render();

			var option = ddl.getOptionByValue(2);
			equal(option.getContent(), 'Two', 'calling getOptionByValue(2) should get option "Two"');

			option = ddl.getOptionByValue('');
			equal(option.getContent(), 'Please Select', "calling getOptionByValue('') should get option 'Please Select'");

			ddl.destroy();
		});

	});
});