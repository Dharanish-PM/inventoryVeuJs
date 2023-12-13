export default {
    data(){
        return {
            userSearch:""

        }

        
    },
    methods:{
        getuserData(){
            alert("hy")
            
        
        }

    },
    props:['text'],
    emits:['alert-text']
}