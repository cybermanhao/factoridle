var timeControl;
var game = {
  introduce: "Factoridle is a fan game of factorio",
  status: 0,
  /*
  0:未就绪
  1:运行中
  2:载入中
  3:暂停
  */
  data: {
    startTime: Date.now(),
    gameTime: 0
  },
  saveData: {},
  timer: {
    initalize: function () {
      game.data.gameTime = Date.now();
    }
  },

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
    if (game.status === 0) game.status = 2;
    console.log("载入中");
    setTimeout(() => {
      game.status = 1;
      console.log("开始游戏");
    }, 2000);
    game.gameOperation.continue();
    setInterval(() => {
      console.log(game.data.gameTime);
    }, 5000);
  }
};
game.gamePlay();

export default game;
