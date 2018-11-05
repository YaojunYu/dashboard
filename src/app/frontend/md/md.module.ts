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

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {MdTableComponent} from './md-table/md-table.component';

export interface DropdownLink {
  title: string;
  iconClass?: string;
  routerLink?: string;
}

export enum NavItemType {
  Sidebar = 1,     // Only ever shown on sidebar
  NavbarLeft = 2,  // Left-aligned icon-only link on navbar in desktop mode, shown above sidebar
                   // items on collapsed sidebar in mobile mode
  NavbarRight = 3  // Right-aligned link on navbar in desktop mode, shown above sidebar items on
                   // collapsed sidebar in mobile mode
}

export interface NavItem {
  type: NavItemType;
  title: string;
  routerLink?: string;
  iconClass?: string;
  numNotifications?: number;
  dropdownItems?: (DropdownLink|'separator')[];
}

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [MdTableComponent],
  exports: [
    MdTableComponent,
  ]
})
export class MdModule {}
