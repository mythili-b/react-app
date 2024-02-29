import React from "react";
function MyFunctionComponent () {
    return(
        <div>
          <div className="col-md-4 mx-auto">
            <h2>Displaying Using Function Component</h2>
            <h2>Student Details</h2>
            
           <table class="table able-borderd table-dark table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">S.NO</th>
      <th scope="col">Name</th>
      <th scope="col">Roll_NUM</th>
      <th scope="col">Group</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>C.Ramu</td>
      <td>2211CS010132</td>
      <td>7A</td>

    </tr>
    <tr>
      <th scope="row">2</th>
      <td>B.Mythili</td>
      <td>2211CS010093</td>
      <td>7A</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>G.Rahul</td>
      <td>2211cs010194</td>
      <td>7A</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>K.Lasya</td>
      <td>2211cs010142</td>
      <td>7A</td>
    </tr>
  </tbody>
</table>
        </div>
        </div>

    );
}
export default MyFunctionComponent;