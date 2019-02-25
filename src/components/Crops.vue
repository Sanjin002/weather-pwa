<template>
<div>
  
    <div v-for="item in items">
    
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
</div>
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
    items: [
      { message: 'Foo' },
      { message: 'Bar' },
      { message: 'Kar' },
      { message: 'Jar' },
      { message: 'Ar' },
      { message: 'Bla' },
      { message: 'Sanjin'},

    ]
    }
  }
}
 
 

</script>
<style scoped>
 
</style>