
function recSlice(arr){
  if(arr.length===0){
    return;
  }
  return recSlice(arr.slice(1));
}





function recPop(arr){
  if(arr.length===0){
    return;
  }
  let lv=arr.pop();
  return recPop(arr);
}

for(let n=100;n<=30000;n+=100){
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
    times.push((end-start)/BigInt(1000));
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
    times.push((end-start)/BigInt(1000));
  }
  let popTime=times.reduce((total,cVal) => total+cVal, BigInt(0))/BigInt(tries);
  
  console.log(`With, n=${n}, amount of time it took for slice/amount of time it took for pop is ${sliceTime/popTime}`);
}

/* 
With, n=100, amount of time it took for slice/amount of time it took for pop is 10
With, n=200, amount of time it took for slice/amount of time it took for pop is 7
With, n=300, amount of time it took for slice/amount of time it took for pop is 1
With, n=400, amount of time it took for slice/amount of time it took for pop is 140
With, n=500, amount of time it took for slice/amount of time it took for pop is 199
With, n=600, amount of time it took for slice/amount of time it took for pop is 214
With, n=700, amount of time it took for slice/amount of time it took for pop is 131
With, n=800, amount of time it took for slice/amount of time it took for pop is 68
With, n=900, amount of time it took for slice/amount of time it took for pop is 184
With, n=1000, amount of time it took for slice/amount of time it took for pop is 95
With, n=1100, amount of time it took for slice/amount of time it took for pop is 161
With, n=1200, amount of time it took for slice/amount of time it took for pop is 200
With, n=1300, amount of time it took for slice/amount of time it took for pop is 136
With, n=1400, amount of time it took for slice/amount of time it took for pop is 94
With, n=1500, amount of time it took for slice/amount of time it took for pop is 258
With, n=1600, amount of time it took for slice/amount of time it took for pop is 372
With, n=1700, amount of time it took for slice/amount of time it took for pop is 295
With, n=1800, amount of time it took for slice/amount of time it took for pop is 181
With, n=1900, amount of time it took for slice/amount of time it took for pop is 212
With, n=2000, amount of time it took for slice/amount of time it took for pop is 169
With, n=2100, amount of time it took for slice/amount of time it took for pop is 1034
With, n=2200, amount of time it took for slice/amount of time it took for pop is 879
With, n=2300, amount of time it took for slice/amount of time it took for pop is 544
With, n=2400, amount of time it took for slice/amount of time it took for pop is 840
With, n=2500, amount of time it took for slice/amount of time it took for pop is 633
With, n=2600, amount of time it took for slice/amount of time it took for pop is 1124
With, n=2700, amount of time it took for slice/amount of time it took for pop is 1071
With, n=2800, amount of time it took for slice/amount of time it took for pop is 940
With, n=2900, amount of time it took for slice/amount of time it took for pop is 752
With, n=3000, amount of time it took for slice/amount of time it took for pop is 1305
With, n=3100, amount of time it took for slice/amount of time it took for pop is 1295
With, n=3200, amount of time it took for slice/amount of time it took for pop is 1043
With, n=3300, amount of time it took for slice/amount of time it took for pop is 1348
With, n=3400, amount of time it took for slice/amount of time it took for pop is 867
With, n=3500, amount of time it took for slice/amount of time it took for pop is 1276
With, n=3600, amount of time it took for slice/amount of time it took for pop is 1910
With, n=3700, amount of time it took for slice/amount of time it took for pop is 993
With, n=3800, amount of time it took for slice/amount of time it took for pop is 1699
With, n=3900, amount of time it took for slice/amount of time it took for pop is 1892
With, n=4000, amount of time it took for slice/amount of time it took for pop is 1659
With, n=4100, amount of time it took for slice/amount of time it took for pop is 1261
With, n=4200, amount of time it took for slice/amount of time it took for pop is 1807
With, n=4300, amount of time it took for slice/amount of time it took for pop is 2034
With, n=4400, amount of time it took for slice/amount of time it took for pop is 1402
With, n=4500, amount of time it took for slice/amount of time it took for pop is 2084
With, n=4600, amount of time it took for slice/amount of time it took for pop is 2540
With, n=4700, amount of time it took for slice/amount of time it took for pop is 2263
With, n=4800, amount of time it took for slice/amount of time it took for pop is 2201
With, n=4900, amount of time it took for slice/amount of time it took for pop is 2408
With, n=5000, amount of time it took for slice/amount of time it took for pop is 2710
With, n=5100, amount of time it took for slice/amount of time it took for pop is 2802
With, n=5200, amount of time it took for slice/amount of time it took for pop is 1997
With, n=5300, amount of time it took for slice/amount of time it took for pop is 3010
With, n=5400, amount of time it took for slice/amount of time it took for pop is 1877
With, n=5500, amount of time it took for slice/amount of time it took for pop is 2933
With, n=5600, amount of time it took for slice/amount of time it took for pop is 2091
With, n=5700, amount of time it took for slice/amount of time it took for pop is 3341
With, n=5800, amount of time it took for slice/amount of time it took for pop is 2335
With, n=5900, amount of time it took for slice/amount of time it took for pop is 3174
With, n=6000, amount of time it took for slice/amount of time it took for pop is 3354
With, n=6100, amount of time it took for slice/amount of time it took for pop is 3492
With, n=6200, amount of time it took for slice/amount of time it took for pop is 3652
With, n=6300, amount of time it took for slice/amount of time it took for pop is 2071
With, n=6400, amount of time it took for slice/amount of time it took for pop is 3296
With, n=6500, amount of time it took for slice/amount of time it took for pop is 3040
With, n=6600, amount of time it took for slice/amount of time it took for pop is 2469
With, n=6700, amount of time it took for slice/amount of time it took for pop is 4193
With, n=6800, amount of time it took for slice/amount of time it took for pop is 3719
With, n=6900, amount of time it took for slice/amount of time it took for pop is 3950
With, n=7000, amount of time it took for slice/amount of time it took for pop is 4371
With, n=7100, amount of time it took for slice/amount of time it took for pop is 4512
With, n=7200, amount of time it took for slice/amount of time it took for pop is 2349
With, n=7300, amount of time it took for slice/amount of time it took for pop is 3156
With, n=7400, amount of time it took for slice/amount of time it took for pop is 4950
With, n=7500, amount of time it took for slice/amount of time it took for pop is 4454
With, n=7600, amount of time it took for slice/amount of time it took for pop is 4858
With, n=7700, amount of time it took for slice/amount of time it took for pop is 4196
With, n=7800, amount of time it took for slice/amount of time it took for pop is 5551
With, n=7900, amount of time it took for slice/amount of time it took for pop is 4687
With, n=8000, amount of time it took for slice/amount of time it took for pop is 4535
With, n=8100, amount of time it took for slice/amount of time it took for pop is 4465
With, n=8200, amount of time it took for slice/amount of time it took for pop is 4837
With, n=8300, amount of time it took for slice/amount of time it took for pop is 2949
With, n=8400, amount of time it took for slice/amount of time it took for pop is 5773
With, n=8500, amount of time it took for slice/amount of time it took for pop is 5775
With, n=8600, amount of time it took for slice/amount of time it took for pop is 5978
With, n=8700, amount of time it took for slice/amount of time it took for pop is 2988
With, n=8800, amount of time it took for slice/amount of time it took for pop is 5998
With, n=8900, amount of time it took for slice/amount of time it took for pop is 3681
With, n=9000, amount of time it took for slice/amount of time it took for pop is 5717
With, n=9100, amount of time it took for slice/amount of time it took for pop is 5825
With, n=9200, amount of time it took for slice/amount of time it took for pop is 5805
With, n=9300, amount of time it took for slice/amount of time it took for pop is 4927
With, n=9400, amount of time it took for slice/amount of time it took for pop is 6793
With, n=9500, amount of time it took for slice/amount of time it took for pop is 5412
With, n=9600, amount of time it took for slice/amount of time it took for pop is 6451
With, n=9700, amount of time it took for slice/amount of time it took for pop is 4618
With, n=9800, amount of time it took for slice/amount of time it took for pop is 6208
With, n=9900, amount of time it took for slice/amount of time it took for pop is 7603
With, n=10000, amount of time it took for slice/amount of time it took for pop is 4287
With, n=10100, amount of time it took for slice/amount of time it took for pop is 6638
With, n=10200, amount of time it took for slice/amount of time it took for pop is 6051
With, n=10300, amount of time it took for slice/amount of time it took for pop is 3936
With, n=10400, amount of time it took for slice/amount of time it took for pop is 7687
With, n=10500, amount of time it took for slice/amount of time it took for pop is 6954
With, n=10600, amount of time it took for slice/amount of time it took for pop is 7854
With, n=10700, amount of time it took for slice/amount of time it took for pop is 6553
With, n=10800, amount of time it took for slice/amount of time it took for pop is 7403
With, n=10900, amount of time it took for slice/amount of time it took for pop is 8438
With, n=11000, amount of time it took for slice/amount of time it took for pop is 7046
With, n=11100, amount of time it took for slice/amount of time it took for pop is 5928
With, n=11200, amount of time it took for slice/amount of time it took for pop is 8156
With, n=11300, amount of time it took for slice/amount of time it took for pop is 5860
With, n=11400, amount of time it took for slice/amount of time it took for pop is 6029
With, n=11500, amount of time it took for slice/amount of time it took for pop is 8667
With, n=11600, amount of time it took for slice/amount of time it took for pop is 7452
With, n=11700, amount of time it took for slice/amount of time it took for pop is 8809
With, n=11800, amount of time it took for slice/amount of time it took for pop is 6996
With, n=11900, amount of time it took for slice/amount of time it took for pop is 6900
With, n=12000, amount of time it took for slice/amount of time it took for pop is 7775
With, n=12100, amount of time it took for slice/amount of time it took for pop is 6999
With, n=12200, amount of time it took for slice/amount of time it took for pop is 9425
With, n=12300, amount of time it took for slice/amount of time it took for pop is 10288
With, n=12400, amount of time it took for slice/amount of time it took for pop is 8064
With, n=12500, amount of time it took for slice/amount of time it took for pop is 6647
With, n=12600, amount of time it took for slice/amount of time it took for pop is 8804
With, n=12700, amount of time it took for slice/amount of time it took for pop is 7930
With, n=12800, amount of time it took for slice/amount of time it took for pop is 7838
With, n=12900, amount of time it took for slice/amount of time it took for pop is 6546
With, n=13000, amount of time it took for slice/amount of time it took for pop is 8474
With, n=13100, amount of time it took for slice/amount of time it took for pop is 5633
With, n=13200, amount of time it took for slice/amount of time it took for pop is 8194
With, n=13300, amount of time it took for slice/amount of time it took for pop is 8696
With, n=13400, amount of time it took for slice/amount of time it took for pop is 10004
With, n=13500, amount of time it took for slice/amount of time it took for pop is 9978
With, n=13600, amount of time it took for slice/amount of time it took for pop is 3162
With, n=13700, amount of time it took for slice/amount of time it took for pop is 3414
With, n=13800, amount of time it took for slice/amount of time it took for pop is 4616
With, n=13900, amount of time it took for slice/amount of time it took for pop is 5083
With, n=14000, amount of time it took for slice/amount of time it took for pop is 9737
With, n=14100, amount of time it took for slice/amount of time it took for pop is 10087
With, n=14200, amount of time it took for slice/amount of time it took for pop is 9422
With, n=14300, amount of time it took for slice/amount of time it took for pop is 9133
With, n=14400, amount of time it took for slice/amount of time it took for pop is 8940
With, n=14500, amount of time it took for slice/amount of time it took for pop is 9562 
*/