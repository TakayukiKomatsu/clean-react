import React, { useState } from 'react'
import Styles from './login-styles.scss'

import Context from '@/presentation/contexts/form/form-context'

import {
  Footer,
  LoginHeader,
  Input,
  FormStatus
} from '@/presentation/components'

const Login: React.FC = () => {
  const [state] = useState({
    isLoading: false
  })

  const [errorState] = useState({
    main: '',
    email: 'Campo obrigatório',
    password: 'Campo obrigatório'
  })

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={{ state, errorState }}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <div className={Styles.inputWrap}>
            <Input placeholder='Digite seu e-mail' type='email' name='email' />
            <Input
              placeholder='Digite sua senha'
              type='password'
              name='password'
            />
          </div>
          <button type='submit' disabled className={Styles.submit} data-testid="submit">Entrar</button>
          <span className={Styles.link}>Criar conta</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login
