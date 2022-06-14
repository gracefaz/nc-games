import { useState, useEffect } from "react";
import { fetchCategoryNames } from "../utils.js/apiCalls";

export const CategoryDropdown = ({ setCategoryFilter }) => {
  const [categoryNames, setCategoryNames] = useState([]);

  useEffect(() => {
    fetchCategoryNames().then((categoryNamesFromApi) => {
      setCategoryNames(categoryNamesFromApi);
    });
  }, []);

  return (
    <>
      <select
        onChange={(e) => {
          setCategoryFilter(e.target.value);
        }}
        className="dropDown"
      >
        <option disabled selected value>
          Choose a Category
        </option>
        <option>All</option>
        {categoryNames.map((categoryName) => {
          return (
            <option className="dropDownOptions" key={categoryName.slug}>
              {categoryName.slug}
            </option>
          );
        })}
      </select>
    </>
  );
};
