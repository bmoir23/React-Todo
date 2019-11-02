 
import React from "react";

const TodoForm = props => {
    

        return (
            <div>
                <form onSubmit={props.handleSubmit}>
                    <input 
                        onChange={props.handleChanges}
                        type="text"
                        name="todo"
                        value={props.todoName}
                    />
                    <button>Add Todo</button> 
                </form>
                <form onSubmit={props.handleSearchSubmit}>
                    <input
                        onChange={props.handleSearchChange}
                        type="text"
                        name="search"
                        value={props.searchValue}
                    />
                    <button>Search</button>
                </form>
            </div>
                
        )

}

export default TodoForm;



// import React from 'react';
// const TodoForm = props => {
//   return (
//     <form>
//       <input
//         onChange={props.handleTodoChange}
//         type="text"
//         name="todo"
//         value={props.value}
//         placeholder="...todo"
//       />
//       <button onClick={props.handleAddTodo}>Add Todo</button>
//       <button onClick={props.handleClearTodos}>Clear Completed</button>
//     </form>
//   );
// };

// export default TodoForm;