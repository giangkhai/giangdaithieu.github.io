document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('h1').addEventListener('click', function() {
        this.textContent = "Chào mừng bạn đã nhấp vào tiêu đề!";
    });
});
