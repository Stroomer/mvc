import Model from './Model';
import View from './View';

class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();

    this.registerEvents();
  }

  registerEvents() {
    // register view events
    this.view.playEvent.addListener((move) => {
      this.model.play(move);
    });

    // register model events
    this.model.updateCellEvent.addListener((data) => {
      this.view.updateCell(data);
    });
    this.model.victoryEvent.addListener((winner) => {
      this.view.victory(winner);
    });
    this.model.drawEvent.addListener(() => {
      this.view.draw();
    });
  }

  run() {
    this.view.render();
  }
}

export default Controller;
