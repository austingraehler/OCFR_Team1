var certUpdate = new Vue({
  el: '#certUpdate',
  data: {
    certifications: [],
    formData: {
        // cid: '',
        // agency: '',
        // name: '',
        // expiry: ''
    }
  },
  methods: {
    getCert() {
      var params = (new URL(document.location)).searchParams;
      this.id.certificationID = params.get("certificationID ");
    },
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
  created() {
    this.getGuid();
    this.fetchMemberbyGUID();
  }
}
});
