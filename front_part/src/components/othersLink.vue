<template>
  <div class="q-pa-md">
    <p v-for="link in links"
    :key="link.title" class="row">
      <a href="#" class="col active">{{link.title}}</a>
    </p>
  </div>
</template>

<script>
const links = [
  {
    title: 'About',
    link: '/about'
  },
  {
    title: 'Press',
    link: '/press'
  },
  {
    title: 'Copyright',
    link: '/copyright'
  },
  {
    title: 'Contact Us',
    link: '/contact_us'
  },
  {
    title: 'Creators',
    link: '/creators'
  },
  {
    title: 'Advertise',
    link: '/advertise'
  },
  {
    title: 'Developers',
    link: '/developers'
  }
]
export default {
  name: 'othersLink',
  data () {
    return {
      links: links
    }
  }
}
</script>

<style scoped>
p a {
  text-decoration: none;
  color:grey;
  font-weight:bold;
}
</style>
