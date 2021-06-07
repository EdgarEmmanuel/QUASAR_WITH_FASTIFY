export default class SidebarHelper {
  static getTheLinkAtTheTopOfTheSidebar () {
    const topData = [
      {
        title: 'Home',
        icon: 'home',
        link: '/home'
      },
      {
        title: 'Order Upcoming',
        icon: 'collections_bookmark',
        link: '/upcoming_order'
      },
      {
        title: 'Confirmed Order',
        icon: 'library_add_check',
        link: '/confirmed order'
      },
      {
        title: 'Delivery Form',
        icon: 'local_shipping',
        link: '/delivery-form'
      },
      {
        title: 'Archives',
        icon: 'history',
        link: '/archives'
      }
    ]
    return topData
  }

  static getTheLinksforTheInventoryCategory () {
    const inventoryLinks = [
      {
        title: 'Catalog',
        icon: 'home_work',
        link: 'catalog'
      },
      {
        title: 'Promotions',
        icon: 'redeem',
        link: '/promotions'
      },
      {
        title: 'Import From Square',
        icon: 'swap_vert',
        link: '/import_from_square'
      }
    ]
    return inventoryLinks
  }

  static getTheLinksForTheStatisticsCategory () {
    const statisticsLinks = [
      {
        title: 'Delivery Man',
        icon: 'equalizer',
        link: '/delivery_man'
      }
    ]
    return statisticsLinks
  }
}
