import React, { FormEvent, useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import BaseButton from '../components/Button/BaseButton'
import Link from 'next/link'
import { FaEnvelope, FaFacebook, FaGoogle, FaLock } from 'react-icons/fa'
import Spinner from '../components/Spinner'

const Login = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setIsLoading(true)

    // TODO:
    // Fake Loading
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="flex items-center justify-center mt-12">
      <div className="bg-white rounded-sm px-5 py-4 sm:px-10 sm:pt-10 sm:pb-5 shadow inline-block">
        <h2 className="text-center font-bold text-2xl">LOGIN</h2>
        <form
          className="mt-6"
          action="#"
          method="post"
          onSubmit={submitHandler}
        >
          <div>
            <Input
              type="email"
              defaultValue={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              autoFocus
              Icon={FaEnvelope}
              Label="Email"
            />
          </div>
          <div className="mt-4">
            <Input
              type="password"
              defaultValue={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              Icon={FaLock}
              Label="Password"
            />
          </div>
          <Button type="submit" className="mt-6">
            {isLoading ? <Spinner /> : 'LOGIN'}
          </Button>
        </form>

        {/* OAuth Login */}
        <div className="mt-8">
          <small className="block text-center text-gray-400">
            Or login with
          </small>
          <div className="flex items-center gap-x-1 sm:gap-x-4 flex-wrap mt-3">
            {[
              { Icon: FaFacebook, text: 'Facebook' },
              { Icon: FaGoogle, text: 'Google' },
            ].map(({ Icon, text }) => (
              <BaseButton
                key={text}
                className="mt-3 w-full sm:w-auto text-indigo-800 border border-indigo-500 bg-transparent hover:bg-indigo-500 hover:text-white focus:ring focus:ring-indigo-300"
              >
                <div className="flex items-center gap-x-1">
                  <Icon />
                  <span>{text}</span>
                </div>
              </BaseButton>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <small className="text-gray-400">
            Not a member?&nbsp;
            <Link href="/login">
              <a className="text-indigo-500 hover:text-indigo-700 hover:underline transition-all whitespace-nowrap">
                Sign up now
              </a>
            </Link>
          </small>
        </div>
      </div>
    </div>
  )
}

export default Login
