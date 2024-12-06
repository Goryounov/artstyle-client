export default function ({ $axios, $config, error }) {
  if (process.client) {
    $axios.setBaseURL(`${$config.apiUrl}`)
  }
}