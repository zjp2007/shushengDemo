import dynamic from 'dva/dynamic';

export const getNavData = app => [{
  component: dynamic({
    app,
    models: () => [
      import('../models/user'),
    ],
    component: () => import('../layouts/BasicLayout'),
  }),
  layout: 'BasicLayout',
  name: '首页',
  path: '/dashboard',
  children: [{
    name: 'Dashboard',
    icon: 'dashboard',
    path: 'dashboard',
    children: [{
      name: '布局测试',
      path: 'layout',
      component: dynamic({
        app,
        models: () => [
          import('../models/layout'),
        ],
        component: () => import('../routes/Layout/TreeIndex'),
      }),
    }],
  }],
}, {
  component: dynamic({
    app,
    component: () => import('../layouts/UserLayout'),
  }),
  path: '/user',
  layout: 'UserLayout',
  children: [{
    name: '帐户',
    icon: 'user',
    isHide: true,
    path: 'user',
    children: [{
      name: '登录',
      path: 'login',
      component: dynamic({
        app,
        models: () => [
          import('../models/login'),
        ],
        component: () => import('../routes/User/Login'),
      }),
    }, {
      name: '注册',
      path: 'register',
      component: dynamic({
        app,
        models: () => [
          import('../models/register'),
        ],
        component: () => import('../routes/User/Register'),
      }),
    }, {
      name: '注册结果',
      path: 'register-result',
      component: dynamic({
        app,
        component: () => import('../routes/User/RegisterResult'),
      }),
    }],
  }],
}];
