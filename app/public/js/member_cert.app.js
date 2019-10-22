var memberCertApp = new Vue({
  el: '#memberCertApp',
  data: {
    memberCerts: [],
    memberCertData: {
    //  mid: '',
    //  cid: '',
    //  date: '',
    //  start: ''
    }
  },
    methods: {
  fetchMemberCerts() {
      fetch('api/personCertification/index.php')
      .then(response => response.json())
      .then(json => { memberCertApp.memberCerts = json });
    },
  handleSubmit(event) {
      fetch('api/personCertification/post.php', {
          method:'POST',
          body: JSON.stringify(this.memberCertData),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => { certificationApp.memberCerts.push(json[0]) })

        this.handleReset();
},
handleReset() {
  this.memberCertData = {
    personID: '',
    certificationID: '',
    expirationDate: '',
    startDate: ''
  }
},
handleRowClick(memberCerts) {
  memberCertApp.memberCerts = memberCerts;
  }
},
  created() {
    this.handleReset();
    this.fetchMemberCerts();
  }
});
