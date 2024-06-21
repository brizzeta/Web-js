$(document).ready(function() {
    // Функция для загрузки списка копирайтеров
    function loadCopywriters() {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users',
            type: 'GET',
            success: function(users) {
                displayCopywriters(users);
            },
            error: function() {
                alert('Ошибка загрузки данных копирайтеров');
            }
        });
    }

    // Функция для отображения списка копирайтеров
    function displayCopywriters(users) {
        const userList = $('#user-list');
        userList.empty();

        users.forEach(function(user) {
            const listItem = $('<li class="user-list-item"></li>').text(user.name);
            listItem.data('user', user);
            userList.append(listItem);
        });

        $('.user-list-item').click(function() {
            const user = $(this).data('user');
            showUserDetails(user);
        });
    }

    // Функция для отображения подробной информации о копирайтере
    function showUserDetails(user) {
        $('#user-name').text(user.name);
        $('#user-email').text(user.email);
        $('#user-phone').text(user.phone);
        $('#user-details').slideDown();
        $('#show-posts').click(function() {
            loadUserPosts(user.id);
        });
    }

    // Функция для загрузки постов копирайтера
    function loadUserPosts(userId) {
        $.ajax({
            url: `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
            type: 'GET',
            success: function(posts) {
                displayUserPosts(posts);
            },
            error: function() {
                alert('Ошибка загрузки постов пользователя');
            }
        });
    }

    // Функция для отображения постов копирайтера
    function displayUserPosts(posts) {
        const userPostsList = $('#user-posts');
        userPostsList.empty();

        posts.forEach(function(post) {
            const listItem = $('<li></li>').text(post.title);
            userPostsList.append(listItem);
        });

        $('#user-posts').slideDown();
    }
    loadCopywriters();
});
