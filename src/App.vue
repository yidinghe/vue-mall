<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
import storage from './storage'
export default {
  name: 'app',
  components: {
    
  },
  data(){
    return {
      a:''
    }
  },
  mounted(){
    // storage.setItem('a',1);
    // storage.setItem('b',{a:1});
    // storage.setItem('c',10,'b');
    // this.a = storage.getItem('b');
    // storage.clear('a');
    storage.clear('a','b');
  }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
