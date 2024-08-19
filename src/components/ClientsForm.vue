<template>
  <form @submit.prevent="handleSubmit">
    <div class="flex flex-wrap flap justify-start py-10">
      <div class="w-full flex-1 ">
        <div v-for="(field, index) in leftFormFields" :key="index" class="flex flex-col mb-6">
          <label :for="field.name" class="mb-1 pb-3 ml-3">{{ field.label }}</label>
          <input :type="field.type" :id="field.name" v-model="formData[field.name]"
            class="p-3 ml-3 mb-3 box-border outline outline-2 outline-offset-2 text-sm text-gray-700 w-full inp"
            :placeholder="field.placeholder" />
        </div>
      </div>
      <div class="w-full flex-1">
        <div v-for="(field, index) in rightFormFields" :key="index" class="flex flex-col mb-6">
          <label :for="field.name" class="mb-1 pb-3">{{ field.label }}</label>
          <input :type="field.type" :id="field.name" v-model="formData[field.name]"
            class="p-3 ml-3 mb-3 box-border outline outline-2 outline-offset-2 text-sm text-gray-700 w-full inp"
            :placeholder="field.placeholder" />
        </div>
      </div>
    </div>
    <div class="btn">
      <button type="submit" class="bg-primary ml-3 hover:bg-blue-900 text-white py-3 px-12 transition duration-300 hover:-translate-y-2">Submit</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  companyName: '',
  contactName: '',
  email: '',
  phone: '',
  linkedinProfile: '',
  website: ''
})

const formFields = ref([
  { name: 'companyName', label: 'Company Name', type: 'text', placeholder: 'Enter Company Name' },
  { name: 'contactName', label: 'Contact Name', type: 'text', placeholder: 'Your Name' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'Email' },
  { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'Phone Number' },
  { name: 'linkedinProfile', label: 'Company LinkedIn Profile', type: 'url', placeholder: 'LinkedIn Profile' },
  { name: 'website', label: 'Company Website', type: 'url', placeholder: 'Website' }
])

const leftFormFields = ref(formFields.value.slice(0, 3))
const rightFormFields = ref(formFields.value.slice(3))

function handleSubmit() {
  console.log('Form submitted:', formData.value)
}
</script>

<style>
.inp {
  width: 90%;
}

@media (max-width: 480px) {
  .flap {
    flex-wrap: nowrap;
    flex-direction: column;
  }

  .btn {
    justify-content: center;
    /* align-content: center; */
    display: flex;
    margin-top: -45px;
  }

  .btn button {
    margin-left: none;
    margin-right: 30px;
  }
}
</style>
