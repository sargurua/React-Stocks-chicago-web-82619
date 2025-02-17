import React from 'react';

const SearchBar = props => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" name="poo" checked={null} onChange={props.sortStonks}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" name="poo" checked={null} onChange={props.sortStonks}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.changeFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
