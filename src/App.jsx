import { Button, Card, CardActionArea, CardActions, CardContent, IconButton, Typography } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import React from "react";
import "./App.css";

function App() {
  let priceinfo = [
    {
      title: "FREE",
      subtitle: "$0",
      list1: "Single User",
      list2: "5GB Storage",
      list3: "Unlimited Public Projects",
      list4: "Community Access",
      list5: "Unlimited Private Projects",
      list6: "Dedicated Phone Support",
      list7: "Free Subdomain",
      list8: "Monthly Status Reports",    
      
    },
    {
      title: "PLUS",
      subtitle: "$9",
      list1: "5 Users",
      list2: "50GB Storage",
      list3: "Unlimited Public Projects",
      list4: "Community Access",
      list5: "Unlimited Private Projects",
      list6: "Dedicated Phone Support",
      list7: "Free Subdomain",
      list8: "Monthly Status Reports",
      
    },
    {
      title: "PRO",
      subtitle: "$49",
      list1: "Unlimited Users",
      list2: "150GB Storage",
      list3: "Unlimited Public Projects",
      list4: "Community Access",
      list5: "Unlimited Private Projects",
      list6: "Dedicated Phone Support",
      list7: "Free Subdomain",
      list8: "Monthly Status Reports",
      
    },
  ];

  return <div>{<Main priceinfo={priceinfo} />}
  </div>;
}

function Main({ priceinfo }) {
  
  return (
    <div className="row" id="container">
      <PricingCard
          priceinfo ={priceinfo}
        />
      
    </div>
  );
}


function PricingCard({priceinfo}){  
  const styles = {
    color: "#D3D3D3"
  }
  
  
  return(

    <div className="price-card">
      {priceinfo.map((p) => (

      <Card className="card" sx={{borderRadius:"1rem"}}>
      <CardActionArea>        
        <CardContent>
          <Typography className="title" sx={{fontSize:"1rem", color:"grey", textAlign:"center"}}>
            {p.title}
          </Typography>
          <Typography className="subtitle" sx={{fontSize:"2rem", textAlign:"center"}}>
            {p.subtitle}<span className="period">/month</span>
          </Typography>
          <hr></hr>
          <ul>            
            <li >
              <IconButton>
                <CheckIcon />
              </IconButton>
              {p.title==="PRO" ? (<b>{p.list1}</b>) : (p.list1)}           
              
              </li>
              <li>
              <IconButton>
                <CheckIcon />
              </IconButton>
              {p.list2}
              </li>
              <li>
              <IconButton>
                <CheckIcon />
              </IconButton>
              {p.list3}
              </li>
              <li>
              <IconButton>
                <CheckIcon />
              </IconButton>
              {p.list4}
              </li>
            
            {p.title ==="FREE" ? (
              <li style={styles}>
                <IconButton>
                <CloseIcon />
              </IconButton>
              {p.list5}
              </li>
            ) : (
              <li>
                <IconButton>
                <CheckIcon />
              </IconButton>
              {p.list5}
              </li>
            )}              
            {p.title ==="FREE" ? (
              <li style={styles}>
                <IconButton>
                <CloseIcon />
              </IconButton>
              {p.list6}
              </li>
            ) : (
              <li>
                <IconButton>
                <CheckIcon />
              </IconButton>
              {p.list6}
              </li>
            )}
            {p.title ==="FREE" ? (
              <li style={styles}>
                <IconButton>
                <CloseIcon />
              </IconButton>
              {p.list7}
              </li>
            ) : (
              <li>
                <IconButton>
                <CheckIcon />
              </IconButton>
              {p.title==="PRO" ? (<span className="unlimited-text">Unlimited </span>) : ("")}
              {p.list7}
              </li>
            )}

            {p.title ==="FREE" || p.title==="PLUS" ? (
              <li style={styles}>
                <IconButton>
                <CloseIcon />
              </IconButton>
              {p.list8}
              </li>
            ) : (
              <li>
                <IconButton>
                <CheckIcon />
              </IconButton>
              {p.list8}
              </li>
            )}     
                     

          </ul>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button variant="contained" className="addtocart" sx={{margin:"0 6rem"}}>Add to Cart</Button>
      </CardActions>
      </Card>

      ))}
    </div>
    
  )
}
export default App;
