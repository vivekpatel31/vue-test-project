import { defineComponent } from "vue";

const Visor = defineComponent({
  name: "Visor",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
  render() {
    return (
      <div id="app">
        <header>
          <button onClick={this.increment}>Add</button>
          <button onClick={this.decrement}>Remove</button>
        </header>

        <main>
          Welcome to Vite 3 + Vue 2.7 - {this.counter}
        </main>
      </div>
    );
  }
});

export default Visor;