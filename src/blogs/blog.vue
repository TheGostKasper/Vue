<template>
  <div class="container _bdo">
  <form @submit.prevent="submitForm(blog,$event)">
    <div class="form-group row">
        <label for="example-text-input" class="col-2 col-form-label">Title</label>
        <div class="col-10">
            <input class="form-control " required type="text" v-model="blog.title">
        </div>
    </div>
    <div class="form-group row">
            <label for="example-search-input" class="col-2 col-form-label">Search</label>
            <div class="col-10">
                <input class="form-control" required type="search" v-model="blog.search">
            </div>
    </div>
    <div class="form-group row">
        <label for="example-url-input" class="col-2 col-form-label">URL</label>
        <div class="col-10">
            <input class="form-control" required type="url" v-model="blog.url">
        </div>
    </div>
    <div class="form-group row">
        <div class="col-10 center">
            <input class="btn btn-default" type="submit" value="Submit">
        </div>
    </div>
  </form>
  </div>
</template>

<script>
export default {
  name: "blogs-list",
  data() {
    return {
      blog: {
        title: "Journalist",
        search: "articles",
        url: "https://journal.thriveglobal.com/feed"
      }
    };
  },
  methods: {
    submitForm(blog, event) {
      $.ajax({
        url: "http://localhost:3000/api/journal",
        type: "GET",
        contentType: "application/json",
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVhNGEwOWQ3YzBmMTJkMWI5Y2JjNjU3YiIsImNyZWF0ZWRfYXQiOiIyMDE4LTAxLTAxVDEwOjEzOjQ0LjA3NVoiLCJ1cGRhdGVkX2F0IjoiMjAxOC0wMS0wMVQxMDoxMzo0NC4wNzVaIiwibmFtZSI6Ik1hbmdhIiwidXNlcm5hbWUiOiJNYW5nYSIsImxvY2F0aW9uIjoiMS4yNTE1MTIwLDEuMjUwNTE1MSIsInBhc3N3b3JkIjoiMTIzNDU2IiwiZW1haWwiOiJoZWlvQGdtYWlsLmNvbSIsIl9fdiI6MH0sImlhdCI6MTUxNDgwMzg0M30.F8LDOPrcsME6Xo5Z2pkUnb0KW0duzRYkIq1srrTdWYg",
          "Content-Type": "application/json"
        },
        crossDomain: true
      }).done(res => {
        console.log(res);
      });
    }
  },
  created: function() {}
};
</script>

<style>
._bdo {
  margin: 20px;
}
</style>
