import React from "react";
class MyClassComponent extends React.Component {
 render() {

 return (
    <div>
     <div className="col-md-4 mx-auto">

            <h2>Displaying Using Class Component</h2>
            <h2>Employee Details</h2>
            
           <table class="table table-borderd table-dark table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">S.NO</th>
      <th scope="col">Name</th>
      <th scope="col">Subject</th>
      

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>V.Saritha</td>
      <td>Maths</td>
      

    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Shazia khan</td>
      <td>English</td>
      
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>A.Durga Bhavani</td>
      <td>EVS</td>
      
    </tr>
    <tr>
    <th scope="row">4</th>
      <td>D.Srikanth</td>
      <td>Java Programming</td>
      
    </tr>
  </tbody>
</table>
        </div>
        </div>
        


 
 );
 }
 } export default MyClassComponent;