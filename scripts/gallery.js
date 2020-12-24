class Carousel {
  constructor(dataSet, element) {
    this.data = dataSet;
    this.element = document.getElementById(element);
    for (const i in this.data) {
      let slide = document.createElement("div");
    }
  }
}
