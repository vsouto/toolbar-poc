
export default class ElementModel {

  constructor(data, options) {

    this.id = data.id;
    this.title = data.title;
    this.icon = data.icon;
    this.status = data.status;
    this.image = data.image;
    this.events = data.events;
  }
}
