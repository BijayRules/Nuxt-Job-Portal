<template>
  <header
    class="fixed w-full top-0 left-0 z-50 bg-white p-4 px-10 border border-b-[#ecedf2]  border-solid shadow-th-shadow ">
    <div class="flex justify-between items-center">
      <div>
        <NuxtLink to="/" class="font-bold uppercase tracking-tight">
          GWT BACKEND
        </NuxtLink>
        <div class="block md:hidden"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
            viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
            </path>
          </svg></div>
      </div>
      <div class="flex gap-2 items-center">
        <div v-if="!authenticated" class="header-right relative flex items-center">
          <NuxtLink to="/login" class="btn">
            Sign In
          </NuxtLink>
        </div>

        <div v-if="authenticated" class="header-right relative flex items-center">
          <NuxtLink @click="logout" class="btn">
            Log Out
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/auth';

const router = useRouter();

const { logUserOut } = useAuthStore();
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive

const logout = () => {
  logUserOut();
  router.push('/login');
};
</script>
