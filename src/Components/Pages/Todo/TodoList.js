import { MdDone, MdDelete} from 'react-icons/md';
import "../../botons/botons.css"
// ()=>     fat arrow functions  funciones de flecha gorda ;

function TodoListItem({descripcion, id, completed, doneHandler, deleteHandler}){
  const onClick = (e)=>{
    doneHandler(id);
  }
  const onDeleteClick = (e)=>{
    deleteHandler(id);
  }

  const myClass = (completed)?"striked": "";
  return (
    

    
      <li >
        <div class="grid gap-0.001 grid-cols-2 md:grid-cols-2 p-2 ">
        <div class="justify-self-stretch text-justify">
            <span className={myClass}>{descripcion}</span>
        </div>
        <div class="button-container justify-self-end">
          <MdDone class="aceptar -right-0 " onClick={onClick}></MdDone>
          <MdDelete class="borrar" onClick={onDeleteClick}></MdDelete>
        </div>
        
        </div>
      </li>
    
    );
}

function TodoList({todos, doneHandler, deleteHandler}){
  const todoItems = todos.map((o)=>{
    return (
      <TodoListItem
        key={o.doneHandlerid}
        descripcion={o.description}
        id={o.id}
        completed={o.completed}
        doneHandler={doneHandler}
        deleteHandler={deleteHandler}
      />
    )
  });
  return (
    <section className="TodoList">
      <ul>
         {todoItems}
      </ul>
    </section>
  );
}

export default TodoList;
