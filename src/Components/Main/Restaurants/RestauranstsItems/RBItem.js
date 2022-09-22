import React from 'react'

function RBItem(props) {
  return (
    <div className='bg bg-light' style={{width:'100%',paddingTop: '1%', paddingBottom: '0.2%'}}>
        <div className="container">
            <h2 className='my-3'>Popular cuisines near me in {props.city}</h2>
            <div className="row my-5"> 
                    <div className="col d-flex">
                        <img className='rounded-circle' src={props.RBimg} height={props.imgH} width={props.imgW} alt="/" />
                    <h6 className='p-3' >Biryani near me</h6>
                    </div>
                    <div className="col d-flex">
                        <img className='rounded-circle' src={props.RBimg} height={props.imgH} width={props.imgW} alt="/" />
                        <h6 className='p-3'>Beverages near me</h6>
                    </div>
                    <div className="col d-flex">
                        <img className='rounded-circle'src={props.RBimg} height={props.imgH} width={props.imgW} alt="/" />
                        <h6 className='p-3'>Vegetarian Delights near me</h6>
                    </div>
                    <div className="col d-flex">
                        <img className='rounded-circle'src={props.RBimg} height={props.imgH} width={props.imgW} alt="/" />
                        <h6 className='p-3'>Wraps near me</h6>
                    </div>
                    
            </div>
            <div className="row my-4">
                    <div className="col d-flex">
                        <img className='rounded-circle'src={props.RBimg} height={props.imgH} width={props.imgW} alt="/" />
                        <h6 className='p-3'>Pizza near me</h6>
                    </div>
                    <div className="col d-flex">
                        <img className='rounded-circle'src={props.RBimg} height={props.imgH} width={props.imgW} alt="/" />
                        <h6 className='p-3'>Baked Fusion near me</h6>
                    </div>
                    <div className="col d-flex">
                        <img className='rounded-circle' src={props.RBimg} height={props.imgH} width={props.imgW} alt="/" />
                        <h6  className='p-3'>Rice Bowls near me</h6>
                    </div>
                    <div className="col d-flex">
                        <img className='rounded-circle'src={props.RBimg} height={props.imgH} width={props.imgW} alt="/" />
                        <h6 className='p-3'>Burgers near me</h6>
                    </div>
            </div>
            <div className="row my-5">
                    <div className="col d-flex">
                        <img className='rounded-circle'src={props.RBimg} height={props.imgH} width={props.imgW} alt="/" />
                        <h6 className='p-3'>Desserts near me</h6>
                    </div>
                    <div className="col d-flex">
                        <img className='rounded-circle'src={props.RBimg} height={props.imgH} width={props.imgW} alt="/" />
                        <h6 className='p-3'>Donuts near me</h6>
                    </div>
                    <div className="col d-flex">
                        <img className='rounded-circle' src={props.RBimg} height={props.imgH} width={props.imgW} alt="/" />
                        <h6 className='p-3'>BOGO Combos near me</h6>
                    </div>
                    <div className="col d-flex"></div>
                
            </div>
       </div>
    </div>

  )
}

export default RBItem
