(function () {

    var root = document.querySelector(':root');

    var rs = getComputedStyle(root);

    console.log(localStorage.getItem('themecolor'));

    var localThemeColor = localStorage.getItem('themecolor')

    if (localThemeColor) {
        document.getElementById('themecolor').value = localThemeColor;
        const themeColorMetaTag = document.querySelector("meta[name='theme-color']");
        // Update the content attribute of the <meta> tag
        themeColorMetaTag.setAttribute("content", localThemeColor);
        root.style.setProperty('--primary', localThemeColor);
    } else {
        document.getElementById('themecolor').value = rs.getPropertyValue('--primary');
    }


}());