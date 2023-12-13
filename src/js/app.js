import logo from "@/assets/images/bliblilogo.jpeg"
import NavComponent from "@/components/Navbar.vue"
import FilterComponent from "@/components/Filters.vue"
import ProductsComponent from "@/components/ProductList.vue"
export default{
  body(){
    return{
      fontsize:1,
      title:""
    }
  },
  methods:{
    alertMsg(msg){
      this.title=msg
      alert(this.title)
    }
  },
  
  components:{
    NavComponent,
    FilterComponent,
    ProductsComponent
  }

}