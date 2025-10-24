import React from 'react';

// Example component showing how to use theme system
const ExampleThemedComponent = () => {
  return (
    <div className="theme-section p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Theme Card 1 */}
          <div className="theme-card p-6 rounded-lg">
            <h3 className="text-xl font-bold theme-text-primary mb-3">
              Dark Theme
            </h3>
            <p className="theme-text-secondary mb-4">
              Perfect for night-time browsing with dark backgrounds and light text.
            </p>
            <button className="theme-button-primary px-4 py-2 rounded-lg">
              Learn More
            </button>
          </div>

          {/* Theme Card 2 */}
          <div className="theme-card p-6 rounded-lg">
            <h3 className="text-xl font-bold theme-text-primary mb-3">
              Light Theme
            </h3>
            <p className="theme-text-secondary mb-4">
              Clean and bright interface with white backgrounds and dark text.
            </p>
            <button className="theme-button-secondary px-4 py-2 rounded-lg">
              Learn More
            </button>
          </div>

          {/* Theme Card 3 */}
          <div className="theme-card p-6 rounded-lg">
            <h3 className="text-xl font-bold theme-text-primary mb-3">
              Green Theme
            </h3>
            <p className="theme-text-secondary mb-4">
              Nature-inspired colors with green backgrounds and eco-friendly design.
            </p>
            <button className="theme-button-primary px-4 py-2 rounded-lg">
              Learn More
            </button>
          </div>
        </div>

        {/* Theme Input Example */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold theme-text-primary mb-4">
            Theme-Aware Form Elements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block theme-text-secondary mb-2">
                Name
              </label>
              <input 
                type="text" 
                className="theme-input w-full px-4 py-2 rounded-lg"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block theme-text-secondary mb-2">
                Email
              </label>
              <input 
                type="email" 
                className="theme-input w-full px-4 py-2 rounded-lg"
                placeholder="Enter your email"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExampleThemedComponent;
