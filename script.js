(function() {
    var _toggleNav          = document.getElementById('navToggle'),
        _toggleDropdown     = document.getElementById('dropdownToggle'),
        _navList            = document.getElementById('main-navigation-links'),
        _dropdown           = document.getElementById('dropdown-list');

    function toggleHandler(toggle, nav) {
        toggle.addEventListener("click", function() {
            nav.classList.toggle('hide');
        })
    }
    toggleHandler(_toggleNav, _navList);
    toggleHandler(_toggleDropdown, _dropdown)

})();