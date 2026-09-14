function App() {
  return (
    <>
      <header className="max-w-2xl mx-auto px-6 pt-16">
        <h1 className="text-4xl font-semibold tracking-tight">Laurence Andrey Baraga</h1>
        <p className="mt-2 text-lg text-slate-600">Third year BSIT student at Cebu Institute of Technology – University.</p>
        <hr className="mt-8 border-slate-200" />
      </header>
 
         <main className="max-w-2xl mx-auto px-6 py-10">
 
            <section className="mb-10">
              <h2 className="text-xl font-semibold mb-3">About</h2>
              <p className="leading-relaxed text-slate-700">
              I am 21 years old and I am currently a third year BSIT student at Cebu Institute of Technology - University.
              I like drawing and making art. I also like collecting cards on my spare time. </p>
            </section>
 
               <section className="mb-10">
      <h2 className="text-xl font-semibold mb-3">Details</h2>
      <p className="leading-relaxed text-slate-700">
        Course: BS Information Technology
       </p>
      <p className="leading-relaxed text-slate-700">
         
        Year level: Third year
        </p>
        <p className="leading-relaxed text-slate-700">
        Hometown: Quiot, Pardo, Cebu City
      </p>
    </section>    
    <section className="mb-10">
     <h2 className="text-xl font-semibold mb-3">Things I like</h2>
     <ul className="list-disc list-inside space-y-1 text-slate-700">
        <li>Collecting tcg</li>
        <li>Making art</li>
        <li>PLaying video games</li>
      </ul>
    </section>
 
    <section>
      <h2 className="text-xl font-semibold mb-3">Reach me</h2>
      <p className="leading-relaxed text-slate-700">
        laurenceandrey.baraga@cit.edu
        </p>
        <p className="leading-relaxed text-slate-700">
        @laurenceandreybaraga at things
      </p>
    </section>
 
    </main>
   
      <section className="max-w-2xl mx-auto px-6 pb-16">
        <hr className="mb-6 border-slate-200" />
        <p className="text-sm text-slate-500">Made for CSIT340.</p>
      </section>
    </>
  )
}
 
export default App