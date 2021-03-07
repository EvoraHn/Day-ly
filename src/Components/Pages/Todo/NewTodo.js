import FormField from '../../Forms/FormField';
import { MdAdd } from 'react-icons/md';

function NewTodo({ onChange, value, onAddNew}){
  return (
    <section className="TodoAddNew">
      <div class="">
      <section className="flex justify-between w-screen px-4 border bg-gradient-to-d from-green-400 via-yellow-500 to-green-500 text-justify items-center justify-items-center">
        <FormField
          type="text"
          id="txtNTodo"
          fname="txtNTodo"
          onChange={onChange}
          value={value}
          caption="Nueva Tarea"
          className="flex p-2 m-2 w-5/6 bg-white shadow"
          labelClassName="flex w-5/6"
          containerClassName="flex"
          onKeyUp={(e) => { if (e.keyCode == 13) { onAddNew(e);} }}
        />
        <MdAdd size={"3rem"} onClick={onAddNew}></MdAdd>
      </section>
        
      </div>
    </section>
  );
}

export default NewTodo;
