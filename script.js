(function() {
    var _toggleNav          = document.getElementById('navToggle'),
        _navLink            = document.querySelectorAll('main-navigation-links a'),
        _toggleDropdown     = document.getElementById('dropdownToggle'),
        _navList            = document.getElementById('main-navigation-links'),
        _dropdown           = document.getElementById('dropdown-list');
        _progress           = document.getElementById('progress');
        _forms              = document.getElementById('forms');
        _articles           = document.getElementById('articles');
        _rating             = document.getElementById('rating');
        _sections           = document.querySelectorAll('section');


    function toggleHandler(toggle, nav) {
        toggle.addEventListener("click", function() {
            nav.classList.toggle('hide');
        })
    }
    toggleHandler(_toggleNav, _navList);
    toggleHandler(_toggleDropdown, _dropdown)

})();