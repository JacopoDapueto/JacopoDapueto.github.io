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



// Function to open the selected tab and load the external content
    function openTab(evt, tabName, url) {
        // Hide all tab content (remove any previously loaded content)
        document.getElementById("tabContent").innerHTML = '';

        // Remove 'active' class from all tablinks (buttons)
        var tablinks = document.getElementsByClassName("tablinks");
        for (var i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Add 'active' class to the clicked tab button
        evt.currentTarget.className += " active";

        // Load the content of the clicked tab from an external HTML file
        fetch(url)
            .then(response => response.text())
            .then(data => {
                // Insert the loaded HTML into the tabContent div
                document.getElementById("tabContent").innerHTML = data;
            })
            .catch(error => {
                // Display an error message if loading the content fails
                document.getElementById("tabContent").innerHTML = "Error loading content.";
                console.error("Error loading content:", error);
            });
    }

    // Automatically load the first tab's content when the page is loaded
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelector(".tablinks").click();
    });