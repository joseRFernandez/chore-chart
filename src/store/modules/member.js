const state = () => ({
  memberId: "",
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
  role: "",
  profilePic: "",
});

const actions = {};

const mutations = {
  SET_USERNAME: (state, username) => (state.username = username),
  SET_PASSWORD: (state, password) => (state.password = password),
  SET_FIRSTNAME: (state, firstName) => (state.firstName = firstName),
  SET_EMAIL: (state, email) => (state.email = email),
  SET_ROLE: (state, role) => (state.role = role),
  SET_PROFILE_PIC: (state, profilePic) => (state.profilePic = profilePic),
  SET_MEMBER_ID: (state, memberId) => (state.memberId = memberId),
};

export default {
  namespaced: true,
  state,
  // getters,
  actions,
  mutations,
};
