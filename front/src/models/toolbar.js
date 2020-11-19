import MenuItemModel from '@/models/menuitem'

export default class ToolbarModel {

  constructor(data, options) {

    this.setMenuItems(data.menuItems);
  }

  setMenuItems(items) {

    var elements = [];

    for (let i=0; i<items.length; i++) {
      var element = new MenuItemModel(items[i]);

      elements.push(element);
    }

    this.menuItems = elements;
  }

  addMenuItem() {
    console.log('adding menu item to Toolbar ');

    this.menuItems.push(this.menuItems[0]);
  }

  removeMenuItem() {

    this.menuItems.pop();
  }

  showMenuItem() {
    this.menuItems[0].status = 'active';
  }

  hideMenuItem() {
    this.menuItems[0].status = 'inactive';
  }

}
