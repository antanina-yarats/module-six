
import { data } from './data';

function Buttons({ buttonBridge, setStateBridge }) {
    return (
        <div className="cont">
            <button onClick={()=>setStateBridge(data)} className="change">Show all</button>
            <button onClick={()=>buttonBridge('pants')} className="change">Pants</button>
            <button onClick={()=>buttonBridge('skirt')} className="change">Skirt</button>
            <button onClick={()=>buttonBridge('shirt')} className="change">Shirt</button>
            <button onClick={()=>buttonBridge('dress')} className="change">Dress</button>
            <button onClick={()=>buttonBridge('shoes')} className="change">Shoes</button>
        </div>
    )
}

export default Buttons;