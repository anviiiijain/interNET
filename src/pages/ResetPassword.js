/**
 *
 * LoginPage
 *
 */
import React, { useEffect, useState } from 'react'
import jwt from 'jwt-decode'
import { Card } from '../components/shared/Card'
import { FormGenerator } from '../components/shared/FormGenerator'
import { ReactComponent as Login } from '../assets/Login.svg'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'

import { login, resetPass } from '../api/auth'
import { ACCESS_TOKEN_KEY } from '../constants/accessTokenKey'
import { toast } from 'react-toastify'

export function ResetPassword(props) {
  const navigate = useNavigate()

  const req = useLocation().search
  const [role, setRole] = useState(null)
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  })

  const formSchema = {
    password: {
      width: 'w-full',
      placeholder: 'Password',
      value: formData.password,
      onChange: (e) => setFormData({ ...formData, password: e.target.value }),
      type: 'password',
      label: 'Password',
      required: true,
    },
    confirmPassword: {
      width: 'w-full',
      placeholder: 'Confirm Password',
      value: formData.confirmPassword,
      onChange: (e) =>
        setFormData({ ...formData, confirmPassword: e.target.value }),
      type: 'password',
      label: 'Confirm Password',
      required: true,
    },
    button: {
      text: 'Save',
      type: 'button',
      appearance: 'filled',
      size: 'md',
      color: 'primary',
      className: 'mx-auto w-24',
    },
  }

  const onSubmit = async (e) => {
    e?.preventDefault()
    const token = req.split('=')[1]
    const res = await resetPass({ pass: formData.password, token })

    if (res.data.message === 'Success!') {
      navigate('/login')
      toast.success('Password reset successful')
    }
  }

  return (
    <div className='md:grid grid-cols-3 lg:grid-cols-2 w-screen h-screen items-center'>
      <div className='hidden md:block'>
        <Login />
      </div>
      <div className='bg-primary col-span-2 lg:col-span-1 h-full flex items-center justify-center'>
        <Card
          shadow='shadow-none'
          width='w-11/12 md:w-2/3 xl:w-1/2'
          height='h-auto'
          className='px-4 py-8 sm:px-8 sm:py-16 rounded-2xl'
        >
          <FormGenerator
            formSchema={formSchema}
            onSubmit={onSubmit}
            gap='gap-y-2 md:gap-y-4'
          />
        </Card>
      </div>
    </div>
  )
}
