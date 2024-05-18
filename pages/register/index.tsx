import Link from 'next/link'
import Image from 'next/image'
import { Title } from '../../components/Title';
import { useState } from 'react'
import { DatePicker } from 'antd';
import Select from 'react-select';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';

const RegisterPage = () => {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [birthdate, setBirthdate] = useState(null);
  const [gender, setGender] = useState(null);
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div>
      <Navbar />
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Title>Register</Title>
      <div className="w-full max-w-3xl p-8 space-y-6 bg-white rounded shadow-md mt-[6%] mb-20">
        <div className="flex justify-center">
        <Link href="/" legacyBehavior>
            <a>
              <Image 
                src="https://cdn.cgv.id/assets/mobile/web/images/cgv_logo.png" 
                alt="CGV Logo"
                width={100}
                height={50}
                layout="fixed"
              />
            </a>
          </Link>
        </div>
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-red-300 focus:border-red-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-red-300 focus:border-red-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-red-300 focus:border-red-500"
              />
            </div>
            <div>
              <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <DatePicker
                onChange={(date, dateString) => setBirthdate(dateString)}
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-red-300 focus:border-red-500"
              />
            </div>
            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <Select
                options={genderOptions}
                onChange={(selectedOption) => setGender(selectedOption)}
                className="w-full px-3 py-1 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-red-300 focus:border-red-500"
                value={gender}
                styles={{
                  control: (provided) => ({
                    ...provided,
                    minHeight: '2.05rem',
                    height: '2.05rem',
                    border: 'none',
                    boxShadow: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': {
                      borderColor: 'transparent'
                    }
                  }),
                  valueContainer: (provided) => ({
                    ...provided,
                    padding: '0 8px'
                  }),
                  singleValue: (provided) => ({
                    ...provided,
                    margin: 0,
                    paddingTop: '0.375rem',
                    paddingBottom: '0.375rem',
                    lineHeight: '1.25rem'
                  }),
                  container: (provided) => ({
                    ...provided,
                    borderRadius: '0.375rem'
                  })
                }}
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                id="city"
                name="city"
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-red-300 focus:border-red-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-red-300 focus:border-red-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-red-300 focus:border-red-500"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-red-300 focus:border-red-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-red-500 border rounded-md bg-white border-red-500 hover:bg-red-500 hover:text-white focus:outline-none focus:ring focus:ring-red-300"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Already have an account?{' '}
          <Link href="/login" legacyBehavior>
            <a className="font-medium text-red-500 hover:underline">Login</a>
          </Link>
        </p>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default RegisterPage
