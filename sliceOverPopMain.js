function recSlice(arr){
  if(arr.length===0){
    return [];
  }
  /* return [arr[0]*2,...recSlice(arr.slice(1))]; */
  //array destructuring appears to be O(N), so removing it to make test fair.
  return recSlice(arr.slice(1));
}

function recPop(arr){
  if(arr.length===0){
    return [];
  }
  let lv=arr.pop()*2;
  let newarr=recPop(arr);
  newarr.push(lv);
  return newarr;
}

for(let n=5;n<=30000;n+=100){
  let times=[];
  let tries=10;
  for(let j=0; j<tries;j++){
    let arr=[];
    for(let i=0;i<n;i++){
      arr.push(0);
    }
    let start=process.hrtime.bigint();
    recSlice(arr);
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
    recPop(arr);
    let end=process.hrtime.bigint();
    times.push((end-start));
  }
  let popTime=times.reduce((total,cVal) => total+cVal, BigInt(0))/BigInt(tries);
  
  console.log(`With, n=${n}, amount of time it took for slice/amount of time it took for pop is ${sliceTime/popTime}`);
  if(n>9000){
    n+=900;
  }
}




/* $ node sliceOverPopMain.js --stack_size=2000
With, n=5, amount of time it took for slice/amount of time it took for pop is 0
With, n=105, amount of time it took for slice/amount of time it took for pop is 15
With, n=205, amount of time it took for slice/amount of time it took for pop is 0
With, n=305, amount of time it took for slice/amount of time it took for pop is 49
With, n=405, amount of time it took for slice/amount of time it took for pop is 25
With, n=505, amount of time it took for slice/amount of time it took for pop is 57
With, n=605, amount of time it took for slice/amount of time it took for pop is 30
With, n=705, amount of time it took for slice/amount of time it took for pop is 48
With, n=805, amount of time it took for slice/amount of time it took for pop is 34
With, n=905, amount of time it took for slice/amount of time it took for pop is 53
With, n=1005, amount of time it took for slice/amount of time it took for pop is 24
With, n=1105, amount of time it took for slice/amount of time it took for pop is 42
With, n=1205, amount of time it took for slice/amount of time it took for pop is 74
With, n=1305, amount of time it took for slice/amount of time it took for pop is 43
With, n=1405, amount of time it took for slice/amount of time it took for pop is 40
With, n=1505, amount of time it took for slice/amount of time it took for pop is 126
With, n=1605, amount of time it took for slice/amount of time it took for pop is 113
With, n=1705, amount of time it took for slice/amount of time it took for pop is 103
With, n=1805, amount of time it took for slice/amount of time it took for pop is 79
With, n=1905, amount of time it took for slice/amount of time it took for pop is 72
With, n=2005, amount of time it took for slice/amount of time it took for pop is 27
With, n=2105, amount of time it took for slice/amount of time it took for pop is 411
With, n=2205, amount of time it took for slice/amount of time it took for pop is 397
With, n=2305, amount of time it took for slice/amount of time it took for pop is 247
With, n=2405, amount of time it took for slice/amount of time it took for pop is 329
With, n=2505, amount of time it took for slice/amount of time it took for pop is 439
With, n=2605, amount of time it took for slice/amount of time it took for pop is 393
With, n=2705, amount of time it took for slice/amount of time it took for pop is 365
With, n=2805, amount of time it took for slice/amount of time it took for pop is 165
With, n=2905, amount of time it took for slice/amount of time it took for pop is 536
With, n=3005, amount of time it took for slice/amount of time it took for pop is 529
With, n=3105, amount of time it took for slice/amount of time it took for pop is 556
With, n=3205, amount of time it took for slice/amount of time it took for pop is 447
With, n=3305, amount of time it took for slice/amount of time it took for pop is 604
With, n=3405, amount of time it took for slice/amount of time it took for pop is 543
With, n=3505, amount of time it took for slice/amount of time it took for pop is 642
With, n=3605, amount of time it took for slice/amount of time it took for pop is 745
With, n=3705, amount of time it took for slice/amount of time it took for pop is 696
With, n=3805, amount of time it took for slice/amount of time it took for pop is 787
With, n=3905, amount of time it took for slice/amount of time it took for pop is 813
With, n=4005, amount of time it took for slice/amount of time it took for pop is 674
With, n=4105, amount of time it took for slice/amount of time it took for pop is 909
With, n=4205, amount of time it took for slice/amount of time it took for pop is 936
With, n=4305, amount of time it took for slice/amount of time it took for pop is 974
With, n=4405, amount of time it took for slice/amount of time it took for pop is 986
With, n=4505, amount of time it took for slice/amount of time it took for pop is 515
With, n=4605, amount of time it took for slice/amount of time it took for pop is 950
With, n=4705, amount of time it took for slice/amount of time it took for pop is 969
With, n=4805, amount of time it took for slice/amount of time it took for pop is 615
With, n=4905, amount of time it took for slice/amount of time it took for pop is 858
With, n=5005, amount of time it took for slice/amount of time it took for pop is 1061
With, n=5105, amount of time it took for slice/amount of time it took for pop is 1227
With, n=5205, amount of time it took for slice/amount of time it took for pop is 1062
With, n=5305, amount of time it took for slice/amount of time it took for pop is 1138
With, n=5405, amount of time it took for slice/amount of time it took for pop is 534
With, n=5505, amount of time it took for slice/amount of time it took for pop is 1347
With, n=5605, amount of time it took for slice/amount of time it took for pop is 1259
With, n=5705, amount of time it took for slice/amount of time it took for pop is 1336
With, n=5805, amount of time it took for slice/amount of time it took for pop is 723
With, n=5905, amount of time it took for slice/amount of time it took for pop is 1392
With, n=6005, amount of time it took for slice/amount of time it took for pop is 575
With, n=6105, amount of time it took for slice/amount of time it took for pop is 1573
With, n=6205, amount of time it took for slice/amount of time it took for pop is 540
With, n=6305, amount of time it took for slice/amount of time it took for pop is 1632
With, n=6405, amount of time it took for slice/amount of time it took for pop is 929
With, n=6505, amount of time it took for slice/amount of time it took for pop is 1214
With, n=6605, amount of time it took for slice/amount of time it took for pop is 1631
With, n=6705, amount of time it took for slice/amount of time it took for pop is 1481
With, n=6805, amount of time it took for slice/amount of time it took for pop is 1634
With, n=6905, amount of time it took for slice/amount of time it took for pop is 875
With, n=7005, amount of time it took for slice/amount of time it took for pop is 1812
With, n=7105, amount of time it took for slice/amount of time it took for pop is 1450
With, n=7205, amount of time it took for slice/amount of time it took for pop is 1311
With, n=7305, amount of time it took for slice/amount of time it took for pop is 1043
With, n=7405, amount of time it took for slice/amount of time it took for pop is 1082
With, n=7505, amount of time it took for slice/amount of time it took for pop is 2020
With, n=7605, amount of time it took for slice/amount of time it took for pop is 899
With, n=7705, amount of time it took for slice/amount of time it took for pop is 1219
With, n=7805, amount of time it took for slice/amount of time it took for pop is 2090
With, n=7905, amount of time it took for slice/amount of time it took for pop is 1962
With, n=8005, amount of time it took for slice/amount of time it took for pop is 1886
With, n=8105, amount of time it took for slice/amount of time it took for pop is 1187
With, n=8205, amount of time it took for slice/amount of time it took for pop is 1048
With, n=8305, amount of time it took for slice/amount of time it took for pop is 2412
With, n=8405, amount of time it took for slice/amount of time it took for pop is 2411
With, n=8505, amount of time it took for slice/amount of time it took for pop is 2269
With, n=8605, amount of time it took for slice/amount of time it took for pop is 2451
With, n=8705, amount of time it took for slice/amount of time it took for pop is 2515
With, n=8805, amount of time it took for slice/amount of time it took for pop is 600
With, n=8905, amount of time it took for slice/amount of time it took for pop is 2531
With, n=9005, amount of time it took for slice/amount of time it took for pop is 1924
With, n=10005, amount of time it took for slice/amount of time it took for pop is 3017
With, n=11005, amount of time it took for slice/amount of time it took for pop is 3131
With, n=12005, amount of time it took for slice/amount of time it took for pop is 1789 */