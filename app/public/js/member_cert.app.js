var memberCertApp = new Vue({
  el: '#memberCertApp',
  data: {
    memberCerts: [],
    filter: {
     personID: '',
     certificationID: ''
   },
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
        .then( json => { memberCertApp.memberCerts.push(json[0]) })

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
  // memberCertApp.memberCerts = memberCerts;
  }
},
handleDelete(i) {
 this.deleteMemCert=i;
 fetch('api/personCertification/delete.php', {
 method: 'POST',
 body: JSON.stringify(this.deleteMemCert),
 headers: {
   "Content-Type": "application/json; charset=utf-8"
 }
 })
 .then( response => response.json() )
 .then(json => {member_certApp.memberCerts = json})
 .then(response => {alert('Are you sure you want to delete 1 record?')})
 this.handleReset();
},
  created() {
    this.handleReset();
    this.fetchMemberCerts();
  }
});
