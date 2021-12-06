function App() {
  return (
    <div className="App">
      <div className="app-home h-screen relative">
        <nav className="bg-gray-50 bg-opacity-20 h-20 w-screen fixed">
          <div className="m-auto text-black opacity-100 font-medium font-primary text-lg w-screen h-full lg:w-10/12 2xl:w-3/4 flex items-center justify-between">
            <div className="w-1/6 text-3xl font-bold">
              <a href="!#">Royal Enfield</a>
            </div>
            <div className="">
              <ul className="flex gap-20">
                <li>Home</li>
                <li>About</li>
                <li>Our Work</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div className="w-1/6 text-right">Contact Us</div>
          </div>
        </nav>
        <div className="bg-hero-img h-full bg-cover"></div>
      </div>
      <div className="h-60">
        !Secara default, Tailwind menyediakan tiga utilitas keluarga font: tumpukan sans-serif lintas-browser, tumpukan
        serif lintas-browser, dan tumpukan monospace lintas-browser. Anda dapat mengubah, menambah, atau menghapusnya
        dengan mengedit theme.fontFamilybagian konfigurasi Tailwind Anda.
      </div>
    </div>
  );
}

export default App;
