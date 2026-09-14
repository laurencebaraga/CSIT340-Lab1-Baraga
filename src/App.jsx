import './App.css'

function App() {

  return (
    <div className= "max-w-2xl mx-auto px-6 py-16" align="left">
      <header className="max-w-2xl mx-auto px-6 pt-16">
      <h1 className="text-4xl font-semibold tracking-tight">Laurence Andrey Baraga</h1>
       <p className="mt-2 text-lg text-slate-600">Third year BSIT student at Cebu Institute of Technology – University.</p>
      
      <hr />
      </header>

    <main className="mb-12 space-y-4">
      <section className="mb-12 space-y-100">      
      <h2 className="text-xl font-semibold mb-2">About</h2>
      <p className="text-gray-700">
        I grew up in Cebu City, Philippines. I've been in CIT-U for the last almost fifteen years,
        I like making art, especially sketching and concept art. I play videogames like MLBB and HSR.
        I'm currently in my third year of BSIT, and I want to pursue a career in game development.
      </p>
      </section>

      <section className="mb-12 space-y-4">
      <h2 className="text-xl font-semibold mb-2">Details</h2>
      <p className="leading-relaxed text-slate-700">
        Course: BS Information Technology </p>
      <p>Year level: Third year </p>
      <p>Hometown: Quiot, Pardo, Cebu</p>
      </section>

      <section className="mb-12 space-y-4">
       <h2 className="text-xl font-semibold mb-2">Things I like</h2>
      <ul className="list-disc list-inside space-y-1 text-slate-700">
        <li>Playing MLBB on free time</li>
        <li>Collecting TCG cards and buying packs once a month</li>
        <li>Working on photography</li>
      </ul>
      </section>

      <section className="mb-12 space-y-4">
      <h2 className="text-xl font-semibold mb-2">Reach me</h2>
      <p className="leading-relaxed text-slate-700">
        laurenceandrey.baraga@cit.edu </p>  
      <p>@laurenceandrey on most things</p>
      </section>
    </main>

      <hr />
      <footer class="max-w-2xl mx-auto px-6 pb-16">
        Made for CSIT340.
      </footer>
    </div>
  )
}

export default App
