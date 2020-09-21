<template>
  <div class="main">
    <div class="main-title"><h3>{{ msg }}</h3></div>
    <div class="user-count">
      <div class="count">{{ count }}</div>
      Users
    </div>
    <div class="contrainer px-lg-5" style="margin-top:15px">
        <div class="row mx-lg-n5">
      <div v-for="user in users" :key="user.name" class="col-sm-6" style="margin-bottom:15px">
        <div class="card" style="padding:10px">
        <div class="body-card">
          <div class="label">Name</div>
          <div class="title">{{ user.name }}</div>
          <div class="row">
            <div class="col">
              <div class="label">Email</div>
              <div class="email">{{ user.email }}</div>
            </div>
            <div class="col">
              <div class="label">Phone</div>
              <div class="phone">{{ user.phone }}</div>
            </div>
            <div class="col">
              <div class="label">Website</div>
              <div class="website"><a href="#" style="text-decoration:none" class="web">{{ user.website }}</a></div>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import { mapState } from "vuex";
import { INCREMENT } from "../mutation-types";

export default {
  name: "Users",
  props: {
    msg: String,
  },
  computed: {
    users() {
      return this.$store.getters.getData;
    },
    count() {
      return this.$store.getters.getCountData;
    },
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.setData(response.data);
      })
      .catch((error) => (this.loading = false));
  },
  methods: {
    setDatas(data) {
      this.$store.dispatch('setDatas', data);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  background-color: #f5f7fa;
  padding: 10px;
}
.count {
  color: #83dd8b;
  font-weight: 800;
  margin-right: 10px;
}
.web {
  color: #83dd8b;
  font-weight: 800;
  margin-right: 10px;
}
.user-count {
  border-bottom: 1px solid #e1e1e7;
  color: #646464;
  display: flex;
}
.label {
font-size:12px;
  color: #646464;
  display: flex;
}
.title{
font-size:20px;
  font-weight: 800;
}
</style>
