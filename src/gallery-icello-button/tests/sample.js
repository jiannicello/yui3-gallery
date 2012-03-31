YUI().use('gallery-icello-button', function (Y) {
    Y.on('domready', function (e) {
        var Button = Y.Icello.Button,
            btn = new Button({
                icon: Button.ICONS.ALERT,
                label: 'Warning Button'
            });
            
            btn.render();
    });
});