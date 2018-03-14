'use strict';
import Controller from './controller.class.js';
(function(){
  let menuToggle = function menuToggle(ev){
    console.log(ev);
    if(ev.target.checked){
      document.querySelector('.nav-container.lvl-1').className = 'active nav-container lvl-1';
    }else{
      let navContainers = document.querySelectorAll('.active.nav-container');
      console.log(navContainers);
      navContainers.forEach(function(container){
        let tempClass = container.className.split(' ');
        let newClass = '';
        tempClass.forEach(function(str){
          (str != 'active') ? newClass += str + ' ' : 0;
        });
        console.log(newClass);
        container.className = newClass;
      });
    }
  };
  let navLevelChange = function navLevelChange(ev){
    console.log(ev);
  };
  console.log('starting js');
  document.getElementById('menu').addEventListener('change', function(e){
    menuToggle(e);
  });
  let navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(function(item){
    item.addEventListener('click', function(e){
      navLevelChange(e);
    });
  });
})(window);
