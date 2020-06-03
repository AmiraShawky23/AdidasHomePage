import React from 'react'
import Button from '../Button/Button'

const Newsletter = () => {
    
  return (
    
    <section className="newsletter">
        <div className="newsletter_content">
            <div className="container">
                <div className="row">
                    <div className="col s12 m12 l6 xl6">
                        <h4>STAY IN THE KNOW WITH ADIDAS!</h4>
                    </div>
                    <div className="col s12 m12 l6 xl6 center">
                        <Button text='sign up' isArrow={false} />
                    </div>
                </div>
            </div>
        </div>
        <div className="yellow_overlay"></div>
    </section>
  )
}

export default Newsletter