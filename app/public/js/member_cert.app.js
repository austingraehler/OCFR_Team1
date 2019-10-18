var memberCertApp = new Vue({
  el: '#memberCertApp',
  data: {
    memberCerts: [],
  },
  methods: {
    fetchCertifications() {
      fetch('api/person/index.php')
      .then(response => response.json())
      .then(json => { memberCertApp.memberCerts = json });
    },
    handleSubmit(evt) {

    }
  }, // end methods
  created() {
    this.fetchCertifications();
  }
});
