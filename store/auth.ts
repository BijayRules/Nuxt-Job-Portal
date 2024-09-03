import { defineStore } from 'pinia';

interface UserPayloadInterface {
  email: string;
  password: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    loading: false,
  }),
  actions: {
    async authenticateUser({ email, password }: UserPayloadInterface) {
      this.loading = true; // Set loading to true before the API call

      try {
        const { error, data }: any = await useFetch('https://genesisapi.popmanteau.com/api/v1/login', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json' 
          },
          body: JSON.stringify({ email, password }),
        });

        if (data.value) {
          console.log('API Response:', data.value);
          const { code, message, response } = data.value;

          if (code === 200 && response?.token) {
            const token = useCookie('gwt_token'); // useCookie new hook in Nuxt 3
            token.value = response.token; // Set token to cookie
            this.authenticated = true; // Set authenticated state value to true
            return { success: true, message, response }; // Return success response
          } else {
            return { success: false, message: error.value.data.message || 'Login failed.' }; // Return error message
          }
        } else {
          return { success: false, message: 'Unexpected response structure.' }; // Handle unexpected response
        }
      } catch (error) {
        console.error('Error during authentication:', error);
        return { success: false, message: 'An error occurred during authentication.' }; // Return error message
      } finally {
        this.loading = false; // Set loading to false after the API call is done
      }
    },

    logUserOut() {
      const token = useCookie('gwt_token'); // useCookie new hook in Nuxt 3
      token.value = null; // Clear the token cookie
      this.authenticated = false; // Set authenticated state value to false
      console.log('User logged out successfully');
    },
  },
});
