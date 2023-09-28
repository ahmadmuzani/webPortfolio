// const contact = document.getElementById('form');

// contact.addEventListener("submit", function (e) {
//     e.preventDefault();
//     const url = e.target.action;
//     const formData = new formData(contact);

//     fetch(url, {
//         method: 'POST',
//         body: formData,
//         mode: 'no-cors',
//     }).then(() => {

//     }).catch((e) => alert("error!"))
// })



$(document).ready(function () {
    $('#skill-bootstrap').click(function () {
        Swal.fire({
            title: 'Bootstrap',
            text: 'Bootstrap is an HTML, CSS, and JavaScript-based web development framework designed to accelerate the development process of responsive and mobile-first websites (prioritizing mobile devices).',
            imageUrl: '/assets/skill/bootstrap-icon-b-letter-logo_781017-7-removebg-preview.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
            background: 'linear-gradient(351deg, rgba(255,255,255,1) 0%, rgba(194,203,255,0.927608543417367) 100%)',
        })
    })
    $('#skill-css').click(function () {
        Swal.fire({
            title: 'CSS',
            text: 'CSS stands for Cascading Style Sheets language and is used to stylize elements written in a markup language such as HTML. It separates the content from the visual representation of the site. The relation between HTML and CSS is strongly tied together since HTML is the very foundation of a site and CSS is all of the aesthetics of an entire website.',
            imageUrl: '/assets/skill/css3-logo-png-transparent-removebg-preview.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
            background: 'linear-gradient(351deg, rgba(255,255,255,1) 0%, rgba(194,203,255,0.927608543417367) 100%)',
        })
    })
    $('#skill-jquery').click(function () {
        Swal.fire({
            title: 'jQuery',
            html: '<img class="skill-img" id="skill-js" style="border-radius: 40px;" src="/assets/skill/jquerylogo.png" alt=""> <br>' +
                '<p style="margin-top:17px">jQuery is a lightweight, "write less, do more", JavaScript library. The purpose of jQuery is to make it much easier to use JavaScript on your website. jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code. jQuery also simplifies a lot of the complicated things from JavaScript, like AJAX calls and DOM manipulation.</p>',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
            background: 'linear-gradient(351deg, rgba(255,255,255,1) 0%, rgba(194,203,255,0.927608543417367) 100%)',
        })
    })
    $('#skill-html').click(function () {
        Swal.fire({
            title: 'HTML',
            text: 'HTML stands for HyperText Markup Language. It is a standard markup language for web page creation. It allows the creation and structure of sections, paragraphs, and links using HTML elements (the building blocks of a web page) such as tags and attributes.',
            imageUrl: '/assets/skill/logo-2582748_960_720-removebg-preview.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
            background: 'linear-gradient(351deg, rgba(255,255,255,1) 0%, rgba(194,203,255,0.927608543417367) 100%)',
        })
    })
    $('#skill-tailwind').click(function () {
        Swal.fire({
            title: 'Tailwind',
            text: 'Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables. Instead, it creates a list of "utility" CSS classes that can be used to style each element by mixing and matching',
            imageUrl: '/assets/skill/tailwind.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
            background: 'linear-gradient(351deg, rgba(255,255,255,1) 0%, rgba(194,203,255,0.927608543417367) 100%)',
        })
    })
    $('#skill-js').click(function () {
        Swal.fire({
            title: 'JavaScript',
            html: '<img class="skill-img" id="skill-js" style="border-radius: 40px;" src="/assets/skill/JavaScript-logo.png" alt=""> <br>' +
                '<p style="margin-top:17px">JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)</p>',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
            background: 'linear-gradient(351deg, rgba(255,255,255,1) 0%, rgba(194,203,255,0.927608543417367) 100%)',
        })
    })
    $('#skill-laravel').click(function () {
        Swal.fire({
            title: 'Laravel',
            text: 'Modal with a custom image.',
            html: '<img class="skill-img" id="skill-js" style="border-radius: 40px;" src="/assets/skill/mengenal-framework-laravel.png" alt=""> <br>' +
                '<p style="margin-top:17px">Laravel is a free and open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller (MVC) architectural pattern and based on Symfony. Some of the features of Laravel are a modular packaging system with a dedicated dependency manager, different ways for accessing relational databases, utilities that aid in application deployment and maintenance, and its orientation toward syntactic sugar.</p>',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
            background: 'linear-gradient(351deg, rgba(255,255,255,1) 0%, rgba(194,203,255,0.927608543417367) 100%)',
        })
    })
    $('#skill-php').click(function () {
        Swal.fire({
            title: 'PHP',
            text: 'PHP is an open-source server-side scripting language that many devs use for web development. It is also a general-purpose language that you can use to make lots of projects, including Graphical User Interfaces (GUIs).',
            imageUrl: '/assets/skill/PHP-logo.svg.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
            background: 'linear-gradient(351deg, rgba(255,255,255,1) 0%, rgba(194,203,255,0.927608543417367) 100%)',
        })
    })

});