var cal = null;
//{ lang: 'en' }
YUI().use('gallery-icello-datechooser', function (Y) {
    Y.on('domready', function (e) {
        Y.log('', 'info', 'domready');


        var day = Y.DataType.Date.format(new Date(), { format: "%b" });
        Y.log('day: ' + day, 'info', 'pageload');

        cal = new Y.Icello.DateChooser({
            inputNode: '#txtDate'
        });

        cal.render();



    });
});
    