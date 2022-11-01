import React, { useEffect, useState } from 'react'
import Pagec from './page'

export default function Cards() {
  
  const [companies, setCompanies] = useState([]);

  const Url = async () => {
    let link = "http://demo2211087.mockable.io/mock";
    const data = {
      method: "POST",
      Headers: { 'Content-Type': 'text/html' }
    }
    fetch(link, data).then(async res => {
      let response = await res.json()
      console.log(response);
      setCompanies(response.companies);
    });
  }

  useEffect(() => {
    Url()
  }, []);

  return (
    <div className="container">
     
       <div className="row">
            {companies.map((element) => {
              return <div className="col-md-4" key={element.name}>
                <Pagec name={element.name} email={element.email} status={element.status} />
              </div>
            })}

    </div>



      </div>
  )
}
