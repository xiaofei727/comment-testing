import axios from "axios";
import { url } from "../../components/urlconst";

export const leaderboard = {
  state: {
    leaderboards: []
  },
  actions: {
    loadLeaderboards({ commit }, leagueId) {
      axios
        .get(url.baseUrl + "/leagues/" + leagueId + "/leaderboard")
        .then(response => {
          commit("SET_LEADERBOARDS", response.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mutations: {
    SET_LEADERBOARDS(state, contests) {
      state.leaderboards = contests.map(contest => ({
        id: contest.id,
        team_name: contest.title,
        transfer: {
          left: contest.transfers_left,
          all: contest.transfers_total
        },
        points: contest.fantasy_points,
        user_id: contest.user_id,
        prize: contest.prize,
        position_delta: contest.position_delta,
        place: contest.place,
        end_place: contest.end_place
      }));
    }
  },
  getters: {}
};
