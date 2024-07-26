import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/auth';

export default defineNuxtRouteMiddleware((to) => {
  const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
  const token = useCookie('gwt_token'); // get token from cookies

  // Check if token exists and validate it
  if (token.value) {
    // todo: verify if token is valid, before updating the state
    authenticated.value = true; // update the state to authenticated

    // If the user is authenticated and tries to access the login page, redirect to homepage
    if (to?.name === 'login') {
      return navigateTo('/');
    }
  } 
});
