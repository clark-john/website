<template>
  <div class="text-black dark:text-white flex flex-col gap-5">
    <button class="uk-offcanvas-close" uk-close></button>
    <div class="font-inter font-bold text-2xl">Clark</div>
    <div class="text-lg"><router-link to='/how-to'><b>HowTo's</b></router-link></div>
    <div>
      <router-link to="/how-to/fetch-data-with-axios">Fetch Data with Axios</router-link>
    </div>
  </div>
</template>