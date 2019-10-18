var currentApp = new Vue({
  el: '#currentApp',
  data: {
    certifications: [],
    formData: {
        cid: '',
        agency: '',
        name: '',
        expiry: ''
    }
  },
  methods: {
    fetchCertifications() {
      fetch('api/certification/index.php')
      .then(response => response.json())
      .then(json => { certificationApp.certifications = json });
    },
    handleSubmit(evt) {

    }
  }, // end methods
  created() {
    this.fetchCertifications();
  }
});
