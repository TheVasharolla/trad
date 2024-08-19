<template>
  <div class="container screen px-28 p-4 flex flex-col">
    <h1 class="text-3xl font-bold ml-1 mb-4">Apply</h1>
    <div class="flex flex-row forms justify-between">
      <div class="left px-3 flex-1 space-y-7 flex flex-col">
        <div class="flex flex-col px-2">
          <label for="firstName" class="block text-gray-700 text-sm font-bold mb-2">First Name</label>
          <input type="text" id="firstName" v-model="firstName" placeholder="First Name"
            class="outline outline-2 ml-1 mb-1 mr-1 w-full py-4 px-5 text-gray-700 leading-tight">
        </div>
        <div class="flex flex-col px-2">
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input type="email" id="email" v-model="email"
            class="outline outline-2 ml-1 mb-1 w-full py-4 px-5 text-gray-700 leading-tight" placeholder="Email">
        </div>
        <div class="flex flex-col px-2">
          <label for="resume" class="block text-gray-700 text-sm font-bold mb-2">Resume/CV</label>
          <input type="file" id="resume" accept=".pdf" @change="handleFileChange('resume')"
            class="outline outline-2 ml-1 mb-1 mr-1 w-full py-4 px-5 text-gray-700 leading-tight">
          <p class="text-gray-500 text-xs mt-1">PDF must be less than 5 MB</p>
        </div>
        <div class="flex flex-col px-2">
          <label for="linkedin" class="block text-gray-700 text-sm font-bold mb-2">LinkedIn Profile</label>
          <input type="text" id="linkedin" placeholder="LinkedIn Profile" v-model="linkedin"
            class="outline outline-2 mb-1 mr-1 w-full py-4 px-5 text-gray-700 leading-tight">
        </div>
      </div>
      <div class="right flex ml-4 space-y-7 flex-1 flex-col">
        <div class="flex flex-col px-2">
          <label for="lastName" class="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
          <input type="text" id="firstName" v-model="lastName" placeholder="Last Name"
            class="outline outline-2 mb-1 mr-1 w-full py-4 px-5 text-gray-700 leading-tight">
        </div>
        <div class="flex flex-col px-2">
          <label for="phone" class="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
          <input type="tel" id="phone" placeholder="Phone Number" v-model="phone"
            class="outline outline-2 mb-1 mr-1 w-full py-4 px-5 text-gray-700 leading-tight">
        </div>
        <div class="flex flex-col px-2">
          <label for="coverLetter" class="block text-gray-700 text-sm font-bold mb-2">Cover Letter</label>
          <input type="file" id="coverLetter" accept=".pdf" @change="handleFileChange('coverLetter')"
            class="outline outline-2 mb-1 mr-1 w-full py-4 px-5 text-gray-700 leading-tight">
          <p class="text-gray-500 text-xs mt-1">PDF must be less than 5 MB</p>
        </div>
        <div class="flex flex-col px-2">
          <label for="website" class="block text-gray-700 text-sm font-bold mb-2">Website</label>
          <input type="text" id="website" v-model="website" placeholder="Website"
            class="outline outline-2  mb-1 mr-1 w-full py-4 px-5 text-gray-700 leading-tight">
        </div>
      </div>
    </div>
  </div>
  <div class="screen btn px-28 py-5">
    <button @click="handleSubmit"
      class="bg-primary sumit transition duration-300 mx-5 hover:bg-blue-700 text-white font-bold py-3 hover:-translate-y-3 px-12 flex-shrink-0 focus:outline-none focus:shadow-outline mt-4">
      Apply
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      resume: null,
      coverLetter: null,
      linkedin: '',
      website: ''
    }
  },
  methods: {
    handleFileChange(type) {
      this[type] = event.target.files[0];
    },
    handleSubmit() {
      // You can use axios or fetch to send the form data to your backend
      // Example using fetch
      fetch('/api/apply', {
        method: 'POST',
        body: JSON.stringify({
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          phone: this.phone,
          resume: this.resume, // You will need to handle file upload on your backend
          coverLetter: this.coverLetter, // You will need to handle file upload on your backend
          linkedin: this.linkedin,
          website: this.website
        })
      })
        .then(response => {
          // Handle response
          console.log('Form submitted successfully');
        })
        .catch(error => {
          // Handle error
          console.error('Error submitting form:', error);
        });
    }
  }
}
</script>

<style scoped>
.sumit:hover {
  box-shadow: 10px 10px 20px #888888;
}

@media (max-width: 480px) {
  .container {
    padding: 0;
  }

  .forms {
    flex-direction: column;

  }

  .left {
    margin-left: 0;
    padding: 0;
    margin-bottom: 1.3rem;
  }

  .right {
    margin-left: 0;
  }

  .btn {
    padding: 0;
    display: flex;
    justify-content: center;
  }

  .btn button {
    margin-left: 0.3rem;
    margin-top: 3rem;
  }
}
</style>
