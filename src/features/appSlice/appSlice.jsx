import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  showSidebar: false,
  showButtonOut: true,
  showNavbarTransparent: true,
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
  },
})

export const {
  toggleSidebar,
  closeSidebar,
  closeButtonOut,
  openButtonOut,
  setNavbarBlack,
  setNavbarTransparent,
} = appSlice.actions
export default appSlice.reducer
