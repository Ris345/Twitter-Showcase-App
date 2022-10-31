import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Navmenu from "./Navmenu";
import Footer from "./Footer";
import { UserContext } from "../userContext";
import { useSearchParams } from "react-router-dom";

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [userInput, setuserInput] = useState()
  
  const updateForm = (e) => {
    e.preventDefault();
    setuserInput(e.target.value)
    setSearchParams(userInput)
    const q = searchParams.get('q')
    console.log(q)

}
  
  

  const tweets = useContext(UserContext);
  console.log("From Search:", tweets);

  return (
    <div>
      <Navmenu />
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Search Tweets</Form.Label>
          <Form.Control placeholder="Enter" onChange={updateForm} />
        </Form.Group>
      </Form>
      <div>
        <p></p>
      </div>
      <Footer />
    </div>
  );
}

export default SearchPage;




// const updateForm = (e) => {
//   e.preventDefault();
//   const input = searchParams.get("q")
//   console.log(input)
//   setuserInput(e.target.value)
 
// }