import ElementModel from '@/models/element'

export default class MenuItemModel {

  constructor(data, options) {

    this.id = data.id;
    this.title = data.title;
    this.icon = data.icon;
    this.status = data.status;

    this.setElements(data.children);

  }

  setElements(children) {

    var elements = [];

    for (let i=0; i<children.length; i++) {
      var element = new ElementModel(children[i]);

      elements.push(element);
    }

    this.children = elements;
  }
}
