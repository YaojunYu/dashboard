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

import {Component, OnInit} from '@angular/core';
import {StateService} from '@uirouter/core';

import {AssetsService} from '../common/services/global/assets';
import {NavService} from '../common/services/nav/service';
import {overviewState} from '../overview/state';

@Component({
  selector: 'xc-chrome',
  templateUrl: './template.html',
  styleUrls: ['./style.scss'],
})
export class ChromeComponent implements OnInit {
  loading = false;
  sidebarMiniActive = false;
  navOpen = false;

  constructor(public assets: AssetsService, private readonly navService: NavService) {}

  getOverviewStateName(): string {
    return overviewState.name;
  }

  isSystemBannerVisible(): boolean {
    return false;
  }

  getSystemBannerClass(): string {
    return 'xc-bg-warning';
  }

  getSystemBannerMessage(): string {
    return `<b>System is going to be shut down in 5 min...</b>`;
  }

  switchMini(): void {
    this.sidebarMiniActive = !this.sidebarMiniActive;
  }

  open(): void {
    this.navOpen = !this.navOpen;
  }

  ngOnInit(): void {
    this.navService.setSwitcher(this);
  }
}
