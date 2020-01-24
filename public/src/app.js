
const nav = document.getElementById('nav')

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled >= 82) {
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    }
    else {
        nav.style.backgroundColor = 'transparent';
    }
})

// Mobile Menu Settings
const openBtn = document.getElementById('open-btn'),
    closeBtn = document.getElementById('close-btn'),
    overlay = document.getElementById('mob-overlay');

openBtn.addEventListener('click', function(){
    overlay.style.display = 'block';
    openBtn.style.display = 'none';
})


closeBtn.addEventListener('click', function () {
    overlay.style.display = 'none';
    openBtn.style.display = 'block';
})

closeOv = () =>{
    overlay.style.display = 'none';
    openBtn.style.display = 'block';
}




//Add footer year
var d = new Date,
    footDate = d.getFullYear();

document.getElementById('foot-year').innerHTML = footDate;