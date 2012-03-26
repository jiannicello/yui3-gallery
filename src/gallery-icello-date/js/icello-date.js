Y.namespace('Icello.Date');

Y.Icello.Date.addMonths = function (date, months) {
    Y.log('', 'info', 'Icello Date addMonths');

    var dPlusMonths = null,
        dPlusMonthsDayOne = null,
        dPlusMonthsToReturn = null,
        expectedMonth = (date.getMonth() + months) % 12;

    dPlusMonths = new Date(date.getFullYear(), date.getMonth() + months, date.getDate());

    if (expectedMonth === dPlusMonths.getMonth()) {
        dPlusMonthsToReturn = dPlusMonths;
    } else {
        dPlusMonthsDayOne = new Date(date.getFullYear(), date.getMonth() + months, 1);
        dPlusMonthsToReturn = new Date(dPlusMonthsDayOne.getFullYear(), dPlusMonthsDayOne.getMonth(), Y.Icello.Date.daysInMonth(dPlusMonthsDayOne));
    }

    return dPlusMonthsToReturn;
};

Y.Icello.Date.areDaysEqual = function (date1, date2) {
    Y.log('', 'info', 'Icello Date areDaysEqual');

    var y1 = date1.getFullYear(),
        y2 = date2.getFullYear(),
        m1 = date1.getMonth(),
        m2 = date2.getMonth(),
        d1 = date1.getDay(),
        d2 = date2.getDay();

    return y1 === y2 && m1 === m2 && d1 === d2;
};

Y.Icello.Date.daysInMonth = function (date) {
    Y.log('', 'info', 'Icello Date daysInMonth');

    var year = date.getFullYear(),
        month = date.getMonth(),
        lastdays = [31, 30, 29, 28],
        lastDayOfMonth = null;

    Y.Array.each(lastdays, function (lastday) {
        if (lastDayOfMonth === null) {
            var d = new Date(year, month, lastday);

            if (d.getMonth() === month) {
                lastDayOfMonth = lastday;
            }
        }
    });

    return lastDayOfMonth;
};

Y.Icello.Date.formatShortDate = function (date) {
    Y.log('', 'info', 'Icello Date formatShortDate');
    var sb = [date.getMonth() + 1, '/', date.getDate(), '/', date.getFullYear()];
    return sb.join('');
};