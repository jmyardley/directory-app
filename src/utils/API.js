import axios from "axios";

const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";
const USERSURL = "https://randomuser.me/api/?inc=gender,name,email,cell,picture,dob&results=20";

// Export an object with a "search" method that searches the Giphy API for the passedquer
export default {
  search: function(query) {
    return axios.get(USERSURL);
  }
};
