// Copyright 2018 The XCloud Team.
// Copyright 2017 The Kubernetes Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {Component} from '@angular/core';
import {dashboardState} from '../../dashboard/state';
import {MenuItem} from './menu';
import {MenuList} from './menu.config';

@Component(
    {selector: 'xc-sidebar', templateUrl: 'sidebar.component.html', styleUrls: ['./style.scss']})

export class SidebarComponent {
  public menuList: MenuItem[] = MenuList;

  getDashboardStateName(): string {
    return dashboardState.name;
  }
}

// The Moving Tab (the element that is moving on the sidebar, when you switch the pages) is depended
// on jQuery because it is doing a lot of calculations and changes based on Bootstrap collapse
// elements. If you have a better suggestion please send it to hello@creative-tim.com and we would
// be glad to talk more about this improvement. Thank you!

// var mda: any = {
//   movingTab: '<div class="sidebar-moving-tab"/>',
//   isChild: false,
//   sidebarMenuActive: '',
//   movingTabInitialised: false,
//   distance: 0,
//
//   setMovingTabPosition: function ($currentActive: any) {
//     $currentActive = mda.sidebarMenuActive;
//     mda.distance = $currentActive.parent().position().top - 10;
//
//     if ($currentActive.closest('.collapse').length != 0) {
//       var parent_distance = $currentActive.closest('.collapse').parent().position().top;
//       mda.distance = mda.distance + parent_distance;
//     }
//
//     mda.moveTab();
//   },
//   initMovingTab: function () {
//     mda.movingTab = $(mda.movingTab);
//
//     mda.sidebarMenuActive = $('.sidebar .nav-container > .nav > li.active >
//     a:not([data-toggle="collapse"]');
//
//     if (mda.sidebarMenuActive.length != 0) {
//       mda.setMovingTabPosition(mda.sidebarMenuActive);
//     } else {
//       mda.sidebarMenuActive = $('.sidebar .nav-container .nav > li.active .collapse li.active >
//       a'); mda.isChild = true; this.setParentCollapse();
//     }
//
//     mda.sidebarMenuActive.parent().addClass('visible');
//
//     var button_text = mda.sidebarMenuActive.html();
//     mda.movingTab.html(button_text);
//
//     $('.sidebar .nav-container').append(mda.movingTab);
//
//     if (window.history && window.history.pushState) {
//       $(window).on('popstate', function () {
//
//         setTimeout(function () {
//           mda.sidebarMenuActive = $('.sidebar .nav-container .nav li.active
//           a:not([data-toggle="collapse"])');
//
//           if (mda.isChild == true) {
//             this.setParentCollapse();
//           }
//           clearTimeout(sidebarTimer);
//
//           var $currentActive = mda.sidebarMenuActive;
//
//           $('.sidebar .nav-container .nav li').removeClass('visible');
//
//           var $movingTab = mda.movingTab;
//           $movingTab.addClass('moving');
//
//           $movingTab.css('padding-left', $currentActive.css('padding-left'));
//           var button_text = $currentActive.html();
//
//           mda.setMovingTabPosition($currentActive);
//
//           sidebarTimer = setTimeout(function () {
//             $movingTab.removeClass('moving');
//             $currentActive.parent().addClass('visible');
//           }, 650);
//
//           setTimeout(function () {
//             $movingTab.html(button_text);
//           }, 10);
//         }, 10);
//
//       });
//     }
//
//     $('.sidebar .nav .collapse').on('hidden.bs.collapse', function () {
//       var $currentActive = mda.sidebarMenuActive;
//
//       mda.distance = $currentActive.parent().position().top - 10;
//
//       if ($currentActive.closest('.collapse').length != 0) {
//         var parent_distance = $currentActive.closest('.collapse').parent().position().top;
//         mda.distance = mda.distance + parent_distance;
//       }
//
//       mda.moveTab();
//     });
//
//     $('.sidebar .nav .collapse').on('shown.bs.collapse', function () {
//       var $currentActive = mda.sidebarMenuActive;
//
//       mda.distance = $currentActive.parent().position().top - 10;
//
//       if ($currentActive.closest('.collapse').length != 0) {
//         var parent_distance = $currentActive.closest('.collapse').parent().position().top;
//         mda.distance = mda.distance + parent_distance;
//       }
//
//       mda.moveTab();
//     });
//
//     $('.sidebar .nav-container .nav > li > a:not([data-toggle="collapse"])').click(function () {
//       mda.sidebarMenuActive = $(this);
//       var $parent = $(this).parent();
//
//       if (mda.sidebarMenuActive.closest('.collapse').length == 0) {
//         mda.isChild = false;
//       }
//
//       // we call the animation of the moving tab
//       clearTimeout(sidebarTimer);
//
//       var $currentActive = mda.sidebarMenuActive;
//
//       $('.sidebar .nav-container .nav li').removeClass('visible');
//
//       var $movingTab = mda.movingTab;
//       $movingTab.addClass('moving');
//
//       $movingTab.css('padding-left', $currentActive.css('padding-left'));
//       var button_text = $currentActive.html();
//
//       var $currentActive = mda.sidebarMenuActive;
//       mda.distance = $currentActive.parent().position().top - 10;
//
//       if ($currentActive.closest('.collapse').length != 0) {
//         var parent_distance = $currentActive.closest('.collapse').parent().position().top;
//         mda.distance = mda.distance + parent_distance;
//       }
//
//       mda.moveTab();
//
//       sidebarTimer = setTimeout(function () {
//         $movingTab.removeClass('moving');
//         $currentActive.parent().addClass('visible');
//       }, 650);
//
//       setTimeout(function () {
//         $movingTab.html(button_text);
//       }, 10);
//     });
//   },
//   setParentCollapse: function () {
//     if (mda.isChild == true) {
//       var $sidebarParent = mda.sidebarMenuActive.parent().parent().parent();
//       var collapseId = $sidebarParent.siblings('a').attr("href");
//
//       $(collapseId).collapse("show");
//
//       $(collapseId).collapse()
//         .on('shown.bs.collapse', () => {
//           mda.setMovingTabPosition();
//         })
//         .on('hidden.bs.collapse', () => {
//           mda.setMovingTabPosition();
//         });
//     }
//   },
//   animateMovingTab: function () {
//     clearTimeout(sidebarTimer);
//
//     var $currentActive = mda.sidebarMenuActive;
//
//     $('.sidebar .nav-container .nav li').removeClass('visible');
//
//     var $movingTab = mda.movingTab;
//     $movingTab.addClass('moving');
//
//     $movingTab.css('padding-left', $currentActive.css('padding-left'));
//     var button_text = $currentActive.html();
//
//     mda.setMovingTabPosition($currentActive);
//
//     sidebarTimer = setTimeout(function () {
//       $movingTab.removeClass('moving');
//       $currentActive.parent().addClass('visible');
//     }, 650);
//
//     setTimeout(function () {
//       $movingTab.html(button_text);
//     }, 10);
//   },
//   moveTab: function () {
//     mda.movingTab.css({
//       'transform': 'translate3d(0px,' + mda.distance + 'px, 0)',
//       '-webkit-transform': 'translate3d(0px,' + mda.distance + 'px, 0)',
//       '-moz-transform': 'translate3d(0px,' + mda.distance + 'px, 0)',
//       '-ms-transform': 'translate3d(0px,' + mda.distance + 'px, 0)',
//       '-o-transform': 'translate3d(0px,' + mda.distance + 'px, 0)'
//     });
//   }
// };
