import React, {useState} from 'react'

const Register = () => {
  const [image, setImage] = useState({preview: '', raw: ''})
  const [name, setName] = useState('')
  const [gender, setGender] = useState('m')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('student')

  const handleImage = e => {
    if(e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }
  }

  const registerHandler = async () => {
    const formData = {}
    formData.name = name
    formData.gender = gender
    formData.email = email
    formData.password = password
    formData.role = role
    formData.image = image.raw.name

    console.log(formData)

    // try{
    //   const res =  await fetch('backendapi.com/register', {
    //     method: "POST",
    //     headers: {
    //       'Authorization': 'Bearer ' + sessionStorage.getItem('loggedIn')
    //     },
    //     body: formData
    //   })
    //   const json = await res.json()
    //   return json
    // } catch(e) {
    //   console.log(e)
    // }
  }

  return (
    <div className="container mx-auto w-screen h-screen grid md:grid-cols-2">
        <div className="w-full h-full flex justify-center items-center p-16 flex-col">
          <img src="webinar.jpg"/>
          <p className="text-gray-400 italic">“Education is the kindling of a flame, not the filling of a vessel.”</p>
          <p className="text-gray-400 italic">— Socrates</p>
        </div>
        <div className="w-full h-full flex justify-center items-center p-2">
          <div className="w-full max-w-lg px-5 py-4 border-2 rounded-xl shadow-md my-4 bg-white">
            <div className="grid grid-cols-4 mb-5">
              <div className="flex justify-center col-span-1">
                <label htmlFor="upload-button" style={{'backgroundImage': image.preview ? 'url(' + image.preview + ')' : ''}} className="w-20 h-20 flex justify-center items-center cursor-pointer rounded-full bg-center bg-no-repeat bg-cover bg-gray-200">
                  {
                    !image.preview &&
                    <div className="flex flex-col items-center justify-center">
                      <img src="default-user.png"/>
                    </div>
                  }
                </label>
                <input className="hidden" type="file" accept=".jpg, .jpeg, .png" id="upload-button" onChange={handleImage}/>
              </div>
              <div className="col-span-3">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
                <input className="w-full border-2 rounded-md py-2 px-2" type="text" value={name} onChange={e => setName(e.target.value)}/>
              </div>
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="gender">Gender</label>
              <div className="relative">
                <select onChange={e => setGender(e.target.value)} className="block appearance-none w-full border-2 border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white">
                  <option value="m" >Male</option>
                  <option value="f" onChange={e => setGender(e.target.value)}>Female</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
              <input className="w-full border-2 rounded-md py-2 px-2" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
              <input className="w-full border-2 rounded-md py-2 px-2" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="role">Role</label>
              <div className="relative">
                <select onChange={e => setRole(e.target.value)} className="block appearance-none w-full border-2 border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white">
                  <option value="student">Student</option>
                  <option value="instructor">Instructor</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <button onClick={() => registerHandler()} className="border-2 border-cyan-600 py-2 px-5 rounded-xl bg-cyan-600 text-white">Register</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Register