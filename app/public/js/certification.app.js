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
    .then(json => { certificationApp.certifications = json });
  },
// handleSubmit(evt) {
//
// },
handleSubmit(event) {
    fetch('api/certification/post.php', {
        method:'POST',
        body: JSON.stringify(this.formData),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => { certificationApp.certifications.push(json[0]) })
      .catch( err => {
        console.error('CERTIFICATION POST ERROR:');
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
  created() {
    this.fetchCertifications();
    this.handleReset();
  }
}
});
