<template>
  <div>
    <div class="api_top">
      <h1 class="api_title">API</h1>
      <p class="api_text">
        Здесь вы можете настроить взаимодействие с API
      </p>
    </div>
    <div class="api_container">
      <h2 class="title is-3 has-text-white">API ключи</h2>
      <b-field label="Название ключа" grouped>
        <b-input v-model="keyName" placeholder="Введите название"></b-input>
        <p class="control">
          <b-button @click="createToken">Сгенерировать</b-button>
        </p>
      </b-field>

      <b-table
        :data="keys"
        pagination-position="bottom"
        class="mb-5"
        hoverable
        striped
        backend-pagination>

        <b-table-column
          v-slot="props"
          field="name"
          label="Название">
          {{ props.row.name }}
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="key"
          label="Ключ"
          centered>
          {{ props.row.key }}
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="createdAt"
          label="Дата создания"
          centered>
          {{ props.row.createdAt }}
        </b-table-column>

        <template #empty>
          <section class="section">
            <div class="has-text-grey">
              <p class="has-text-centered">
                <b-icon
                  icon="emoticon-sad"
                  size="is-large">
                </b-icon>
              </p>
              <p class="has-text-centered">Пусто</p>
            </div>
          </section>
        </template>
      </b-table>

      <h2 class="title is-3 has-text-white">Callback-серверы</h2>
      <b-field label="Callback-сервер URL и ключ" grouped>
        <b-input v-model="url" placeholder="Введите URL"></b-input>
        <b-input v-model="secret" placeholder="Введите ключ доступа"></b-input>
        <p class="control">
          <b-button @click="createCallback">Создать</b-button>
        </p>
      </b-field>

      <b-table
        :data="callbacks"
        pagination-position="bottom"
        class="mb-5"
        hoverable
        striped>

        <b-table-column
          v-slot="props"
          field="url"
          label="URL">
          {{ props.row.url }}
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="secret"
          label="Ключ"
          centered>
          {{ props.row.secret }}
        </b-table-column>

        <b-table-column
          v-slot="props"
          field="createdAt"
          label="Дата создания"
          centered>
          {{ props.row.createdAt }}
        </b-table-column>

        <template #empty>
          <section class="section">
            <div class="has-text-grey">
              <p class="has-text-centered">
                <b-icon
                  icon="emoticon-sad"
                  size="is-large">
                </b-icon>
              </p>
              <p class="has-text-centered">Пусто</p>
            </div>
          </section>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Api',

  data() {
    return {
      keys: [],
      callbacks: [],
      keyName: '',
      url: '',
      secret: ''
    }
  },

  async mounted() {
    try {
      this.keys = await this.$axios.$get('keys')
      this.callbacks = await this.$axios.$get('callbacks')
    } catch (err) {
      console.log(err.message)
    }
  },

  methods: {
    async createToken() {
      try {
        const key = await this.$axios.$post('keys', { name: this.keyName })
        this.keys.push(key)

        this.keyName = ''
      } catch (err) {
        console.log(err.message)
      }
    },

    async createCallback() {
      try {
        const callback = await this.$axios.$post('callbacks', { url: this.url, secret: this.secret })
        this.callbacks.push(callback)

        this.url = ''
        this.secret = ''
      } catch (err) {
        console.log(err.message)
      }
    }
  }
}
</script>

<style scoped>
.api_top {
  padding: 30px 0 0 0;
  color: #efe9e2;

  .api_title {
    font-size: 64px;
    font-weight: 400;
    padding: 0 0 10px 0;
  }

  .api_text {
    font-size: 36px;
    font-weight: 400;
    margin-bottom: 60px;
  }
}

.api_container {
  font-family: "Tinos", serif;
}

::v-deep .button {
  background-color: #d3a064;
  border: none;
}
</style>
