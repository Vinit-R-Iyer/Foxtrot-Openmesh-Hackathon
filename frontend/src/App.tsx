import { useState } from "react"

function App() {

  const [query, setQuery] = useState<string>()

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>)  {
    setQuery(e.target.value)
  }

  return (
    <>
     <div className='query-input'>
      <label htmlFor="query-input">Query Input</label>
      <textarea name="queryInput" id="query-input" cols={30} rows={10} onChange={(e) => handleChange(e)}></textarea>
      </div> 

      <div><button>Send query</button></div>
    </>
  )
}

export default App
