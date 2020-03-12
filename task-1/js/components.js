Vue.component("country-search", {
  template:
    '<input type="text" v-model="countryName" v-on:change="sendData"  placeholder="Search country ..."/>',
  data() {
    return {
      countryName: ""
    };
  },
  methods: {
    sendData() {
      this.$root.$emit("Country Entered", this.countryName);
    }
  }
});

Vue.component("countries", {
  template: `
  <div>

  <br>

   <country v-for="country in filteredList" :key="country.id">
        <img :src="country.img" />
        <p v-bind:id="country.id">{{country.title}}</p>
        </country>
   </div>
  `,
  data() {
    return {
      countryName: "",
      addCountryName: "",
      addCountryImage: "",
      countries: [
        { id: 1, title: "India", img: "images/India.png" },
        { id: 2, title: "Italy", img: "images/Italy.png" },
        { id: 3, title: "Egypt", img: "images/Egypt.png" },
        { id: 4, title: "Turkey", img: "images/Turkey.png" },
        { id: 5, title: "Spain", img: "images/Spain.png" },
        { id: 6, title: "Greece", img: "images/Greece.png" },
        { id: 7, title: "Iceland", img: "images/Iceland.png" },
        { id: 8, title: "Russia", img: "images/Russia.png" },
        { id: 9, title: "Georgia", img: "images/Georgia.png" },
        { id: 10, title: "Denmark", img: "images/Denmark.png" }
      ]
    };
  },
  mounted() {
    this.$root.$on("Country Entered", countryName => {
      this.countryName = countryName;
    });
  },
  computed: {
    filteredList() {
      return this.countries.filter(country => {
        return country.title
          .toLowerCase()
          .includes(this.countryName.toLowerCase());
      });
    }
  }
});
Vue.component("country", {
  template: "<div class='card'><slot></slot></div>"
});

new Vue({
  el: "#app",
  data: {
    message: "hello"
  }
});
