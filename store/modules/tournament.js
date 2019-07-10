import axios from "axios";
import { url } from "../../components/urlconst";

export const tournament = {
  state: {
    tournaments: [{ value: null, text: "SELECT TEAMS" }]
  },
  actions: {
    loadTournaments({ commit }) {
      axios
        .get(url.baseUrl + "/tournaments/")
        .then(r => r.data)
        .then(tournaments => {
          commit("SET_TOURNAMENTS", tournaments);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mutations: {
    SET_TOURNAMENTS(state, tournaments) {
      tournaments.forEach(data => {
        state.tournaments.push({
          value: data.id,
          text: data.title
        });
      });
    }
  },
  getter: {}
};
