export const state = () => ({
    district: "คลองสาน",
    problem: "ในการจัดการขยะมากขึ้น",
    isUpCountry:false
})

export const mutations = {
    onChangeProblem(state, payload) {
        state.problem = payload;
    },
    onChangeDistrict(state, payload) {
        state.district = payload;
    },
    onChangeUpCountry(state, payload) {
        state.isUpCountry = payload;
    }
}

export const actions = {
    async nuxtServerInit({ commit }) {
        commit('onChangeDistrict', "คลองสาน")
        commit('onChangeProblem', "ในการจัดการขยะมากขึ้น")
        commit('onChangeUpCountry', false)
    }
}