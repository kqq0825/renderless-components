export default{
    name:"renderless-list",
    props:{
        value: Array, 
    },
    render(){
        this.$scopedSlots.default({
            data:[]
        })
    }
}