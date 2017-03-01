(function() {

    function $(id) {
        return document.querySelector(id);
    }
    function $$(classNames) {
        return document.querySelectorAll(classNames);
    }


    var DOMelements = {
        _toggleNav          : $('#navToggle')
        _navLink            : $$('main-navigation-links a'),
        _toggleDropdown     : $('#dropdownToggle'),
        _navList            : $('#main-navigation-links'),
        _dropdown           : $('#dropdown-list'),
        _progress           : $('#progress'),
        _forms              : $('#forms'),
        _articles           : $('#articles'),
        _rating             : $('#rating'),
        _sections           : $$('section')
    };

    var toggleElements = {
        progressToggle      : $('#progressToggle'),
        formsToggle         : $('#formsToggle'),
        mediaItemToggle     : $('#mediaItemToggle'),
        titleImageToggle    : $('#titleImageToggle'),
        fullImageToggle     : $('#fullImageToggle')
        ratingToggle        : $('#ratingToggle')
    };

    function toggleHandler(toggle, el) {
        toggle.addEventListener("click", function() {
            el.classList.toggle('hide');
        })
    };




    toggleHandler(DOMelements._toggleNav, DOMelements._navList);
    toggleHandler(DOMelements._toggleDropdown, DOMelements._dropdown);

    toggleHandler(toggleElements.progressToggle, DOMelements._progress);
    toggleHandler(toggleElements.formsToggle, DOMelements._forms);
    toggleHandler(toggleElements.ratingToggle, DOMelements._rating);
    toggleHandler(toggleElements.mediaItemToggle, DOMelements._mediaItem);
    toggleHandler(toggleElements.titleImageToggle, DOMelements._titleImage);
    toggleHandler(toggleElements.fullImageToggle, DOMelements._fullImage);

})();