var certificationApp = new Vue({
  el: '#certificationApp',
  data: {
    certifications: [],
    filter: {
     certificationID: ''
   },
    formData: {
        // cid: '',
        // agency: '',
        // name: '',
        // expiry: ''
    },
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

      this.handleReset();
//      .catch( err => {
//        console.error('CERTIFICATION POST ERROR:');
//      console.error(err);
},
handleReset() {
    this.formData = {
      certificationID: '',
      agency: '',
      certificationName: '',
      standardExpiry: ''
    }
  },
  handleRowClick(certifications) {
// FIX THIS: certificationApp.certifications = certifications;
  },
  handleDelete(c) {
   this.deleteCert=c;
   fetch('api/certification/delete.php', {
   method: 'POST',
   body: JSON.stringify(this.deleteCert),
   headers: {
     "Content-Type": "application/json; charset=utf-8"
   }
   })
   .then( response => response.json() )
   .then(json => {certificationApp.certifications = json})
   .then(response => {alert('Are you sure you want to delete 1 record?')})
   this.handleReset();
},

//Below is the failed code of Cole's Update js
handleEdit(c) {
  this.updateCert=c;
   fetch('api/certification/update.php', {
     method: 'POST',
     body: JSON.stringify(this.updateCert),
     headers: {
       "Content-Type": "application/json; charset=utf-8"
     }
     })
     .then( response => response.json() )
     .then(json => {certificationApp.certifications = json})
     .then(response => {alert('Are you sure you want to update record?')})
     this.handleReset();
  },

},
  created() {
    this.handleReset();
    this.fetchCertifications();
  }
});
