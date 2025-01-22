/*New Code*/

function page() {
  return (
  <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center font-sans">
          {/* Header Section */}
          <header className="bg-white shadow-lg w-full p-6 flex justify-between items-center">
            <h1 className="text-3xl font-extrabold text-blue-600">CV Generator</h1>
            <nav>
              <ul className="flex space-x-8 text-lg">
                <li>
                  <a href="#features" className="text-gray-700 hover:text-blue-600 transition duration-300">Features</a>
                </li>
                <li>
                  <a href="#about" className="text-gray-700 hover:text-blue-600 transition duration-300">About</a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-700 hover:text-blue-600 transition duration-300">Contact</a>
                </li>
              </ul>
            </nav>
          </header>
    
          {/* Hero Section */}
          <main className="flex flex-col items-center text-center mt-16 px-6 md:px-16">
            <h2 className="text-5xl font-extrabold text-gray-800 leading-tight mb-4">
              Create Your Professional CV in Minutes
            </h2>
            <p className="text-gray-600 mt-4 text-lg md:text-xl max-w-3xl mx-auto">
              Use our intuitive CV generator to craft a standout resume that showcases your skills and experience.
              It's fast, easy, and free!
            </p>
            <button className="mt-6 px-8 py-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105">
              Get Started
            </button>
          </main>
    
          {/* Features Section */}
          <section id="features" className="w-full bg-white py-16 mt-16">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8 md:px-16">
              <div className="flex flex-col items-center text-center bg-gray-50 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
                <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-file-alt text-2xl"></i>
                </div>
                <h4 className="text-xl font-semibold mt-4">Customizable Templates</h4>
                <p className="text-gray-600 mt-2">
                  Choose from a variety of professionally designed templates to suit your needs.
                </p>
              </div>
              <div className="flex flex-col items-center text-center bg-gray-50 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
                <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-pencil-alt text-2xl"></i>
                </div>
                <h4 className="text-xl font-semibold mt-4">Easy Editing</h4>
                <p className="text-gray-600 mt-2">
                  Update your CV effortlessly with our intuitive drag-and-drop editor.
                </p>
              </div>
              <div className="flex flex-col items-center text-center bg-gray-50 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
                <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-share-alt text-2xl"></i>
                </div>
                <h4 className="text-xl font-semibold mt-4">Export & Share</h4>
                <p className="text-gray-600 mt-2">
                  Download your CV in multiple formats or share it directly online.
                </p>
              </div>
            </div>
          </section>
    
          {/* Footer */}
          <footer className="bg-gray-800 w-full py-8 mt-16">
            <div className="text-center text-gray-400">
              <p>&copy; 2025 CV Generator. All rights reserved.</p>
            </div>
          </footer>
        </div>   
  );
};


export default page

/*Former Code*/
/*function page() {
  return (
    <div>
      home page in progress
    </div>
  )
}

export default page*/
