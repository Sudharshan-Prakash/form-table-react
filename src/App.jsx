import Form from './components/Form'
import './App.css'
import Table from './components/Table'
import { useState } from 'react'

function App() {
  const initialFormData={
    name:"",
  email:""
  }
const [formData, setFormData] = useState({
  name:"",
  email:""
})

const [tableData, setTableData] = useState([])
const [editIndex, setEditIndex] = useState(null)
const handleFormDataChange=(key,value) =>{
        setFormData({
          ...formData,
          [key]:value,
        })
}
const handleSubmit= (e) =>{
      e.preventDefault()
      // setTableData([
      //   ...tableData,
      //   formData
      // ])
      // setFormData(initialFormData)
      if(editIndex === null)
      {
         setTableData([...tableData, formData]);
         setFormData(initialFormData)
      }
      else{
        tableData[editIndex]=formData
        setFormData(initialFormData)
        setTableData(tableData)
        setEditIndex(null)
      }
}

const handleEdit= (index) =>{
const clickedItem=tableData[index]
setFormData(clickedItem)
setEditIndex(index)
}
const handleDelete=(index)=>{
  tableData.splice(index,1)
  setTableData([...tableData])
}
  return (
    <div className='p-6 mx-auto max-w-2xl'>
     <Form
     formData = {formData} 
     handleFormDataChange = {handleFormDataChange}
     handleSubmit = {handleSubmit}
     editIndex = {editIndex}
     />
       {tableData.length > 0 && (
      <Table
        tableData={tableData}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    )}
    </div>
  )
}

export default App
