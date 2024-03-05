import style from './register.module.css';

function RegisterTitle() {
  const title: string = "Register as a Writer/Reader";

  return (
    <header className={style.register_title}>{title}</header>
  );
}

export default RegisterTitle;
