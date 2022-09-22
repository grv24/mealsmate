import React from 'react'

function RItems(props) {
  return (
    <>
          <div className="row">
                <div className="card m-3 col" style={{width: "18rem"}}>
                        <img src={props.item} alt="..."/>
                        <div className="card-body">
                          <h3 className="card-text">
                            {props.RName}
                            </h3>
                            <p className="card-text">
                              {props.description}
                            </p>
                        </div>
                </div>
                <div className="card m-3 col" style={{width: "18rem"}}>
                        <img src={props.item} className='card-img-top' alt="..."/>
                        <div className="card-body">
                          <h3 className="card-text">
                            {props.RName}
                            </h3>
                            <p className="card-text">
                              {props.description}
                            </p>
                        </div>
                </div>
                <div className="card m-3 col" style={{width: "18rem"}}>
                        <img src={props.item} className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h3 className="card-text">
                            {props.RName}
                            </h3>
                            <p className="card-text">
                              {props.description}
                            </p>
                        </div>
                </div>
          </div>
    </>
  )
}

export default RItems
