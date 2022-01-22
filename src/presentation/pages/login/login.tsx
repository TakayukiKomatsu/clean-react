import React, { useState } from 'react'
import Styles from './login-styles.scss'

import Context from '@/presentation/contexts/form/form-context'

import {
  Footer,
  LoginHeader,
  Input,
  FormStatus
} from '@/presentation/components'

type StateProps = {
  isLoading: boolean
  errorMessage: string
}

const Login: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: ''
  })

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={state}>
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
