import React, {useEffect, useState} from 'react';
import {Web3} from "web3";
const Meta = () => {
    const [acc,setAcc] : any = useState()
    useEffect(()=>{
        async function load():Promise<void>{
            const web3 = new Web3(Web3.givenProvider||'http://localhost:7545');
            const accs = await web3.eth.getAccounts();
            console.log(web3)
            setAcc(accs[0]);
        }
        load();
    },[])
    return (
        <div>
            you acc = {acc}
        </div>
    );
};

export default Meta;