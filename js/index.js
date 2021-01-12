function clickMenuIcon() {
    var nav = document.getElementsByClassName('nav_container')[0]
    var ifclick = menuIcon.getAttribute('ifClick')
    if (ifclick === 'false') {
        menuIcon.setAttribute('ifClick', true)
        nav.style.display = 'flex'
    }
    else { 
        menuIcon.setAttribute('ifClick', false)
        nav.style.display = 'none'
    }

};

function clickLink(event) { 
    var home = document.getElementsByClassName('homepage')[0]
    var profile = document.getElementsByClassName('profile')[0]
    var resume = document.getElementsByClassName('resume')[0]
    var contact = document.getElementsByClassName('contact')[0]
    var element = event.target;
    var className = element.innerHTML
    if (className === 'Home') {
        home.style.display = 'flex';
        profile.style.display = 'none';
        resume.style.display = 'none';
        contact.style.display = 'none';
    }
    else if (className === 'Profile') { 
        home.style.display = 'none';
        profile.style.display = 'flex';
        resume.style.display = 'none';
        contact.style.display = 'none';
    }
    else if (className === 'Employment&amp;Education') { 
        home.style.display = 'none';
        profile.style.display = 'none';
        resume.style.display = 'flex';
        contact.style.display = 'none';
    }
    else { 
        home.style.display = 'none';
        profile.style.display = 'none';
        resume.style.display = 'none';
        contact.style.display = 'flex';
    }
}

function focusInput(event) { 
    var form = document.getElementsByClassName('contact__details__form')[0];
    var element = event.target;
    var elementFather = element.parentNode;
    var span = elementFather.lastChild.previousSibling;
    var label = element.nextSibling.nextSibling;
    if (form.getElementsByClassName('active').length !== 0) {
        form.getElementsByClassName('active')[0].classList.remove('active')
    }
    if (form.getElementsByClassName('activing').length !== 0) {
        form.getElementsByClassName('activing')[0].classList.remove('activing')
    }
    span.classList.add('active');
    label.classList.add('activing');
}

var menuIcon = document.getElementsByClassName('header__menuIcon')[0]
var pages = document.getElementsByClassName('link')
var contactForm = document.getElementsByClassName('contact__details__form')[0]
var allInputs = contactForm.getElementsByTagName('div')
for (var j = 0; j < pages.length; j++) { 
    pages[j].addEventListener('click',clickLink)
}

for (var i = 0; i < allInputs.length; i++) { 
    var findInput = allInputs[i].firstChild.nextSibling;
    findInput.addEventListener('focus', focusInput);
}
menuIcon.setAttribute('ifClick', false)
menuIcon.addEventListener('click',clickMenuIcon)
