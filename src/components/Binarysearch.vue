<template>
  <div class="hello">
    <h4>Binary search</h4>
    <div v-show="!gameLoading">
      <!-- -->
      <b-row>
        <b-col md="8">
          <span
            @click="checkResult(item)"
            :id="'b_'+ item"
            class="number-box"
            v-for="item in incomingList"
            :key="item"
          >{{item}}</span>
        </b-col>

        <b-col md="4">
          <div v-show="wingame">
            <h3>{{hideNumber}}</h3>
          </div>
          <p>
            Human tries:
            <span>{{stepscounter}}</span>
          </p>
          <p style="color:#007bff;">
            Binary search tries:
            <span>{{binarySearchSteps}}</span>
          </p>
          <div v-show="wingame" style="color:green;">You've found in {{stepscounter}} steps.</div>
          <b-button style="margin:3px;" @click="startNewGame" variant="success">New game</b-button>
          <b-button @click="selfGame" variant="primary">Binary search algorithm</b-button>
          <b-button @click="tryMethod" variant="primary">Try</b-button>
          <b-row class="my-1">
            <b-col sm="9">
              <label for="amountOgNumbers">Amount of numbers:</label>
              <b-form-input v-model="amountOfNumbers" id="amountOgNumbers" type="number"></b-form-input>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
    <div v-show="gameLoading">
      <strong>Loading...</strong>
      <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
    </div>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  name: "BinarySearch",
  data() {
    return {
      incomingList: [],
      hideNumber: 0,
      wingame: false,
      stepscounter: 0,
      gameLoading: false,
      startRange: 0,
      finishRange: 0,
      binarySearchSteps: 0,
      amountOfNumbers: 200
    };
  },
  methods: {
    createListForSearching() {
      let x = 0;
      while (x < this.amountOfNumbers) {
        x += 1;
        this.incomingList.push(x);
      }

      this.hideNumber =
        Math.floor(Math.random() * (1 + this.incomingList.length - 1)) + 1;
    },
    startNewGame() {
      this.gameLoading = true;
      this.incomingList = [];
      setTimeout(() => {
        this.createListForSearching();
        this.gameLoading = false;
      }, 50);
      this.wingame = false;
      this.stepscounter = 0;
      this.binarySearchSteps = 0;
    },
    checkResult(button_id, type = "human") {
      let max_id = this.incomingList.length;
      let min_id = 1;

      if (type == "human") {
        this.stepscounter += 1;
      }

      if (button_id < this.hideNumber) {
        this.markRangeElems(min_id, button_id);
      } else if (button_id > this.hideNumber) {
        this.markRangeElems(button_id, max_id);
      } else {
        if (type == "human") {
          let markelem = document.getElementById("b_" + button_id);
          markelem.className += " finded";
        }

        this.wingame = true;
      }
    },
    markRangeElems(start_id, finish_id) {
      let i = start_id;
      while (i <= finish_id) {
        let markelem = document.getElementById("b_" + i);

        if (!markelem.classList.contains("marked")) {
          markelem.className += " marked";
        }
        i += 1;
      }
    },
    selfGame() {
      this.binarySearchSteps = 0;
      let resultId = this.findNumInList(this.hideNumber);
      if (resultId != null) {
        let markelem = document.getElementById("b_" + resultId);
        markelem.className += " binaryFinder";
      }
    },
    findNumInList(item) {
      let findedNum = null;
      let list = [...this.incomingList];
      let max = list.length - 1;
      let min = 0;
      let center = 0;
      while (findedNum != item) {
        if (max - min == 0) {
          center = max;
        } else {
          center = Math.floor((max - min) / 2) + min;
        }

        let tmpvalue = list[center];
        this.checkResult(tmpvalue, "computer");
        this.binarySearchSteps += 1;

        if (item == tmpvalue) {
          findedNum = item;
          return findedNum;
        } else if (item > tmpvalue) {
          min = center + 1;
        } else if (item < tmpvalue) {
          max = center - 1;
        } else if (center == 0) {
          return findedNum;
        }
      }
    },
    doSearch(array, targetValue) {
      var min = 0;
      var max = array.length - 1;
      var guess;
      var steps = 0;
      while (max<min) {
        steps += 1;
        if (steps > 10) {
          console.log("More steps");
          break;
        }
        guess = Math.floor((max - min) / 2) + min;
        if (max < min) {
          break;
        }

        if (targetValue === array[guess]) {
          return guess;
        } else if (targetValue < array[guess]) {
          max = guess - 1;
        } else {
          min = guess + 1;
        }
      }

      return -1;
    },
    tryMethod() {
      var primes = [
        2,
        3,
        5,
        7,
        11,
        13,
        17,
        19,
        23,
        29,
        31,
        37,
        41,
        43,
        47,
        53,
        59,
        61,
        67,
        71,
        73,
        79,
        83,
        89,
        97
      ];

      var result = this.doSearch(primes, 73);
      console.log("Found prime 73 at index " + result);

      var result = this.doSearch(primes, 20);
      console.log("Found prime 20 at index " + result);

      console.log("Found prime 97 at index " + this.doSearch(primes, 97));
      console.log("Found prime 89 at index " + this.doSearch(primes, 89));
      console.log("Found prime 83 at index " + this.doSearch(primes, 83));
      console.log("Found prime 2 at index " + this.doSearch(primes, 2));
      console.log("Found prime 3 at index " + this.doSearch(primes, 3));
       console.log("Found prime 180 at index " + this.doSearch(primes, 180));
    }
  },
  created() {
    this.startNewGame();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.number-box {
  width: 50px;
  margin: 2px;
  display: inline-block;
  color: #444;
  border: 1px solid #ccc;
  background: #ddd;
  cursor: pointer;
  vertical-align: middle;
  text-align: center;
}
.number-box:hover {
  color: rgb(207, 193, 223);
  box-shadow: 0 0 5px 0px rgba(85, 0, 0, 0.479);
}
.number-box:active {
  color: rgb(207, 193, 223);
  box-shadow: 0 0 3px -4px rgba(85, 0, 0, 0.479);
}

.marked {
  text-decoration-line: line-through;
  color: red;
}

.finded {
  background: black;
  color: #ccc;
}

.binaryFinder {
  background: #007bff;
  color: #ccc;
}
</style>
