
function App() {
  return (
    <div className="App">
      <nav class="bg-gray-800 h-20 w-3/4 m-auto rounded-b-2xl flex justify-between items-center px-10 shadow-xl relative">
        <div class="flex w-1/5">
          <h2 class="text-gray-50 text-md mr-6"><a href="!#">Store</a></h2>
          <h2 class="text-gray-50 text-md mr-6"><a href="!#">Promo</a></h2>
          <h2 class="text-gray-50 text-md"><a href="!#">About</a></h2>
        </div>
        <h1 class="text-3xl text-gray-50 font-sans font-semibold">Flexshop</h1>
        <div class="flex w-1/5 justify-end items-center">
          <a class="text-gray-50 text-lg mr-6" href="!#">Login</a>
          <a class="text-gray-900 text-md font-medium bg-yellow-400 p-2 px-5 rounded-lg hover:bg-yellow-300" href="!#">Sign Up</a>
        </div>
      </nav>
    </div>
  );
}

export default App;
