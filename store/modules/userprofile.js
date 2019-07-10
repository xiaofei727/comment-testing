import axios from "axios";
import { url } from "../../components/urlconst";

export const userprofile = {
  state: {
    avatar: null,
    balance: null,
    billing_address: null,
    billing_address_2: null,
    billing_name: null,
    cash_won_current_month: null,
    cash_won_current_year: null,
    cash_won_today: null,
    city: null,
    country: null,
    country_name: null,
    email: null,
    id: null,
    send_notification_game: null,
    send_notification_referral: null,
    send_notification_special_offers: null,
    state: null,
    username: null,
    zip_code: null
  },
  actions: {
    getUserInfo({ commit }) {
      axios
        .get(url.baseUrl + "/account/profile")
        .then(response => {
          commit("GET_USERINFO", response.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mutations: {
    GET_USERINFO(state, userinfo) {
      state.avatar = userinfo.avatar;
      state.balance = userinfo.balance;
      state.billing_address = userinfo.billing_address;
      state.billing_name = userinfo.billing_name;
      state.cash_won_current_month = userinfo.cash_won_current_month;
      state.cash_won_current_year = userinfo.cash_won_current_year;
      state.cash_won_today = userinfo.cash_won_today;
      state.city = userinfo.city;
      state.country = userinfo.country;
      state.country_name = userinfo.country_name;
      state.email = userinfo.email;
      state.id = userinfo.id;
      state.send_notification_game = userinfo.send_notification_game;
      state.send_notification_referral = userinfo.send_notification_referral;
      state.send_notification_special_offers =
        userinfo.send_notification_special_offers;
      state.state = userinfo.state;
      state.username = userinfo.username;
      state.zip_code = userinfo.zip_code;
    }
  },
  getters: {}
};
