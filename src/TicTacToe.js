import React from "react";
import './App.css';
import { useReducer } from "react";

const defaultState = {
    v1:'',
    v2:'',
    v3:'',
    v4:'',
    v5:'',
    v6:'',
    v7:'',
    v8:'',
    v9:'',
    chances:0,
    isWin:false,
    whoWin:''
}


const TicTacToe = () => {

    let didWin = false;

    const reducer = (state,action) => {
        if(state.isWin || state.isDraw){
            return {
                v1:'',
                v2:'',
                v3:'',
                v4:'',
                v5:'',
                v6:'',
                v7:'',
                v8:'',
                v9:'',
                chances:0,
                isWin:false,
                whoWin:'',
                isDraw:false
            }
        }
        if(action.payload==='RESTART'){
            return {
                v1:'',
                v2:'',
                v3:'',
                v4:'',
                v5:'',
                v6:'',
                v7:'',
                v8:'',
                v9:'',
                chances:0,
                isWin:false,
                whoWin:'',
                isDraw:false
            }
        }
        if(action.payload===1){
            if(state.v1){
                return state;
            }
            if(state.chances%2===0){
                const winValue=checkWin(1,'X', state)
                if(winValue==='draw'){
                    return {...state, v1: 'X', chances:state.chances+1, isDraw: true};
                }
                if(winValue){
                    didWin = true;
                }
                return {...state,v1:'X', chances:state.chances+1, whoWin:winValue, isWin: didWin}
            }
            const winValue=checkWin(1,'O', state)
            if(winValue==='draw'){
                    return {...state, v1: 'O', chances:state.chances+1, isDraw: true};
                }
            if(winValue){
                didWin = true;
            }
            return {...state, v1:'O', chances:state.chances+1, whoWin:winValue, isWin: didWin}
        }
        if(action.payload===2){
            if(state.v2){
                return state;
            }
            if(state.chances%2===0){
                const winValue=checkWin(2,'X', state)
                if(winValue==='draw'){
                    return {...state, v2: 'X', chances:state.chances+1, isDraw: true};
                }
                if(winValue){
                    didWin = true;
                }
                return {...state,v2:'X', chances:state.chances+1, whoWin:winValue, isWin: didWin}
            }
            const winValue=checkWin(2,'O', state)
            if(winValue==='draw'){
                    return {...state, v2: 'O', chances:state.chances+1, isDraw: true};
                }
            if(winValue){
                didWin = true;
            }
            return {...state, v2:'O', chances:state.chances+1, whoWin:winValue, isWin: didWin}
        }
        if(action.payload===3){
            if(state.v3){
                return state;
            }
            if(state.chances%2===0){
                const winValue=checkWin(3,'X', state)
                if(winValue==='draw'){
                    return {...state, v3: 'X', chances:state.chances+1, isDraw: true};
                }
                if(winValue){
                    didWin = true;
                }
                return {...state,v3:'X', chances:state.chances+1, whoWin:winValue, isWin: didWin}
            }
            const winValue=checkWin(3,'O', state)
            if(winValue==='draw'){
                    return {...state, v3: 'O', chances:state.chances+1, isDraw: true};
                }
            if(winValue){
                didWin = true;
            }
            return {...state, v3:'O', chances:state.chances+1, whoWin:winValue, isWin: didWin}
        }
        if(action.payload===4){
            if(state.v4){
                return state;
            }
            if(state.chances%2===0){
                const winValue=checkWin(4,'X', state)
                if(winValue==='draw'){
                    return {...state, v4: 'X', chances:state.chances+1, isDraw: true};
                }
                if(winValue){
                    didWin = true;
                }
                return {...state,v4:'X', chances:state.chances+1, whoWin:winValue, isWin: didWin}
            }
            const winValue=checkWin(4,'O', state)
            if(winValue==='draw'){
                    return {...state, v4: 'O', chances:state.chances+1, isDraw: true};
                }
            if(winValue){
                didWin = true;
            }
            return {...state, v4:'O', chances:state.chances+1, whoWin:winValue, isWin: didWin}
        }
        if(action.payload===5){
            if(state.v5){
                return state;
            }
            if(state.chances%2===0){
                const winValue=checkWin(5,'X', state)
                if(winValue==='draw'){
                    return {...state, v5: 'X', chances:state.chances+1, isDraw: true};
                }
                if(winValue){
                    didWin = true;
                }
                return {...state,v5:'X', chances:state.chances+1, whoWin:winValue, isWin: didWin}
            }
            const winValue=checkWin(5,'O', state)
            if(winValue==='draw'){
                    return {...state, v5: 'O', chances:state.chances+1, isDraw: true};
                }
            if(winValue){
                didWin = true;
            }
            return {...state, v5:'O', chances:state.chances+1, whoWin:winValue, isWin: didWin}
        }
        if(action.payload===6){
            if(state.v6){
                return state;
            }
            if(state.chances%2===0){
                const winValue=checkWin(6,'X', state)
                if(winValue==='draw'){
                    return {...state, v6: 'X', chances:state.chances+1, isDraw: true};
                }
                if(winValue){
                    didWin = true;
                }
                return {...state,v6:'X', chances:state.chances+1, whoWin:winValue, isWin: didWin}
            }
            const winValue=checkWin(6,'O', state)
            if(winValue==='draw'){
                    return {...state, v6: 'O', chances:state.chances+1, isDraw: true};
                }
            if(winValue){
                didWin = true;
            }
            return {...state, v6:'O', chances:state.chances+1, whoWin:winValue, isWin: didWin}
        }
        if(action.payload===7){
            if(state.v7){
                return state;
            }
            if(state.chances%2===0){
                const winValue=checkWin(7,'X', state)
                if(winValue==='draw'){
                    return {...state, v7: 'X', chances:state.chances+1, isDraw: true};
                }
                if(winValue){
                    didWin = true;
                }
                return {...state,v7:'X', chances:state.chances+1, whoWin:winValue, isWin: didWin}
            }
            const winValue=checkWin(7,'O', state)
            if(winValue==='draw'){
                    return {...state, v7: 'O', chances:state.chances+1, isDraw: true};
                }
            if(winValue){
                didWin = true;
            }
            return {...state, v7:'O', chances:state.chances+1, whoWin:winValue, isWin: didWin}
        }
        if(action.payload===8){
            if(state.v8){
                return state;
            }
            if(state.chances%2===0){
                const winValue=checkWin(8,'X', state)
                if(winValue==='draw'){
                    return {...state, v8: 'X', chances:state.chances+1, isDraw: true};
                }
                if(winValue){
                    didWin = true;
                }
                return {...state,v8:'X', chances:state.chances+1, whoWin:winValue, isWin: didWin}
            }
            const winValue=checkWin(8,'O', state)
            if(winValue==='draw'){
                    return {...state, v8: 'O', chances:state.chances+1, isDraw: true};
                }
            if(winValue){
                didWin = true;
            }
            return {...state, v8:'O', chances:state.chances+1, whoWin:winValue, isWin: didWin}
        }
        if(action.payload===9){
            if(state.v9){
                return state;
            }
            if(state.chances%2===0){
                const winValue=checkWin(9,'X', state)
                if(winValue==='draw'){
                    return {...state, v9: 'X', chances:state.chances+1, isDraw: true};
                }
                if(winValue){
                    didWin = true;
                }
                return {...state,v9:'X', chances:state.chances+1, whoWin:winValue, isWin: didWin}
            }
            const winValue=checkWin(9,'O', state)
            if(winValue==='draw'){
                    return {...state, v9: 'O', chances:state.chances+1, isDraw: true};
                }
            if(winValue){
                didWin = true;
            }
            return {...state, v9:'O', chances:state.chances+1, whoWin:winValue, isWin: didWin}
        }
    }

    const checkWin = (position, value, {v1,v2,v3,v4,v5,v6,v7,v8,v9, chances})=>{
        if(position===1){
            if((v2===value && v3===value) || (v4===value && v7===value) || (v5===value && v9===value)){
                return value;
            }
        }
        if(position===2){
            if((v1===value && v3===value) || (v5===value && v8===value)){
                return value;
            }
        }
        if(position===3){
            if((v1===value && v2===value) || (v6===value && v9===value) || (v5===value && v7===value)){
                return value;
            }
        }
        if(position===4){
            if((v1===value && v7===value) || (v5===value && v6===value)){
                return value;
            }
        }
        if(position===5){
            if((v2===value && v8===value) || (v4===value && v6===value) || (v1===value && v9===value) || (v3===value && v7===value)){
                return value;
            }
        }
        if(position===6){
            if((v3===value && v9===value) || (v4===value && v5===value)){
                return value;
            }
        }
        if(position===7){
            if((v1===value && v4===value) || (v8===value && v9===value) || (v3===value && v5===value)){
                return value;
            }
        }
        if(position===8){
            if((v2===value && v5===value) || (v7===value && v9===value)){
                return value;
            }
        }
        if(position===9){
            if((v3===value && v6===value) || (v7===value && v8===value)){
                return value;
            }
        }
        if(chances===8){
            return 'draw';
        }
    }
    
    const [state,dispatch] = useReducer(reducer, defaultState);


    return(
        <div className="wrapper">
            <h1 className="win">{!state.isWin||`${state.whoWin} Wins!!`}</h1>
            <h1 className="draw">{!state.isDraw || 'Draw!'}</h1>
            {(state.chances%2===0)?<h1 className="xplay">'X' To Play:</h1>:<h1 className="oplay">'O' To Play:</h1>}
           <div className="container">
            <button className="btn" onClick={()=>dispatch({payload:1})}>{state.v1}</button>
            <button className="btn" onClick={()=>dispatch({payload:2})}>{state.v2}</button>
            <button className="btn" onClick={()=>dispatch({payload:3})}>{state.v3}</button>
            <button className="btn" onClick={()=>dispatch({payload:4})}>{state.v4}</button>
            <button className="btn" onClick={()=>dispatch({payload:5})}>{state.v5}</button>
            <button className="btn" onClick={()=>dispatch({payload:6})}>{state.v6}</button>
            <button className="btn" onClick={()=>dispatch({payload:7})}>{state.v7}</button>
            <button className="btn" onClick={()=>dispatch({payload:8})}>{state.v8}</button>
            <button className="btn" onClick={()=>dispatch({payload:9})}>{state.v9}</button>
           </div>
           <button className="restart" on onClick={()=>dispatch({payload:'RESTART'})}>Restart</button>
        </div>
    );
}

export default TicTacToe