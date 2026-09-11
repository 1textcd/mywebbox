document.addEventListener("DOMContentLoaded", function() {
    var footerContainer = document.getElementById("main-footer");
    if (footerContainer) {
        var homeUrl = "../index.html"; // Указываем имя или путь к главной странице
        
        footerContainer.innerHTML = 
            '<div style="margin-top: 30px; padding: 15px; text-align: center; border-top: 1px solid #444;">' +
                '<a href="' + homeUrl + '" style="color: #00bcd4; text-decoration: none; font-weight: bold; font-family: sans-serif;">' +
                    '← Вернуться на главную' +
                '</a>' +
            '</div>';
    }
});