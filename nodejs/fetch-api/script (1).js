// API: https://jsonplaceholder.typicode.com/users
// Yêu cầu: Call API trên và render ra 1 bảng gồm các trường: id, name, username, email
// Bonus:
// Nên trang này https://jsonplaceholder.typicode.com tìm hiểu cách tìm kiếm, thêm mới, sửa, xóa người dùng
// Dựa vào bước tìm hiểu trên làm các chức năng tìm kiếm, thêm mới, sửa, xóa người dùng


// chuyen doi tu fetch promise -> fetch async voi phuong thuc GET
const asyncFetchGET = async (url) => new Promise((resolve, reject) => {
    fetch(url)
        .then(response => resolve(response.json()))
        .catch(error => reject(error))
})


// chuyen doi tu fetch promise -> fetch async voi phuong thuc POST
const asyncFetchPOST = async (url, formData) => new Promise((resolve, reject) => {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => resolve(response.json()))
        .catch(error => reject(error))
})

const asyncFetchPUT = async (url, formData) => new Promise((resolve, reject) => {
    fetch(url, {
        method: 'PUT',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => resolve(response.json()))
        .catch(error => reject(error))
})

// let usersApi = 'https://jsonplaceholder.typicode.com/users'
let usersApi = 'https://faas-sgp1-18bc02ac.doserverless.co/api/v1/web/fn-0075f7bb-02e6-4d8a-888e-1e1a872de1d5/default/api'
let createBtn = document.querySelector('#create')
let saveBtn = document.querySelector('#save')
let searchBtn = document.querySelector('#search');

async function getUsers() {
    try {
        const users = await asyncFetchGET(usersApi)
        return users.data
    } catch (err) {
        console.error(err)
        return []
    }
}

function renderUsers(users) {
    let listUsers = document.querySelector('#list-users');
    let htmls = users.map(function (user) {
        return `
        <li class="user-item-${user.id}">
            <h3>ID: ${user.id}
            <button onclick="handleUpdateUser(${user.id}).then(() => {}).catch(err => console.log(err))" style="margin-left: 3rem;">Sửa</button>
            <button onclick="handleDeleteUser(${user.id})" style="margin-left: 3rem;">Xóa</button>
            <h3/>
        </li>
        <p>Name: ${user.name}</p>
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <br>
        `
    })
    listUsers.innerHTML = htmls.join('');
}

async function start() {
    const users = await getUsers()
    renderUsers(users)
    await handleFormCreate()
}
start().then(() => { }).catch(err => { });

function getDataFromCreateForm() {
    const name = document.querySelector('input[name = "name"]').value;
    const email = document.querySelector('input[name = "email"]').value;
    const id = document.querySelector('input[name = "id"]').value;
    const username = document.querySelector('input[name = "username"]').value;

    return {
        id,
        name,
        username,
        email,
    }
}

async function handleCreateUser() {
    const formData = getDataFromCreateForm()
    try {
        await asyncFetchPOST(usersApi, formData)
    } catch (err) {
        console.error(err)
    }
}

async function handleFormCreate() {
    const createBtn = document.querySelector('#create')
    createBtn.onclick = async () => {
        await handleCreateUser()
        const users = await getUsers()
        renderUsers(users)
    }
}

// Delete
function handleDeleteUser(id) {
    let options = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
    }

    fetch(usersApi + '/' + id, options)
        .then(function (response) {    // .then(response => response.json())
            return response.json()
        })
        //.then(data => console.log(data))          // undefined???
        .then(function () {
            var userItem = document.querySelector('.user-item-' + id)
            if (userItem) {
                userItem.remove();
            }
        })
}

// Update
function updateUser(id, data, callback) {
    let options = {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    }

    fetch(usersApi + '/' + id, options)
        .then(response => response.json())
        .then(callback)
}

async function getUserById(id) {
    const url = `${usersApi}/${id}`
    const user = await asyncFetchGET(url)
    return user
}

async function handleUpdateUser(id) {
    const { data } = await getUserById(id)

    document.querySelector('input[name = "id"]').value = data.id
    document.querySelector('input[name = "email"]').value = data.email
    document.querySelector('input[name = "name"]').value = data.name
    document.querySelector('input[name = "username"]').value = data.username
    
}


// Search
async function handleSearch() {
    const id = document.getElementById('search-input').value
    if (!id) {
        return
    }

    const user = await getUserById(id)
    if (Object.keys(user).length === 0) {
        alert('Không tìm thấy người dùng nào có mã ID là ' + id)
        renderUsers([])
    } else {
        renderUsers([user])
    }
}
