function Slice(arr){
  while(arr.length>0){
    arr=arr.slice(1);
  }
}

function Pop(arr){
  while(arr.length>0){
    arr.pop();
  }
}

for(let n=5;n<=1000000;n*=2){
  let times=[];
  let tries=10;
  for(let j=0; j<tries;j++){
    let arr=[];
    for(let i=0;i<n;i++){
      arr.push(0);
    }
    let start=process.hrtime.bigint();
    Slice(arr);
    let end=process.hrtime.bigint();
    times.push((end-start));
  }
  let sliceTime=times.reduce((total,cVal) => total+cVal, BigInt(0))/BigInt(tries);

  times=[];
  for(let j=0; j<tries;j++){
    let arr=[];
    for(let i=0;i<n;i++){
      arr.push(0);
    }
    let start=process.hrtime.bigint();
    Pop(arr);
    let end=process.hrtime.bigint();
    times.push((end-start));
  }
  let popTime=times.reduce((total,cVal) => total+cVal, BigInt(0))/BigInt(tries);
  
  console.log(`With, n=${n}, amount of time it took for slice/amount of time it took for pop is ${sliceTime/popTime}`);
}


/* With, n=5, amount of time it took for slice/amount of time it took for pop is 1
With, n=10, amount of time it took for slice/amount of time it took for pop is 1
With, n=20, amount of time it took for slice/amount of time it took for pop is 1
With, n=40, amount of time it took for slice/amount of time it took for pop is 68
With, n=80, amount of time it took for slice/amount of time it took for pop is 2
With, n=160, amount of time it took for slice/amount of time it took for pop is 8
With, n=320, amount of time it took for slice/amount of time it took for pop is 5
With, n=640, amount of time it took for slice/amount of time it took for pop is 132
With, n=1280, amount of time it took for slice/amount of time it took for pop is 172
With, n=2560, amount of time it took for slice/amount of time it took for pop is 370
With, n=5120, amount of time it took for slice/amount of time it took for pop is 946
With, n=10240, amount of time it took for slice/amount of time it took for pop is 2386
With, n=20480, amount of time it took for slice/amount of time it took for pop is 4599
With, n=40960, amount of time it took for slice/amount of time it took for pop is 8416
With, n=81920, amount of time it took for slice/amount of time it took for pop is 58143
With, n=163840, amount of time it took for slice/amount of time it took for pop is 139207 */