'use client'
import React, { useState } from 'react'

type Props = object
interface UserDatat {
  name: string
}

export default function Home({ }: Props) {
  const [user, setUser] = useState<UserDatat[]>([])
  const [name, setName] = useState('')
  const [teamA, setTeamA] = useState<UserDatat[]>([])
  const [teamB, setTeamB] = useState<UserDatat[]>([])

  const handleSubmit = () => {
    if (name.trim() !== "") {
      setUser([...user, { name: name }])
      setName('')  // Clear input after adding user
    }
  }

  const handleRandomizeTeams = () => {
    // Shuffle the user array to randomize the order
    const shuffledUsers = [...user].sort(() => 0.5 - Math.random())

    // Split the shuffled users into two teams (Team A and Team B)
    const half = Math.ceil(shuffledUsers.length / 2)
    setTeamA(shuffledUsers.slice(0, half))  // First half goes to Team A
    setTeamB(shuffledUsers.slice(half))    // Second half goes to Team B
  }

  return (
    <div className='w-full h-fit p-5'>
      <h1 className='w-full h-fit text-3xl text-blue-500 text-center'>Random Teams ROV</h1>
      <div className='my-6'>
        <li className='w-full h-fit my-2'>กรอกชื่อผู้เล่น</li>
        <input
          type="text"
          placeholder='ชื่อ'
          value={name}  // Bind the input value to the name state
          className='border w-full h-[3rem] rounded-lg px-3 outline-none'
          onChange={(e) => setName(e.target.value)}
        />
        <div className='my-2 h-[4rem] w-full flex justify-center items-center'>
          <button
            className='bg-blue-500 w-1/2 h-[70%] text-white text-xl rounded-md'
            onClick={handleSubmit}
          >
            ADD USER
          </button>
        </div>
      </div>

      <li className='w-full h-fit my-2'>USERS : {user.length}</li>
      <div className='border w-full h-[10rem] rounded-md p-2 overflow-y-scroll'>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 font-thin">No.</th>
                <th scope="col" className="px-6 py-3 font-thin">Name</th>
              </tr>
            </thead>
            <tbody>
              {user.length > 0 ? (
                user.map((item, index) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {index + 1}
                    </th>
                    <td className="px-6 py-4">{item.name}</td>
                  </tr>
                ))
              ) : (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4">ไม่มีข้อมูล</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className='my-2 h-[4rem] w-full flex justify-center items-center'>
        <button className='bg-red-500 w-1/2 h-[70%] text-white text-xl rounded-md' onClick={handleRandomizeTeams}>Random</button>
      </div>

      {/* Team A */}
      <li className='w-full h-fit mt-10 mb-2'>Team A</li>
      <div className='border w-full h-[10rem] rounded-md p-2 overflow-y-scroll'>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 font-thin">No.</th>
                <th scope="col" className="px-6 py-3 font-thin">Name</th>
              </tr>
            </thead>
            <tbody>
              {teamA.length > 0 ? (
                teamA.map((item, index) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {index + 1}
                    </th>
                    <td className="px-6 py-4">{item.name}</td>
                  </tr>
                ))
              ) : (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4">ไม่มีข้อมูล</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Team B */}
      <li className='w-full h-fit mt-10 mb-2'>Team B</li>
      <div className='border w-full h-[10rem] rounded-md p-2 overflow-y-scroll'>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 font-thin">No.</th>
                <th scope="col" className="px-6 py-3 font-thin">Name</th>
              </tr>
            </thead>
            <tbody>
              {teamB.length > 0 ? (
                teamB.map((item, index) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {index + 1}
                    </th>
                    <td className="px-6 py-4">{item.name}</td>
                  </tr>
                ))
              ) : (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4">ไม่มีข้อมูล</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
