import Navbar from 'react-bootstrap/Navbar';

function Navbar() {
  return(
<Navbar bg="dark">
<Navbar.Brand href="#home">
  <img
    src="/logo.svg"
    width="30"
    height="30"
    className="d-inline-block align-top"
    alt="React Bootstrap logo"
  />
</Navbar.Brand>
</Navbar>
  )
}


// function Nav() {
//   return (
// <nav className="nav-area" >
//             <Link to = "/">
//             <div class="col-12 col-md-6 text-center pt-3">
//               <img id="nav-logo" src={logo} />
//             </div>
//             </Link>
              
                
//         </nav>

      
//     );
// }


export default Navbar;