import { createSlice } from "@reduxjs/toolkit"
import { galleryImages } from "../../utils"

const initialState = {
  showSidebar: false,
  showButtonOut: true,
  showNavbarTransparent: true,
  galleryData: galleryImages,
  showInfoBar: false,
}

export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.showSidebar = !state.showSidebar
    },
    closeSidebar: (state) => {
      state.showSidebar = false
    },
    closeButtonOut: (state) => {
      state.showButtonOut = false
    },
    openButtonOut: (state) => {
      state.showButtonOut = true
    },
    setNavbarBlack: (state) => {
      state.showNavbarTransparent = false
    },
    setNavbarTransparent: (state) => {
      state.showNavbarTransparent = true
    },
    toggleInfoBar: (state) => {
      state.showInfoBar = !state.showInfoBar
    },
  },
})

export const {
  toggleSidebar,
  closeSidebar,
  closeButtonOut,
  openButtonOut,
  setNavbarBlack,
  setNavbarTransparent,
  toggleInfoBar,
} = appSlice.actions
export default appSlice.reducer
