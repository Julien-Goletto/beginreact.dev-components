import { useForm } from 'react-hook-form';

const UserForm = ({onSubmitUser}) => {

const { register, handleSubmit, formState: {errors}} = useForm();

  const onSubmit = (data) => {
    onSubmitUser(data)
  }

  return (
    <form className="vertical-stack form" onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name
        <input 
          placeholder="Mon nom..." 
          {
            ...register("name", {
              required: "Ce champ est requis",
              })
          } 
          aria-invalid={errors.name}/>
      </label>
      {
        errors.name?.type === "required" ? <p role="alert" style={{color: 'red'}}>{errors.name?.message}</p> : null
      }
      <div>
        <label>
          Password
          <input 
            placeholder="Mon mot de passe..." 
            {
              ...register("password", {
                required: "Ce champ est requis", 
                minLength: { 
                  value: 8, 
                  message: "Le mot de passe doit être d'une longueur minimale de 8 caractères.",
                  },
              })
            } 
            aria-invalid={errors.name}/>
        </label>
      </div>
      {
        errors.password?.type === "required" ? <p style={{color: 'red'}}>{errors.password?.message}</p> : null
      }
      {
        errors.password?.type === "minLength" ? <p style={{color: 'red'}}></p> : null
      }
      <input type="submit" value="Submit" />
    </form>
  );
};

const Form = () => {
  const onSubmitUser = (data) => {
    alert('Form submitted: ' + JSON.stringify(data));
  };
  return <UserForm onSubmitUser={onSubmitUser}/>;
};

export default Form;
