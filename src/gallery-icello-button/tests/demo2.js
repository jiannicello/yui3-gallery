var btn = null;

YUI().use('gallery-icello-button', 'node-event-simulate', function (Y) {
	var Button = Y.Icello.Button;

	Y.on('domready', function (e) {
		btn = new Button({srcNode:'#btn'});
		btn.on('click', function () {
			Y.log('', 'info', 'btn click handler')
		});

		btn.render();

	});
});