import { useRef } from 'react';

const UserForm = ({onSubmitUser}) => {

  const nameRef = useRef('');
  const passwordRef = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value
    const password = passwordRef.current.value
    onSubmitUser({name, password});
  }

  return (
    // 🦁 ajoute onSubmit en passant la fonction handleSubmit
    <form className="vertical-stack form" onSubmit={handleSubmit}>
      <label>
        Name
        <input id="name" htmlFor="name" type="text" name="name" ref={nameRef} />
      </label>
      <label>
        Password
        <input id="name" htmlFor="password" type="password" name="password" ref={passwordRef} />
      </label>
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
