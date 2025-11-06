import React from 'react'

const GoogleMap = () => {
  return (
    <div className="card rounded-xl  overflow-hidden h-[300px] sm:h-[400px] lg:h-[540px]">
        <iframe title="Nextal Pest Control Dubai Map" src="https://www.google.com/maps?q=Nextal%20Pest%20Control%20Dubai&output=embed" className="w-full h-full" style={{ border: 0 }} loading="lazy" />
    </div>
  )
}

export default GoogleMap