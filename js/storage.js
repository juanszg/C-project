const KEY='cpp-poo-lab-v1';
const defaults={theme:'dark',visited:[],completed:[],lastTopic:'intro',code:'',filter:'Todos',profile:'STUDENT'};
export const getState=()=>{try{return {...defaults,...JSON.parse(localStorage.getItem(KEY)||'{}')}}catch{return {...defaults}}};
let state=getState();
export const saveState=()=>localStorage.setItem(KEY,JSON.stringify(state));
export const readState=()=>state;
export const updateState=(patch)=>{state={...state,...patch};saveState();return state};
export const markVisited=id=>{if(!state.visited.includes(id))state.visited.push(id);state.lastTopic=id;saveState()};
export const markCompleted=id=>{if(!state.completed.includes(id))state.completed.push(id);saveState()};
