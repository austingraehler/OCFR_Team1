var memberApp = new Vue({
  el: '#memberApp',
  data: {
    members: [],
    memberData: {

    }
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
        memberApp.members = members;
        }
    },
  created() {
    this.handleReset();
    this.fetchMembers();
  }
});
