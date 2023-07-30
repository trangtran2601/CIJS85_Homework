import { memo } from "react";
import { useFilter } from "./hooks";
import { FILTER_OPTIONS } from "./TodoManagement";
const FilterSection = () => {
 
 const [selectedFilter, setSelectedFilter] = useFilter()
  const handleFilterComplete= () =>{
      setSelectedFilter(FILTER_OPTIONS.COMPLETED)
  }
  const handleFilterUncomplete = () => {
    setSelectedFilter(FILTER_OPTIONS.UNCOMPLETED)
  }
  const handleFilterAll = () => {
    setSelectedFilter(FILTER_OPTIONS.DEFAULT)
  }
    return (
        <div className="filter-section">
        <button className="btn all" onClick={handleFilterAll} >All</button>
          <button className="btn complete" onClick={handleFilterComplete}>Completed</button>
          <button className="btn uncomplete" onClick={handleFilterUncomplete}>Uncompleted</button>
        </div>
    )
}

export default memo(FilterSection)