// 'use strict';
// $(function() {

//   var targetSelector ='.section',
//       activeClass = 'section--active',
//       sections = [],
//       activeIndex = -1,
//       isScrolling=false,
//       isStoped = false,
//       lastScrool,
//       windowHeight,
//       direction,
//       changeIndex=false,
//       speed = 800,
//       $targets = $(targetSelector);


//   setSections();
//   checkScroll();
//   $(document).scroll(function(e){
//     checkScroll();
//   });

//   $(window).resize(function() {
//     setSections();
//     checkScroll();
//   });

//   function setSections() {
//     lastScrool=$(document).scrollTop();
//     windowHeight = document.documentElement.clientHeight;
//     $targets.each(function(index,element){
//       sections[index] = {
//         'top'    : $(element).offset().top,
//         'bottom' : $(element).offset().top + $(element).outerHeight() ,
//         'larger' :  $(element).outerHeight() >= windowHeight ? true : false
//       }
//     });
//   }

//   function isSlideDown(scTop,index) {
//     if(sections[index].larger) {
//       if((windowHeight + scTop) <= sections[index].bottom)
//         return false;
//       return true;
//     }
//     else {
//       isStoped=!isStoped;
//       return true;
//     }
//   }

//   function isSlideUp(scTop,index) {
//     if(changeIndex && index<sections.length)
//       index++;

//     if(scTop < sections[index].top)
//       return true;
//     return false;
//   }

//   function checkScroll() {
//     var scTop = $(document).scrollTop();

//     if(lastScrool<scTop) {
//       if(direction!='down')
//         isStoped=false;
//       direction='down';
//     }
//     else {
//       if(direction!='up')
//         isStoped=false;
//       direction= 'up';
//     }

//     lastScrool=scTop;

//     for(var i = 0; i < sections.length; i++) {
//       if(scTop >= sections[i].top && scTop < sections[i].bottom) {
//         if(activeIndex!=i) {
//           activeIndex=i;
//           changeIndex=true;
//         }
//         else
//           changeIndex=false;
//       }
//     }

//     if(direction=='down') {
//       if(isSlideDown(scTop,activeIndex))
//       {
//         if(!isScrolling && !isStoped)
//         {
//           isScrolling=true;
//           $targets.removeClass(activeClass).eq((activeIndex+1) >= sections.length ? activeIndex : (activeIndex+1)).addClass(activeClass);
//           $("html,body").animate({ scrollTop: sections[activeIndex].bottom }, speed,function(){
//             isScrolling=false;
//           });
//         }
//       }
//     }
//     else {
//       if(isSlideUp(scTop,activeIndex))
//       {
//         if(!isScrolling)
//         {
//           isScrolling=true;
//           $targets.removeClass(activeClass).eq(activeIndex).addClass(activeClass);
//           $("html,body").animate({ scrollTop: sections[activeIndex].bottom - windowHeight }, speed,function(){
//             isScrolling=false;

//           });
//         }
//       }
//     }
//   }
// });
