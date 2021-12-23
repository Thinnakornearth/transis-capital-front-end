import React from 'react'
import '../../components/Pages/Home5.css'
import uni from '../../../node_modules/cryptocurrency-icons/svg/color/uni.svg'
import kyber from '../../../node_modules/cryptocurrency-icons/svg/color/krb.svg'
import para from '../../../node_modules/cryptocurrency-icons/svg/color/pasc.svg'
import ksm from '../../../node_modules/cryptocurrency-icons/svg/color/ksm.svg'
import alpha from '../../../node_modules/cryptocurrency-icons/svg/color/algo.svg'
import yfi from '../../../node_modules/cryptocurrency-icons/svg/color/yfi.svg'
import ada from '../../../node_modules/cryptocurrency-icons/svg/color/ada.svg'
import snx from '../../../node_modules/cryptocurrency-icons/svg/color/snx.svg'
import aave from '../../../node_modules/cryptocurrency-icons/svg/color/aave.svg'
import btt from '../../../node_modules/cryptocurrency-icons/svg/color/btt.svg'
import matic from '../../../node_modules/cryptocurrency-icons/svg/color/matic.svg'
import mana from '../../../node_modules/cryptocurrency-icons/svg/color/mana.svg'
import dot from '../../../node_modules/cryptocurrency-icons/svg/color/dot.svg'
import atom from '../../../node_modules/cryptocurrency-icons/svg/color/atom.svg'


const Section5 = () => {
    const deFiIm = [uni, kyber, para, ksm, alpha, yfi, ada, snx, aave, btt, matic, mana, dot, atom]
    return(
        <div className="section5">
            <div className='content7'>
                <h1>More than 150+ supported tokens</h1>
                <p>You asked, we listened. Enzyme now has 200+ tokens, with liquidity 
                    from the ecosystem's best decentralized exchanges. 
                    Take positions in any listed token.</p>
            </div>
            <div className="coinContainer">
                {deFiIm.map((im) => (
                    <img className="blink-image" src={im} width="75" height="75"/>
                ))}
            </div>

        </div>
    )
}

export default Section5;