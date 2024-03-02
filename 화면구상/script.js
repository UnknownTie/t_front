
document.getElementById('logo').addEventListener('click', function() {
    // 기본 화면으로 이동하는 로직
    window.location.href = 'index.html'; // 혹은 다른 기본 페이지 URL
});

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function() {
        const targetFile = this.getAttribute('data-target');
        fetch(targetFile)
            .then(response => response.text())
            .then(data => {
                document.getElementById('content').innerHTML = data;
            })
            .catch(error => console.error('Error loading the page:', error));
    });
});

document.querySelectorAll('.submenu-btn').forEach(button => {
    button.addEventListener('click', function() {
        const targetFile = this.getAttribute('data-target');
        fetch(targetFile)
            .then(response => response.text())
            .then(data => {
                document.getElementById('main-content').innerHTML = data;
            })
            .catch(error => console.error('Error loading the page:', error));
    });
});