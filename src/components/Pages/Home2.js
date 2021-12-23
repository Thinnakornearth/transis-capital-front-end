import React from 'react'
import icon1 from '../../img/analyze.gif'
import icon2 from '../../img/analyze2.gif'
const Section2 = () => {
    return (
    <div className="section2">
        <div className='content2'>
        <h2>Deposit</h2>
        <br/>
        <p>No time to follow new Defi projects? Too busy to put your own money to work? 
            Find a vault with a proven track record on Transis Digital, and free yourself from the day-to-day 
            hassles whilst retaining full custody of your assets. You can filter strategies by assets, 
            risk and performance, 
            and find one that fits your risk profile.
        </p>
        </div>
        <div className="content3">
            <div class='some-page-wrapper'>
                <div class='row'>
                    <div class='column'>
                        <div class='first-column'>
                             <div className="text1">
                                 <img src={icon1} alt="icon's 1" width="300" height="300"/>
                             </div>
                             <div className="text1">
                                 <h2>Control</h2>
                                 <br/>
                                 <p>Enzyme enables you to retain custody of 
                                     your assets at all times. Your money goes where you want it to, 
                                     whenever you want.</p>
                             </div>
                        </div>
                    </div>
                    <div class='column'>
                        <div class='second-column'>
                        <div className="text2">
                                 <img src={icon2} alt="icon's 1" width="300" height="300"/>
                             </div>
                             <div className="text2">
                                 <h2>Transparency</h2>
                                 <br/>
                                 <p>Enzyme provides full transparency about how strategies are performing, 
                                     together with information about how they’re set up, operated and composed.</p>
                             </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    </div>
    )
}


export default Section2;