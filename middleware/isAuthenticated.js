export default function({ app, route, redirect }) {
  if (!app.$auth.loggedIn && !['/signin', '/signup'].includes(route.path)) {
    return redirect('/signin')
  }
}
