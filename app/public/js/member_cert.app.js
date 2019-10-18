var memberCertApp = new Vue({
  el: '#memberCertApp',
  data: {
    memberCerts: [],
    memberCertData: {
      mid: '',
      cid: '',
      date: '',
      start: ''
    }
  },
  methods: {
    fetchMemberCerts() {
      fetch('api/personCertification/index.php')
      .then(response => response.json())
      .then(json => { memberCertApp.memberCerts = json });
    },
    handleSubmit(evt) {

    }
  }, // end methods
  created() {
    this.fetchMemberCerts();
  }
});
