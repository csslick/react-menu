import React from 'react'

export default function Categories({filterItems}) {
  return (
    <div className="btn-container">
      <button 
        onClick={() => {
          filterItems('all');
        }} 
        className="filter-btn"
      >all</button>
      <button 
        onClick={() => {
          filterItems('breakfast');
        }} 
        className="filter-btn"
      >breakfast</button>
      <button 
        onClick={() => {
          filterItems('lunch');
        }} 
        className="filter-btn"
      >lunch</button>
      <button 
        onClick={() => {
          filterItems('shakes');
        }} 
        className="filter-btn"
      >shakes</button>
      <button 
        onClick={() => {
          filterItems('dinner');
        }} 
        className="filter-btn"
      >dinner</button>
    </div>
  )
}
