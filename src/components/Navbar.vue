<template>
  <header class=" fixed mb-2 bg-white z-50 w-full" :class="{ 'shadow-md': scrolled }">
    <nav ref="navbar" class="flex bg-white screen sticky  z-10 justify-between py-3 md:py-6 lg:py-7">
      <!-- Logo -->
      <div class="flex items-center">
        <router-link to="/" class="text-lg font-bold text-white hover:text-gray-200">
          <img src="@/assets/logo.png" alt="Logo" class="logo px-2">
          <p class="md:hidden text-primary text-3xl bg-white justify-center items-center flex flex-row overflow-hidden font-bold">Trad<span class="font-extrabold text-4xl mb-1">.</span></p>
        </router-link>
      </div>

      <!-- Links for larger screens -->
      <div class="hidden md:flex items-center justify-end md:flex-1 lg:flex-1">
        <router-link to="/clients" class="nav-link" active-class="active-link">
          Clients
        </router-link>
        <router-link to="/candidates" class="nav-link" active-class="active-link">
          Candidates
        </router-link>
        <router-link to="/consultants" class="nav-link" active-class="active-link">
          Consultants
        </router-link>
        <router-link to="/productivity" class="nav-link" active-class="active-link">
          Productivity
        </router-link>
      </div>

      <!-- Hamburger Icon for smaller screens -->
      <div class="md:hidden flex items-center">
        <button @click="toggleMenu" class="text-gray-600 hover:text-gray-900">
          <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-if="menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div v-if="menuOpen" class="md:hidden fixed top-0 left-0 w-full h-screen bg-white shadow-md z-10 flex flex-col">
        <!-- Close Button -->
        <div class="flex justify-end p-4">
          <button @click="toggleMenu" class="text-gray-600 hover:text-gray-900 p-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- <p class="text-primary text-6xl pt-7 mt-3 bg-white justify-center items-center flex flex-row overflow-hidden font-bold">Trad<span class="font-extrabold text-4xl mb-1">.</span></p> -->

        <!-- Menu Links -->
        <div class="flex flex-col justify-center h-full space-y-8">
          <router-link @click="toggleMenu" to="/clients" class="nav-link-mobile" active-class="active-link">
            Clients
          </router-link>
          <router-link @click="toggleMenu" to="/candidates" class="nav-link-mobile" active-class="active-link">
            Candidates
          </router-link>
          <router-link @click="toggleMenu" to="/consultants" class="nav-link-mobile" active-class="active-link">
            Consultants
          </router-link>
          <router-link @click="toggleMenu" to="/productivity" class="nav-link-mobile" active-class="active-link">
            Productivity
          </router-link>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: 'NavBarComponent',
  data() {
    return {
      menuOpen: false,
      scrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    }
  }
}
</script>

<style scoped>
.nav-link {
  @apply text-black hover:text-primary transition duration-300 ease-in-out mx-4;
  position: relative;
}

.nav-link:hover::after {
  transform: scaleX(1);
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  @apply bg-primary;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

.nav-link-mobile {
  @apply text-black text-center text-lg hover:text-primary transition duration-300 ease-in-out;
}

.active-link {
  @apply text-primary;
}

.active-link::after {
  transform: scaleX(1);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 480px) {
  .logo {
    width: 80%;
    display: none;
  }
}
</style>
