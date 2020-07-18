const menu = [
  {
    icon: '',
    name: '设计',
    children: [
      {
        url: '/',
        name: '空白页',
        mate: {
          permission: ['管理员']
        }
      },
      {
        url: 'grid',
        name: '瀑布流',
        mate: {
          permission: ['管理员']
        }
      }
    ]
  },
  {
    icon: 'project-dictionaries',
    name: '项目管理',
    children: [
      {
        url: 'project-list',
        name: '项目列表',
        mate: {
          permission: ['项目经理']
        }
      },
      {
        url: 'project-dictionaries',
        name: '项目字典',
        mate: {
          permission: ['管理员', '项目经理']
        }
      }
    ]
  },
  {
    icon: 'user-manage',
    name: '用户管理',
    children: [
      {
        url: 'user-manage',
        name: '用户管理',
        mate: {
          permission: ['项目经理']
        }
      },
    ]
  },
  {
    icon: 'scientific-tutorship',
    name: '科研辅导管理',
    children: [
      {
        url: 'scientific-comment',
        name: '科研点评申请',
        mate: {
          permission: ['项目经理']
        }
      },
      {
        url: 'scientific-telephone',
        name: '电话辅导申请',
        mate: {
          permission: ['项目经理']
        }
      }
    ]
  },
  {
    icon: 'change-password',
    name: '系统管理',
    children: [
      {
        url: 'account-manage',
        name: '账号管理',
        mate: {
          permission: ['管理员']
        }
      },
      {
        url: 'change-password',
        name: '修改密码',
        mate: {
          permission: ['管理员', '项目经理']
        }
      }
    ]
  }
];

export default menu;
