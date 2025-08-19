{
  path: '/',
  name: 'default',
  component: Home,
  children: [
    {
      path: 'login',
      name: 'loginModal',
      component: Home, // ใช้ Home เหมือนเดิม
    }
  ]
}