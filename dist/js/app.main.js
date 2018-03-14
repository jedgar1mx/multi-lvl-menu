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
  };
  console.log('starting js');
  document.getElementById('menu').addEventListener('change', function (e) {
    menuToggle(e);
  });
  var navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(function (item) {
    item.addEventListener('click', function (e) {
      navLevelChange(e);
    });
  });
})(window);

},{"./controller.class.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvY29udHJvbGxlci5jbGFzcy5qcyIsImFwcC9qcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7Ozs7Ozs7O0lBQ3FCLFUsR0FDbkIsc0JBQWM7QUFBQTtBQUNiLEM7O2tCQUZrQixVOzs7QUNEckI7O0FBQ0E7Ozs7OztBQUNBLENBQUMsWUFBVTtBQUNULE1BQUksYUFBYSxTQUFTLFVBQVQsQ0FBb0IsRUFBcEIsRUFBdUI7QUFDdEMsWUFBUSxHQUFSLENBQVksRUFBWjtBQUNBLFFBQUcsR0FBRyxNQUFILENBQVUsT0FBYixFQUFxQjtBQUNuQixlQUFTLGFBQVQsQ0FBdUIsc0JBQXZCLEVBQStDLFNBQS9DLEdBQTJELDRCQUEzRDtBQUNELEtBRkQsTUFFSztBQUNILFVBQUksZ0JBQWdCLFNBQVMsZ0JBQVQsQ0FBMEIsdUJBQTFCLENBQXBCO0FBQ0EsY0FBUSxHQUFSLENBQVksYUFBWjtBQUNBLG9CQUFjLE9BQWQsQ0FBc0IsVUFBUyxTQUFULEVBQW1CO0FBQ3ZDLFlBQUksWUFBWSxVQUFVLFNBQVYsQ0FBb0IsS0FBcEIsQ0FBMEIsR0FBMUIsQ0FBaEI7QUFDQSxZQUFJLFdBQVcsRUFBZjtBQUNBLGtCQUFVLE9BQVYsQ0FBa0IsVUFBUyxHQUFULEVBQWE7QUFDNUIsaUJBQU8sUUFBUixHQUFvQixZQUFZLE1BQU0sR0FBdEMsR0FBNEMsQ0FBNUM7QUFDRCxTQUZEO0FBR0EsZ0JBQVEsR0FBUixDQUFZLFFBQVo7QUFDQSxrQkFBVSxTQUFWLEdBQXNCLFFBQXRCO0FBQ0QsT0FSRDtBQVNEO0FBQ0YsR0FqQkQ7QUFrQkEsTUFBSSxpQkFBaUIsU0FBUyxjQUFULENBQXdCLEVBQXhCLEVBQTJCO0FBQzlDLFlBQVEsR0FBUixDQUFZLEVBQVo7QUFDRCxHQUZEO0FBR0EsVUFBUSxHQUFSLENBQVksYUFBWjtBQUNBLFdBQVMsY0FBVCxDQUF3QixNQUF4QixFQUFnQyxnQkFBaEMsQ0FBaUQsUUFBakQsRUFBMkQsVUFBUyxDQUFULEVBQVc7QUFDcEUsZUFBVyxDQUFYO0FBQ0QsR0FGRDtBQUdBLE1BQUksV0FBVyxTQUFTLGdCQUFULENBQTBCLFdBQTFCLENBQWY7QUFDQSxXQUFTLE9BQVQsQ0FBaUIsVUFBUyxJQUFULEVBQWM7QUFDN0IsU0FBSyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixVQUFTLENBQVQsRUFBVztBQUN4QyxxQkFBZSxDQUFmO0FBQ0QsS0FGRDtBQUdELEdBSkQ7QUFLRCxDQWhDRCxFQWdDRyxNQWhDSCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9cmV0dXJuIGV9KSgpIiwiJ3VzZSBzdHJpY3QnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXIuY2xhc3MuanMnO1xyXG4oZnVuY3Rpb24oKXtcclxuICBsZXQgbWVudVRvZ2dsZSA9IGZ1bmN0aW9uIG1lbnVUb2dnbGUoZXYpe1xyXG4gICAgY29uc29sZS5sb2coZXYpO1xyXG4gICAgaWYoZXYudGFyZ2V0LmNoZWNrZWQpe1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWNvbnRhaW5lci5sdmwtMScpLmNsYXNzTmFtZSA9ICdhY3RpdmUgbmF2LWNvbnRhaW5lciBsdmwtMSc7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgbGV0IG5hdkNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWN0aXZlLm5hdi1jb250YWluZXInKTtcclxuICAgICAgY29uc29sZS5sb2cobmF2Q29udGFpbmVycyk7XHJcbiAgICAgIG5hdkNvbnRhaW5lcnMuZm9yRWFjaChmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICAgIGxldCB0ZW1wQ2xhc3MgPSBjb250YWluZXIuY2xhc3NOYW1lLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgbGV0IG5ld0NsYXNzID0gJyc7XHJcbiAgICAgICAgdGVtcENsYXNzLmZvckVhY2goZnVuY3Rpb24oc3RyKXtcclxuICAgICAgICAgIChzdHIgIT0gJ2FjdGl2ZScpID8gbmV3Q2xhc3MgKz0gc3RyICsgJyAnIDogMDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdDbGFzcyk7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IG5ld0NsYXNzO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIGxldCBuYXZMZXZlbENoYW5nZSA9IGZ1bmN0aW9uIG5hdkxldmVsQ2hhbmdlKGV2KXtcclxuICAgIGNvbnNvbGUubG9nKGV2KTtcclxuICB9O1xyXG4gIGNvbnNvbGUubG9nKCdzdGFydGluZyBqcycpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51JykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oZSl7XHJcbiAgICBtZW51VG9nZ2xlKGUpO1xyXG4gIH0pO1xyXG4gIGxldCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtaXRlbScpO1xyXG4gIG5hdkl0ZW1zLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgIG5hdkxldmVsQ2hhbmdlKGUpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pKHdpbmRvdyk7XHJcbiJdfQ==
