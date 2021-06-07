<template>
  <q-layout class="shadow-2 rounded-borders"  >
    <q-header class="bg-white text-grey" elevated style="padding: 10px 10px">
      <div class="row">
        <div class="col-xs-12 col-sm-2 col-md-2">
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="leftDrawerOpen = !leftDrawerOpen"
          />
            <img :src="logo"  alt=""/>
        </div>
        <div class="col-xs-12 col-sm-7 col-md-7">
          <q-select outlined v-model="model" :options="locations" label="Shop Location" @input="changeTheLocationValueInTheStore" :dense="dense" :options-dense="denseOpts">
            <template v-slot:prepend>
              <q-icon name="place" @click.stop />
            </template>
          </q-select>
        </div>
        <div class="col-xs-12 col-sm-3 col-md-3" style="align-items: center;justify-content: center;">
          <div class="icons" >
            <q-icon name="video_call"/>
            <q-icon name="apps" />
            <q-icon name="message" />
            <q-icon name="notifications" />
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar5.jpg" alt="avatar">
            </q-avatar>
          </div>
        </div>
      </div>

    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-scroll-area class="fit">
          <q-list>
            <OneLinkItem
              v-for="link in topLinks"
              :key="link.title"
              v-bind="link"
            />
          </q-list>
          <hr/>
            <p class="text-h6 text-grey">
              Inventory
            </p>
          <q-list>
            <OneLinkItem
              v-for="link in inventoryLinks"
              :key="link.title"
              v-bind="link"
            />
          </q-list>
            <hr/>
            <p class="text-h6 text-grey">
              Statistics
            </p>
          <q-list>
            <OneLinkItem
              v-for="link in statisticsLinks"
              :key="link.title"
              v-bind="link"
            />
          </q-list>
          <hr/>
        <othersLink/>
        </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import OneLinkItem from 'components/OneLinkItem.vue'
import logo from '../assets/logo.png'
import othersLink from '../components/othersLink'
import ProductInterface from '../core/Product'
import AlertHelper from 'src/helpers/AlertHelper'
import SidebarHelper from '../helpers/SidebarHelper'

const linksAtTheTopInTheSidebar = SidebarHelper.getTheLinkAtTheTopOfTheSidebar()

const inventoryLinks = SidebarHelper.getTheLinksforTheInventoryCategory()

const statisticsLinks = SidebarHelper.getTheLinksForTheStatisticsCategory()

export default {
  name: 'MainLayout',
  components: { OneLinkItem, othersLink },
  data () {
    return {
      leftDrawerOpen: false,
      topLinks: linksAtTheTopInTheSidebar,
      inventoryLinks: inventoryLinks,
      statisticsLinks: statisticsLinks,
      logo: logo,
      model: null,
      dense: false,
      denseOpts: false,
      locations: []
    }
  },
  mounted () {
    this.getLocations()
  },
  methods: {
    changeTheLocationValueInTheStore () {
      this.$store.dispatch('modifyLocation', this.model)
    },
    getLocations () {
      ProductInterface.getAllLocationsOfProducts()
        .then((data) => {
          this.formatLocationsDataForTheSelectWidget(data.data.data)
        })
        // eslint-disable-next-line node/handle-callback-err
        .catch((err) => {
          AlertHelper.displaySimpleWarningAlert('Oops Try again later')
        })
    },
    formatLocationsDataForTheSelectWidget (arrayData) {
      const mutableArray = []
      arrayData.forEach((data) => {
        mutableArray.push(data.location_name.toUpperCase())
        this.locations = mutableArray
      })
    }
  }
}
</script>

<style>
.icons{
  font-size: 2em;
}

.icons .q-icon{
  margin: 0 10px;
}
</style>
