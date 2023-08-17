import { firestore } from "../firebase/firebase"
import { addDoc, collection } from "@firebase/firestore"

const HandleSubmit = (testdata) => {
    const ref = collection(firestore, "test_data") // Firebase creates this automatically
 
    let data = {
        testData: testdata
    }
    
    try {
        addDoc(ref, data)
    } catch(err) {
        console.log(err)
    }
}

export default HandleSubmit;
