import React, { useState } from 'react'
import Add from "../img/addAvatar.png"
//Authntucation
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
//app
import { auth, db, storage } from "../firebase";
//upload/storage
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
//database
import { doc, setDoc } from "firebase/firestore"; 


const Register = () => {

  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Authntocation
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //To upload Img (upload/storage)
      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);


      uploadTask.on('state_changed',

        (error) => {
          console.log(error)
          // setErr(true)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
            await updateProfile(res.user,{
              displayName,
              photoURL: downloadURL
            });
            //firebase database(users:collection)
             await setDoc(doc(db,"users",res.user.uid
             ),{
               uid:res.user.uid,
               displayName,
               email,
               photoURL:downloadURL
             });      
          });
        }
      );
    } catch (error) {
      setErr(error);
    }
  }


  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className="logo">Deyaa Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='display name' />
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
          <input style={{ display: "none" }} type="file" id='file' />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
          {/* {
            err && <span>Something went wrong</span>
          } */}
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  )
}

export default Register