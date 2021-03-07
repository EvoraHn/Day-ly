import "./Form.css";
function FormField({ type, id, fname, onChange, caption, value, error, labelClassName, containerClassName, ...attr}){
  return (
    <section className={containerClassName}>
    <label className={labelClassName}><div className="">{caption}</div></label>
    <input
        type={type}
        id={id}
        name={fname}
        onChange={onChange}
        value={value}
        {...attr}
    />
      {(error && true) ? (<section>{error}</section>):null }
    </section>
  )
}

export default FormField;
