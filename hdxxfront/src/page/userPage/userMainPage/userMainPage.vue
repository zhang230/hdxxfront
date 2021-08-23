<template>
  <div  class="userMainPage">
    
    <Header />
    <Courses />
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Courses from "./components/courses.vue";
export default {
  name: "userMain",
  components: {
    Header,
    Courses,
  },
};
</script>

<style>
body{
  background-color: #8ae6ad56;
}

/* 动画 */

</style>