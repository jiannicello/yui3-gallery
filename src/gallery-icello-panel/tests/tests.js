YUI().use('gallery-icello-panel', 'node-event-simulate', function (Y) {
	Y.on('domready', function (e) {
		var Panel = Y.Icello.Panel;

		module('render tests', {
			destroy: function (p) {
				p.hide();
				p.destroy();
			}
		});
		test('default properties when empty config is passed in', 12, function () {
			var p = Panel.render({}),
				buttons = p.get('buttons');

			equal(p.get('width'), 400, "'width' should default to 400");
			equal(p.get('height'), '', "'height' should default to empty string");
			equal(p.get('centered'), true, "'centered' should default to true");
			equal(p.get('visible'), true, "'visible' should default to true");
			equal(p.get('modal'), true, "'modal' should default to true");

			equal(p.get('zIndex'), 0, "'zIndex' should default to 0");

			equal(buttons.header, undefined, "'buttons.header' should be undefined");
			equal(buttons.footer, undefined, "'buttons.footer' should be undefined");

			var points = p.get('align').points[0] + p.get('align').points[1];
			equal(points, 'cccc', "'align.points' should default to 'cccc'");

			ok(p.dd === undefined, "'p.dd' should default to undefined");
			ok(p.resize === undefined, "'p.resize' should default to undefined");
			ok(p.get('constrain') === null, "'constrain' should default to null");

			this.destroy(p);
		});
		test('simulate clicking yes in yes/no warning', 3, function () {
			var that = this;

			step(1, 'step 1: call "render"');
			var p = Panel.render({
				headerContent: 'Warning Panel',
				bodyContent: Panel.createBodyContent(Panel.CSS_WARNING, 'Are you sure you want to delete this record?'),
				buttons: [
					Panel.createButton({
						value: 'Yes',
						action: function (e) {
							step(3, 'step 3: should reach "Yes" callback that will prevent default, hide panel and destroy it');
							e.preventDefault();
							this.hide();

							that.destroy(this);
						}
					}),
					Panel.createButton({ value: 'No' })
				]
			});
			step(2, 'step 2: simulate clicking "Yes" button');
			p.getButton(0).simulate('click');
		});
		test('simulate clicking no in yes/no warning', 3, function () {
			var that = this;

			step(1, 'step 1: call "render"');
			var p = Panel.render({
				headerContent: 'Warning Panel',
				bodyContent: Panel.createBodyContent(Panel.CSS_WARNING, 'Are you sure you want to delete this record?'),
				buttons: [
					Panel.createButton({
						value: 'Yes'
					}),
					Panel.createButton({
						value: 'No',
						action: function (e) {
							step(3, 'step 3: should reach "No" callback that will prevent default, hide panel and destroy it');
							e.preventDefault();
							this.hide();

							that.destroy(this);
						}
					})
				]
			});
			step(2, 'step 2: simulate clicking "No" button');
			p.getButton(1).simulate('click');
		});
		test('button action within class context', 4, function () {
			var FakeEnt = function (test) {
				this.test = test;
				this.name = "Babe Ruth";
			};
			FakeEnt.prototype = {
				run: function () {
					var p = Panel.renderInfo({
						headerContent: 'Info Panel',
						bodyContent: 'testing context in button action method',
						buttons: [
							Panel.createButton({
								value: 'Click Me',
								action: Y.bind(function (e) {
									e.preventDefault();
									p.hide();

									step(3, 'step 3: assert "name" instance variable in FakeEnt');
									equal(this.name, 'Babe Ruth', '"name" should equal Babe Ruth');

									this.test.destroy(p);
								}, this)
							})
						]
					});

					step(2, 'step 2: within FakeEnt simulate clicking button');
					p.getButton(0).simulate('click');
				}
			};

			step(1, 'step 1: call "fake.run()"');
			var fake = new FakeEnt(this);
			fake.run();


		});
		test('align TLBL', 1, function () {
			var anchor = Y.one('#btnAnchor');
			var p = Panel.renderInfo({
				headerContent: 'Info Panel',
				bodyContent: 'testing alignment',
				constrain: true,
				align: Panel.createAlignTLBL(anchor)
			});

			var points = p.get('align').points[0] + p.get('align').points[1];
			equal(points, 'tlbl', "'align.points' should be 'tlbl'");

			this.destroy(p);
		});
		test('align TLTR', 1, function () {
			var anchor = Y.one('#btnAnchor');
			var p = Panel.renderInfo({
				headerContent: 'Info Panel',
				bodyContent: 'testing alignment',
				constrain: true,
				align: Panel.createAlignTLTR(anchor)
			});

			var points = p.get('align').points[0] + p.get('align').points[1];
			equal(points, 'tltr', "'align.points' should be 'tltr'");

			this.destroy(p);
		});
		test('call "createCloseButton" with custom callback function', 4, function () {
			step(1, 'step 1: call render with "createCloseButton" button with custom callback function');
			var that = this;

			var p = Panel.render({
				headerContent: 'Close Button Callback Test', bodyContent: 'Body here...',
				buttons: [
					Panel.createCloseButton({
						value: 'Close Now',
						action: function (e) {
							step(3, 'confirm that callback "action" is called and that panel is already closed');
							equal(p.get('visible'), false, 'panel should not be visible');
							that.destroy(p);
						}
					})
				]
			});

			step(2, 'step 2: simulate clicking button');
			p.getButton(0).simulate('click');
		});
		test('call "createDefaultCloseButton" with custom callback function', 4, function () {
			var that = this;

			step(1, 'step 1: call render with "createDefaultCloseButton" button with custom callback function');
			var p = Panel.render({
				headerContent: 'Close Button Callback Test', bodyContent: 'Body here...',
				buttons: [
					Panel.createDefaultCloseButton({
						action: function (e) {
							step(3, 'confirm that callback "action" is called and that panel is already closed');
							equal(p.get('visible'), false, 'panel should not be visible');
							that.destroy(p);
						}
					})
				]
			});

			step(2, 'step 2: simulate clicking button');
			p.getButton(0, 'header').simulate('click');
		});

	});
});