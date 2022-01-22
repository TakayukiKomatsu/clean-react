import React, { useState, useEffect } from 'react'
import Styles from './login-styles.scss'

import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'

import {
  Footer,
  LoginHeader,
  Input,
  FormStatus
} from '@/presentation/components'

type Props = {
  validation: Validation
}

const Login: React.FC<Props> = ({
  validation
}: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    mainError: '',
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório'
  })

  useEffect(() => {
    validation.validate({ email: state.email })
  }, [state.email])

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <div className={Styles.inputWrap}>
            <Input placeholder='Digite seu e-mail' type='email' name='email'/>
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
