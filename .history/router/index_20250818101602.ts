{
  path: '/',
  name: 'home',
  component: Home,
  children: [
    {
      path: 'login',
      name: 'loginModal',
      component: Home, // ใช้ Home เหมือนเดิม
    }
  ]
}