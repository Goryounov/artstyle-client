<template>
  <div class="sign-in">
    <p class="sign-in__title">Вход</p>
    <div class="sign-in__inputs">
      <b-input
        v-model="loginData.email"
        placeholder="Email"
      />
      <b-input
        v-model="loginData.password"
        type="password"
        placeholder="Пароль"
      />
      <b-button
        @click="signIn"
        expanded
      >
        Вход
      </b-button>
    </div>
    <div class="other-link">
      <a href="./signup">Регистрация</a>
    </div>  
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
    };
  },
  methods: {
    async signIn() {
      try {
        await this.$auth.loginWith('local', {
          data: this.loginData
        });
        this.$router.replace("/");
      } catch (err) {
        console.log(err);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sign-in {
  padding: 20px;
  text-align: center;

  &__title {
    color: #f3f2f2;
    font-family: "Tinos";
    font-size: 70px;
    font-weight: 400;
    margin-bottom: 55px;
  }

  &__inputs {
    display: flex;
    flex-direction: column;
    gap: 32px;

    ::v-deep .input {
      height: 80px;
      padding: 0 10px;
      border: none;
      outline: none;
      border-bottom: 1px solid #fff;
      color: #fff;
      font-family: "Tinos";
      font-size: 36px;
      background-color: transparent;
      border-radius: 0;
      box-shadow: none;

      &::placeholder {
        font-size: 36px;
        color: #fff;
      }
    }

    ::v-deep .button {
      margin-top: 23px;
      margin-bottom: 55px;
      color: #fff;
      font-family: "Tinos";
      font-size: 40px;
      padding: 16px 0;
      text-align: center;
      display: block;
      border-radius: 5px;
      background: #d3a064;
      border: none;

      &:hover {
        background: #ecb371;
        cursor: pointer;
      }

      &:active {
        background: #c9965c;
      }
    }
  }

  .other-link {
    display: flex;
    flex-direction: column;
    text-align: center;

    a {
      margin-bottom: 20px;
      margin-right: auto;
      margin-left: auto;
      text-decoration: none;
      color: #f4c996;
      font-family: "Tinos";
      font-size: 32px;
      font-weight: 400;
      border-bottom: 1px solid #f4c996;

      &:hover {
        color: #f7ba6f;
        cursor: pointer;
      }

      &:active {
        color: #b88343;
      }
    }
  }
}
</style>