<template>
<div>
  <b-container class="bv-example-row">
  <b-row>
    <b-col>
        <div>
          <b-card
                title="Corn"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2">
                <b-button @click="showModal">Show more</b-button>

                   <b-modal ref="myModalRef" hide-footer title="Using Component Methods">
                     <div class="d-block text-center">
                       <h3>Hello From My Modal!</h3>
                     </div>
                        <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
                   </b-modal>
          </b-card>
        </div>

        <div>
          <b-card
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2">
                <b-button @click="showModal">Show more</b-button>

                   <b-modal ref="myModalRef" hide-footer title="Using Component Methods">
                     <div class="d-block text-center">
                       <h3>Hello From My Modal!</h3>
                     </div>
                        <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
                   </b-modal>
          </b-card>
        </div>
    </b-col>
    <b-col>
         <div>
          <b-button @click="showModal">Show more</b-button>

          <b-modal ref="myModalRef" hide-footer title="Using Component Methods">
            <div class="d-block text-center">
               <h3>Hello From My Modal!</h3>
            </div>
            <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
         </b-modal>
        </div>
    </b-col>
    <b-col>
         <div>
          <b-button @click="showModal">Show more</b-button>

          <b-modal ref="myModalRef" hide-footer title="Using Component Methods">
            <div class="d-block text-center">
               <h3>Hello From My Modal!</h3>
            </div>
            <b-button class="mt-3" variant="light" block @click="hideModal">Close Me</b-button>
         </b-modal>
        </div>
    </b-col>
  </b-row>
</b-container>
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
    }
}
 
 

</script>
<style scoped>

</style>