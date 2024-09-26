
// card bopxes in home page
document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll('.transparent-box');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    boxes.forEach(box => {
        observer.observe(box);
    });
});


// why us section 
document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll('.box');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    boxes.forEach(box => {
        observer.observe(box);
    });
});
// our vision box
document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll('.our_vison_box');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    boxes.forEach(box => {
        observer.observe(box);
    });
});







// about- box
document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll('.about-box');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    boxes.forEach(box => {
        observer.observe(box);
    });
});








 // Get the button
 const moveToTopBtn = document.getElementById("moveToTopBtn");

 // When the user scrolls down 100px from the top of the document, show the button
 window.onscroll = function() {
     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
         moveToTopBtn.style.display = "block";
     } else {
         moveToTopBtn.style.display = "none";
     }
 };

 // When the user clicks on the button, scroll to the top of the document
 moveToTopBtn.onclick = function() {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
 };






//  read more
document.getElementById('toggleButton').addEventListener('click', function () {
    var moreContent = document.getElementById('moreContent');
    var button = this;
    if (moreContent.style.display === 'none') {
        moreContent.style.display = 'block';
        button.textContent = 'Show Less';
    } else {
        moreContent.style.display = 'none';
        button.textContent = 'Read More';
    }
});