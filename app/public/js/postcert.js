var certForm = new Vue({
  el: '#certForm',
  formData: {
        certifications: [],
        recordcert: {},
        cid: '',
        agency: '',
        name: '',
        expiry: ''
  },
  methods: {
  fetchCertifications(){
    fetch('api/certification/index.php')
    .then(response => response.json())
    .then(json => {certForm.certification = json})
  },
  // handleRowClickCert(cert){
  //   this.cert= cert;
  // },
  handleSubmit(event) {
    // this.certification.cid = this.personCertification.cid;
    fetch('api/certification/post.php', {
        method:'POST',
        body: JSON.stringify(this.recordcert),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => { certForm.certifications.push(json[0]) })
      .catch( err => {
        console.error('CERTIFICATION POST ERROR:');
        console.error(err);
      })
          this.handleReset();
        },
  handleReset() {
      this.recordcert = {
        certificationID: '',
        agency: '',
        certificationName: '',
        standardExpiry: ''
      }
    },
  created() {
    this.handleSubmit();
    this.handleReset();
  }
}
});
