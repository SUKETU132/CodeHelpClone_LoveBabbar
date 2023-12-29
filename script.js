const op = document.getElementById('op');
const element = document.createElement('div');
const hamb = document.getElementById('hamburger');
const day_night = document.getElementById('no-display');
const change_ham_color = document.getElementById('change-color');
const change_color = document.getElementById('feature');
const ham_responsive = document.getElementById('hamburger-menu');
const info = document.getElementById('info');
const day = document.getElementById('day');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const fb = document.getElementById('first-btn');
const fb1 = document.getElementById('second-btn');
const c4 = document.getElementById('c4-color');
const hc = document.getElementById('change-header-color');
const hc1 = document.getElementById('change-header-color2');
const hc2 = document.getElementById('change-header-color3');
const bc1 = document.getElementById('content1');
const bc2 = document.getElementById('content2');
const bc3 = document.getElementById('content3');
const bc4 = document.getElementById('content4');
const bc5 = document.getElementById('content5');
const bc6 = document.getElementById('content6');
const course1 = document.getElementById('course1');
const course2 = document.getElementById('course2');
const ct1 = document.getElementById('course1-text');
const ct2 = document.getElementById('course2-text');
const ch1 = document.getElementById('course-header1');
const change_color1 = document.getElementById('change-color1');
const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');
const slide3 = document.getElementById('slide3');
const ib = document.getElementById('instructor-btn');
const op1 = document.querySelector('.op1');
const op2 = document.querySelector('.op2');
element.className = "nav-element";
element.innerHTML = "<h3>Fruitbox Flex</h3> <p>A fun and interactive way to sharpen your Flex box CSS skills</p> <h3>Quick Compiler</h3> <p>Write and run code in multiple language from anywhere.</p>"
element.id = "box";
let selector = document.querySelector('nav-element');
let nav_selector = document.getElementById('box');

function hovering() {
    op.addEventListener('mouseenter', () => {
        op.append(element);
    });

    op.addEventListener('mouseleave', () => {
        if (op.contains(element)) {
            op.removeChild(element);
        }
    });
}
hovering();

function linked_data() {
    ib.addEventListener('click', () => {
        window.open('https://www.thecodehelp.in/about');
    });

    btn2.addEventListener('click', () => {
        window.open('https://www.youtube.com/@CodeHelp/videos', '_blank');
    });

    fb.addEventListener('click', () => {
        window.open('https://learn.thecodehelp.in/s/dashboard', '_blank');
    });

    fb1.addEventListener('click', () => {
        window.open('https://learn.thecodehelp.in/s/dashboard', '_blank');
    });

    course1.addEventListener('click', () => {
        window.open('https://www.thecodehelp.in/course/low-level-design', '_blank');
    });

    course2.addEventListener('click', () => {
        window.open('https://www.thecodehelp.in/course/dsa-supreme-2.0', '_blank');
    });

    op1.addEventListener('click', () => {
        window.open('https://www.thecodehelp.in/course/data-structures-bootcamp', '_blank');
    });

    op2.addEventListener('click', () => {
        window.open('https://www.thecodehelp.in/course/web-development-bootcamp', '_blank');
    });

    btn1.addEventListener('click', () => {
        window.open('/#sub-course-section', '_blank');
    });
}
linked_data();

function Dark_Effect() {
    day_night.addEventListener('click', () => {
        day_night.style.display = "none";
        day.style.display = "block";
        change_color.style.color = "#fff";
        change_ham_color.style.backgroundColor = "#191818";
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.909)";
        info.style.color = "#fff";
        btn2.style.backgroundColor = "rgba(0, 0, 0, 0%)";
        btn2.style.color = "#fff";
        fb.style.backgroundColor = "rgba(0, 0, 0, 0%)";
        fb.style.color = "#fff";
        c4.style.backgroundColor = "rgba(0, 0, 0, 89%)";
        hc.style.color = "#fff";
        hc1.style.color = "#fff";
        hc2.style.color = "#fff";
        bc1.style.backgroundColor = "rgb(18 15 15 / 91%)";
        bc2.style.backgroundColor = "rgb(18 15 15 / 91%)";
        bc3.style.backgroundColor = "rgb(18 15 15 / 91%)";
        bc4.style.backgroundColor = "rgb(18 15 15 / 91%)";
        bc5.style.backgroundColor = "rgb(18 15 15 / 91%)";
        bc6.style.backgroundColor = "rgb(18 15 15 / 91%)";
        slide1.style.backgroundColor = "rgb(18 15 15 / 91%)";
        slide2.style.backgroundColor = "rgb(18 15 15 / 91%)";
        slide3.style.backgroundColor = "rgb(18 15 15 / 91%)";
        bc1.style.boxShadow = "none";
        bc2.style.boxShadow = "none";
        bc3.style.boxShadow = "none";
        bc4.style.boxShadow = "none";
        bc5.style.boxShadow = "none";
        bc6.style.boxShadow = "none";
        const elementIds = ['id1', 'id2', 'id3', 'id4', 'id5', 'id6', 'text-info'];
        elementIds.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.style.color = "#fff";
            }
        });
        const elementIds1 = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'rr', 'c1', 'c2', 'c3'];
        elementIds1.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.style.color = "#fff";
            }
        });
        let head = document.getElementById('placement-head');
        head.style.color = "#fff";
        course1.style.backgroundColor = "#191818";
        course2.style.backgroundColor = "#191818";
        ct1.style.color = "#fff";
        ct2.style.color = "#fff";
        ch1.style.color = "#fff";
        change_color1.style.color = "#fff";
        var elements2 = document.getElementsByClassName("myClass");

        for (var i = 0; i < elements2.length; i++) {
            elements2[i].style.backgroundColor = "#191818";
        }
        var elements3 = document.getElementsByClassName("balo");

        for (var i = 0; i < elements3.length; i++) {
            elements3[i].style.color = "#fff";
        }
    });
}
Dark_Effect();

function Light_Effect() {
    day.addEventListener('click', () => {
        day.style.display = "none";
        day_night.style.display = "block";
        change_color.style.color = "black"
        change_ham_color.style.backgroundColor = "rgb(247 248 252/var(--tw-bg-opacity))";
        document.body.style.backgroundColor = "rgb(247 248 252/var(--tw-bg-opacity))";
        info.style.color = "black";
        btn2.style.color = "black";
        fb.style.color = "black";
        c4.style.backgroundColor = "rgb(247 248 252/var(--tw-bg-opacity))";
        hc.style.color = "black";
        hc1.style.color = "black";
        hc2.style.color = "black";
        bc1.style.backgroundColor = "#fff";
        bc2.style.backgroundColor = "#fff";
        bc3.style.backgroundColor = "#fff";
        bc4.style.backgroundColor = "#fff";
        bc5.style.backgroundColor = "#fff";
        bc6.style.backgroundColor = "#fff";
        bc1.style.boxShadow = "-2px -1px 8px antiquewhite";
        bc2.style.boxShadow = "-2px -1px 8px antiquewhite";
        bc3.style.boxShadow = "-2px -1px 8px antiquewhite";
        bc4.style.boxShadow = "-2px -1px 8px antiquewhite";
        bc5.style.boxShadow = "-2px -1px 8px antiquewhite";
        bc6.style.boxShadow = "-2px -1px 8px antiquewhite";
        slide1.style.backgroundColor = "#fff";
        slide2.style.backgroundColor = "#fff";
        slide3.style.backgroundColor = "#fff";

        const elementIds = ['id1', 'id2', 'id3', 'id4', 'id5', 'id6', 'rr', 'c1', 'c2', 'c3', 'text-info'];
        elementIds.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.style.color = "black";
            }
        });
        const elementIds1 = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6'];
        elementIds1.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.style.color = "rgb(119 124 133/var(--tw-text-opacity))";
            }
        });

        let head = document.getElementById('placement-head');
        head.style.color = "black";
        course1.style.backgroundColor = "#fff";
        course2.style.backgroundColor = "#fff";
        ct1.style.color = "black";
        ct2.style.color = "black";
        ch1.style.color = "black";
        change_color1.style.color = "black";
        var elements2 = document.getElementsByClassName("myClass");

        for (var i = 0; i < elements2.length; i++) {
            elements2[i].style.backgroundColor = "#fff";
        }
        var elements3 = document.getElementsByClassName("balo");

        for (var i = 0; i < elements3.length; i++) {
            elements3[i].style.color = "black";
        }
    });
}
Light_Effect();

function Active_Hambar() {
    hamb.addEventListener('click', () => {
        ham_responsive.style.display = (ham_responsive.style.display === 'none' || ham_responsive.style.display === '') ? 'flex' : 'none';
    });
}
Active_Hambar();
function Js_effect() {
    ScrollReveal().reveal(".main", {
        easing: "cubic-bezier(0.5, 0, 0, 1)", // Specify your desired cubic-bezier values
    });

    ScrollReveal().reveal(".container2", { easing: "ease-in" });
    ScrollReveal().reveal(".container3", { easing: "ease-in" });
    ScrollReveal().reveal(".sub-container4", { easing: "ease-in" });
    ScrollReveal().reveal(".con2", { easing: "ease-in" });
    ScrollReveal().reveal(".helper3", { easing: "ease-in" });
    ScrollReveal().reveal(".big-box", { easing: "ease-in" });
    ScrollReveal().reveal(".slider ", { easing: "ease-in" });
    ScrollReveal().reveal(".end-section ", { easing: "ease-in" });
    ScrollReveal().reveal(".end ", { easing: "ease-in" });
    ScrollReveal().reveal(".course ", { easing: "ease-in" });
    ScrollReveal().reveal(".instructor ", { easing: "ease-in" });
}

Js_effect();

