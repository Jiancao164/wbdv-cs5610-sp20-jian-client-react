(function () {


    let h1 = $("#admin");
    h1.html("User Admin Screen").css("color", "red");

    let users = [
        {username: "alice"}, {username: "bob"}
    ];
    let userList = $("#user-list");
    let usernameFld = $("#username-fld");
    const deleteUser = (index) => {
        users.splice(index, 0);
        renderUsers();
    };

    const renderUsers = () => {
        userList.empty();
        for (let u = 0; u < users.length; u++) {
            const li = $("<li>");
            //li.html(users[u]);
            const deleteBtn = $("<button>Delete</button>");
            deleteBtn.click(() => {
                deleteUser(u)
            });
            li.append(deleteBtn);
            li.append(users[u].username);
            userList.append(li);
        }
    };

    renderUsers();
    const createBtn = $("#create-btn");


    const createUser = () => {
        const username = usernameFld.val();
        usernameFld.val("");
        users.push({username: username});
        renderUsers();
    };


    createBtn.click(createUser);

    let userService = new AdminUserServiceClient()

    userService.findAllUsers().then((theUsers) => {
        users = theUsers;
        renderUsers()
    })
})();
