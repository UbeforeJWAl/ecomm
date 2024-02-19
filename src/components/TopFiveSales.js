import React from 'react'


const TopFiveSales=()=> {
  return (
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Sales id:</th>
      <th scope="col">Product Name</th>
      <th scope="col">quantity</th>
      <th scope="col">sale amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>S121</td>
      <td>Laptop</td>
      <td>2</td>
      <td>9000</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Mobile</td>
      <td>5</td>
      <td>5</td>
      <td>8500</td>
    </tr>
   
  </tbody>
</table>
  );
};

export default TopFiveSales;