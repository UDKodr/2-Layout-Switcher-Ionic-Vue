import { reactive } from "vue";

export const store = reactive({
  mainScreenLayout: localStorage.getItem("mainScreenLayout"),
  listScreenLayout: localStorage.getItem("listScreenLayout"),
 
  setLayouts() {
    //    localStorage.setItem("themeSet", "darkOrange");
    this.mainScreenLayout = localStorage.getItem("mainScreenLayout");
    this.listScreenLayout = localStorage.getItem("listScreenLayout");
  },
});