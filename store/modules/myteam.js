import axios from "axios";
import { url } from "../../components/urlconst";

export const myteam = {
  state: {
    myteams: []
  },
  actions: {
    getMyteams({ commit }, leagueId) {
      axios
        .get(url.baseUrl + "/fantasy-teams")
        .then(response => {
          commit(
            "GET_MYTEAMS",
            response.data.filter(data => {
              if (data.league == leagueId) {
                return data;
              }
            })
          );
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mutations: {
    GET_MYTEAMS(state, myTeams) {
      state.myteams = myTeams.map(myTeam => ({
        teamId: myTeam.id,
        leagueId: myTeam.league,
        team_name: myTeam.team_name,
        forecasted_result: myTeam.forecasted_result,
        transfers_left: myTeam.transfers_left_total
      }));
    }
  },
  getters: {}
};
