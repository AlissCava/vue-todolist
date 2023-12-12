// Definizione dell'applicazione Vue
const app = Vue.createApp({
    // Data contiene lo stato dell'applicazione
    data() {
      return {
        todos: [
          { text: 'Fare i compiti', done: false },
          { text: 'Fare la spesa', done: true },
          { text: 'Fare il bucato', done: false }
        ],
        newTodo: ''
      };
    },
    // Metodi contengono le azioni dell'utente
    methods: {
      // Milestone 3: Aggiungi un nuovo todo alla lista
      addTodo() {
        if (this.newTodo.trim() !== '') {
          this.todos.push({ text: this.newTodo, done: false });
          this.newTodo = '';
        }
      },
      // Milestone 2: Rimuovi un todo dalla lista
      removeTodo(index) {
        this.todos.splice(index, 1);
      }
    },
    // Template Vue inline
    template: `
      <div>
        <ul class="todo-list">
          <li v-for="(todo, index) in todos" :key="index" class="todo-item">
            <span :class="{ 'done': todo.done }">{{ todo.text }}</span>
            <span class="delete-btn" @click="removeTodo(index)">x</span>
          </li>
        </ul>
        <div>
          <input v-model="newTodo" placeholder="Aggiungi un nuovo todo">
          <button @click="addTodo">Aggiungi</button>
        </div>
      </div>
    `
  });
  
  // Montaggio dell'applicazione Vue all'elemento con id "app"
  app.mount('#app');
  