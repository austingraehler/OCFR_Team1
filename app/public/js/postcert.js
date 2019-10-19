var certForm = new Vue({
  el: '#certForm',
  formData: {
        certifications: [],
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
  handleRowClickCert(cert){
    this.cert= cert;
  },
  handleSubmit(event) {
    this.certification.cid = this.personCertification.cid;
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
        console.error('CERTIFICATION POST ERROR:');
        console.error(err);
  }
},
  handleReset() {
      this.formData = {
        certificationID: '',
        agency: '',
        certificationName: '',
        standardExpiry: ''
      },
  created() {
    this.handleSubmit();
    this.handleReset();
  }
});
