<script setup>
const route = useRoute();

const { data: jobs, pending, error, refresh } = await useFetch(() =>
    `https://royalastoria.bijayshrestha.info.np/api/jobList/${route.params.slug}`
);

const rawData = toRaw(jobs.value);
console.log("Raw Data:", rawData);
</script>

<template>
    <h1>This is Single Page</h1>
    <div v-if="error">{{ error.message }}</div>
    <div v-else-if="pending">Loading...</div>
    <div v-else>

        <section class="single__section">
        <div class="container">
          <div class="breadcrumbs py-2">
            <ul class="breadcrumb flex items-center">
              <li>
                <NuxtLink to="/">Home</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/jobs">Jobs</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">{{ jobs.Values.JobDesignation }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
              <div class="single__banner py-10">
                <div class="container">
                  <div class="flex flex-wrap justify-between items-center">
                    <div class="heading-wrap">
                      <h1>{{ jobs.Values.JobDesignation }}</h1>
                      <div class="job-data flex items-center flex-wrap">
                        <span>
                           {{ jobs.Values.JobDesignation }}
                        </span>
                        <span>
                            {{ jobs.Values.Location }}
                        </span>
                        <span>
                            {{ jobs.Values.ExpiryDate }}
                        </span>
                      </div>
                    </div>
                    <div class="cta-btn flex items-center">
                   
                        <div class="btn mr-5">
                            Apply Now
                        </div>
                      <NuxtLink to="#" class="saveJob">
                       Save
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
              <div class="single__job__content py-10">
                <div class="container">
                  <div class="flex flex-wrap">
                    <div class="w-full md:max-w-[75%]">
                      <div class="the-content md:mr-8 md:pr-8 md:border-r-[1px] md:border-solid md:border-r-[#f1f1f1]">
                        {{ jobs.Values.JobDescription }}
                      </div>
                    </div>
                    <div class="w-full md:max-w-[25%]">
                      <div class="sidebar sidebar-sticky">
                        <div class="find__job different__location job-overview">
                          <h3 class="!text-xl !mb-5 !text-primary !font-bold">
                            Job Information
                          </h3>
                          <ul>
                            <li>
                              <strong>Published on:</strong>
                              <span>Jan 12 2024</span>
                            </li>
                            <li>
                              <strong>Vacancy:</strong> <span>20</span>
                            </li>
                            <li>
                              <strong>Employment Status:</strong>
                              <span>Intern</span>
                            </li>
                            <li>
                              <strong>Experience:</strong>
                              <span>
                                None
                              </span>
                            </li>
                            <li>
                              <strong>Qualification:</strong>
                              <span>
                                Bachelors
                              </span>
                            </li>
                            <li>
                              <strong>Job Location:</strong>
                              <span>Location</span>
                            </li>
                            <li>
                              <strong>Salary:</strong> {singleData.Salary}
                            </li>
                            <li>
                              <strong>Gender:</strong>
                              <span>
                                {singleData.Gender
                                  ? singleData.Gender
                                  : "Both Preferred"}
                              </span>
                            </li>
                            <li>
                              <strong>Application Deadline:</strong>
                              <span>{singleData.ExpiryDate}</span>
                            </li>
                          </ul>
                        </div>
                        <div class="find__job justify-center mt-5">
                          <div class="share__job">
                            <h3>Share This Job</h3>
                            <ul>
                              <li>
                                <NuxtLink to="#">
                                  <img src="" alt="" />
                                </NuxtLink>
                              </li>
                              <li>
                                <NuxtLink to="#">
                                  <img src="" alt="" />
                                </NuxtLink>
                              </li>
                              <li>
                                <NuxtLink to="#">
                                  <img src="" alt="" />
                                </NuxtLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      </section>
        <!-- Display your jobs data here -->
        <h3>{{ jobs.Values.ComName }}</h3>
        
        <pre>{{ jobs.Values }}</pre>

        
    </div>
</template>

