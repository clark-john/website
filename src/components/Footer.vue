<template>
  <div class="shadow-xl flex items-center flex-col gap-4 py-5">
    Social Media:
    <div class="flex gap-8">
      <div v-for="x in links">
        <a :href="x.link" target="_blank">
          <i :class="x.icon + ' text-3xl'" /> 
        </a>        
      </div>
    </div>
    <div>{{ date }}</div>
  </div>
</template>

<script>
import moment from 'moment'

const date = moment(Date.now()).format('LL')

const links = [
  { link: "https://www.facebook.com/cl4rk.3702", icon: "fab fa-facebook"},
  { link: "https://www.instagram.com/cl4rk_ig", icon: "fab fa-instagram"},
  { link: "https://www.twitter.com/cl4rk_tw", icon: "fab fa-twitter"},
  { link: "https://www.github.com/clark-john", icon: "fab fa-github"},
  { link: "https://www.tiktok.com/cl4rk_tiktok", icon: "fab fa-tiktok"}
]

export default {
  setup(){
    return {
      links,
      date
    }
  }
}

</script>
