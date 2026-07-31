export const sum = (...num)=>{
    const s = num.reduce((s,i)=>(s+i));
    return s;
}

export const add = (...num)=>{
  let s = 0;
  for (const i of num) {
     s = s+i;
  }
  return s;
}

// export default sum;

// export {sum,add};  named export 