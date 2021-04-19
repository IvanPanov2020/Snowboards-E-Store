import React from "react";

export default function SortButton(props) {
  const { onGenderSelect } = props;
  return (
    <div>
      <div className="sort-price-az-za">
        <form>
          <label>Sort by:</label>
          <select>
            <optgroup label="Price:">
              <option value="">Low to High</option>
              <option value="">High to Low</option>
            </optgroup>
            <optgroup label="Alphabetically">
              <option value="">Brend A-Z</option>
              <option value="">Brend Z-A</option>
            </optgroup>
          </select>
        </form>
      </div>

      <div className="for-checkbox">
        <h3>Gender</h3>
        <form>
          <ul>
            <li>
              <input
                type="checkbox"
                onClick={() => {
                  onGenderSelect("women");
                }}
              />
              Women's
            </li>
            <li>
              <input
                type="checkbox"
                onClick={() => {
                  onGenderSelect("men");
                }}
              />
              Men's
            </li>
            <li>
              <input
                type="checkbox"
                onClick={() => {
                  onGenderSelect("kids");
                }}
              />
              Kids'
            </li>
          </ul>
        </form>
      </div>
      <div className="brand-checkbox">
        <h3>Brand</h3>
        <form>
          <ul>
            <li>
              <input type="checkbox" />
              Burton
            </li>
            <li>
              <input type="checkbox" />
              DC
            </li>
            <li>
              <input type="checkbox" />
              CAPiTA
            </li>
            <li>
              <input type="checkbox" />
              Salomon
            </li>
            <li>
              <input type="checkbox" />
              Flow
            </li>
          </ul>
        </form>
      </div>

      <div className="size-range-checkbox">
        <h3>Size Range</h3>
        <form>
          <ul>
            <li>
              <input type="checkbox" />
              100-110
            </li>
            <li>
              <input type="checkbox" />
              110-120
            </li>
            <li>
              <input type="checkbox" />
              120-130
            </li>
            <li>
              <input type="checkbox" />
              130-140
            </li>
            <li>
              <input type="checkbox" />
              140-150
            </li>
            <li>
              <input type="checkbox" />
              150-160
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export function SearchInput() {
  return (
    <div className="search-bar">
      <form>
        <label>
          <h6>Search </h6>
        </label>
        <input type="text"></input>
      </form>
    </div>
  );
}
