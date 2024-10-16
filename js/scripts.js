/*!
* Start Bootstrap - Resume v7.0.4 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function openTab(evt, tabName, url) {
        // Remove active class from all buttons
        var tablinks = document.getElementsByClassName("tablinks");
        for (var i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the selected tab and add an 'active' class to the button
        document.getElementById(tabName).classList.add('active');
        evt.currentTarget.className += " active";

        // Add active class to the clicked button
        evt.currentTarget.className += " active";

        // Fetch the content from the external HTML file
        fetch(url)
            .then(response => response.text())
            .then(data => {
                // Insert the content into the tabContent div
                document.getElementById("tabContent").innerHTML = data;
            })
            .catch(error => {
                document.getElementById("tabContent").innerHTML = "Error loading content.";
            });
    }

    // By default, load the first tab
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelector(".tablinks").click();
    });
