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
      .then(json => { patientRecordsApp.persons = json })
    },
  }, // end methods
  created() {
    this.fetchCertifications();
  }
});
