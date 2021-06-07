<template>
<div class="catalog">
  <!--  start form row -->
    <form class="row" @submit="formSubmitted" method="post">
      <div class="col-xs-12 col-sm-6 col-md-6">
        <q-input outlined bottom-slots v-model="productNameTextField" label="Search" :dense="dense">
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
          <template v-slot:append>
            <q-icon name="close" @click="text = ''" class="cursor-pointer" />
          </template>
        </q-input>
      </div>
      <div class="col-xs-12 col-sm-3 col-md-3">
        <div class="q-gutter-sm">
          <q-checkbox v-model="includeInactiveCheckBox" size="lg" label="Include inactive" color="orange" />
        </div>
      </div>
      <div class="col-xs-12 col-sm-3 col-md-3 flex-center">
        <div class="q-gutter-sm">
          <q-btn push type="submit" color="primary" label="Submit" style="max-width:200px" />
        </div>
      </div>
    </form>
  <!--  end form row -->
  <!--  start upload file row -->
  <div class="row">
    <div class="col-xs-12 col-sm-3 col-md-3">
      <form class="file_form">
        <input type="file" class="inputFile" name="file"/>
      </form>
    </div>
  </div>
  <!--  end upload file row -->
  <!--start floating relaod button -->
      <a class="float">
        <q-btn color="primary" icon="cached" class="my-float" v-on:click="test"/>
      </a>
  <!--  start floating relaod button-->
  <!--  start table -->
  <div id="q-app">
    <div class="q-pa-md">
      <q-table
        :data="donnees"
        :columns="columns"
        row-key="name"
      ></q-table>
    </div>
  </div>
  <!--  end table -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductInterface from '../core/Product'
import AlertHelper from '../helpers/AlertHelper'

const columns = [
  {
    name: 'No',
    required: true,
    label: 'No',
    align: 'left',
    field: row => row.id,
    format: val => `${val}`,
    sortable: true,
    classes: 'bg-grey-2 ellipsis',
    style: 'max-width: 10px',
    headerClasses: 'bg-black text-white'
  },
  { name: 'Catalog', align: 'center', label: 'Catalog', headerClasses: 'bg-primary text-white', style: 'max-width: 1000px', field: row => row.catalog_name, sortable: true },
  { name: 'Color', label: 'Color', field: row => row.color, headerClasses: 'bg-black text-white', sortable: true },
  { name: 'size', label: 'Size', field: row => row.size, headerClasses: 'bg-black text-white' },
  { name: 'quantity', label: 'Quantity', field: row => row.quantity, headerClasses: 'bg-black text-white' }
]
export default {
  name: 'Catalog',
  data () {
    return {
      text: '',
      dense: false,
      includeInactiveCheckBox: false,
      productNameTextField: '',
      file: null,
      columns: columns,
      donnees: [],
      complex: null
    }
  },
  computed: {
    ...mapState(['location'])
  },
  watch: {
    location (newValue, oldValue) {
      // Do whatever makes sense now
      if (newValue !== null) {
        this.getProductByLocation(newValue)
        this.donnees = []
      }
    }
  },
  mounted () {
    this.getAllDatabaseProducts()
  },
  methods: {
    getProductByLocation (location) {
      const LocationNameInLowerCase = location.toLowerCase()
      console.log(LocationNameInLowerCase)
      ProductInterface.getProductsByLocation(LocationNameInLowerCase)
        .then((data) => {
          this.donnees = data.data.data
        })
        // eslint-disable-next-line node/handle-callback-err
        .catch((err) => {
          AlertHelper.displaySimpleWarningAlert('Oops Try again later')
        })
    },
    test () {
      alert('floating button works')
    },
    formSubmitted (e) {
      e.preventDefault()
      if (this.productNameTextField.trim() !== '') {
        console.log(`The checkbox value ==> ${this.includeInactiveCheckBox}`)
        console.log(`the text field ==> ${this.productNameTextField}`)
        this.findProductByName(this.productNameTextField)
        this.clearTheFormField()
      }
    },
    findProductByName (productName) {
      console.log(productName)
    },
    clearTheFormField () {
      this.productNameTextField = ''
      this.includeInactiveCheckBox = ''
    },
    getAllDatabaseProducts () {
      ProductInterface.getAllProducts()
        .then((data) => {
          this.donnees = data.data.data
        })
        // eslint-disable-next-line node/handle-callback-err
        .catch((err) => {
          AlertHelper.displaySimpleWarningAlert('Oops Try again later')
        })
    }
  }
}
</script>

<style scoped>
.catalog{
  padding: 10px 5px;
}

/* start form style */
form{
  margin:0 0 12px 0;
}

/*end form style */

.inputFile {
  width:200px;
  overflow: hidden;
}
.inputFile::-webkit-file-upload-button {
  visibility: hidden;
}
.inputFile::before {
  content: 'IMPORT NEW SKU(S)';
  display: inline-block;
  /*background: linear-gradient(top, #3f87d6, #3f87d6);*/
  border: 1px solid #3f87d6;
  border-radius: 3px;
  padding: 5px 8px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 10pt;
  color: #3f87d6;
}
.inputFile::before {
  border-color: #3f87d6;
}
.inputFile:active::before {
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
}
/* start floating button*/

.float{
  position:fixed;
  width:60px;
  height:60px;
  bottom:40px;
  right:40px;
  /*color:#FFF;*/
  border-radius:50px;
  /*text-align:center;*/
  /*box-shadow: 2px 2px 3px #999;*/
}

.my-float{
  margin-top:22px;
}
</style>
