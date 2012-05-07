YUI().use('gallery-icello-button', 'node-event-simulate', function (Y) {
    Y.on('domready', function (e) {
        Y.log('', 'info', 'domready');
        
        var CSS = {
                DISABLED: 'yui3-icello-button-disabled',
				VIEW_TYPES: {
					ICON_ONLY: 'yui3-icello-button-icononly',
					LABEL_ONLY: 'yui3-icello-button-labelonly',
					ICON_WITH_LABEL: 'yui3-icello-button-iconwithlabel'
				}
            },
			Button = Y.Icello.Button,
            hasClassIcon = function (btn, cssName) {
                var cb = btn.get('contentBox');
                var spanL = cb.all('span');
                var item = spanL.item(0);
                return item.hasClass(cssName);
            };
        
        module('getNode tests');
        test('no icon and text should throw an exception', 3, function () {
            var btn = null;

            try {
                step(1, 'step 1: call "getNode" with no "icon" nor "label" set');
                btn = Button.getNode({});
            }
            catch (e) {
                step(2, 'step 2: catch exception and confirm "IconOrLabelNotDefinedButtonException"');
                equal(e.name, 'IconAndLabelNotDefinedButtonException', '"e.name" should equal "IconOrLabelNotDefinedButtonException"');
            }

        });
        test('no icon and label with only spaces should throw an exception', 3, function () {
            var btn = null;

            try {
                step(1, 'step 1: call "getNode" with no "icon" and "label" with only spaces');
                btn = Button.getNode({ label: '  ' });
            }
            catch (e) {
                step(2, 'step 2: catch exception and confirm "IconOrLabelNotDefinedButtonException"');
                equal(e.name, 'IconAndLabelNotDefinedButtonException', '"e.name" should equal "IconOrLabelNotDefinedButtonException"');
            }
        });
        test('"click" event should only fire when button is enabled', 4, function () {
            var btn = Button.getNode({ label: 'Test Disabled Change', disabled: true });
            btn.on('click', function (e) {
                e.preventDefault();
                step(4, 'step 4: custom click handler that should only be called if button is enabled');
                btn.destroy();
            });
            
            step(1, 'step 1: simulate clicking button while it is disabled');
            btn.simulate('click');

            step(2, 'step 2: call "enable()"');
            btn.enable();

            step(3, 'step 3: simulate clicking button while it is enabled');
            btn.simulate('click');
        });
        test('icon property only set should have icon only in node', 3, function () {
            step(1, 'step 1: get node with icon only');
            var btn = Button.getNode({ icon: Button.ICONS.ALERT });

            step(2, 'step 2: confirm that "icon only"css class is in node');
            ok(btn.hasClass(CSS.VIEW_TYPES.ICON_ONLY), '"CSS.VIEW_TYPES.ICON_ONLY" should be in btn');

            btn.destroy();
        });
        test('label property only set should have label only in node', 3, function () {
            step(1, 'step 1: get node with label only');
            var btn = Button.getNode({ label: 'Label Only' });

            step(2, 'step 2: confirm that "CSS.VIEW_TYPES.LABEL_ONLY" css class is in node');
            ok(btn.hasClass(CSS.VIEW_TYPES.LABEL_ONLY), '"CSS.VIEW_TYPES.LABEL_ONLY" should be in btn');

            btn.destroy();
        });
        test('icon with label set should have icon with label in node', 3, function () {
            step(1, 'step 1: get node with icon and label');
            var btn = Button.getNode({icon: Button.ICONS.ALERT, label: 'icon with label' });

            step(2, 'step 2: confirm that "CSS.VIEW_TYPES.ICON_WITH_LABEL" css class is in node');
            ok(btn.hasClass(CSS.VIEW_TYPES.ICON_WITH_LABEL), '"CSS.VIEW_TYPES.ICON_WITH_LABEL" should be in btn');

            btn.destroy();
        });
		
		module('from html tests');
		test('disabled button in html should be disabled in attribute', 1, function () {
			var btn = new Button({ srcNode: '#btnDisabled' });
			btn.render();

			equal(btn.get('disabled'), true, '"disabled" attribute should be true');

			btn.destroy();
		});
		test('disabled true in html but disabled false in constructor should result in disabled false', 1, function () {
			var btn = new Button({ srcNode: '#btnDisabedHtmlEnabledConfig', disabled: false });
			btn.render();

			equal(btn.get('disabled'), false, '"disabled" attribute should be false');

			btn.destroy();
		});
		test('enabled in html but disabled in config results in disabled', 1, function () {
			var btn = new Button({ srcNode: '#btnEnabledHtmlDisabledConfig', disabled: true });
			btn.render();

			equal(btn.get('disabled'), true, '"disabled" attribute should be true');

			btn.destroy();
		});
		test('button with html title should show up in contentBox', 3, function () {
			var btn = new Button({ srcNode: '#btnWithTitle' });
			btn.render();

			equal(btn.get('contentBox').get('title'), 'My Title', '"contentBox" should equal "My Title"');

			step(1, 'change "title" attribute to "Edit Title" and call syncUI');
			btn.set('title', 'Edit Title');
			btn.syncUI();

			equal(btn.get('contentBox').get('title'), 'Edit Title', '"contentBox" should now equal "Edit Title"');

			btn.destroy();
		});
		
		module('node tests');
		test('"getNodeLabelOnly" calling "enable" "disable" should affect node', 8, function () {
			var node = Button.getNodeLabelOnly({ label: 'Search', title: 'Search Rows' });

			equal(node.get('disabled'), false, '"node" should start off "disabled" "false"');
			ok(!node.hasClass(CSS.DISABLED), '"node" should start off not having css disabled');

			step(1, 'step 1: call "disable()"');
			node.disable();

			equal(node.get('disabled'), true, '"node" should now have "disabled" "true"');
			ok(node.hasClass(CSS.DISABLED), '"node" should now have css disabled');

			step(2, 'step 2: call "enable()"');
			node.enable();

			equal(node.get('disabled'), false, '"node" should now have "disabled" "false"');
			ok(!node.hasClass(CSS.DISABLED), '"node" should now not have css disabled');

			node.destroy();
		});
		test('"getNodeLabelOnly" passing "disabled" "true" should make node disabled', 2, function () {
			var node = Button.getNodeLabelOnly({ label: 'Search', title: 'Search Rows', disabled: true });

			equal(node.get('disabled'), true, '"node" should have "disabled" "true"');
			ok(node.hasClass(CSS.DISABLED), '"node" should have css disabled');

			node.destroy();
		});
    });
});