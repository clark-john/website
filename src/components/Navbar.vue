<template>
	<div> <!--  -->
		<nav class="dark:bg-zinc-900 bg-white shadow-md px-5 py-4 grid grid-cols-navbar items-center">
      <button class="absolute py-2 px-4" uk-toggle="target: #offcanvas">
      	<i class="fas fa-bars"></i>
      </button>
      <router-link to="/" class="flex justify-center text-3xl"> Clark </router-link>
			<router-link to="/about" class="flex justify-center">
				<div class="relative link-hover">About</div>
			</router-link>
		</nav>

    <div uk-offcanvas id="offcanvas">
      <div class="uk-offcanvas-bar !bg-white dark:!bg-[#222222] shadow-lg">
        <Offcanvas />
      </div>
    </div>
	</div>
</template>