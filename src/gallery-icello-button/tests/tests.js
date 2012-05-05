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
            },
            hasClassCB = function (btn, cssName) {
                var cb = btn.get('contentBox');
                return cb.hasClass(cssName);
            };
        
        module('render tests');
        test('change "icon" property and calling "syncUI" should change dom icon', 6, function () {
            var btn = new Button({ icon: Button.ICONS.PLUS });
            btn.render('#mybox');

            step(1, 'step 1: change icon from "PLUS" to "MINUS"');
            btn.set('icon', Button.ICONS.MINUS);

            step(2, 'step 2: confirm that icon in dom is still "PLUS"');
            ok(hasClassIcon(btn, Button.ICONS.PLUS), 'before "syncUI" icon should be "PLUS"');

            step(3, 'step 3: call "syncUI"');
            btn.syncUI();

            step(4, 'step 4: confirm that icon in dom is now "MINUS"');
            ok(hasClassIcon(btn, Button.ICONS.MINUS), 'after "syncUI" icon should be "MINUS"');


            btn.destroy();
        });
		test('constructor only "label" should set "title" to ""', 1, function () {
			var btn = new Button({label: 'my label with no title'});
			btn.render('#mybox');
			
			equal(btn.get('title'), null, 'when no title is explicitly set, it should be null'); 
			
			btn.destroy();
		});
		test('constructor "title" and "label" differently should set them differently', 2, function () {
			var btn = new Button({label: 'my label', title: 'my title'});
			btn.render('#mybox');
			
			equal(btn.get('title'), 'my title', 'title should be "my title"'); 
			equal(btn.get('label'), 'my label', 'label should be "my label"'); 
			
			btn.destroy();
		});
        test('no icon and text should throw an exception', 3, function () {
            var btn = new Button({});

            try {
                step(1, 'step 1: call render with no "icon" nor "label" set');
                btn.render('#mybox');
            }
            catch (e) {
                step(2, 'step 2: catch exception and confirm "IconOrLabelNotDefinedButtonException"');
                equal(e.name, 'IconAndLabelNotDefinedButtonException', '"e.name" should equal "IconOrLabelNotDefinedButtonException"');

                btn.destroy();
            }

        });
        test('no icon and label with only spaces should throw an exception', 3, function () {
            var btn = new Button({ label: '  ' });

            try {
                step(1, 'step 1: call render with no "icon" and "label" with only spaces');
                btn.render('#mybox');
            }
            catch (e) {
                step(2, 'step 2: catch exception and confirm "IconOrLabelNotDefinedButtonException"');
                equal(e.name, 'IconAndLabelNotDefinedButtonException', '"e.name" should equal "IconOrLabelNotDefinedButtonException"');

                btn.destroy();
            }
        });
        test('"click" event should only fire when button is enabled - with "disabled" property', 4, function () {
            var btn = new Button({ label: 'Test Disabled Change', disabled: true });
            btn.on('click', function (e) {
                step(4, 'step 4: custom click handler that should only be called if button is enabled');
                btn.destroy();
            });
            btn.render('#mybox');

            step(1, 'step 1: simulate clicking button while it is disabled');
            btn.get('contentBox').simulate('click');

            step(2, 'step 2: set "disabled" to false');
            btn.set('disabled', false);

            step(3, 'step 3: simulate clicking button while it is enabled');
            btn.get('contentBox').simulate('click');

        });
         test('"click" event should only fire when button is enabled - with methods "disable()" and "enable()"', 5, function () {
            var btn = new Button({ label: 'Disable() and Enable() calls' });
            btn.on('click', function () {
                step(5, 'step 5: custom click handler that should only be called if button is enabled');
                btn.destroy();
            });
            btn.render('#mybox');

            step(1, 'step 1: call "disable()"');
            btn.disable();

            step(2, 'step 2: simulate clicking button while it is disabled');
            btn.get('contentBox').simulate('click');

            step(3, 'step 3: call "enable()"');
            btn.enable();

            step(4, 'step 4: simulate clicking button while it is enabled');
            btn.get('contentBox').simulate('click');

        });
        test('icon property only set should have icon only in DOM', 3, function () {
            var btn = new Button({ icon: Button.ICONS.ALERT });

            step(1, 'step 1: render with icon only');
            btn.render('#mybox');

            step(2, 'step 2: confirm that "CSS.VIEW_TYPES.ICON_ONLY" css class is in contentBox');
            ok(hasClassCB(btn, CSS.VIEW_TYPES.ICON_ONLY), '"CSS.VIEW_TYPES.ICON_ONLY" should be in btn contentBox');

            btn.destroy();
        });
        test('label property only set should have label only in DOM', 3, function () {
            var btn = new Button({ label: 'Label Only' });

            step(1, 'step 1: render with label only');
            btn.render('#mybox');

            step(2, 'step 2: confirm that "CSS.VIEW_TYPES.LABEL_ONLY" css class is in contentBox');
            ok(hasClassCB(btn, CSS.VIEW_TYPES.LABEL_ONLY), '"CSS.VIEW_TYPES.LABEL_ONLY" should be in btn contentBox');

            btn.destroy();
        });
        test('icon with label set should have icon with label in DOM', 3, function () {
            var btn = new Button({icon: Button.ICONS.ALERT, label: 'icon with label' });

            step(1, 'step 1: render with icon and label');
            btn.render('#mybox');

            step(2, 'step 2: confirm that "CSS.VIEW_TYPES.ICON_WITH_LABEL" css class is in contentBox');
            ok(hasClassCB(btn, CSS.VIEW_TYPES.ICON_WITH_LABEL), '"CSS.VIEW_TYPES.ICON_WITH_LABEL" should be in btn contentBox');

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