const { createApp } = Vue

const app = createApp({
  data() {
    return {
      moduleNo: 1,
      moduleName: 'Confirm your playing 11',
      playingXi: [{ name: 'Cook', runs: 0, balls: 0 }, { name: 'Strauss', runs: 0, balls: 0 }, { name: 'Trott', runs: 0, balls: 0 }, { name: 'Bell', runs: 0, balls: 0 }, { name: 'Pietersen', runs: 0, balls: 0 }, { name: 'Collingwood', runs: 0, balls: 0 }, { name: 'Prior', runs: 0, balls: 0 }, { name: 'Swann', runs: 0, balls: 0 }, { name: 'Broad', runs: 0, balls: 0 }, { name: 'Anderson', runs: 0, balls: 0 }, { name: 'Finn', runs: 0, balls: 0 }],
      cpxi: true,
      csxi: false,
      scoringOptions: { 0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', n: 'NB', w: 'WB', l: 'LB', b: 'B', o: 'OUT' },
      score: 0,
      wickets: 0,
      balls: 0,
      overs: 0.0,
      cont: true,
      strike: '*',
      activeBatsman: 1,
      displayExtras: false,
      extrasAmount: 0,
      totalExtras: 0
    }
  },


  methods: {
    confirmPlayingXi() {
      this.moduleNo++
      this.cpxi = false
      this.moduleName = 'Start Scoring'
      this.csxi = true
    },
    increaseScore(scoreValue) {

      const batScores = [0, 1, 2, 3, 4, 5, 6]
      if (batScores.includes(Number(scoreValue))) {

        this.score += Number(scoreValue)

        this.calculateBatsmanScore(scoreValue);
        this.changeOvers();

      }
      else if (scoreValue == 'o') {

        this.wickets++

        this.changeOvers();
        this.calculateBatsmanScore(0);

        if (Number(this.wickets) == 10) {
          this.cont = false
        }

      }
      else if (scoreValue == 'w' || scoreValue == 'n' || scoreValue == 'l' || scoreValue == 'b') {
        this.displayExtras = true
      }

      this.changeStrike(scoreValue);

    },
    changeOvers() {
      this.balls++
      this.overs = parseFloat(this.overs)
      this.overs = (this.overs + 0.1).toFixed(1);
      if (this.balls % 6 == 0) {
        console.log('change over');
        this.balls = 0;
        this.overs = parseFloat(this.overs)
        this.overs = (this.overs + 0.4).toFixed(1);
      }
    },
    changeStrike(scoreValue) {
      if (Number(scoreValue) % 2 != 0) {
        //change strike
        console.log('change strike');
      }
    },
    calculateBatsmanScore(scoreValue) {
      this.playingXi[this.wickets].runs += Number(scoreValue)
    },
    calculateExtras() {
      this.score = 1 + Number(this.score) + Number(this.extrasAmount)
      this.displayExtras = false
      this.totalExtras += 1 + Number(this.extrasAmount)
    }
  }

}).mount("#app")