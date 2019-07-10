import axios from "axios";
import { url } from "../../components/urlconst";

export const contests = {
  state: {
    contests: []
  },
  actions: {
    loadContests({ commit }) {
      axios
        .get(url.baseUrl + "/leagues/")
        .then(response => response.data)
        .then(contests => {
          commit("SET_CONTESTS", contests);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mutations: {
    SET_CONTESTS(state, contests) {
      //console.log(contests);
      state.contests = contests.map(data => ({
        title: data.title,
        entry: data.fee,
        prizes: data.total_prize,
        entries_size: {
          entries: data.registered_players_num,
          size: data.num_members
        },
        size: data.num_members,
        registered_players_num: data.registered_players_num,
        prize_rule: data.prize_rule,
        starts: data.start_time.substring(0, 10),
        tournament: data.tournament.title,
        leagueId: data.id,
        is_joined: data.is_joined
      }));
    }
  },
  getters: {
    contests: state => state.contests
  }
};
