import { db } from '../../firebase.js';
export default({
    state:{
        realisationsBest: [],
        imageState: false,
        currentImage: ''
    },
    mutations:{
        bindRealisationsBest(state){
            db.collection('realisations_best').get().then(querySnapshot=>{
                querySnapshot.forEach(doc=>{
                    let url = doc.data().url;
                    let name = doc.data().name;
                    let date = doc.data().date
                    state.realisationsBest.push({
                        name,
                        url,
                        date
                    })
                })
            })
        },
        currImg(state, data){
            document.body.classList.toggle('locked')
            state.imageState = !state.imageState;
            state.currentImage = data.url;
        }
    },
    actions:{
        showImage({ commit }, data){
            commit('currImg', data);
        }
    },
    getters:{}
})