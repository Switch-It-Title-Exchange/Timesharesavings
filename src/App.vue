<template>
  <Navbar
    logoText="Timeshare Savings"
    :navLinks="[
      { text: 'Home', href: 'Home' },
      { text: 'About', href: 'About' },
      { text: 'Contact', href: 'Contact' },
      { text: 'Resorts', href: 'Resort' },
    ]"
  />

  <router-view></router-view>

  <Footer
    :footerLinks="[
      // { text: 'Privacy', href: '/privacy' },
      // { text: 'Terms', href: '/terms' },
    ]"
  />
</template>

<style scoped></style>
