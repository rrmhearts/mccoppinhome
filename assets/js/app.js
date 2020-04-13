
const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.nav-link');

window.onload = (event) => {
   // window.scrollTo(0,0)
}

document.body.addEventListener('click', e => {
    window.removeEventListener('scroll', changeLinkState);

    const href = e.target.href;
    if (!href) return;

    const id = href.split('#').pop();

    const navlink = id + '_nav';
    const target = document.getElementById(navlink);
    console.log('links: ', links);
    links.forEach(link => {
        console.log(link)
        link.classList.remove('active');
    });

    if (!target) return;

    target.classList.add('active');

    /*
        I'm using css instead.
    */
    //e.preventDefault();
    // history.pushState({}, document.title, href);
    // target.scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'start'
    // });
    setTimeout(() => {
        window.addEventListener('scroll', changeLinkState);

    }, 1000)
});

function changeLinkState() {
    let index = sections.length;

    while (--index && window.scrollY + (index > 0 ? -800 : -500) < sections[index].offsetTop) { }
    console.log(index, " ", window.scrollY, " ", sections[index].offsetTop);
//560    446  d 114
//1500   602  d 898
//2410  1658  d 752
//3310  2714  d 596
console.log(links)
    links.forEach((link) => link.classList.remove('active'));
    if (window.scrollY > 460)
        links[index].classList.add('active');
}

window.addEventListener('scroll', changeLinkState);

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("topbar").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    if (screen.width < 1024) {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("topbar").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";
    }
}

function toggle() {
    let side = document.getElementById("mySidenav");
    let style = window.getComputedStyle(side);
    let width = style.getPropertyValue('width');
    console.log("toggle: ", width);
    if (width === "0px")
        openNav();
    else
        closeNav();
}