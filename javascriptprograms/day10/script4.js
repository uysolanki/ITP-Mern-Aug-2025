function display(msg) {
    document.getElementById("one").innerHTML = msg;
}

// Function that makes an API call
function fetchUser(userId) {
    return new Promise((resolve, reject) => {

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => {
                if (!response.ok) {
                    reject({
                        message: "Failed to fetch user",
                        status: response.status
                    });
                }
                return response.json();
            })
            .then(data => {
                // resolve with MULTIPLE values using object
                resolve({
                    message: "User fetched successfully",
                    user: data,
                    status: 200
                });
            })
            .catch(error => {
                reject({
                    message: "Network error",
                    error: error
                });
            });
    });
}

// Consuming the Promise
fetchUser(1)
    .then(result => {
        console.log(result.user);   // user object
        display(result.user.name);    // success message
    })
    .catch(error => {
        console.error(error);
        display(error.message);
    });