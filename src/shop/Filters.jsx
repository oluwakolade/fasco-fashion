import React from "react";

import {
  sizes,
  colors,
  priceRanges,
  brands,
  collections,
  tags,
} from "../data/filters";
import { FaFilter } from "react-icons/fa";

const sizeFilters = sizes.map((size, i) => (
  <div
    key={i}
    className="filter-body text-[6px] md:text-xs w-5 h-5 md:w-7 md:h-6 rounded-md flex items-center justify-center border border-grey-700"
  >
    {" "}
    {size}{" "}
  </div>
));

const colorFilters = colors.map((color, i) => (
  <div key={i} className={`w-4 h-4 md:w-6 md:h-6 rounded-full ${color}`}>
  </div>
));

const priceFilters = priceRanges.map((range, i) => (
  <p key={i} className="filter-body">
    {range.label}
  </p>
));

const brandFilters = brands.map((brand, i) => (
  <p key={i} className="filter-body">
    {brand}
  </p>
));

const collectionFilters = collections.map((col, i) => (
  <p key={i} className="filter-body">
    {col}
  </p>
));

const tagFilters = tags.map((tag, i) => (
  <p key={i} className="filter-body text-xs">
    {tag}
  </p>
));

const Filters = () => {
  return (
    <div>
<div className="md:hidden flex items-center justify-center flex-row p-2 border border-black rounded-md w-8">
  <FaFilter
  size={9}
  />
</div>
    
    <div className=" hidden w-1/4 md:flex flex-col items-start ">
      <h2 className="font-volkhov text-lg text-grey-500">Filters</h2>

      <div className="mb-4">
        <h3 className="filter mb-4">Size</h3>
        <div className="flex flex-wrap gap-2">{sizeFilters}</div>
      </div>

      <div className="mb-4">
        <h3 className="filter mb-4">Colors</h3>
        <div className="flex flex-wrap gap-2">{colorFilters}</div>
      </div>

      <div className="mb-4">
        <h3 className="filter mb-4">Prices</h3>
        <div className="flex flex-col gap-2">{priceFilters}</div>
      </div>

      <div className="mb-4">
        <h3 className="filter mb-4">Brands</h3>
        <div className="flex flex-wrap gap-2">{brandFilters}</div>
      </div>

      <div className="mb-4">
        <h3 className="filter mb-4">Collections</h3>
        <div className="flex flex-col gap-2">{collectionFilters}</div>
      </div>

      <div className="mb-4">
        <h3 className="filter mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">{tagFilters}</div>
      </div>
    </div>
    </div>
  );
};

export default Filters;
