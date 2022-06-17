import { useState, useEffect } from "react";
import { fetchCategoryNames } from "../utils.js/apiCalls";
import { useNavigate } from "react-router-dom";

export const CategoryDropdown = ({ setCategoryFilter }) => {
  const [categoryNames, setCategoryNames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategoryNames().then((categoryNamesFromApi) => {
      setCategoryNames(categoryNamesFromApi);
    });
  }, []);

  return (
    <>
      <select
        defaultValue={"default"}
        onChange={(e) => {
          navigate(`/categories/${e.target.value}`);
        }}
        className="dropDown"
      >
        <option disabled value="default">
          Choose a Category
        </option>
        <option value="">All</option>
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
