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

// function toggle() {
//     const icon = document.getElementById('smile-nav');
//     icon.classList.remove('-upside-down');
// }


$(document).ready(function () {
    $('#darkModeToggle').click(function () {
        // Toggle efek translasi pada ikon
        $(this).toggleClass('clicked');
        $('#lightModeToggle').css({
            'transform': 'translateY(452px)'
        });
        $('#darkModeToggle').css({
            'transform': 'translateY(-452px)'

        });
    });
    $('#lightModeToggle').click(function () {
        // Toggle efek translasi pada ikon
        $(this).toggleClass('clicked');
        $('#darkModeToggle').css({
            'transform': 'translateY(0px)'

        });
        $('#lightModeToggle').css({
            'transform': 'translateY(-452px)'

        });
    });

    $('#button-resume').click(function () {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Resume has been downloaded",
            showConfirmButton: false,
            timer: 1500
        });
    })
});
$(document).ready(function () {
    $('#button-nav').click(function () {
        $('#button-nav i').toggleClass("bi-emoji-smile-upside-down");
        $('#button-nav i').toggleClass("bi-emoji-smile");
    });
    $('#darkModeToggle').click(function () {
        $('body').toggleClass("dark-mode").fadeIn(3000);
        $('body').toggleClass("light-mode");
        $('#bg-circle').toggleClass("bg-circle-dark");
        $('#bg-circle').toggleClass("bg-circle");
    });
    $('#lightModeToggle').click(function () {
        $('body').toggleClass("dark-mode").fadeIn(3000);
        $('body').toggleClass("light-mode");
        $('#bg-circle').toggleClass("bg-circle-dark");
        $('#bg-circle').toggleClass("bg-circle");
    });



    $('#skill-bootstrap').click(function () {
        Swal.fire({
            title: 'Bootstrap',
            html: '<h5>Competent</h5><br><p style="margin-top:-30px">Bootstrap is an HTML, CSS, and JavaScript-based web development framework designed to accelerate the development process of responsive and mobile-first websites (prioritizing mobile devices).</p>',
            imageUrl: '/assets/skill/bootstrap.webp',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
            background: 'linear-gradient(351deg, rgba(255,255,255,1) 0%, rgba(194,203,255,0.927608543417367) 100%)',
        })
    })
    $('#skill-css').click(function () {
        Swal.fire({
            title: 'CSS',
            html: '<h5>Competent</h5><br><p style="margin-top:-30px">CSS stands for Cascading Style Sheets language and is used to stylize elements written in a markup language such as HTML. It separates the content from the visual representation of the site. The relation between HTML and CSS is strongly tied together since HTML is the very foundation of a site and CSS is all of the aesthetics of an entire website..</p>',
            imageUrl: '/assets/skill/css.webp',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
            background: 'linear-gradient(351deg, rgba(255,255,255,1) 0%, rgba(194,203,255,0.927608543417367) 100%)',
        })
    })
    $('#skill-jquery').click(function () {
        Swal.fire({
            html: '<img class="skill-img" id="skill-js" style="border-radius: 40px;" src="/assets/skill/jquery.webp" alt=""> <br>' + '<h2 style="margin-top:10px;">jQuery</h2> <br>' +
                '<h5 style="margin-top:-10px">Competent</h5><br><p style="margin-top:-30px">jQuery is a lightweight, "write less, do more", JavaScript library. The purpose of jQuery is to make it much easier to use JavaScript on your website. jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code. jQuery also simplifies a lot of the complicated things from JavaScript, like AJAX calls and DOM manipulation.</p>',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
            background: 'linear-gradient(351deg, rgba(255,255,255,1) 0%, rgba(194,203,255,0.927608543417367) 100%)',
        })
    })
    $('#skill-html').click(function () {
        Swal.fire({
            title: 'HTML',
            html: '<h5>Competent</h5><br><p style="margin-top:-30px">HTML stands for HyperText Markup Language. It is a standard markup language for web page creation. It allows the creation and structure of sections, paragraphs, and links using HTML elements (the building blocks of a web page) such as tags and attributes.</p>',
            imageUrl: '/assets/skill/html.webp',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
            background: 'linear-gradient(351deg, rgba(255,255,255,1) 0%, rgba(194,203,255,0.927608543417367) 100%)',
        })
    })
    $('#skill-tailwind').click(function () {
        Swal.fire({
            title: 'Tailwind',
            html: '<h5>Advance Beginner</h5><br><p style="margin-top:-30px">Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables. Instead, it creates a list of "utility" CSS classes that can be used to style each element by mixing and matching.</p>',
            imageUrl: '/assets/skill/tailwind.webp',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
            background: 'linear-gradient(351deg, rgba(255,255,255,1) 0%, rgba(194,203,255,0.927608543417367) 100%)',
        })
    })
    $('#skill-js').click(function () {
        Swal.fire({

            html: '<img class="skill-img" id="skill-js" style="border-radius: 40px;" src="/assets/skill/js.webp" alt=""> <br>' + '<h2 style="margin-top:80px;">Javascript</h2> <br>' +
                '<h5 style="margin-top:-10px">Advance Beginner</h5><br><p style="margin-top:-30px">JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)</p>',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
            background: 'linear-gradient(351deg, rgba(255,255,255,1) 0%, rgba(194,203,255,0.927608543417367) 100%)',
        })
    })
    $('#skill-laravel').click(function () {
        Swal.fire({
            html: '<img class="skill-img" id="skill-js" style="border-radius: 40px;" src="/assets/skill/laravel.webp" alt=""> <br>' + '<h2 style="margin-top:10px;">Laravel</h2> <br>' +
                '<h5 style="margin-top:-10px">Competent</h5><br><p style="margin-top:-30px">Laravel is a free and open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller (MVC) architectural pattern and based on Symfony. Some of the features of Laravel are a modular packaging system with a dedicated dependency manager, different ways for accessing relational databases, utilities that aid in application deployment and maintenance, and its orientation toward syntactic sugar.</p>',
            imageWidth: 100,
            imageHeight: 200,
            imageAlt: 'Custom image',
            background: 'linear-gradient(351deg, rgba(255,255,255,1) 0%, rgba(194,203,255,0.927608543417367) 100%)',
        })
    })
    $('#skill-php').click(function () {
        Swal.fire({
            title: 'PHP',
            html: '<h5>Competent</h5><br><p style="margin-top:-30px">PHP is an open-source server-side scripting language that many devs use for web development. It is also a general-purpose language that you can use to make lots of projects, including Graphical User Interfaces (GUIs).</p>',
            imageUrl: '/assets/skill/php.webp',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
            background: 'linear-gradient(351deg, rgba(255,255,255,1) 0%, rgba(194,203,255,0.927608543417367) 100%)',
        })
    })

    $('#skill-react').click(function () {
        Swal.fire({
            title: 'React.js',
            html: '<h5>Advance Beginner</h5><br><p style="margin-top:-30px">React.js is an open-source JavaScript library, crafted with precision by Facebook, that aims to simplify the intricate process of building interactive user interfaces. Imagine a user interface built with React as a collection of components, each responsible for outputting a small, reusable piece of HTML code.</p>',
            imageUrl: '/assets/skill/react.webp',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
            background: 'linear-gradient(351deg, rgba(255,255,255,1) 0%, rgba(194,203,255,0.927608543417367) 100%)',
        })
    })
    $('#skill-mysql').click(function () {
        Swal.fire({
            title: 'MySQL',
            html: '<h5>Competent</h5><br><p style="margin-top:-30px">MySQL is an open-source Relational Database Management System (RDBMS) that enables users to store, manage, and retrieve structured data efficiently. It is widely used for various applications, from small-scale projects to large-scale websites and enterprise-level solutions.</p>',
            imageUrl: '/assets/skill/mysql.webp',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
            background: 'linear-gradient(351deg, rgba(255,255,255,1) 0%, rgba(194,203,255,0.927608543417367) 100%)',
        })
    })
});