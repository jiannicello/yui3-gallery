var btn = null,
	output = null,
	Button = null,
	btnSave = null;

YUI().use('gallery-icello-button', 'node-event-simulate', function (Y) {
	Button = Y.Icello.Button;

	Y.on('domready', function (e) {
		btn = new Button({srcNode:'#btn'});
		btn.on('click', function () {
			Y.log('', 'info', 'btn click handler')
		});

		btn.render();
		
		output = Y.one('#output');
		
		btnSave = Button.renderNode('#btnSave');
		btnSave.on('click', function (e) {
			e.preventDefault();
			console.log('btnSave click handler');
		});
	});
});