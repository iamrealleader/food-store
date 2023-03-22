 
  let toggle = true;
  let menueIcon = document.getElementById('menue-icon');
  let search = document.querySelector('.search');


  document.getElementById('search-click').addEventListener('click', () =>{
    document.getElementById('search').value = '';
    })

  document.getElementById('search-btn').addEventListener('click', () =>{
     search.classList.toggle('search-active');
     menue.classList.remove('menue-active');
     user.classList.remove('user-active');
    })

  let menue = document.querySelector('.primary-header ul');
  document.getElementById('menue-btn').addEventListener('click', () =>{

    if(toggle)
    {
      menueIcon.src = '../assets/cross.png';
      toggle = false
    }
    else
    {
      menueIcon.src = '../assets/menu-icon 1.png';
      toggle = true;
    }

     menue.classList.toggle('menue-active');
     search.classList.remove('search-active');
     user.classList.remove('user-active');
    })

  let user = document.querySelector('.primary-header .user');
  document.getElementById('user-btn').addEventListener('click', () =>{
     user.classList.toggle('user-active');
     search.classList.remove('search-active');
     menue.classList.remove('menue-active');
    })


    let slides = document.querySelectorAll('.container .slide');
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');
    let index = 0;

 

    next.addEventListener('click', () => {
       slides[index].classList.remove('slide-active');
       index = (index + 1) % slides.length;
       slides[index].classList.add('slide-active');
    })

    prev.addEventListener('click', () => {
       slides[index].classList.remove('slide-active');
       index = ((index - 1) + slides.length) % slides.length;
       slides[index].classList.add('slide-active');
    })
