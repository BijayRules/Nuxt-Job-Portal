<script setup>

const { data: jobs, pending, error, refresh } = await useFetch('https://royalastoria.bijayshrestha.info.np/api/jobList/');

// If you need to access the raw data, you can use:
// const rawData = toRaw(jobs.value);
// console.log("Raw Data:", rawData);

</script>

<template>
  <div>


    <h1 class="mb-5 text-center text-2xl">This is Main Home page.</h1>

    <h1 v-if="error">{{ error.message }}</h1>
    <h1 v-else-if="pending">Loading...</h1>
    <template v-else>
      <div v-if="jobs && jobs.Values" class="featured-grid grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-7">
        <div v-for="job in jobs.Values" :key="job._id">
          <NuxtLink :to="`/jobs/${job.Slug}`">
            <div class="job-item">
              <div className="job-body">
                <div className="job-img">
                  <img :src="job.ComLogo.url" :alt="job.ComName">

                  <span className="company-name">{{ job.ComName }}</span>

                  <span className="partTime featured">
                    {{ job.JobType.JobType }}
                  </span>
                </div>
                <h3>{{ job.JobDesignation }}</h3>
                <div className="job-details">
                  <p>
                    {{ job.Location }} /
                  </p>
                  <p>
                    {{ job.Salary }}
                  </p>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
      <p v-else>No jobs found.</p>
    </template>
  </div>
</template>
