import {create} from 'zustand'

const useMenu = create(
    (set, get) => ({
        mediaType: 'movie',
        menuPosition: {},
        movie: {},
        openSubmenu: false,
        showForm: false,
        showSideMenu: false,
        setOpenSubMenu: (val) => {
            set((state) => {
                return {
                    ...state,
                    openSubmenu: val
                }
            })
        },
        setMenuPosition: (params) => {
            const {menuInfo} = params
            set((state) => {
                return {
                    ...state,
                    menuPosition: menuInfo
                }
            })
        },
        setShowForm: (val) => {
            set((state) => {
                return {
                    ...state,
                    showForm: val
                }
            })
        },
        setShowSideMenu: (val) => {
            set((state) => {
                return {
                    ...state,
                    showSideMenu: val
                }
            })
        },
        setMediaType: (val) => {
            set(state => {
                return {
                    ...state,
                    mediaType: val
                }
            })
        },
        setMovie: (val) => {
            set(state => {
                return { ...state, movie: val}
            })
        }
    }) 
)

export default useMenu;