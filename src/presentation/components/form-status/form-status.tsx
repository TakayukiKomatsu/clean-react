import React, { useContext } from 'react'
import Styles from './form-status-styles.scss'
import Spinner from '../spinner/spinner'

import Context from '@/presentation/contexts/form/form-context'

const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = useContext(Context)
  return (
    <div className={Styles.errorWrap} data-testid="error-wrap">
      {isLoading && <Spinner className={Styles.spinner} />}
      {errorMessage && <span className={Styles.error}>{errorMessage}</span>}
    </div>
  )
}

export default FormStatus
