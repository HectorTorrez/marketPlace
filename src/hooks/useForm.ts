import { type ChangeEvent, useState } from 'react'

interface FormState {

  email: string
  password: string
}

interface Props extends FormState {
  formState: FormState
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleReset: () => void
}

export const useForm = (initialForm: FormState): Props => {
  const [formState, setFormState] = useState<FormState>(initialForm)

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target

    setFormState(
      {
        ...formState,
        [name]: value
      }
    )
  }

  const handleReset = (): void => {
    setFormState(initialForm)
  }

  return {
    ...formState,
    formState,
    handleChange,
    handleReset
  }
}
