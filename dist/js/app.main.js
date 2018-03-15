(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function Controller() {
  _classCallCheck(this, Controller);
};

exports.default = Controller;

},{}],2:[function(require,module,exports){
'use strict';

var _controllerClass = require('./controller.class.js');

var _controllerClass2 = _interopRequireDefault(_controllerClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var menuToggle = function menuToggle(ev) {
    console.log(ev);
    if (ev.target.checked) {
      document.querySelector('.nav-container.lvl-1').className = 'active nav-container lvl-1';
    } else {
      var navContainers = document.querySelectorAll('.active.nav-container');
      console.log(navContainers);
      navContainers.forEach(function (container) {
        var tempClass = container.className.split(' ');
        var newClass = '';
        tempClass.forEach(function (str) {
          str != 'active' ? newClass += str + ' ' : 0;
        });
        console.log(newClass);
        container.className = newClass;
      });
    }
  };
  var navLevelChange = function navLevelChange(ev) {
    console.log(ev);
    var pastClass = ev.target.nextElementSibling.className.split(' ');
    console.log(pastClass);
    var tempClass = '';
    var newClass = 'active ' + ev.target.nextElementSibling.className;
    ev.target.nextElementSibling.className = newClass;
  };
  var navBackLevel = function navBackLevel(ev) {
    console.log(ev);
    var parentClass = ev.target.parentNode.className.split(' ');
    var newClass = '';
    var counter = 0;
    parentClass.forEach(function (c) {
      if (c != "active") {
        newClass += c;
        counter < parentClass.length - 2 ? newClass += ' ' : 0;
      }
    });
    console.log(newClass);
    ev.target.parentNode.className = newClass;
  };
  console.log('starting js');
  document.getElementById('menu').addEventListener('change', function (e) {
    menuToggle(e);
  });
  var navItems = document.querySelectorAll('.sub-items-btn');
  navItems.forEach(function (item) {
    item.addEventListener('click', function (e) {
      navLevelChange(e);
    });
  });
  var navBackItems = document.querySelectorAll('.back');
  navBackItems.forEach(function (item) {
    item.addEventListener('click', function (e) {
      navBackLevel(e);
    });
  });
})(window);

},{"./controller.class.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvY29udHJvbGxlci5jbGFzcy5qcyIsImFwcC9qcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7Ozs7Ozs7O0lBQ3FCLFUsR0FDbkIsc0JBQWM7QUFBQTtBQUNiLEM7O2tCQUZrQixVOzs7QUNEckI7O0FBQ0E7Ozs7OztBQUNBLENBQUMsWUFBVTtBQUNULE1BQUksYUFBYSxTQUFTLFVBQVQsQ0FBb0IsRUFBcEIsRUFBdUI7QUFDdEMsWUFBUSxHQUFSLENBQVksRUFBWjtBQUNBLFFBQUcsR0FBRyxNQUFILENBQVUsT0FBYixFQUFxQjtBQUNuQixlQUFTLGFBQVQsQ0FBdUIsc0JBQXZCLEVBQStDLFNBQS9DLEdBQTJELDRCQUEzRDtBQUNELEtBRkQsTUFFSztBQUNILFVBQUksZ0JBQWdCLFNBQVMsZ0JBQVQsQ0FBMEIsdUJBQTFCLENBQXBCO0FBQ0EsY0FBUSxHQUFSLENBQVksYUFBWjtBQUNBLG9CQUFjLE9BQWQsQ0FBc0IsVUFBUyxTQUFULEVBQW1CO0FBQ3ZDLFlBQUksWUFBWSxVQUFVLFNBQVYsQ0FBb0IsS0FBcEIsQ0FBMEIsR0FBMUIsQ0FBaEI7QUFDQSxZQUFJLFdBQVcsRUFBZjtBQUNBLGtCQUFVLE9BQVYsQ0FBa0IsVUFBUyxHQUFULEVBQWE7QUFDNUIsaUJBQU8sUUFBUixHQUFvQixZQUFZLE1BQU0sR0FBdEMsR0FBNEMsQ0FBNUM7QUFDRCxTQUZEO0FBR0EsZ0JBQVEsR0FBUixDQUFZLFFBQVo7QUFDQSxrQkFBVSxTQUFWLEdBQXNCLFFBQXRCO0FBQ0QsT0FSRDtBQVNEO0FBQ0YsR0FqQkQ7QUFrQkEsTUFBSSxpQkFBaUIsU0FBUyxjQUFULENBQXdCLEVBQXhCLEVBQTJCO0FBQzlDLFlBQVEsR0FBUixDQUFZLEVBQVo7QUFDQSxRQUFJLFlBQVksR0FBRyxNQUFILENBQVUsa0JBQVYsQ0FBNkIsU0FBN0IsQ0FBdUMsS0FBdkMsQ0FBNkMsR0FBN0MsQ0FBaEI7QUFDQSxZQUFRLEdBQVIsQ0FBWSxTQUFaO0FBQ0EsUUFBSSxZQUFZLEVBQWhCO0FBQ0EsUUFBSSxXQUFXLFlBQVksR0FBRyxNQUFILENBQVUsa0JBQVYsQ0FBNkIsU0FBeEQ7QUFDQSxPQUFHLE1BQUgsQ0FBVSxrQkFBVixDQUE2QixTQUE3QixHQUF5QyxRQUF6QztBQUNELEdBUEQ7QUFRQSxNQUFJLGVBQWUsU0FBUyxZQUFULENBQXNCLEVBQXRCLEVBQXlCO0FBQzFDLFlBQVEsR0FBUixDQUFZLEVBQVo7QUFDQSxRQUFJLGNBQWMsR0FBRyxNQUFILENBQVUsVUFBVixDQUFxQixTQUFyQixDQUErQixLQUEvQixDQUFxQyxHQUFyQyxDQUFsQjtBQUNBLFFBQUksV0FBVyxFQUFmO0FBQ0EsUUFBSSxVQUFVLENBQWQ7QUFDQSxnQkFBWSxPQUFaLENBQW9CLFVBQVMsQ0FBVCxFQUFXO0FBQzdCLFVBQUcsS0FBSyxRQUFSLEVBQWtCO0FBQ2hCLG9CQUFZLENBQVo7QUFDQyxrQkFBVyxZQUFZLE1BQVosR0FBcUIsQ0FBakMsR0FBdUMsWUFBWSxHQUFuRCxHQUF5RCxDQUF6RDtBQUNEO0FBQ0YsS0FMRDtBQU1BLFlBQVEsR0FBUixDQUFZLFFBQVo7QUFDQSxPQUFHLE1BQUgsQ0FBVSxVQUFWLENBQXFCLFNBQXJCLEdBQWlDLFFBQWpDO0FBQ0QsR0FiRDtBQWNBLFVBQVEsR0FBUixDQUFZLGFBQVo7QUFDQSxXQUFTLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0MsZ0JBQWhDLENBQWlELFFBQWpELEVBQTJELFVBQVMsQ0FBVCxFQUFXO0FBQ3BFLGVBQVcsQ0FBWDtBQUNELEdBRkQ7QUFHQSxNQUFJLFdBQVcsU0FBUyxnQkFBVCxDQUEwQixnQkFBMUIsQ0FBZjtBQUNBLFdBQVMsT0FBVCxDQUFpQixVQUFTLElBQVQsRUFBYztBQUM3QixTQUFLLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFVBQVMsQ0FBVCxFQUFXO0FBQ3hDLHFCQUFlLENBQWY7QUFDRCxLQUZEO0FBR0QsR0FKRDtBQUtBLE1BQUksZUFBZSxTQUFTLGdCQUFULENBQTBCLE9BQTFCLENBQW5CO0FBQ0EsZUFBYSxPQUFiLENBQXFCLFVBQVMsSUFBVCxFQUFjO0FBQ2pDLFNBQUssZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBUyxDQUFULEVBQVc7QUFDeEMsbUJBQWEsQ0FBYjtBQUNELEtBRkQ7QUFHRCxHQUpEO0FBS0QsQ0F6REQsRUF5REcsTUF6REgiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfXJldHVybiBlfSkoKSIsIid1c2Ugc3RyaWN0JztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyLmNsYXNzLmpzJztcclxuKGZ1bmN0aW9uKCl7XHJcbiAgbGV0IG1lbnVUb2dnbGUgPSBmdW5jdGlvbiBtZW51VG9nZ2xlKGV2KXtcclxuICAgIGNvbnNvbGUubG9nKGV2KTtcclxuICAgIGlmKGV2LnRhcmdldC5jaGVja2VkKXtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1jb250YWluZXIubHZsLTEnKS5jbGFzc05hbWUgPSAnYWN0aXZlIG5hdi1jb250YWluZXIgbHZsLTEnO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIGxldCBuYXZDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjdGl2ZS5uYXYtY29udGFpbmVyJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKG5hdkNvbnRhaW5lcnMpO1xyXG4gICAgICBuYXZDb250YWluZXJzLmZvckVhY2goZnVuY3Rpb24oY29udGFpbmVyKXtcclxuICAgICAgICBsZXQgdGVtcENsYXNzID0gY29udGFpbmVyLmNsYXNzTmFtZS5zcGxpdCgnICcpO1xyXG4gICAgICAgIGxldCBuZXdDbGFzcyA9ICcnO1xyXG4gICAgICAgIHRlbXBDbGFzcy5mb3JFYWNoKGZ1bmN0aW9uKHN0cil7XHJcbiAgICAgICAgICAoc3RyICE9ICdhY3RpdmUnKSA/IG5ld0NsYXNzICs9IHN0ciArICcgJyA6IDA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3Q2xhc3MpO1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBuZXdDbGFzcztcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBsZXQgbmF2TGV2ZWxDaGFuZ2UgPSBmdW5jdGlvbiBuYXZMZXZlbENoYW5nZShldil7XHJcbiAgICBjb25zb2xlLmxvZyhldik7XHJcbiAgICBsZXQgcGFzdENsYXNzID0gZXYudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc05hbWUuc3BsaXQoJyAnKTtcclxuICAgIGNvbnNvbGUubG9nKHBhc3RDbGFzcyk7XHJcbiAgICBsZXQgdGVtcENsYXNzID0gJyc7XHJcbiAgICBsZXQgbmV3Q2xhc3MgPSAnYWN0aXZlICcgKyBldi50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTmFtZTtcclxuICAgIGV2LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NOYW1lID0gbmV3Q2xhc3M7XHJcbiAgfTtcclxuICBsZXQgbmF2QmFja0xldmVsID0gZnVuY3Rpb24gbmF2QmFja0xldmVsKGV2KXtcclxuICAgIGNvbnNvbGUubG9nKGV2KTtcclxuICAgIGxldCBwYXJlbnRDbGFzcyA9IGV2LnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTmFtZS5zcGxpdCgnICcpO1xyXG4gICAgbGV0IG5ld0NsYXNzID0gJyc7XHJcbiAgICBsZXQgY291bnRlciA9IDA7XHJcbiAgICBwYXJlbnRDbGFzcy5mb3JFYWNoKGZ1bmN0aW9uKGMpe1xyXG4gICAgICBpZihjICE9IFwiYWN0aXZlXCIpIHtcclxuICAgICAgICBuZXdDbGFzcyArPSBjO1xyXG4gICAgICAgIChjb3VudGVyIDwgKHBhcmVudENsYXNzLmxlbmd0aCAtIDIpKSA/IG5ld0NsYXNzICs9ICcgJyA6IDA7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2cobmV3Q2xhc3MpO1xyXG4gICAgZXYudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NOYW1lID0gbmV3Q2xhc3M7XHJcbiAgfTtcclxuICBjb25zb2xlLmxvZygnc3RhcnRpbmcganMnKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgbWVudVRvZ2dsZShlKTtcclxuICB9KTtcclxuICBsZXQgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3ViLWl0ZW1zLWJ0bicpO1xyXG4gIG5hdkl0ZW1zLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgIG5hdkxldmVsQ2hhbmdlKGUpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgbGV0IG5hdkJhY2tJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYWNrJyk7XHJcbiAgbmF2QmFja0l0ZW1zLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgIG5hdkJhY2tMZXZlbChlKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KSh3aW5kb3cpO1xyXG4iXX0=
