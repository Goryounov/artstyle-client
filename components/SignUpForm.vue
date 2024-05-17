<template>
  <div class="sign-up">
    <p class="sign-up__title">Sign Up</p>

    <b-field
      label="First name">
      <b-input
        v-model="registerData.firstName"
      />
    </b-field>


    <b-field
      label="Last name">
      <b-input
        v-model="registerData.lastName"
      />
    </b-field>


    <b-field
      label="Email">
      <b-input
        v-model="registerData.email"
      />
    </b-field>

    <b-field
      label="Password">
      <b-input
        v-model="registerData.password"
      />
    </b-field>

    <b-button
      class="btn btn-primary w-100"
      @click="signUp"
      expanded>
      Sign Up
    </b-button>

    <a href="/">Sign In</a>
  </div>
</template>

<script>
export default {
  name: 'SignUpForm',

  data() {
    return {
      registerData: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
    }
  },

  methods: {
    async signUp() {
      try {
        await this.$axios.$post('/auth/signup', {
          firstName: this.registerData.firstName,
          lastName: this.registerData.lastName,
          email: this.registerData.email,
          password: this.registerData.password
        })

        this.$router.replace('/')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sign-up {
  padding: 20px;

  &__title {
    text-align: center;
  }
}
</style>

