import React from 'react'
import Styles from './login-styles.scss'
import Header from '@/presentation/components/login-header/login-header'
import Footer from '@/presentation/components/footer/footer'
import Input from '@/presentation/components/input/input'
import FormStatus from '@/presentation/components/form-status/form-status'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <Header />
      <form className={Styles.form}>
        <h2>Login</h2>
        <div className={Styles.inputWrap}>
          <Input placeholder='Digite seu e-mail' type='email' name='email' />
          <Input placeholder='Digite sua senha' type='password' name='password' />
        </div>
        <button type='submit' className={Styles.submit}>Entrar</button>
        <span className={Styles.link}>Criar conta</span>
        <FormStatus/>
      </form>
      <Footer />
    </div>
  )
}

export default Login
