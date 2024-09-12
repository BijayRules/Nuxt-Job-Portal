<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>



<template>
  <div>
    <h1 class="th-heading">Dashboard Home!</h1><span class="th-subheading"></span>
    <div class="th-dashboard mt-10">
      <div class="grid grid-cols-4 gap-2">
        <div>
          <div class="dashboard-card">
            <div>
              <div class="icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2h3.5A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5H14a.5.5 0 0 1-1 0H3a.5.5 0 0 1-1 0h-.5A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2zm1 0h4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1M1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H3V3zM15 12.5v-9a.5.5 0 0 0-.5-.5H13v10h1.5a.5.5 0 0 0 .5-.5m-3 .5V3H4v10z">
                  </path>
                </svg></div>
            </div>
            <div class="text-right">
              <h4>10</h4>
              <p>Posted Jobs</p>
            </div>
          </div>
        </div>
        <div>
          <div class="dashboard-card secondary">
            <div>
              <div class="icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256"
                  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M216,160l-56,56V160Z" opacity="0.2"></path>
                  <path
                    d="M88,96a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,96Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16Zm32,16H96a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM224,48V156.69A15.86,15.86,0,0,1,219.31,168L168,219.31A15.86,15.86,0,0,1,156.69,224H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H152V160a8,8,0,0,1,8-8h48V48H48Zm120-40v28.7L196.69,168Z">
                  </path>
                </svg></div>
            </div>
            <div class="text-right">
              <h4>2</h4>
              <p>Applications</p>
            </div>
          </div>
        </div>
        <div>
          <div class="dashboard-card success">
            <div>
              <div class="icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256"
                  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M216,160l-56,56V160Z" opacity="0.2"></path>
                  <path
                    d="M88,96a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,96Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16Zm32,16H96a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM224,48V156.69A15.86,15.86,0,0,1,219.31,168L168,219.31A15.86,15.86,0,0,1,156.69,224H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H152V160a8,8,0,0,1,8-8h48V48H48Zm120-40v28.7L196.69,168Z">
                  </path>
                </svg></div>
            </div>
            <div class="text-right">
              <h4>1</h4>
              <p>Approved</p>
            </div>
          </div>
        </div>
        <div>
          <div class="dashboard-card danger">
            <div>
              <div class="icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256"
                  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M216,160l-56,56V160Z" opacity="0.2"></path>
                  <path
                    d="M88,96a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,96Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16Zm32,16H96a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM224,48V156.69A15.86,15.86,0,0,1,219.31,168L168,219.31A15.86,15.86,0,0,1,156.69,224H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H152V160a8,8,0,0,1,8-8h48V48H48Zm120-40v28.7L196.69,168Z">
                  </path>
                </svg></div>
            </div>
            <div class="text-right">
              <h4>0</h4>
              <p>Rejected</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>