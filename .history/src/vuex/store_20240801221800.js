import Vue from "vue";
import axios from "axios";
import Vuex from "vuex";
Vue.use(Vuex);

Vue.use(Vuex);
const state = {
  //存放状态（即数据）
  classify: [],
  booklistUpdate: [],
  booklistDownload: [],
  booklist: [],
  authors: [],
};
const getters = {
  //state的计算属性
  classify: (state) => state.classify,
  booklist: (state) => state.booklist,
  booklistUpdate: (state) => state.booklistUpdate,
  booklistDownload: (state) => state.booklistDownload,
  authors: (state) => state.authors,
  // getBooksByAuthorId: (state) => (authorId) => {
  //   return state.demolist.booklist.filter((book) => book.AuthorID === authorId);
  // },

  
const notifications = document.querySelector('.notifications'),
buttons = document.querySelectorAll('.buttons .btn'),
toastDetails = {
  timer: 5000,
  success:{
    icon: 'fa-circle-check',
    text: 'Success: This is a success toast.'
  },
  error:{
    icon: 'fa-circle-xmark',
    text: 'Error: This is a error toast.'
  },
  warning:{
    icon: 'fa-circle-exclamation',
    text: 'Warning: This is a warning toast.'
  },
  info:{
    icon: 'fa-circle-info',
    text: 'Info: This is a info toast.'
  }
},
removeToast = (toast) =>{
  toast.classList.add('hide')
  if( toast.timeoutId) clearTimeout(toast.timeoutId) // 清楚setTimeout
  // 移除li元素
  setTimeout(() => {
    toast.remove()
  },500)

}


const createToast = (id) => {
  // console.log(id)
 const {icon, text} = toastDetails[id]
 const toast = document.createElement('li') // 创建li元素
 toast.className = `toast ${id}` // 为li元素新增样式
 toast.innerHTML = `<div class="column">
 <i class="fa-solid ${icon}"></i>
 <span>${text}</span>
</div>
<i class="fa-solid fa-xmark" onClick="removeToast(this.parentElement)"></i>`
  notifications.appendChild(toast) // 添加元素到 notifications ul
  // 5秒后 隐藏toast
  toast.timeoutId = setTimeout(()=> removeToast(toast), toastDetails.timer)
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => createToast(btn.id))
})
};
const mutations = {
  SET_CLASSIFY(state, data) {
    state.classify = data;
  },
  SET_BOOKLIST(state, data) {
    state.booklist = data;
    state.booklistUpdate = data.slice(16, 32);
    state.booklistDownload = data.slice(32, 48);
  },
  SET_AUTHORS(state, data) {
    state.authors = data;
  },
};

const actions = {
  fetchbooklist({ commit }) {
    return axios({
      method: "get",
      url: "static/BookList.json",
      dataType: "json",
    })
      .then((res) => {
        console.log(res.data);
        console.log("访问BOOKLIST数据成功");
        commit("SET_BOOKLIST", res.data);
      })
      .catch((error) => {
        console.log(error);
        alert("服务器BOOKLIST连接异常");
        console.log("访问BOOKLIST数据失败");
      });
  },

  fetchclassify({ commit }) {
    return axios({
      method: "get",
      url: "static/Categories.json",
      dataType: "json",
    })
      .then((res) => {
        console.log(res.data);
        console.log("访问Categories数据成功");
        commit("SET_CLASSIFY", res.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Categories服务器连接异常");
        console.log("访问Categories数据失败");
      });
  },
  fetchauthor({ commit }) {
    return axios({
      method: "get",
      url: "static/Authors.json",
      dataType: "json",
    })
      .then((res) => {
        console.log(res.data);
        console.log("访问Authors数据成功");
        commit("SET_AUTHORS", res.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Authors服务器连接异常");
        console.log("访问Authors数据失败");
      });
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {},
});
