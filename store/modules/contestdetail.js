import axios from "axios";
import { url } from "../../components/urlconst";

export const contestdetail = {
  state: {
    active_stage: null,
    created_by: null,
    created_by_id: null,
    next_match_id: null,
    num_members: null,
    registered_players_num: null,
    id: null,
    is_joined: null,
    is_started: null,
    league_title: "",
    tournament_title: "",
    start_time: null,
    end_time: null,
    status: null,
    entry: null,
    format: null,
    prize_distributions: [],
    prize_rule: null,
    stages: [
      {
        id: null,
        matches: [],
        matches_detailed: [],
        num_of_transfers: null,
        stage_start: null,
        stage_finish: null
      }
    ],
    allplayers: [],
    participating_players: [],
    filtered_players: [],
    filtered_bats_players: [],
    filtered_wk_players: [],
    filtered_rounder_players: [],
    filtered_bows_players: []
  },
  actions: {
    contestDetail({ commit }, leagueId) {
      axios
        .get(url.baseUrl + "/leagues/" + leagueId)
        .then(response => {
          commit("GET_CONTEST", response.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    get_participating_players({ commit }) {
      axios
        .get(url.baseUrl + "/athletes")
        .then(response => {
          commit("GET_PARTICIPATING_PLAYERS", response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mutations: {
    GET_CONTEST(state, contest) {
      state.id = contest.id;
      state.is_joined = contest.is_joined;
      state.is_started = contest.is_started;
      state.league_title = contest.title;
      state.tournament_title = contest.tournament.title;
      state.start_time = contest.start_time.substring(0, 10);
      state.end_time = contest.end_time.substring(0, 10);
      state.status = contest.status;
      state.entry = contest.fee;
      state.format = contest.format;
      state.created_by = contest.created_by;
      state.prize_distributions = contest.prize_distribution_rules;
      state.prize_num = contest.prize_distribution_rules.length;
      state.participating_athletes_ids = contest.participating_athletes_ids;
      state.stages = contest.stages.map(stage => ({
        id: stage.id,
        matches: stage.matches,
        matches_detailed: stage.matches_detailed,
        num_of_transfers: stage.num_of_transfers,
        stage_start: stage.matches_detailed[0].start.substring(0, 10),
        stage_finish: stage.matches_detailed[0].start.substring(0, 10)
      }));
      state.stages.map(stage => {
        stage.matches_detailed.forEach(match_detailed => {
          if (stage.stage_start > match_detailed.start.substring(0, 10))
            stage.stage_start = match_detailed.start.substring(0, 10);
        });
        stage.matches_detailed.forEach(match_detailed => {
          if (stage.stage_finish < match_detailed.start.substring(0, 10))
            stage.stage_finish = match_detailed.start.substring(0, 10);
        });
      });
    },
    GET_PARTICIPATING_PLAYERS(state, players) {
      state.allplayers = players.map(data => ({
        id: data.id,
        name: data.name,
        role: data.role,
        subrole: data.sub_role,
        avg_fpr: data.avg_fpr,
        salary: data.salary,
        team_name: data.team,
        country_team_name: data.country_team,
        selected: false,
        _showDetails: false
      }));
      state.allplayers.forEach(row => {
        if (row.team_name != undefined && row.team_name != "") {
          row.team_name = row.team_name.title;
        }
        if (row.country_team_name != undefined && row.country_team_name != "") {
          row.country_team_name = row.country_team_name.title;
        }
      });
      let athlete_ids = state.participating_athletes_ids;
      state.participating_players = state.allplayers.filter(item => {
        if (athlete_ids.includes(item.id)) return item;
      });
    }
  },
  getters: {
    participating_player_ids: state => state.participating_athletes_ids
  }
};
