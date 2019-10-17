var certificationApp = new Vue({
  el: '#certificationApp',
  data: {
    certificationID: [],
    agency: {},
    certificationName: {},
    standardExpiry: {},
    certifications: []
  },
  methods: {
    fetchCertifications() {
      fetch('api/certification/index.php')
      .then(response => response.json())
      .then(json => { certificationApp.certifications = json });
    }
  }, // end methods
  created() {
    this.fetchCertifications();
  }
});
