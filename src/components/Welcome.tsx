import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogOut } from 'lucide-react'
import { supabase } from '../lib/supabase'
import ThemeToggle from './ThemeToggle'

export default function Welcome() {
  const [userName, setUserName] = useState<string>('')
  const navigate = useNavigate()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        navigate('/')
        return
      }
      setUserName(user.user_metadata.full_name || user.email)
    }
    getUser()
  }, [navigate])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center pt-6">
          <ThemeToggle />
          <button
            onClick={handleSignOut}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <LogOut size={20} />
            <span>Sign out</span>
          </button>
        </div>
        
        <div className="text-center py-32">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome, {userName}! 👋
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            We're excited to have you here.
          </p>
        </div>
      </div>
    </div>
  )
}