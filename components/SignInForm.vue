<template>
  <div class="sign-in">
    <p class="sign-in__title">Sign In</p>

    <b-field
      label="Email">
      <b-input
        v-model="loginData.email"
      />
    </b-field>

    <b-field
      label="Password">
      <b-input
        v-model="loginData.password"
      />
    </b-field>

    <b-button
      @click="signIn"
      expanded>
      Sign In
    </b-button>

    <a href="./signup">Sign Up</a>
  </div>
</template>

<script>
export default {
  name: 'SignInForm',

  data() {
    return {
      loginData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async signIn() {
      try {
        await this.$auth.loginWith('local', {
          data: this.loginData
        })

        this.$router.replace("/");
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sign-in {
  padding: 20px;

  &__title {
    text-align: center;
  }
}
</style>
