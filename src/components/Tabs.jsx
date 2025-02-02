import React from "react";

const Tabs = ({ categories = [], activeCategory, onCategoryChange }) => {
  return (
    <div className="overflow-x-auto pb-2 scrollbar-hide">
      <div className="flex gap-2 lg:gap-3 min-w-max lg:min-w-0 lg:flex-wrap lg:justify-center">
        {categories.length > 0 ? (
          categories.map((category) => (
            <button
              key={category.strCategory}
              className={`px-3 py-1.5 lg:px-4 lg:py-2 rounded-full transition-colors text-sm lg:text-base 
                ${
                  activeCategory === category.strCategory
                    ? "bg-secondary text-surface shadow-lg"
                    : "bg-background hover:bg-background/50 text-text-secondary"
                }`}
              onClick={() => onCategoryChange(category.strCategory)}
            >
              {category.strCategory}
            </button>
          ))
        ) : (
          <div className="text-text-secondary text-sm">Loading categories...</div>
        )}
      </div>
    </div>
  );
};

export default Tabs;