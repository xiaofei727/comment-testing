import axios from "axios";
import { url } from "../../components/urlconst";

export const settings = {
  state: {
    salary_cap: null,
    min_batsmen: null,
    wicket_keepers_exact: null,
    min_bowlers: null,
    max_members_from_one_country: null,
    max_members_from_one_team: null,
    prize_rules: [],
    max_withdrawal_tranactions_per_day: null,
    max_withdrawal_amount: null,
    currency_exchange: null,
    league_fee: null
  },
  actions: {
    getSettings({ commit }) {
      axios
        .get(url.baseUrl + "/settings")
        .then(response => {
          commit("GET_SETTINGS", response.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mutations: {
    GET_SETTINGS(state, settings) {
      state.salary_cap = settings.salary_cap;
      state.min_batsmen = settings.min_batsmen;
      state.wicket_keepers_exact = settings.wicket_keepers_exact;
      state.min_bowlers = settings.min_bowlers;
      state.max_members_from_one_country =
        settings.max_members_from_one_country;
      state.max_members_from_one_team = settings.max_members_from_one_team;
      state.prize_rules = settings.prize_rules;
      state.max_withdrawal_tranactions_per_day =
        settings.max_withdrawal_tranactions_per_day;
      state.max_withdrawal_amount = settings.max_withdrawal_amount;
      state.currency_exchange = settings.currency_exchange;
      state.league_fee = settings.league_fee;
    }
  },
  getters: {
    settings: state => state
  }
};
