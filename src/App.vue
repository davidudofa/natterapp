<template>
  <div id="app">
    <h1>NatterBase</h1>
    <HomePage/>
    <footer>Udofa N Michael (nyime2@gmail.com)</footer>
  </div>
</template>

<script>
import HomePage from './components/HomePage'

export default {
  name: 'app',
  components: {
    HomePage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
footer {
  bottom: 0;
  width: 100%;
  margin: auto;
  padding-top: 20%;
  padding-bottom: 20%;
  text-align: center;
}
</style>
