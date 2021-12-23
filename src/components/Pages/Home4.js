import  React, { Component } from 'react'
import '../Pages/Home4.css';
import uni from '../../../node_modules/cryptocurrency-icons/svg/color/uni.svg'
import kyber from '../../../node_modules/cryptocurrency-icons/svg/color/krb.svg'
import para from '../../../node_modules/cryptocurrency-icons/svg/color/pasc.svg'
import ksm from '../../../node_modules/cryptocurrency-icons/svg/color/ksm.svg'
import alpha from '../../../node_modules/cryptocurrency-icons/svg/color/algo.svg'
import yfi from '../../../node_modules/cryptocurrency-icons/svg/color/yfi.svg'
import ada from '../../../node_modules/cryptocurrency-icons/svg/color/ada.svg'
import snx from '../../../node_modules/cryptocurrency-icons/svg/color/snx.svg'
import aave from '../../../node_modules/cryptocurrency-icons/svg/color/aave.svg'



class Section4 extends Component {
    constructor(props) {
    super(props)
    
    this.state = {
        deFiIm: [uni, kyber, para, ksm, alpha, yfi, ada, snx, aave],
        deFiName: ["Uniswap", "Kyberswap", "Pascal", "Kusama Network", "Alpha finance", "Yearn Vaults", "Cardano", "Synthetix", "More coming soon"],
        deFiWeb: ["https://uniswap.org/", "https://kyberswap.com/", "https://www.pascalcoin.org/", "https://kusama.network/", "https://alphafinance.io/", "https://yearn.finance/", "https://cardano.org/", "https://synthetix.io/", "/"]
    }
    }
    render() {
        return (
            <div className="section4">
                <div className="content6">
                    <h2>DeFi Integrations</h2>
                    <br/>
                    <p>
                    Enzyme gives you access to a large universe of DeFi tokens and protocols. 
                    Want to earn yield by lending or providing liquidity, 
                    or invest in an insurance mutual? No problem. You can do it all through Enzyme.
                    </p>
                </div>


                <div className="deFiList">
                    <ul>
                    {this.state.deFiIm.map((im, i) => (
                        <li>
                        <a href={this.state.deFiWeb[i]} target={"_blank"}>
                        <img src={im} width="100" height="100"/>
                        <br/>
                        {this.state.deFiName[i]}
                        </a>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        )
    };
}

export default Section4 