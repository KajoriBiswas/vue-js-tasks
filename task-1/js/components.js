Vue.component("countries", {
  template: `
  <div>
  <div class="addCountrySection">
  <input type="text" name="addCountryName" v-model="addCountryName" placeholder="country Name"/>
  <input type="text" name="addCountryImage" v-model="addCountryImage" placeholder="country Image"/>
  <button class="addCountryBtn" v-on:click="addElement">Add</button>
  </div>
  <br>
  <input type="text" v-model="countryName"  placeholder="Search country ..."/>
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
  methods: {
    addElement: function() {
      var status = this.validateCountry(
        this.addCountryName,
        this.addCountryImage
      );
      if (status) {
        this.countries.push({title: this.addCountryName, img: this.addCountryImage});
        this.addCountryName = "";
        this.addCountryImage = "";
      }
    },
    validateCountry: function(countryName, countryImage) {
      var status = true;
      if (!countryName && !countryImage) {
        alert("Please provide country name and image");
        status = false;
      } else if (
        (!countryName && countryImage) ||
        (countryName && !countryImage)
      ) {
        alert("Please provide the missing country name or the image");
        status = false;
      } else {
        status = true;
      }
      return status;
    }
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
