import "./App.css";
// import { Link, Route, Switch } from "react-router-dom";
// import React, { useEffect } from "react";
// import { BasicForm } from "./BasicForm";
// import { Hai } from "./Hai";

export default function App() {
  //   const list = [
  //     {
  //       name:"Free",
  //       price:"$0",
  //       period:"/month",
  //       user:"Single User",
  //       Storage:"5GB Storage",
  //       Projects:"Unlimited Public Projects",
  //       Access:"Community Access",
  //       PrivateProjects:"Unlimited Private Projects",
  //       PhoneSupport:"Dedicated Phone Support",
  //       Subdomain:"Free Subdomain",
  //       StatusReports:"Monthly Status Reports"

  //   },
  //   {
  //       name:"PLUS",
  //       price:"$9",
  //       period:"/month",
  //       user:"5 Users",
  //       Storage:"50GB Storage",
  //       Projects:"Unlimited Public Projects",
  //       Access:"Community Access",
  //       PrivateProjects:"Unlimited Private Projects",
  //       PhoneSupport:"Dedicated Phone Support",
  //       Subdomain:"Free Subdomain",
  //       StatusReports:"Monthly Status Reports"

  //   },
  //   {
  //       name:"PRO",
  //       price:"$49",
  //       period:"/month",
  //       user:"Unlimited Users",
  //       Storage:"150GB Storage",
  //       Projects:"Unlimited Public Projects",
  //       Access:"Community Access",
  //       PrivateProjects:"Unlimited Private Projects",
  //       PhoneSupport:"Dedicated Phone Support",
  //       Subdomain:"Unlimited Free Subdomains",
  //       StatusReports:"Monthly Status Reports"

  //   }
  // ]
      const mobile = [
        {
          model: "OnePlus 9 5G",
          img: "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
          company: "Oneplus",
        },
        {
          model: "Iphone 13 mini",
          img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-blue-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645572315986",
          company: "Apple",
        },
        {
          model: "Samsung s21 ultra",
          img: "https://m.media-amazon.com/images/I/81kfA-GtWwL._SY606_.jpg",
          company: "Samsung",
        },
        {
          model: "xiomi mi 11",
          img: "https://m.media-amazon.com/images/I/51K4vNxMAhS._AC_SX522_.jpg",
          company: "xiomi",
        },
      ];

  return (
    <div className="App">
      {/* <div className="all">
        {list.map((lis) => (
          <Hai
            name={lis.name}
            price={lis.price}
            period={lis.period}
            user={lis.user}
            Storage={lis.Storage}
            Projects={lis.Projects}
            Access={lis.Access}
            PrivateProjects={lis.PrivateProjects}
            PhoneSupport={lis.PhoneSupport}
            Subdomain={lis.Subdomain}
            StatusReports={lis.StatusReports}
          />
        ))}
      </div>
      <BasicForm /> */}
      {/* <ul>
        <li>
          <Link to="/recipe-list">Recipelist</Link>
        </li>
        <li>
          <Link to="/">HOME</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/recipe-list">
          <Recipelist />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch> */}
      {mobile.map((mobile) =><Phone  mobile= {mobile}/>)}
    </div>
  );
}

// function Welcome() {
//   const message = "Haiii Everyone It's Starts✌🤖";
//   return (
//     <div>
//       <h1>{message}</h1>
//     </div>
//   );
// }

// function Recipelist() {
//   const message1 = "we are going to cook🍟🍜";

//   const recipelist = [
//     {
//       picture:
//         "https://www.cookingclassy.com/wp-content/uploads/2018/08/tandoori-chicken-11.jpg",
//       name: "Chicken tandoori",
//     },
//     {
//       picture:
//         "https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-1.jpg",
//       name: "Panner butter masala",
//     },
//     {
//       picture:
//         "https://images.indulgexpress.com/uploads/user/imagelibrary/2019/8/1/original/Biryanifest.jpg",
//       name: "Briyani",
//     },
//     {
//       picture:
//         "https://static.toiimg.com/thumb/64696930.cms?width=1200&height=900",
//       name: "Parotta shawarma",
//     },
//   ];

//   useEffect(() => {
//     fetch("https://6209ed5e92946600171c55ba.mockapi.io/recipe")
//       .then((data) => data.json())
//       .then((recipes) => console.log(recipes));
//   }, []);
//   return (
//     <div>
//       <h1>{message1}</h1>
//       <div className="recipe-list-container">
//         {recipelist.map((recipe) => (
//           <Recipepicture recipe={recipe} />
//         ))}
//       </div>
//     </div>
//   );
// }

// function Recipepicture({ recipe }) {
//   return (
//     <div className="recipe-container">
//       <img src={recipe.picture} alt={recipe.name} className="recipe-picture" />
//       <p className="recipe-name">{recipe.name}</p>
//     </div>
//   );
// }

function Phone({mobile}) {
  return (
    <div className="phone-container">
      <img className="phone-picture" src={mobile.img} alt={mobile.model} />
      <p className="phone.name">{mobile.model}</p>
      <p className="phone.company">{mobile.company}</p>
    </div>
  );
}
