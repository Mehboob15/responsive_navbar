import NavBar from '../components/navbar'
// import sime from 'so,me'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Website</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow md:col-span-2 lg:col-span-1">
            <h2 className="text-xl font-semibold mb-2">Section 1</h2>
            <p>This section takes full width on medium devices and 1/3 on large devices.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Section 2</h2>
            <p>This section takes 1/2 width on medium devices and 1/3 on large devices.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Section 3</h2>
            <p>This section takes 1/2 width on medium devices and 1/3 on large devices.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

