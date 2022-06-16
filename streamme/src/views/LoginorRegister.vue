<template>
  <div class="login-or-register main-container">
    <div class="left mixed-cards-container" v-if="cards">
      <div>
        <movie-card v-for="(card, index) in cards"
                    :key="card.id"
                    :class="'card-'+index"
                    :movieCard="card"></movie-card>
      </div>
    </div>
    <div class="right">
      <div class="form">
        <img src="/img/logo/logo.svg" class="logo">
        <div class="input-container" ref="email">
          <input id="email" type="email"
                 @change="checkEmail"
                 @focus="$refs.email.classList.remove('warning')"
                 v-model="form.email" placeholder=" ">
          <span class="input-label" for="email">Email</span>
        </div>
        <div class="input-container" v-if="valid">
          <input id="password" class="password" type="password" v-model="form.password" placeholder=" ">
          <span class="input-label" for="password">Mot de Passe</span>
        </div>

        <div class="message error" v-if="showMessageError">Ouuups, Email or password is incorrect, try again... 😵
        <br><span>Forgot your password?</span>
        </div>
        <div class="validate" @click="login">Sign In</div>
        <div class="validate with-google">
          <span>Sign In with google</span>
          <img src="/img/icons/google.svg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MoviesService from "@/services";
import MovieCard from "@/components/movieCards/MovieCard";

export default {
  name: "LoginorRegister.vue",
  components: {MovieCard},
  data() {
    return {
      valid: false,
      showMessageError: false,
      cards: [],
      form: {
        email: null,
        password: null,
      }
    }
  },
  beforeMount() {
    this.getInitialMovies();
  },
  methods: {
    getInitialMovies() {
      MoviesService.getMovies("/movie/popular")
          .then((data) => {
            this.cards = data;
          })
    },
    checkEmail() {
      const pattern = /[a-zA-Z0-9.\-_+]{1,}@[a-zA-Z0-9.-]{2,}[.]{1}[a-zA-Z]{2,}/;
      if (this.form.email && !this.form.email.match(pattern)) {
        this.$refs.email.classList.add('warning');
        this.valid = false;
      } else if (this.form.email.match(pattern)) {
        this.valid = true;
      }
    },
    login() {
      if (this.valid) {
        if ((this.form.email === 'khadijag993@gmail.com' && this.form.password === "test") || (this.form.email === 'test@test.fr' && this.form.password === 'test')) {
          this.$router.push('/');
        } else {
          this.showMessageError = true;
          setTimeout (() => {
            this.showMessageError = false;
          }, 3000)
        }
      }
    }
  }
}
</script>

<style scoped>

</style>