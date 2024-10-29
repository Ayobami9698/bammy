import React from 'react'

export default function DealForm() {
  return (
    
    <form className='w-full rounded-lg justify-center center'>
      <div className='flex flex-col gap-y-4'>
        <div className='flex flex-col'>
        
          <label htmlFor='Country'>Country:</label>
          <select> 
          <input type="text" name="Country:"
          id="Country"
          placeholder='Nigeria'
          className='w-full p-2 rounded-md text-gray-900 border-inherit border-solid' required>
            </input>
          <datalist>
          <option value="Nigeria" selected>Nigeria</option>
            <option value="Afghanistan"/>
            <option value="Norway"/>
          </datalist>
         </select>
        </div>

        <div className='flex flex-col'>
          <label htmlFor='Currency'>Currency:</label>
          <select>
          <input type="text"
          name="Currency:"
          id="Currency"
          placeholder='NGN'
          className='w-full p-2 rounded-md text-gray-900' required></input>
          <datalist>

          </datalist>
          </select>
          
        </div>

        <div className='flex flex-col'>
          <label htmlFor='Number'>Income:</label>
          <input type="number"
          name="Income"
          id='income'
          placeholder='Enter your income'
          className='w-full p-2 rounded-md text-gray-900' required></input>
        </div>

        <div className='flex flex-col'>
          <label htmlFor=''>Budget Focus:</label>
          <input type="text"
          name="Budget Focus"
          id="Budget-Focus"
          placeholder='Select focus'
          className='w-full p-2 rounded-md text-gray-900' required></input>
        </div>

        <button className="bg-blue-700 text-slate-100 my-10 text-lg px-12 py-3 mx-20 rounded-lg shadow-2xl shadow-black justify-center" type="submit" >Submit</button>
      </div>
    </form>
  )
}

