// Met wat hulp van de lieftallige Dave Bitter

(function () {
    "use strict";
    var app = {
        init: function (routes, sections, window) {
            routes.init(sections, window);
        }
    };
    var routes = {
        init: function (sections, window) {
            window.onhashchange = function () {
                sections.toggle();
            };

            document.getElementById("navToggle").addEventListener("click", function () {
                document.getElementById("main-navigation-links").classList.toggle("hide");
            });
        }
    };
    var sections = {
        toggle: function () {

            var sectionList = document.querySelectorAll("section");

            sectionList.forEach(function (section) {
                if (location.hash === "#showAll") {
                    section.classList.remove("hide");
                    document.getElementById("main-navigation-links").classList.add("hide");
                    document.querySelector("a[href='#showAll']").classList.add("active");
                    document.querySelector("a[href='#" + section.id + "']").classList.remove("active");
                } else if (location.hash === "#" + section.id) {
                    section.classList.remove("hide");
                    document.getElementById("main-navigation-links").classList.add("hide");
                    document.querySelector("a[href='#" + section.id + "']").classList.add("active");
                } else {
                    section.classList.add("hide");
                    document.getElementById("main-navigation-links").classList.add("hide");
                    document.querySelector("a[href='#" + section.id + "']").classList.remove("active");
                    document.querySelector("a[href='#showAll']").classList.remove("active");
                }

            });
        }
    };
    app.init(routes, sections, window);
}());
