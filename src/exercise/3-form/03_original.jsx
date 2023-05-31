import { useRef, useState } from 'react';

const UserForm = ({onSubmitUser}) => {

  // With refs
  const nameRef = useRef('');
  const passwordRef = useRef('');
  const [ error, setError] = useState('');

  const areInputsChecked = (name, password) => {
    if (password.length < 7){
      setError("Password must be at least 8 characters long.");
      return false;
    }
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value
    const password = passwordRef.current.value
    if (areInputsChecked(name, password)) {
      console.log("pas d'erreur");
      return onSubmitUser({name, password});
    }
  }

  const onChange = () => {
    setError('');
  }

  return (
    // 🦁 ajoute onSubmit en passant la fonction handleSubmit
    <form className="vertical-stack form" onSubmit={handleSubmit}>
      <label>
        Name
        <input id="name" htmlFor="name" type="text" name="name" ref={nameRef} />
      </label>
      <div>
        <label>
          Password
          <input 
            id="password" 
            htmlFor="password" 
            type="password" 
            name="password" 
            ref={passwordRef} 
            onChange={onChange}
            />
        </label>
        { error ? <p style={{color: 'red'}}>{error}</p> : null }
      </div>
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
