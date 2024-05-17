<template>
  <div>
    <h1>Account</h1>

    <b-button @click="createToken">Create API key</b-button>
    <b-table
      :data="keys"
      pagination-position="bottom"
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
          <div class="content has-text-grey has-text-centered">
            <p>
              <b-icon
                icon="emoticon-sad"
                size="is-large">
              </b-icon>
            </p>
            <p>Empty</p>
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
      keys: []
    }
  },

  async mounted() {
    try {
      this.keys = await this.$axios.$get('keys')
    } catch (err) {
      console.log(err.message)
    }
  },

  methods: {
    createToken() {
      try {
        const res = this.$axios.$post('keys', { name: 'New token' })
        console.log('RES', res)
      } catch (err) {
        console.log(err.message)
      }
    }
  }
}
</script>

<style scoped>
</style>
