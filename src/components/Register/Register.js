import React from "react";
import Form from "../Form/Form";
import Input from "../Input/Imput";

function Register() {

  return (
    <Form title="Добро пожаловать!" name="signup" textBtn="Зарегистрироваться" text="Уже зарегистрированы?" textLink="Войти" path="/signin">
      <Input
        textLabel="Имя"
        textErr="Что-то пошло не так"
        inputId="name"
        labelFor="name"
        type="text"
        inputName="name"
        spanId="name-error"
      />
      <Input
        textLabel="E-mail"
        textErr="Что-то пошло не так"
        inputId="email"
        labelFor="email"
        type="email"
        inputName="email"
        spanId="email-error"
      />
      <Input
        textLabel="`Пароль`"
        textErr="Что-то пошло не так"
        inputId="password"
        labelFor="password"
        type="password"
        inputName="password"
        spanId="password-error"
        minLength="5"
        maxLength="30"
      />
    </Form>
  )
}
export default Register;