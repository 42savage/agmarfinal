import { db } from '../../firebase.js';
export default({
    state:{
        carouselImages: []
    },
    mutations:{
        bindImages(state){
            db.collection('carouselImages').get().then(querySnapshot=>{
                querySnapshot.forEach(doc=>{
                    let url = doc.data().url;
                    let name = doc.data().name;
                    let heading_text = doc.data().heading_text;
                    let button_text = doc.data().button_text;
                    let button_href = doc.data().button_href;
                    let style = doc.data().style;
                    state.carouselImages.push({
                        name,
                        url,
                        heading_text,
                        button_text,
                        button_href,
                        style
                    })
                })
            })
        }
    },
    actions:{},
    getters:{}
})