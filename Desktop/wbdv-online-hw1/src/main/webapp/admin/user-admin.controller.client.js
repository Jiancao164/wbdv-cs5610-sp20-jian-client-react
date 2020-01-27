(function () {
    var $usernameFld, $passwordFld;
    var $roleFld;
    var $removeBtn, $editBtn, $createBtn;
    var $firstNameFld, $lastNameFld;
    var $userRowTemplate, $tbody;
    var userService = new AdminUserServiceClient();
    var $selectedUserRow;
    $(main);

    function main() {
        $usernameFld = $("#usernameFld");
        $passwordFld = $("#passwordFld");
        $removeBtn = $("#removeBtn");
        $editBtn = $("#editBtn");
        $createBtn = $("#createBtn");
        $firstNameFld = $("#firstNameFld");
        $lastNameFld = $("#lastNameFld");
        $userRowTemplate = $(".wbdv-tbody .wbdv-template");
        $tbody = $("tbody");

        findAllUsers().then(users => renderUsers(users))
    }


    function clearFields() {
        $usernameFld.val("");
        $firstNameFld.val("");
        $lastNameFld.val("");
        $roleFld.val("");
        $passwordFld.val('');
    }

    function createUser() {
        var u = {
            username: $usernameFld.val(),
            firstName: $firstNameFld.val(),
            lastName: $lastNameFld.val(),
            role: $roleFld.val(),
            password: $passwordFld.val()
        };
        userService.createUser(u).then(u => {
            renderUser(u);
            clear();
        });
    }

    function findAllUsers() {
        $tbody.find("tr:not(.wbdv-hidden)").remove();
        return userService.findAllUsers();
    }

    function findUserById(id) {
        return userService.findUserById(id)
    }

    function deleteUser(e) {
        userService.deleteUser(e).then(findAllUsers);
    }

    function selectUser(e) {
        var userRow = $(e.currentTarget).parents(".wbdv-template");
        findUserById(userRow.attr("id")).then(u => {
            $usernameFld.val(userRow.find(".wbdv-username").html());
            $firstNameFld.val(userRow.find(".wbdv-first-name").html());
            $lastNameFld.val(userRow.find(".wbdv-last-name").html());
            $roleFld.val(userRow.find(".wbdv-role").html());
            $selectedUserRow = userRow
        })
    }

    function updateUser(e) {
        if (!$selectedUserRow) return;
        userService.updateUser($selectedUserRow.attr("id")).then(
            res => {
                $selectedUserRow.find(".wbdv-username").html($usernameFld.val());
                $selectedUserRow.find(".wbdv-first-name").html($firstNameFld.val());
                $selectedUserRow.find(".wbdv-last-name").html($lastNameFld.val());
                $selectedUserRow.find(".wbdv-role").html($roleFld.val());
                $selectedUserRow = null;
                clearFields();
            }
        )
    }

    function renderUser(u) {
        var userRow = $userRowTemplate.clone();


        userRow.attr("class", "wbdv-user");
        userRow.attr("id", "user" + user.id);

        userRow.find(".wbdv-username").html(u.username);
        userRow.find(".wbdv-first-name").html(u.firstName);
        userRow.find(".wbdv-last-name").html(u.lastName);
        userRow.find(".wbdv-role").html(u.role);
        $tbody.append(userRow);
    }

    function renderUsers(users) {
        $tbody.empty();
        for (var i in users) {
            renderUser(users[i]);
        }
    }


})();