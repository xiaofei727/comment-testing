import axios from "axios";
import { url } from "../../components/urlconst";

export const team = {
  state: {
    error: []
  },
  actions: {
    createteam({ commit }, data) {
      return new Promise((resolve, reject) => {
        axios({
          url: url.baseUrl + `/leagues/participation-record/`,
          data: data,
          method: "POST"
        })
          .then(response => {
            console.log(response.data);
            commit("CREATE_TEAM", response.data);
            //resolve(response);
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  },
  mutations: {
    CREATE_TEAM(contest) {
      console.log(contest);
    }
  },
  getters: {}
};
