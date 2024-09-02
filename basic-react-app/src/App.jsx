import './App.css'
//Import App Component 
import Title from "./Title.jsx";
import Product from './Product.jsx'; 
import ProductTab from './ProductTab.jsx';
import Button from './Button.jsx';

//Creating a Component
function Description() {
  return <h3>I am a Student</h3>;
}


//React Fragment = Stop create extra Nodes(   <> </>   )

// {  Pure Javasctript in {.....} }

// function App() {
//   return (
//   <>
//     <Title/>
//     <Description />
//     <p>2 * 2 = {2 * 2}</p>
//     <Title/>
//     <Description />
//     <Title />
//     <Description/>
//   </>
//   );

// }

function App() {
  return (
    <>
      <h2>Blockbuster Deals Shop Now ....</h2>    
      {/* <h4>By Using Another Component Product Tab</h4> */}
      <ProductTab /> 
      <Button/>

    </>
  )
}
//export
export default App;