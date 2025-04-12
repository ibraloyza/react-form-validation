import React from 'react'
import { useForm } from 'react-hook-form'

function RegisterForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState:{ errors } } = useForm();
    const onSubmit = (data) => console.log(data);
    console.log(watch("example"))

    // const {name, ref,onChange,onBlur} = Register("userName");
  return (
   
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input  {...register("example",{required:true})} />
      {errors.example && <span>this is example and also is required</span>}

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  
  )
}

export default RegisterForm