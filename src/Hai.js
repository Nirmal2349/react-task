import Button from '@mui/material/Button';

export function Hai({ name, price, period, user, Storage, Projects, Access, PrivateProjects, PhoneSupport, Subdomain, StatusReports }) {
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
