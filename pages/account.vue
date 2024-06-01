<template>
  <div>
    <h1 class="title is-2 has-text-white">Account</h1>

    <h2 class="title is-3 has-text-white">API Keys</h2>
    <b-field label="Key Name" grouped>
      <b-input v-model="keyName" placeholder="Enter the key name"></b-input>
      <p class="control">
        <b-button @click="createToken">Create API key</b-button>
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
        label="Name">
        {{ props.row.name }}
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="key"
        label="Key"
        centered>
        {{ props.row.key }}
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="createdAt"
        label="Created At"
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
            <p class="has-text-centered">Empty</p>
          </div>
        </section>
      </template>
    </b-table>

    <h2 class="title is-3 has-text-white">Callback Servers</h2>
    <b-field label="Callback Server URL" grouped>
      <b-input v-model="url" placeholder="Enter the URL"></b-input>
      <b-input v-model="secret" placeholder="Enter the secret key"></b-input>
      <p class="control">
        <b-button @click="createCallback">Create Callback Server</b-button>
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
        label="Secret"
        centered>
        {{ props.row.secret }}
      </b-table-column>

      <b-table-column
        v-slot="props"
        field="createdAt"
        label="Created At"
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
            <p class="has-text-centered">Empty</p>
          </div>
        </section>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'Account',

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
</style>
