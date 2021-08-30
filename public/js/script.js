document.getElementById('about').addEventListener('click', function() {
  document.querySelector('.collection-shw').style.display = 'initial';
  setTimeout(() => {
    document.querySelector('.collection-shw').style.display = 'none';
  }, 2000);
});

document.getElementById('services').addEventListener('click', function() {
  document.querySelector('#collection-shw').style.display = 'initial';
  setTimeout(() => {
    document.querySelector('#collection-shw').style.display = 'none';
  }, 2000);
});

document.getElementById('contact').addEventListener('click', function() {
  document.querySelector('.collection-show').style.display = 'initial';
  setTimeout(() => {
    document.querySelector('.collection-show').style.display = 'none';
  }, 2000);
});


document.getElementById('search').addEventListener('click', function() {
  document.querySelector('#collection-showing').style.display = 'initial';
  setTimeout(() => {
    document.querySelector('#collection-showing').style.display = 'none';
  }, 2000);
});

// let toggle = document.querySelector('#toggle-button');
// let collapse = document.querySelector('.nav-list');
// let collapse2 = document.querySelector('.collection-nav');
// let collapse3 = document.querySelector('.nav-nxt');

// toggle.addEventListener('click', function() {
//   collapse.forEach(col=>col.classList.toggle('collapse-toggle'))
// })

// let submitcountry = document.getElementById('submit');

// submitcountry.addEventListener('click', function() {
//   let link = document.querySelector('.link-1')

//   if(link.value === '') {
//     alert('error:404')
//   } else{
//     console.log('Value is correct');
//   }
// });



document.getElementById('cancel').addEventListener('click', function(e) {
  document.getElementById('third-section').style.display = 'none';
  e.preventDefault();
})

document.getElementById('bell').addEventListener('click', function(e) {
  document.getElementById('first-section').style.display = 'block';

  e.preventDefault();
})

document.getElementById('cancel-top').addEventListener('click', function(e) {
  document.getElementById('first-section').style.display = 'none';
  e.preventDefault();
})
