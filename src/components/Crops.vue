<template>
<div>   
    <div class="container">
       <ul>
         <li v-for="crop in crops"><b-button size="lg" v-b-modal.modal-scrollable  > {{crop.crop_name}}   </b-button></li>
         
           
         
         
       </ul>
            
              <!--{{selectedUser.crop_name }}  {{selectedUser.crop_name}}-->
             

            <b-modal id="modal-scrollable" scrollable title="Scrollable Content">
              <p class="my-4" v-for="i in 10" :key="crops">
               Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
               in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
               
              </p>
         </b-modal>
           

    <div>
    
    
</div>


      <!--<div>
        <b-button  v-b-modal.modal-scrollable>More info</b-button>

         <b-modal id="modal-scrollable" scrollable title="Scrollable Content">
              <p class="my-4" v-for="i in 20" :key="i">
               Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
               in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </p>
         </b-modal>
      </div>-->

    </div>
    

    


    </div>



  
    <!--<div v-for="item in items">
    
      <b-container fluid class="p-4 bv-example-row">
        <b-row>
      <b-card
                title="bla"
                img-src="https://picsum.photos/600/300/?image=28"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2">
                <b-button @click="showModal">Crop info</b-button>

                   <b-modal ref="myModalRef" hide-footer title="smeče">
                     <div class="d-block text-center">
                       <h3>Hello From My Modal!</h3>
                     </div>
                        <b-button class="mt-3" variant="light" block @click="hideModal">Close Me</b-button>
                   </b-modal>
          </b-card>
           </b-row>
     <h3>{{ item.message }}</h3>
     </b-container>
  
    </div>
  

     
<b-container class="bv-example-row">
  <b-row>
    <b-col>
        <div>
          <b-card
                title="Forest"
                img-src="https://picsum.photos/600/300/?image=28"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2">
                <b-button @click="showModal">Crop info</b-button>

                   <b-modal ref="myModalRef" hide-footer title="smeče">
                     <div class="d-block text-center">
                       <h3>Hello From My Modal!</h3>
                     </div>
                        <b-button class="mt-3" variant="light" block @click="hideModal">Close Me</b-button>
                   </b-modal>
          </b-card>
        </div>

        <div>
         <b-card
                title="Snow"
                img-src="https://picsum.photos/600/300/?image=29"
                img-alt="Image"
                img-top
                
                style="max-width: 20rem;"
                class="mb-2">
                <b-button @click="showModal">Crop info</b-button>

                   <b-modal ref="myModalRef" hide-footer title="smeče">
                     <div class="d-block text-center">
                       <h3>Hello From My Modal!</h3>
                     </div>
                        <b-button class="mt-3" variant="light" block @click="hideModal">Close Me</b-button>
                   </b-modal>
          </b-card>
        </div>
    </b-col>
    <b-col>
         <div>
          <b-card
                title="Cup"
                img-src="https://picsum.photos/600/300/?image=30"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2">
                <b-button @click="showModal">Crop info</b-button>

                   <b-modal ref="myModalRef" hide-footer title="smeče">
                     <div class="d-block text-center">
                       <h3>Hello From My Modal!</h3>
                     </div>
                        <b-button class="mt-3" variant="light" block @click="hideModal">Close Me</b-button>
                   </b-modal>
          </b-card>
        </div>
    </b-col>
    <b-col>
         <div>
         <b-card
                title="Ugly feet"
                img-src="https://picsum.photos/600/300/?image=31"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2">
                <b-button @click="showModal">Crop info</b-button>

                   <b-modal ref="myModalRef" hide-footer title="Info">
                     <div class="d-block text-center">
                       <h3>Hello!</h3>
                     </div>
                        <b-button class="mt-3" variant="light" block @click="hideModal">Close Me</b-button>
                   </b-modal>
          </b-card>
        </div>
    </b-col>
  </b-row>
</b-container>
</div>-->
</div>
</template>




<script>
export default
   {
    name: 'Crops',
    methods:  {
       showModal() {
        this.$refs.myModalRef.show()
      },
      hideModal() {
        this.$refs.myModalRef.hide()
      }
    },
    data() {
      return {
      crops:
      [
      {crop_name:'tomato', crop_description:'eeeeeeee'},
      {crop_name:'potato', crop_description:'vvvvvv'},
      {crop_name:'apple', crop_description:'ggggggg'}
     

      ]/*,
      selectedUser: '',*/
    }
    }
      /*return {
    }
    items: [
      { message: 'Foo' },
      { message: 'Bar' },
      { message: 'Kar' },
      { message: 'Jar' },
      { message: 'Ar' },
      { message: 'Bla' },
      { message: 'Sanjin'},

    ]
    }*/
   
}
 
 

</script>
<style scoped>
.container{
  width: 95%;
  overflow: hidden;
  /*background: red;*/
  margin: 20px auto;
  padding: 20px;
}
.container ul {
  padding: 0px;
  margin: 0px;
}
.container ul li{
  list-style: none;
  float: left;
  width: 20%;
  height: 300px;
  background: darkorange;
  margin: 40px 0px 0px 50px;
  box-sizing: border-box;
  border: 2px solid white;

}
.container ul li:hover {
  opacity: 0.9;

}
.container ul li .title{
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: white;
  text-align: center;

}
@media screen and (max-width: 1250px) {
  .container ul li {
    width: 40%;
    margin-left: 50px;
  }
}
@media screen and (max-width: 750px) {
  .container   {
    width: 75%;
    padding: 0px;
}
  .container ul li {
    float: none;
    width: 90%;
    margin: 40px auto;
  }
}


</style>