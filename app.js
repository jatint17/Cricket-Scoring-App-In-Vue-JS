const { createApp } = Vue

const app = createApp({
  data() {
    return {
      moduleNo: 1,
      moduleName: 'Confirm your playing 11',
      playingXi: ['Cook', 'Strauss', 'Trott', 'Bell', 'Pietersen', 'Collingwood', 'Prior', 'Swann', 'Broad', 'Anderson', 'Finn'],
      cpxi: true,
      csxi: false,
      scoringOptions: { 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', n: 'NB', w: 'WB', l: 'LB', o: 'OUT' },
      score: 0,
      wickets: 0,
      balls: 0,
      overs: 0.0,
      cont: true,
      strike: '*',
      activeBatsman: 1
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
      console.log(scoreValue);

      const batScores = [1, 2, 3, 4, 5, 6]
      if (batScores.includes(Number(scoreValue))) {

        this.score += Number(scoreValue)
        this.changeOvers();

      }
      else if (scoreValue == 'o') {

        this.changeOvers();
        this.wickets++

        if (Number(this.wickets) == 10) {
          this.cont = false
        }

      }
      else if (scoreValue == 'w') {
        this.score++
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
    }
  }




}).mount("#app")