{
  path: '/',
  name: 'default',
  component: Home,
  children: [
    {
      path: 'login',
      name: 'loginModal',
      component: default, // ใช้ Home เหมือนเดิม
    }
  ]
}