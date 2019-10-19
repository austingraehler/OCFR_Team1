var memberApp = new Vue({
  el: '#memberApp',
  data: {
    members: [],
    memberData: {
      mid: '',
      first: '',
      last: '',
      address: '',
      email: '',
      phone: '',
      dob: '',
      start: '',
      gender: '',
      position: '',
      radio: '',
      station: '',
      status: ''
    }
  },
  methods: {
    fetchMembers() {
      fetch('api/person/index.php')
      .then(response => response.json())
      .then(json => { memberApp.members = json });
    },
    handleSubmit(evt) {

    }
  }, // end methods
  created() {
    this.fetchMembers();
  }
});
