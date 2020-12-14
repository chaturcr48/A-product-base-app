import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        settings: {
            isPhotoAllowed: true,
            isNameAllowed: true,
            isMobileNumberAllowed:true
        }
    },
    mutations:{
        update(state, settings) {
            state.settings.isPhotoAllowed = settings.isPhotoAllowed;
                        state.settings.isNameAllowed = settings.isNameAllowed;
            state.settings.isMobileNumberAllowed = settings.isMobileNumberAllowed;


            
        }
    },
    getters:{
        settings:state=>state.settings
    }
})