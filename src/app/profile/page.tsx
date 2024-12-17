"use client"

import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

export default function ProfilePage() {
  const router = useRouter()
  const logout = async () => {
    try {
      await axios.get("/api/users/logout")
      toast.success("Logout Successfully")
      router.push("/login")

    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-4">Profile</h1>
        <p className="text-gray-600 text-center mb-6">
          Welcome to your profile page!
        </p>
        <button onClick={logout}>
          Log Out
        </button>
      </div>
    </div>
  )
}
