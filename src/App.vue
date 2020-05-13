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

<style lang='scss'>
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
