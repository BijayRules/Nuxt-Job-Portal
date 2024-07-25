<script setup>
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

<template>
    <header class="site-header py-5 shadow-md">
        <div class="container">
            <div class="flex justify-between items-center">
                <div class="logo">
                    <NuxtLink to="/" class="font-bold uppercase tracking-tight">
                        Talent Hospitality
                    </NuxtLink>
                </div>
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

    <div class="container max-w-[1280px] m-auto px-5">
        <slot />
    </div>
</template>