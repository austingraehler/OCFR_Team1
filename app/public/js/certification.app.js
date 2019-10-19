var certificationApp = new Vue({
  el: '#certificationApp',
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
      .then(json => { certificationApp.certifications = json })
    },
    handleSubmit(event) {
      fetch('api/certification/post.php', {
        method:'POST',
        body: JSON.stringify(this.formData),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => { certForm.formData.push(json[0]) })
      .catch( err => {
        console.error('Certification Post ERROR:');
        console.error(err);
      })
      this.handleReset();
    },
    handleReset() {
      this.formData = {
        certificationID: '',
        agency: '',
        certificationName: '',
        standardExpiry: ''
      }
    },
    // end methods
  created() {
    this.fetchCertifications();
    this.handleSubmit();
    this.handleReset();
  }
});
