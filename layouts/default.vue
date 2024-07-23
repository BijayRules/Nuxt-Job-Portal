<template>
    <header>
        <div class="container max-w-[1280px] m-auto px-5">
            <nav class="py-5">
                <ul class="flex justify-center gap-5">
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/jobs">Jobs</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact">Contacts</NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>

    <div class="container max-w-[1280px] m-auto px-5">
        <slot />
    </div>
</template>