var timeControl;
var game = {
  introduce: "Factoridle is a fan game of factorio",
  status: 1,
  /*
  1:运行中
  2:载入中
  3:暂停
  */
  data: {
    gameTime: 0
  },
  saveData: {},

  gameOperation: {
    save: function () {
      localStorage.setItem("saveData", game.saveData);
    },
    load: function () {
      game.saveData = localStorage.getItem("saveData");
    },
    pause: function () {
      clearInterval(timeControl);
      game.status = 3;
    },
    continue: function () {
      timeControl = setInterval(() => {
        game.data.gameTime += 1;
      }, 100);
      game.status = 1;
    }
  },
  gamePlay: function () {
    console.log("start");
    game.gameOperation.continue();
  }
};
game.gamePlay();

export default game;
