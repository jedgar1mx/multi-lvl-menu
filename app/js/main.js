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
    let pastClass = ev.target.nextElementSibling.className.split(' ');
    console.log(pastClass);
    let tempClass = '';
    let newClass = 'active ' + ev.target.nextElementSibling.className;
    ev.target.nextElementSibling.className = newClass;
  };
  let navBackLevel = function navBackLevel(ev){
    console.log(ev);
    let parentClass = ev.target.parentNode.className.split(' ');
    let newClass = '';
    let counter = 0;
    parentClass.forEach(function(c){
      if(c != "active") {
        newClass += c;
        (counter < (parentClass.length - 2)) ? newClass += ' ' : 0;
      }
    });
    console.log(newClass);
    ev.target.parentNode.className = newClass;
  };
  console.log('starting js');
  document.getElementById('menu').addEventListener('change', function(e){
    menuToggle(e);
  });
  let navItems = document.querySelectorAll('.sub-items-btn');
  navItems.forEach(function(item){
    item.addEventListener('click', function(e){
      navLevelChange(e);
    });
  });
  let navBackItems = document.querySelectorAll('.back');
  navBackItems.forEach(function(item){
    item.addEventListener('click', function(e){
      navBackLevel(e);
    });
  });
})(window);
