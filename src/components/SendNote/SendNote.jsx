import React, { useState } from "react";


export default function SendNote() {
  const [note, setNote] = useState(""); 
  

  const handleNoteChange = (event) => {
    event.preventDefault();
    setNote(event.target.value);
  };

  
  const sendNoteToApi = async () => {
    
    try {
      const response = await fetch(
        "https://vop4f76uc3.execute-api.us-east-1.amazonaws.com",
        {          
          method: "PATCH",
          body: JSON.stringify({ order_note: note }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

    
      const data = await response.json();
      console.log(data)

      if (response.ok) {
        console.log("enviado!");
        
      } else {
        console.error("Erro ao enviar a nota para a API:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao enviar a nota para a API:", error);
    }
  };

  return (
    <div className="block">
      <form className="w-full flex flex-col">
        <label className="text-sm text-gray-500 font-medium">
          Send another note
        </label>
        <textarea
          className="w-full h-32 border border-solid border-gray-300 rounded-md py-2 px-2 text-sm text-gray-800 font-medium mt-2"
          value={note} 
          onChange={handleNoteChange} 
        ></textarea>
        <div className="flex justify-end">
          <button
            className="text-sm font-medium text-gray-800 bg-white rounded-sm py-2 px-3 border border-solid border-gray-300 w-24 mt-2"
            onClick={sendNoteToApi} 
          >
            Send note
          </button>
        </div>
      </form>
    </div>
  );
}
