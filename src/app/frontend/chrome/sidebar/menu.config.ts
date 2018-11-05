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

import {dashboardState} from '../../dashboard/state';
import {overviewState} from '../../overview/state';
import {clusterState} from '../../resource/cluster/state';
import {ingressListState} from '../../resource/discovery/ingress/list/state';
import {serviceListState} from '../../resource/discovery/service/list/state';
import {serviceState} from '../../resource/discovery/service/state';
import {deploymentListState} from '../../resource/workloads/deployment/list/state';
import {podListState} from '../../resource/workloads/pod/list/state';
import {replicaSetListState} from '../../resource/workloads/replicaset/list/state';
import {settingsState} from '../../settings/state';

import {MenuItem} from './menu';

export const MenuList: MenuItem[] = [
  {state: dashboardState.name, title: '首页', icon: 'palette', children: null},
  {state: overviewState.name, title: '应用', icon: 'apps'},
  {state: clusterState.name, title: '流水线', icon: 'swap_calls', children: null},
  {state: deploymentListState.name, title: '微服务', icon: 'select_all'}, {
    state: serviceState.name,
    title: '仓库',
    icon: 'storage',
    children: [
      {state: serviceListState.name, title: '源码仓库', icon: 'code'},
      {state: podListState.name, title: '镜像仓库', icon: 'filter_none'},
      {state: ingressListState.name, title: '应用仓库', icon: 'gradient'},
      {state: replicaSetListState.name, title: '制品库', icon: 'archive'},
    ]
  },
  {
    state: null,
    title: '光速市场',
    icon: 'business',
    children: [
      {state: '/tables/regular', title: '光速应用', icon: 'grain'},
      {state: '/tables/extended', title: '光速镜像', icon: 'filter_center_focus'},
    ]
  },
  {
    state: null,
    title: '账户中心',
    icon: 'portrait',
    children: [
      {state: '/maps/google', title: '账户信息', icon: 'person'},
      {state: '/maps/vector', title: '财务信息', icon: 'attach_money'},
      {state: settingsState.name, title: '设置', icon: 'settings'},
    ]
  }
];
