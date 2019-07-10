import Vue from "vue";
import Vuex from "vuex";

import { auth } from "@/store/modules/auth.js";
import { contests } from "@/store/modules/contests.js";
import { contestdetail } from "@/store/modules/contestdetail.js";
import { tournament } from "@/store/modules/tournament.js";
import { leaderboard } from "@/store/modules/leaderboard.js";
import { userprofile } from "@/store/modules/userprofile.js";
import { myteam } from "@/store/modules/myteam.js";
import { team } from "@/store/modules/team.js";
import { settings } from "@/store/modules/settings.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    contests,
    contestdetail,
    leaderboard,
    tournament,
    userprofile,
    myteam,
    team,
    settings
  },
  state: {},
  mutations: {},
  actions: {}
});
