import React from 'react'
import CardList from '../components/CardList'
import Header from '../components/Header'
import SidebarInit from '../components/SidebarInit'

type Props = {}

function home({}: Props) {
  return (
    <main className=" flex">
            <SidebarInit /> 
    
            <div className="bgmeshdark h-screen w-screen overflow-hidden overflow-y-scroll scrollbar-hide">
              
             
    
              <div className="flex justify-center font-eurostile text-3xl text-white pt-9 pb-2">
                
              </div>
              
              

          
              
            </div>
          </main>
  )
}

export default home