function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/0001358744/users';
    var self = this;

    function findAllUsers() {
        return fetch(self.url)
            .then((response) => {
                return response.json()
            })
    }
    function createUser(userId, user) {
        return fetch(self.url + "/" + userId, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function(response){
            return response.json()
        })
    }
    function findUserById(userId) {
        return fetch(self.url + '/' + userId, {
            method: "get",
            body: JSON.stringify(user),
            headers: {
                "content-type": "application/json"
            }
        }).then(function(response) {
            return response.json();
        });
    }
    function updateUser(userId, user) {
        return fetch(self.url + '/' + userId, {
            method: "put",
            body: JSON.stringify(user),
            headers: {
                "content-type": "application/json"
            }
        }).then(function(response) {
            return response.json();
        });
    }

    function deleteUser(userId) {
        return fetch(self.url + "/" + userId, {
            method: "delete"
        }).then(function(response) {})
    }
}
