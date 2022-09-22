import React from 'react'
import RItems from './RestauranstsItems/RItems'

function Restaurants(props) {
  return (
    <div className='container py-4' style={{backgroundColor:'white'}}>
        <h4 className='px-4'>All Restaurent Near Me</h4>
       <RItems 
        item="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        className="card-img-top"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque temporibus nobis incidunt eos esse at ipsa cumque, voluptatem voluptates quisquam."
        RName="Dominos"
      />
      <RItems 
        item="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        className="card-img-top"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque temporibus nobis incidunt eos esse at ipsa cumque, voluptatem voluptates quisquam."
        RName="Dominos"
      />
      <RItems 
        item="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        className="card-img-top"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque temporibus nobis incidunt eos esse at ipsa cumque, voluptatem voluptates quisquam."
        RName="Dominos"
      />
    </div>
  )
}

export default Restaurants
