let instance = null;

class IconResource {
  static getInstance() {
    if (!instance) {
      instance = new IconResource();
    }
    return instance;
  }

  constructor() {
    this.icons = {
      arrowDown: require('./arrow-down.png'),
    };
  }

  get(name) {
    return this.icons[name];
  }
}

export default IconResource.getInstance();