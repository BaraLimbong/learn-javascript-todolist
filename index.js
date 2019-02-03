let todos = [] //ini data todos

const todosList = {
  //parent TodoList
  displaytodos: function() {
    //function display todos
    if (todos.length > 0) {
      // jika todos.lenght lebih besar dari pada 0 masuk kedalam sini
      todos.forEach(todo => {
        //looping data todos
        console.log(todo) // show up each of todos
      })
    } else {
      // kurang dan 0 masuk sini
      console.log('none')
    }
  },
  addTodos: function(inputData) {
    //fungsi untuk me-add data baru
    todos.push(inputData) // mempush data baru kedalam todos
  },
  DeleteTodo: function(hapus) {
    //berfugsi menghapus data
    let result = todos.filter(todo => {
      //looping unntuk menyaring todo
      if (hapus !== todo) {
        //jika value delete todos tidak sama dengan todo maka masuk sini
        return todo //hasil yang tidak sama degan masuk sini
      }
    })
    todos = result //mengganti todos menjadi hasil result
  }
}
todosList.addTodos('main')
todosList.DeleteTodo()
todosList.displaytodos()
