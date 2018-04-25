import AC from '@/components/AsyncComponent'

export default [
  {
    name: '文章管理',
    icon: 'file-markdown',
    path: '/admin/post',
    children: [{
      name: '编辑',
      icon: 'edit',
      path: '/admin/post/edit/',
      noRender: true,
      exact: true,
      component: AC(() => import('@/components/admin/markdown')),
    }, {
      name: '编辑',
      icon: 'edit',
      path: '/admin/post/edit/:pid',
      component: AC(() => import('@/components/admin/markdown')),
    }, {
      name: '列表',
      icon: 'list',
      path: '/admin/post/list',
      component: AC(() => import('./list')),
    }]
  }
]