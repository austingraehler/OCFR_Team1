var memberApp = new Vue({
  el: '#memberApp',
  data: {
    members: [],
    filter: {
     personID: ''
   },
    memberData: {

    },
  },
  methods: {
    fetchMembers() {
      fetch('api/person/index.php')
      .then(response => response.json())
      .then(json => { memberApp.members = json });
    },
    handleSubmit(event) {
      fetch('api/person/post.php', {
          method:'POST',
          body: JSON.stringify(this.memberData),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => { memberApp.members.push(json[0]) })

        this.handleReset();
    },
    handleReset() {
        this.memberData = {
          personID: '',
          firstName: '',
          lastName: '',
          address: '',
          email: '',
          phoneNumber: '',
          dob: '',
          startDate: '',
          gender: '',
          position: '',
          radioNumber: '',
          stationNumber: '',
          isActive: ''
        }
      },
      handleRowClick(members) {
    //    memberApp.members = members;
      },
      handleDelete(p) {
        this.deletePerson=p;
        fetch('api/person/delete.php', {
        method: 'POST',
        body: JSON.stringify(this.deletePerson),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
        })
        .then( response => response.json() )
        .then(json => {memberApp.members = json})
        .then(response => {alert('Are you sure you want to delete 1 member?')})
        this.handleReset();
      },
      handleEdit(p) {
        this.updateMem=c;
         fetch('api/person/update.php', {
           method: 'POST',
           body: JSON.stringify(this.updateMem),
           headers: {
             "Content-Type": "application/json; charset=utf-8"
           }
           })
           .then( response => response.json() )
           .then(json => {memberApp.memberss = json})
           .then(response => {alert('Are you sure you want to update 1 record?')})
           this.handleReset();
        },
    },
  created() {
    this.handleReset();
    this.fetchMembers();
  }
});
