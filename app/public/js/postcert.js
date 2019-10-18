var certForm = new Vue({
  el: '#certForm',
  data: {
    formData: {
        cid: '',
        agency: '',
        name: '',
        expiry: ''
    }
  },
  methods: {
    handleSubmit() {
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
        console.error('WORK TRIAGE ERROR:');
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
    }
  },


  created() {
    this.handleReset();
  }
});
