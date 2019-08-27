function doesIndexAmountOfWorkInLoop(n){
  for(let i=0; i<n;i++){
    for(let j=0;j<i;j++){
      //
    }
  }
  //Extra things compared to baseLine
  //at i=0, j++ 0 times, j<i comparision 1 times, 
  //at i=1, j++ 1 times, j<i comparision 2 times, 
  //at i=2, j++ 2 times, j<i comparision 3 times,
  //at i=3, j++ 3 times, j<i comparision 4 times, 

  //at i=n-1, j++ n-1 times, j<i comparision n times
  //Hence in total: j++ "1+2+3+4+...+n-1" times and checked j<i 1+2+3+...+n times <-unsure how negligible that is, 
  // could run extra tests to check how big of an effect it has, however in terms of O(N^2), shouldn't have any effect. But since large tests do get close to that N/2 ratio predicted, I sense that maybe it usually doesn't amount to too much more work.
  //Note not all additions take the same amount of computational power so.
}

function baseLineNAdds(n){
  for(let i=0;i<n;i++){
    let j=0;
    //
  }
}

for(let n=5;n<=1000000;n*=2){
  let times=[];
  let tries=5;
  for(let j=0; j<tries;j++){
    let start=process.hrtime.bigint();
    doesIndexAmountOfWorkInLoop(n);
    let end=process.hrtime.bigint();
    times.push((end-start));
  }
  let indexWorkEachTime=times.reduce((total,cVal) => total+cVal, BigInt(0))/BigInt(tries);

  times=[];
  for(let j=0; j<tries;j++){
    let start=process.hrtime.bigint();
    baseLineNAdds(n);
    let end=process.hrtime.bigint();
    times.push((end-start));
  }
  let oneWorkEachTime=times.reduce((total,cVal) => total+cVal, BigInt(0))/BigInt(tries);
  
  console.log(`With, n=${n}, time taken by loop 1+2+3+...+n-1 work/time taken by loop 1+1+..+1 work is ${indexWorkEachTime/oneWorkEachTime}`);
}


/* 
With, n=5, time taken by loop 1+2+3+...+n-1 work/time taken by loop 1+1+..+1 work is 1
With, n=10, time taken by loop 1+2+3+...+n-1 work/time taken by loop 1+1+..+1 work is 3
With, n=20, time taken by loop 1+2+3+...+n-1 work/time taken by loop 1+1+..+1 work is 11
With, n=40, time taken by loop 1+2+3+...+n-1 work/time taken by loop 1+1+..+1 work is 14
With, n=80, time taken by loop 1+2+3+...+n-1 work/time taken by loop 1+1+..+1 work is 119
With, n=160, time taken by loop 1+2+3+...+n-1 work/time taken by loop 1+1+..+1 work is 127
With, n=320, time taken by loop 1+2+3+...+n-1 work/time taken by loop 1+1+..+1 work is 6
With, n=640, time taken by loop 1+2+3+...+n-1 work/time taken by loop 1+1+..+1 work is 12
With, n=1280, time taken by loop 1+2+3+...+n-1 work/time taken by loop 1+1+..+1 work is 9
With, n=2560, time taken by loop 1+2+3+...+n-1 work/time taken by loop 1+1+..+1 work is 1171
With, n=5120, time taken by loop 1+2+3+...+n-1 work/time taken by loop 1+1+..+1 work is 2592
With, n=10240, time taken by loop 1+2+3+...+n-1 work/time taken by loop 1+1+..+1 work is 2669
With, n=20480, time taken by loop 1+2+3+...+n-1 work/time taken by loop 1+1+..+1 work is 10484
With, n=40960, time taken by loop 1+2+3+...+n-1 work/time taken by loop 1+1+..+1 work is 20906
With, n=81920, time taken by loop 1+2+3+...+n-1 work/time taken by loop 1+1+..+1 work is 29703
With, n=163840, time taken by loop 1+2+3+...+n-1 work/time taken by loop 1+1+..+1 work is 85913
With, n=327680, time taken by loop 1+2+3+...+n-1 work/time taken by loop 1+1+..+1 work is 172713 
*/