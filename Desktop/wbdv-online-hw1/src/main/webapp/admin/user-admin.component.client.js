(function () {
    const users = [
        {id: 123, username: 'alice', firstName: 'Alice', lastName: 'Tim', role:'Faculty'},
        {id: 234, username: 'bob', firstName: 'Bob', lastName: 'Lovelace', role:'Faculty'},
        {id: 345, username: 'charlie', firstName: 'Charlie', lastName: 'Craig', role:'Student'},
        {id: 456, username: 'dan', firstName: 'Dan', lastName: 'Bolivar', role:'Faculty'}
    ]

    const rowTempalte = jQuery('.wbdv-template');
    const tbody = jQuery('tbody');
    for (var u in users) {
        const user = users[u];
        const rowClone = rowTempalte.clone();
        rowClone.removeClass('wbdv-hidden');
        rowClone.find('.wbdv-username').html(user.username);
        rowClone.find('.wbdv-first-name-').html(user.firstName);
        rowClone.find('.wbdv-last-name').html(user.lastName);
        rowClone.find('.wbdv-role').html(user.role);
        tbody.append(rowClone);
    }
})();