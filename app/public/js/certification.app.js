var certificationApp = new Vue({
  el: '#certificationApp',
  data: {
    certificationID: [],
    agency: {},
    certificationName: {},
    standardExpiry: {}
  },
  methods: {
    fetchCertifications() {
      fetch('api/certification/')
      .then(response => response.json())
      .then(json => { certificationApp.certifications = json })
    }
  }, // end methods
  created() {
    this.fetchCertifications();
  }
});
