import React from "react";

const Form = ({formData, handleFormDataChange, handleSubmit, editIndex}) => {
    return(
        <>
            <h1 className="text-3xl font-bold mb-4 p-4">Forms and Table example</h1>
            <form className="border rounded-lg p-4 "
            onSubmit={handleSubmit}>
                <input type="text" className="w-full p-2 border rounded-lg mb-2" placeholder="Name" onChange={(e)=>{
                    const {value}=e.target
                    handleFormDataChange("name",value)
                
                }} required 
                value={formData.name}/>
                <input type="email" className="w-full p-2 border rounded-lg mb-2" placeholder="Email" onChange={(e)=>{
                    const {value}=e.target
                    handleFormDataChange("email",value)
                
                }} required 
                value={formData.email}/>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                   {editIndex === null ? "Add": "Update"}
                </button>
            </form>
        </>
    )
}

export default Form