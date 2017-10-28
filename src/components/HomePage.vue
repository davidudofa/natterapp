<template>
  <div class="home">
    <h2>{{ msg }}</h2>
    <b><em id="errormsg" v-if="error">{{ errormsg }}</em></b>
    <p><label>User Name</label>
    <input type="text" v-model="userdata.username" name="uname" required></p>
    <p><label>Hash Key</label>
    <input type="text" v-model="userdata.userhash" name="uhash" required></p>
    <p><button v-on:click="doSubmit()">Submit</button></p>
    <div id="messageblock" v-if="success">
      <h2 id="success">Last Message</h2>
      <p><label>From: </label>&nbsp;<b>{{ fromguy }}</b></p>
      <p><label>Message: </label>&nbsp;<b>{{ lastmsg }}</b></p>
    </div>

  </div>
</template>

<script>

export default {
  name: 'HomePage',
  data () {
    return {
      msg: 'Input username and hashkey to read message',
      userdata: [],
      fromguy: '',
      lastmsg: '',
      errormsg: '',
      success: '',
      error: ''
    }
  },
  methods: {
    // submit function to make API call to server
    doSubmit: function () {
      this.$http.get('/api/action/?username=' + this.userdata.username + '&userhash=' + this.userdata.userhash).then(function (response) {
        if (response.body.status === 'success') {
          this.success = 'success'
          this.fromguy = response.body.from
          this.lastmsg = response.body.msg
          this.error = ''
        } else {
          this.success = ''
          this.error = 'error'
          this.errormsg = response.body.errormsg
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

#errormsg {
  color: red;
  animation: blinker 2s linear infinite;
}
#success {
  color: green
}
</style>
