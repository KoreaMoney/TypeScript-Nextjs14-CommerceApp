const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        {/* TYPE */}
        <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-blue-100">
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="Min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <input
          type="text"
          name="max"
          placeholder="Max price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        {/* SIZE */}
        <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-blue-100">
          <option>Size</option>
          <option value="size">Size</option>
        </select>
        {/* COLOR */}
        <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-blue-100">
          <option>Color</option>
          <option value="size">Test</option>
        </select>
        {/* CATEGORY */}
        <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-blue-100">
          <option>Category</option>
          <option value="">New Arrival</option>
          <option value="popular">Popular</option>
        </select>
        {/* ALL FILTERS */}
        <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-blue-100">
          <option>All Filters</option>
        </select>
      </div>
      <div className="">
        <select name="" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400">
          <option>Sort By</option>
          <option value="">Price (low to high)</option>
          <option value="">Price (high to low)</option>
          <option value="">Newest</option>
          <option value="">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
