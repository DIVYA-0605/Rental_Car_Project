import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
        <h3>Sales Summary</h3>
        <div className='sales_container'>
            <div>
                <div className='sales_title'>
                    <h4>Seller Payout</h4>
                    <span style={{fontWeight:700}}>$530.14</span>
                </div>
                <div className='sales_imges' style={{marginTop:5}}>
                <span style={{fontSize:14}}>Sent through</span>
                <img src="./paypal.png" alt="" className='sales_img'/>
                </div>



                <div className='sales_description'>
                    <h5>Sale ID</h5>
                    <span>SWKM7827</span>
                </div>
                <div className='sales_description'>
                    <h5>Date Sold</h5>
                    <span>September 30, 2022 - 3:23 PM</span>
                </div>
                <div className='sales_description'>
                    <h5>Date Completed</h5>
                    <span>October 5, 2022 - 5:41 PM</span>
                </div>
                <div className='sales_description'>
                    <h5>Order Total</h5>
                    <span>$561.84</span>
                </div>
                <div className='sales_description'>
                    <h5>Tax</h5>
                    <span>$0.00</span>
                </div>
                <div className='sales_description'>
                    <h5>Add-On</h5>
                    <span>$0.00</span>
                </div>
                <div className='sales_description'>
                    <h5>SHIPPING</h5>
                    <span>$0.00</span>
                </div>
                <div className='sales_description'>
                    <h5>Buyer Fee</h5>
                    <span>$17.42</span>
                </div>
                <div className='sales_description'>
                    <h5>Ask Price</h5>
                    <span>$525.00</span>
                </div>
                <div className='sales_end'>
                    <h5>Seller Fee</h5>
                    <span>$17.42</span>
                </div>

            
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Sidebar