<script setup>

const { data: jobs, pending, error, refresh } = await useFetch('https://royalastoria.bijayshrestha.info.np/api/jobList/');

// If you need to access the raw data, you can use:
// const rawData = toRaw(jobs.value);
// console.log("Raw Data:", rawData);

const getImageUrl = (job) => {
    return job.ComLogo && job.ComLogo.url
        ? job.ComLogo.url
        : '/path/to/default-image.jpg'
}
</script>

<template>
    <div>


        <h1 class="mb-5 text-center text-2xl">All Job page</h1>

        <h1 v-if="error">{{ error.message }}</h1>
        <h1 v-else-if="pending">Loading...</h1>
        <template v-else>
            <div v-if="jobs && jobs.Values" class="featured-grid grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-7">
                <div v-for="job in jobs.Values" :key="job._id">
                    <NuxtLink :to="`/jobs/${job._id}`">
                        <div class="job-item">
                            <div className="job-body">
                                <div className="job-img">
                                    <img :src="getImageUrl(job)" :alt="job.ComName">

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

        <!-- <div className="featured-grid grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-7">
            <div>
                <Link to='' className="block">
                <div className="job-item">
                    <div className="job-body">
                        <div className="job-img">
                            <img src="" alt="Test" />

                            <span className="company-name">Test</span>

                            <span className="partTime featured">
                                Test
                            </span>
                        </div>
                        <h3>Test</h3>
                        <div className="job-details">
                            <p>
                                <TfiLocationPin /> {Location} /
                            </p>
                            <p>
                                <IoCashOutline /> {Salary}
                            </p>
                        </div>
                    </div>

                    <div className="job-footer mt-5">
                        <div className="flex justify-between items-center">
                            <p>
                                <span>
                                    <BsClock className="inline-block mr-1 align-middle" />
                                </span>
                                Test
                            </p>
                            <span className="btn-text">
                                Apply Now
                                <FaArrowRightLong />
                            </span>
                        </div>
                    </div>
                </div>
                </Link>
            </div>
        </div> -->
    </div>
</template>
