
import './App.css';
export default function App() {
 
  return (
    <div className="App">
       <Card1 />
       <Card2 />
       <Card3 />

    </div>
  );
}



function Card1(){
  return(
    <div className="Createcard-1">
    <div className="Card-1">
     <div className="box-1">
      <h5>FREE</h5>
      <h6>$0<span>/month</span></h6>
      <hr/>
      <ul>
        <li><i class="fa fa-check"></i>Single User</li>
        <li><i class="fa fa-check"></i>5GB Storage</li>
        <li><i class="fa fa-check"></i>Unlimited Public Projects</li>
        <li><i class="fa fa-check"></i>Community Access</li>
        <span class="list"><li><i class="fa fa-times"></i>Unlimited Private Projects</li>
        <li><i class="fa fa-times"></i>Dedicated Phone Support</li>
        <li><i class="fa fa-times"></i>Free Subdomain</li>
        <li><i class="fa fa-times"></i>Monthly Status Reports</li></span>
      </ul>
      </div>
      <div className="btn-1">
         <button>BUTTON</button>
      </div>
    </div>
    </div>
  )
}

function Card2(){
  return(
    <div className="Createcard-1">
    <div className="Card-1">
     <div className="box-1">
      <h5>PLUS</h5>
      <h6>$9<span>/month</span></h6>
      <hr/>
      <ul>
        <li><i class="fa fa-check"></i><b>5 Users</b></li>
        <li><i class="fa fa-check"></i>50GB Storage</li>
        <li><i class="fa fa-check"></i>Unlimited Public Projects</li>
        <li><i class="fa fa-check"></i>Community Access</li>
        <li><i class="fa fa-check"></i>Unlimited Private Projects</li>
        <li><i class="fa fa-check"></i>Dedicated Phone Support</li>
        <li><i class="fa fa-check"></i>Free Subdomain</li>
        <span class="last-list"><li><i class="fa fa-times"></i>Monthly Status Reports</li></span>
      </ul>
      </div>
      <div className="btn-1">
         <button>BUTTON</button>
      </div>
    </div>
    </div>
  )
}

function Card3(){
  return(
    <div className="Createcard-1">
    <div className="Card-1">
     <div className="box-1">
      <h5>PRO</h5>
      <h6>$49<span>/month</span></h6>
      <hr/>
      <ul>
        <li><i class="fa fa-check"></i><b>Unlimited Users</b></li>
        <li><i class="fa fa-check"></i>150GB Storage</li>
        <li><i class="fa fa-check"></i>Unlimited Public Projects</li>
        <li><i class="fa fa-check"></i>Community Access</li>
        <li><i class="fa fa-check"></i>Unlimited Private Projects</li>
        <li><i class="fa fa-check"></i>Dedicated Phone Support</li>
        <li><i class="fa fa-check"></i><b>Unlimited</b> Free Subdomains</li>
        <li><i class="fa fa-check"></i>Monthly Status Reports</li>
      </ul>
      </div>
      <div className="btn-1">
         <button>BUTTON</button>
      </div>
    </div>
    </div>
  )
}
