import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import { propertiesData } from "../../data/properties";
import { Search } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "../common/Motion";

const PropertiesGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");

  const filteredProperties = propertiesData.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "All" || property.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        {/* Search and Filter Bar */}
        <FadeInUp className="bg-white p-6 rounded-xl shadow-sm mb-10 flex flex-col md:flex-row gap-4 items-center justify-between border border-gray-100">
          <div className="relative w-full md:w-96">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search location or property..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all text-gray-700 bg-gray-50 focus:bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide bg-black/20 backdrop-blur-sm rounded-xl p-2">
            {["All", "Apartment", "Villa", "Plot", "Commercial"].map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-5 py-2.5 rounded-full mb-2 text-sm font-semibold transition-all whitespace-nowrap border ${
                  filterType === type
                    ? "bg-secondary text-white border-secondary shadow-md scale-105"
                    : "bg-white/10 text-white border-white/20 hover:bg-secondary/80 hover:text-white"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </FadeInUp>

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-gray-500 font-medium">
            Showing{" "}
            <span className="text-gray-900 font-bold">
              {filteredProperties.length}
            </span>{" "}
            properties
          </p>
        </div>

        {/* Grid */}
        {filteredProperties.length > 0 ? (
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProperties.map((property) => (
              <StaggerItem key={property.id}>
                <PropertyCard {...property} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
            <h3 className="text-2xl font-bold text-gray-400 mb-2">
              No properties found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filters to find what you're looking
              for.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setFilterType("All");
              }}
              className="mt-4 text-primary font-medium hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesGrid;
