var memberCertApp = new Vue({
  el: '#memberCertApp',
  data: {
    memberCerts: [],
    getJoins:[],
    filterCert:'all',
    filterUsers:'all',
    filter: {
     personID: '',
     certificationID: ''
   },
    memberCertData: {
    //  mid: '',
    //  cid: '',
    //  date: '',
    //  start: ''
  },
   filter:{
     certification:''
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
  },

  handleDelete(i) {
   this.deleteMemCert=i;
   fetch('api/personCertification/delete.php', {
   method: 'POST',
   body: JSON.stringify(this.deleteMemCert),
   headers: {
     "Content-Type": "application/json; charset=utf-8"
   },
  })
   .then( response => response.json() )
   .then(json => {memberCertApp.memberCerts = json})
   .then(response => {alert('Are you sure you want to delete 1 record?')})
   this.handleReset();
  },

  getTwoTables(){
    fetch('api/certification/tables.php')
    .then(response => response.json())
    .then(json => {memberCertApp.getJoins})
  },

  expireCheck(cDate){
    if(new Date(cDate) <= new Date()) return "true";
    else return "false";
  }

},
  created() {
    this.handleReset();
    this.fetchMemberCerts();
    this.getTwoTables();
  }
});
