import { db } from '../../firebase.js';
export default({
    state:{
        offerIcons: []
    },
    mutations:{
        bindOfferIcons(state){
            db.collection('offerIcons').get().then(querySnapshot=>{
                querySnapshot.forEach(doc=>{
                    let url = doc.data().url;
                    let name = doc.data().name;
                    let style = doc.data().style
                    state.offerIcons.push({
                        name,
                        url,
                        style
                    })
                })
            })
        },
    },
    actions:{},
    getters:{}
})