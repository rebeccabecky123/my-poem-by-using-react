// In a place called {address} sa fair and bring, there lived{first name } {last name }
// A beam of bright with dreams that soared and a heart so true.
// In the land of {address}, where the sky is {favoriteColor},Lived{firstName}{lastName},who loved {hobby}so much
// With their pet {petName}, always nearby, Thay laughed and played as the sun went down.

import React,{useState} from "react";
export default function Poem(){

    const[address, setAddress] = useState("");
    const[favoriteColor,setfavoriteColor] = useState("")
    const [firstName, setFirstName]= useState("");
    const[lastName, setLastName] = useState("");
    const[hobby,setHobby] = useState("");
    const[petName,setPetName] = useState("");
    const[isSubmite,setIsSubmited] = useState(false);

    const handLeSubmite = (e) => {
         e.preventDefault();
         if (!firstName|| !lastName|| !address|| !favoriteColor|| !hobby|| !petName ){
            alert ("please fill form fields");
            setIsSubmited(false);
         }else{
            console.log("Form Submitted");
            setIsSubmited(true);
         }
    };
    const renderPoem = () => {
        if (!address|| !favoriteColor|| !firstName|| !lastName|| !hobby|| !petName){
            return <em className="flex justify-center font-bold text-gray-500 mt-2">Fill in the form to reveal your pur poem......</em>;
        }
    
    return(
        <div className="mt-3 text-center">
           
            <p>In the land of {address}, where the sky is {favoriteColor},Lived {firstName} {lastName},who loved {hobby}so much</p>
            <p> With their pet {petName}, always nearby, Thay laughed and played as the sun went down.</p>
            </div>
            );
        }
        return( 
            <div className="flex justify-center tems-center ">  
            <div className="sm bg-pink-300 rounded-2xl mt-6 py-3 px-4 shadow-2xl md ">
                 <h3 className="text-3xl text-center hover:animate-bounce underline font-semibold">Your Poem:</h3>
                 <div>{renderPoem ()}</div>     
           <form action="submit " onSubmit={handLeSubmite} >
           <div className="flex flex-col gap-4 font-bold mt-6 justify-center w-1/2 mx-auto pb-6 rounded-full">
                <input type="text"
                 value={firstName}
                 placeholder="First Name"
                  className="p-2 border rounded-xl"
                  onChange={(e) => setFirstName(e.target.value)} />
                <input type="text"
                 value={lastName}
                 placeholder="Last Name "
                  className="p-2 border rounded-xl"
                   onChange={(e) => setLastName(e.target.value)}/>
                <input type="text"
                 value={address}
                 placeholder="Address " 
                 className="p-2 border rounded-xl"
                  onChange={(e) => setAddress(e.target.value)} />
                <input type="text"
                 value={hobby}
                 placeholder="hobby"
                  className="p-2 border rounded-xl"
                  onChange={(e) => setHobby(e.target.value)} />
                   <input type="text"
                   value={petName}
                   placeholder="pet name"
                   className="p-2 border rounded-xl"
                   onChange={(e) => setPetName(e.target.value)} />
                    <input type="text"
                    value={favoriteColor}
                    placeholder="your favorite color"
                    className="p-2 border rounded-xl"
                    onChange={(e) => setfavoriteColor(e.target.value)} />
                    <button type="handleSubmite" className="rounded-2xl bg-violet-400 hover:bg-pink-800 cursor-pointer text-center h-">Submite </button>
            </div>
           </form>
        </div>
        </div> 
    );
}
