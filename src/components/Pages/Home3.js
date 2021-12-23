import React from 'react'
import icon3 from '../../img/analyze3.gif'
import icon4 from '../../img/analyze4.gif'
const Section3 = () => {
    return (
    <div className="section3">
        <div className='content4'>
        <h2>Build</h2>
        <br/>
        <p>Enzyme empowers you to build and scale vaults based on the investment strategies of
             your choice - from discretionary and robo to ETFs and market making. Security is our 
             priority. Our second generation smart contract-enforced platform is thoroughly tested and 
             audited before any mainnet deployments are made.
        </p>
        </div>
        <div className="content5">
            <div class='some-page-wrapper1'>
                <div class='row1'>
                    <div class='column2'>
                        <div class='first-column2'>
                             <div className="text2">
                                 <img src={icon3} alt="icon's 3" width="300" height="300"/>
                             </div>
                             <div className="text2">
                                 <h2>Value</h2>
                                 <br/>
                                 <p>Enzyme provides an easy, secure and low cost way of setting up and operating your vault.
                                      With its in-built accounting tools, 
                                     it also enables you to report back in real-time to depositors.</p>
                             </div>
                        </div>
                    </div>
                    <div class='column2'>
                        <div class='second-column2'>
                        <div className="text3">
                                 <img src={icon4} alt="icon's 4" width="300" height="300"/>
                             </div>
                             <div className="text3">
                                 <h2>Scale</h2>
                                 <br/>
                                 <p>Enzyme connects you to a pool of potential savers, making it easier to attract and build a 
                                     community of supporters. 
                                     This means you can focus on what you do best - developing investment strategies.</p>
                             </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Section3;