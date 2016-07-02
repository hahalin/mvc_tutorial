$(function () {
    // Set username in welcome message.
    if (SecurityManager.username) {
        $('#status').text('Welcome, ' + SecurityManager.username + '!');

        $('#btnLogin').hide();
        $('#btnLogout').show();
    }

    // Button click events.
    $('#btnLogin').click(function () {
        debugger;
        var defer = $.Deferred(),
        dologin = defer.then(function (_username,_pwd) {
            return $.ajax({
                method: "POST",
                url: "Auth/Login",
                data: { username: _username, pwd: _pwd }
            })
            .done(function (msg) {
                alert('ajax done:' + msg.success);
                return msg.success;
            });
        });

        defer.resolve("frank", "123");

        dologin.done(function (msg) {
            alert('final done:' + msg.success);
            
        });

        return;

        // Login as the user and create a token key.
        SecurityManager.generate('john', 'password');

        alert('Ok, logged in!');

        $('#btnLogin').hide();
        $('#btnLogout').show();
        $('#status').text('Welcome, ' + SecurityManager.username + '!');
    });

    $('#btnLogout').click(function () {
        // Clear the token key and delete localStorage settings.
        SecurityManager.logout();

        alert('Ok, logged out!');

        $('#btnLogin').show();
        $('#btnLogout').hide();
        $('#status').text('Welcome!');
        $('#result').text('');
    });

    $('#btnSearch').click(function () {
        var query = $('#txtQuery').val();

        $.get('/TestApi/find?q=' + query + '&token=' + SecurityManager.generate(), function (data) {
            var names = data.join(', ');
            $("#result").append('<p>' + names + '</p>');
        }).fail(function (error) {
            alert('HTTP Error ' + error.status);
        });
    });
});