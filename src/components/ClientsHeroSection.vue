<template>
  <main>
    <div class="clients_wrapper lg:mt-24">
      <div class="screen flex client flex-col animate__animated animate__fadeInDown justify-center overflow-y-hidden py-40 pl-5 lg:mt-1">
        <p class="font-bold text-primary text-lg mb-4">Ancile for Clients</p>
        <h3 class="font-bold text-4xl clients_head" >Looking for talent and <br>expertise?</h3>
        <div class="py-5">
          <a href="#" class="py-3 my-4    bg-primary px-7 clients_btn text-white transition duration-200 lg:hover:shadow-xl">Get Started</a>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.clients_wrapper {
  background-image: url(../assets/clients_bg.png);
  background-size: cover;
  height: 70vh;
  /* background-color: #00235380; */
  background-position: center;
  /* background-repeat: no-repeat; */
}

.clients_btn:hover {
  transform: translateX(10px);
  /* box-shadow: none; */
}

@media (max-width: 480px) {
  .clients_wrapper {
    background-position: 40%;
    padding-left: none;
    background:
    linear-gradient(to right, rgba(0, 35, 83, 0.7), rgba(0, 35, 83, 0.8)),
    url(../assets/clients_small_bg.png);
    background-size: cover;
    overflow-y: hidden;
    background-repeat: no-repeat;
  }

  .clients_head {
    color: #fff;
  }
}
</style>
