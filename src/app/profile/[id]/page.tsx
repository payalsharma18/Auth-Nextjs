import React from 'react'

export default function UserProfile({ params }: any) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-semibold text-gray-800 text-center mb-4">User Profile</h1>
                <p className="text-gray-600 text-center mb-6">
                    Welcome to user profile page!  {params.id}
                </p>
            </div>
        </div>
    )
}
