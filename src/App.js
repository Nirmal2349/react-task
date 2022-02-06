import "./App.css";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { margin } from "@mui/system";

export default function App() {
  const list = [
    {
      name:"Free",
      price:"$0",
      period:"/month",
      user:"Single User",
      Storage:"5GB Storage",
      Projects:"Unlimited Public Projects",
      Access:"Community Access",
      PrivateProjects:"Unlimited Private Projects",
      PhoneSupport:"Dedicated Phone Support",
      Subdomain:"Free Subdomain",
      StatusReports:"Monthly Status Reports"

  },
  {
      name:"PLUS",
      price:"$9",
      period:"/month",
      user:"5 Users",
      Storage:"50GB Storage",
      Projects:"Unlimited Public Projects",
      Access:"Community Access",
      PrivateProjects:"Unlimited Private Projects",
      PhoneSupport:"Dedicated Phone Support",
      Subdomain:"Free Subdomain",
      StatusReports:"Monthly Status Reports"

  },
  {
      name:"PRO",
      price:"$49",
      period:"/month",
      user:"Unlimited Users",
      Storage:"150GB Storage",
      Projects:"Unlimited Public Projects",
      Access:"Community Access",
      PrivateProjects:"Unlimited Private Projects",
      PhoneSupport:"Dedicated Phone Support",
      Subdomain:"Unlimited Free Subdomains",
      StatusReports:"Monthly Status Reports"

  }
]

  return (
    <div className="App">
  
      <div className="all">
        {list.map((lis) => (
        <Hai name={lis.name} price={lis.price} period={lis.period} user={lis.user} Storage={lis.Storage} Projects={lis.Projects} Access={lis.Access} PrivateProjects={lis.PrivateProjects} PhoneSupport={lis.PhoneSupport} Subdomain={lis.Subdomain} StatusReports={lis.StatusReports} />
      ))}
      </div>
    </div>
  );
}


function Hai({ name, price, period, user, Storage, Projects, Access, PrivateProjects,PhoneSupport, Subdomain, StatusReports}) {
  return (
    
      
      <section class="container">
      
          <div className="head">
            <h3>{name}</h3>
            <div className="top">
            <h1>{price}</h1>
            <h5>{period}</h5>
            </div>      
            </div>
            <ul class="fa-ul">
              <li>{user}</li>
              <li>{Storage}</li>
              <li>{Projects}</li>
              <li>{Access}</li>
              <li>{PrivateProjects}</li>
              <li>{PhoneSupport}</li>
              <li>{Subdomain}</li>
              <li>{StatusReports}</li>
              <div className="button">
              <Button variant="contained">Button</Button>
              </div>
            </ul>
            
          
              
      </section>
      
      
    
    
  );
}
