import React from 'react'

export default function Clock() {
    const time = new Date().toLocaleTimeString()
    const [currentTime, setCurrentTime] = React.useState(time)

    React.useEffect(()=> {
      const updateTime = () => {
        let time = new Date().toLocaleTimeString()
        setCurrentTime(time)
    }
        setInterval(updateTime,1000)
    },[currentTime]) 
    
  return (
    <div>{currentTime}</div>
  )
}
