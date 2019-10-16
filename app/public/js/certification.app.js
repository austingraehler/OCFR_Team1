var certificationApp = new Vue({
  el: '#certificationApp',
  data: {
    certification: {}
  },
  methods: {
    handleSubmit() {
      fetch('/api/certification/post.php', {
        method:'POST',
        body: JSON.stringify(this.certification),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then(response => response.json())
      .then(json => { waitingApp.certifications = json })

      this.handleReset();
    },
    handleReset() {
      this.certification = {
        PersonID: '',
        certificationID: '',
        expirationDate: '',
        renewalDate: ''
      }
    }
  },

  created() {
    this.handleReset();
  }
});
