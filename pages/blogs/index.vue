<template>

  <div>
    <div class="flex items-center justify-between">
      <h1 class="th-heading">Manage Blogs!</h1>
      <NuxtLink href="/blogs/create" class="th-btn">Add New Blog</NuxtLink>
    </div>
    <div class="th-card mt-5">
      <div class="th-table-header">
        <div>
          <div class="th-filter">
            <div><label for="">Category</label><select>
                <option value="">All</option>
                <option value="661cb4e0ba76793b3f95c40f">Star Hotels</option>
                <option value="661ab26e800f127b4490403b">Boutique Hotels</option>
                <option value="661ab17d9f0122c33a0445be">Resturant</option>
                <option value="661aae459f0122c33a044583">Hotel</option>
              </select></div>
            <div><label for="">Status</label><select>
                <option value="">All</option>
                <option value="A">Active</option>
                <option value="I">Inactive</option>
              </select></div>
            <div><label for="">Show entries</label><select>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select></div>
          </div>
        </div>
        <div>
          <div class="th-form">
            <form>
              <div class="th-search-wrapper"><input class="th-search small search-icon" type="text" placeholder="Search"
                  value=""><button class="th-search-btn" type="submit"><svg stroke="currentColor" fill="currentColor"
                    stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
                    </path>
                  </svg></button></div>
            </form>
          </div>
        </div>
      </div>
      <div class="th-table overflow-x-auto">
        <TableLayout />
      </div>
      <div class="th-pagination">
        <div class="th-pagination-result">Showing<strong>1</strong>to<strong>3</strong>of<strong>3</strong>results
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'dashboard'
});
</script>