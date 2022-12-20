import React, { useState } from 'react'
import { BarChartComponent } from './bar-chart.component'
import Header from './header.component'
import { useEffect } from 'react';
import Axios from 'axios';
import { SERVER_URL } from '../constant/base.constant'

const MainComponent = (props) => {

  const [appDetails, setAppDetails] = useState([])
  const [apps, setApps] = useState([])
  const [data, setData] = useState()
  const [usageData, setUsageData] = useState()
  const [selectedApp, setSelectedApp] = useState()

  const getAppDownloads = async() =>{
    const res = await Axios.get(`${SERVER_URL}/app-downloads`)
    setAppDetails(res.data)
    const unique = [...new Set(res.data.map((item) => item._id.hostName))];
    const details = res.data.filter((item)=>item._id.hostName===unique.sort()[0])
    getGraph(unique.sort()[0], details)
      setApps(unique.sort())
  }

  const getGraph=(name, details)=>{
    setSelectedApp(name)
    const appdetails = appDetails.filter((item)=>item._id.hostName===name)
    let _details = details?details:appdetails
    const _uniqueDates = [...new Set(_details.map((item) => item._id.creationDate))];
    const _uploads = [...new Set(_details.map((item) => item.uploads))];
    const uploads = _uploads.map((item)=>{
      return item/(1024)
    })
    const _downloads = [...new Set(_details.map((item) => item.downloads))];
    const downloads = _downloads.map((item)=>{
      return item/(1024)
    })
    const _useageSeconds =  [...new Set(_details.map((item) => item.useageSeconds))];
    let data= {
      labels: _uniqueDates,
      datasets: [
        {
          label: 'uploads( in mb)',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: uploads
        },
        {
          label: 'downloads(in mb)',
          backgroundColor: 'rgba(155,231,91,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: downloads
        },
      ]
    }
    let usageData= {
      labels: _uniqueDates,
      datasets: [
        {
          label: 'usage seconds(sec)',
          backgroundColor: 'rgba(155,231,91,0.5)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: useageSeconds
        }
      ]
    }
    setData(data)
    setUsageData(usageData)
  }

  useEffect(()=>{
    getAppDownloads()
  },[])

  return (
      <div className="h-screen pb-14 bg-right bg-cover bg-gray-100">
        <div className="w-full mx-auto">      
         <Header/>
        </div>
        <div className='flex'>
          <div className='bg-white w-[20%] h-[85vh] px-12 pt-8'> 
          <div className='mb-4 text-blue-400'>Click on any app to view the statistics(upload, download and usage)</div>
          {apps.map((name)=>{
            return <div onClick={()=>{getGraph(name)}} className={`p-1.5 border border-black rounded cursor-pointer mb-3 ${selectedApp===name?"bg-blue-200":""}`}>{name}</div>
          })}
          </div>
          <div className='w-[60%] px-16 p-8'>
            <div className='text-5xl mb-10'>{selectedApp?selectedApp:apps[0]}</div>
           <div className='flex w-[70%]'><BarChartComponent data ={data}/>
           <BarChartComponent data ={usageData}/></div>
          </div>
        </div> 
      </div>
  )
}

export default MainComponent
