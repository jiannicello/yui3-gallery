var Panel = null;
var pnPlain = null;

YUI().use('gallery-icello-panel', 'node-event-simulate', function (Y) {
	Y.on('domready', function (e) {
		var btnInfo = Y.one('#btnInfo');
		var btnPlain = Y.one('#btnPlain');
		var btnError = Y.one('#btnError');
		var btnWarning = Y.one('#btnWarning');
		var btnResizeDrag = Y.one('#btnResizeDrag');
		var btnShowLoading = Y.one('#btnShowLoading');
		var btnCustomLoading = Y.one('#btnCustomLoading');


		Panel = Y.Icello.Panel;

		btnInfo.on('click', function (e) {
			var body = 'This is a body info demo box. Just makes it easier to create one without remembering all of the panel properties<br /><br /><p>2nd paragraph here.</p><p>third para</p>';

			var panel = Panel.renderInfo({
				headerContent: 'Info Demo Popup',
				bodyContent: body,
				align: Panel.createAlignTLBL(btnInfo),
				buttons: [
					Panel.createButton({
						value: 'Yes',
						action: function (e) {
							e.preventDefault();
						}
					}),
					Panel.createButton({
						value: 'No'
					}),
					Panel.createDefaultCloseButton()
				]
			});

		});

		btnPlain.on('click', function (e) {
			var body = 'This is a body plain demo box. Just makes it easier to create one without remembering all of the panel properties<br /><br /><p>2nd paragraph here.</p><p>third para</p>';

			pnPlain = Panel.renderPlain({
				headerContent: 'Plain Demo Popup',
				bodyContent: body,
				align: Panel.createAlignTLBL(btnPlain),
				buttons: [
				Panel.createButton({
					value: 'Yes',
					action: function (e) {
						e.preventDefault();
					}
				}),
				Panel.createButton({
					value: 'No'
				}),
				Panel.createDefaultCloseButton()
			]
		  });

		});

		btnError.on('click', function (e) {
			var panel = Panel.renderError({
				headerContent: 'Error Demo Popup',
				bodyContent: 'This is a body error demo box. Just makes it easier to create one without remembering all of the panel properties.',
				align: Panel.createAlignTLBL(btnError),
				zIndex: 1,
				buttons: [
				Panel.createButton({ value: 'OK' }),
				Panel.createDefaultCloseButton()]
			});

		});

		btnWarning.on('click', function (e) {
			var panel = Panel.renderWarning({
				headerContent: 'Warning Demo Popup',
				bodyContent: 'body warning message is here<br /><br /><br /><br />',
				align: Panel.createAlignTLBL(btnWarning),
				buttons: [Panel.createButton({ value: 'Yes' }), Panel.createButton({ value: 'No' }), Panel.createDefaultCloseButton()]
			});
		});

		btnResizeDrag.on('click', function (e) {
			var panel = Panel.render({
				headerContent: 'Resizable/Draggable Window',
				bodyContent: 'my content here',
				resizable: true,
				draggable: true,
				align: Panel.createAlignTLBL(btnResizeDrag),
				height: 200,
				buttons: [Panel.createDefaultCloseButton()]
			});
		});

		btnShowLoading.on('click', function (e) {
			Panel.showLoading();
			setTimeout(function () {
				Panel.hideLoading();
			}, 5000);
		});

		btnCustomLoading.on('click', function (e) {
			var p = Panel.render({
				headerContent: 'Loading Custom Record with panel aligned to button...',
				bodyContent: Panel.createBodyContentLoading(),
				align: Panel.createAlignTLBL(btnCustomLoading)
			});

			setTimeout(function () {
				p.hide();
				p.destroy();
			}, 5000);
		});

	});
});
    