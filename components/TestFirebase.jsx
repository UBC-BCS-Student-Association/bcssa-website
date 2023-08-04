import HandleSubmit from '@/components/HandleSubmit';
import { useRef } from 'react';
 
function TestFirebase() {
  const dataRef = useRef()
 
  const submithandler = (e) => {
    e.preventDefault()
    HandleSubmit(dataRef.current.value)
    dataRef.current.value = ""
  }
 
  return (
    <div className="App">
      <p>testing firebase</p>
      <form onSubmit={submithandler}>
        <input type= "text" ref={dataRef} />
        <button type = "submit">Save</button>
      </form>
    </div>
  );
}
 
export default TestFirebase;
