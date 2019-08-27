function numOfChildUpSteps123(n){
  let arr=[1,2,4];
  while(arr.length<n){
    arr.push(arr[arr.length-1]+arr[arr.length-2]+arr[arr.length-3]);
  }
  return arr[n-1];

}

console.log(numOfChildUpSteps123(10));


function revStr(str){
  if(str.length===0){
    return "";
  }
  return revStr(str.slice(1)) + str.charAt(0);
}

console.log(revStr('hijim'));


function nthTriangularNumber(n){
  if(n<=0){
    return 0;
  }
  return n+ nthTriangularNumber(n-1);
}

console.log(nthTriangularNumber(7));


function stringSplitter(str,sep){
  if(str.length===0){
    return '';
  }
  if(str.charAt(0) === sep ){
    return stringSplitter(str.slice(1),sep);
  }
  else{
    return str.charAt(0)+stringSplitter(str.slice(1),sep);
  }
}

console.log(stringSplitter('20;22;22;222;',';'));


//would rather bottom up

function fib(n){
  if(n<0){
    return;
  }
  let memo={0:0,1:1};
  return fibRec(n,memo);
}
function fibRec(n,memo){/* 
  if(n===0 || n===1){
    return n;
  } */
  if(memo[n]===undefined){
    memo[n]=fibRec(n-1,memo)+fibRec(n-2,memo);
    return memo[n];
  }
  else{
    return memo[n];
  }
}
console.log(fib(10));


function fac(n){
  if (n===0){
    return 1;
  }
  return n*fac(n-1);
}
console.log(fac(4));


let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];


function findWayOutOfMaze(maze){
  let historyOfMoves={};
  return findWayOutOfMazeRec(maze,0,0,' ',historyOfMoves);
}
function findWayOutOfMazeRec(maze,r,c,mostRecentMove,historyOfMoves){
  if(maze[r][c]==='e'){
    return '*';
  }
  if(historyOfMoves[`${r},${c}`]){
    return 'B';
  }
  historyOfMoves[`${r},${c}`]=true;
  const rows=maze.length;
  const cols=maze[0].length; //assuming rectangular mazes

  
  if(r+1<rows && maze[r+1][c]!=='*' && mostRecentMove!=='U'){
    let res=findWayOutOfMazeRec(maze,r+1,c,'D',historyOfMoves);
    if(res.charAt(res.length-1)==='*'){
      return 'D'+res;
    }
  }
  if(c+1<cols && maze[r][c+1]!=='*' && mostRecentMove!=='L'){
    let res=findWayOutOfMazeRec(maze,r,c+1,'R',historyOfMoves);
    if(res.charAt(res.length-1)==='*'){
      return 'R'+res;
    }
  }
  if(r-1>=0 && maze[r-1][c]!=='*' && mostRecentMove!=='D'){
    let res=findWayOutOfMazeRec(maze,r-1,c,'U',historyOfMoves);
    if(res.charAt(res.length-1)==='*'){
      return 'U'+res;
    }
  }
  if(c-1>=0 && maze[r][c-1]!=='*' && mostRecentMove!=='R'){
    let res=findWayOutOfMazeRec(maze,r,c-1,'L',historyOfMoves);
    if(res.charAt(res.length-1)==='*'){
      return 'L'+res;
    }
  }

  //Only come here if all paths fail
  historyOfMoves[`${r},${c}`]=false;
  return 'B';
  
}

console.log(findWayOutOfMaze(maze));



function findAllWaysOutOfMaze(maze){
  let historyOfMoves={};
  let successes=[];
  findAllWaysOutOfMazeRec(maze,0,0,' ',historyOfMoves,'',successes);
  return successes;
}
function findAllWaysOutOfMazeRec(maze,r,c,mostRecentMove,historyOfMoves,currentString,succ){
  if(maze[r][c]==='e'){
    succ.push(currentString);
    return '*';
  }
  if(historyOfMoves[`${r},${c}`]){
    return 'B';
  }
  historyOfMoves[`${r},${c}`]=true;
  const rows=maze.length;
  const cols=maze[0].length; //assuming rectangular mazes
  
  if(r+1<rows && maze[r+1][c]!=='*' && mostRecentMove!=='U'){
    findAllWaysOutOfMazeRec(maze,r+1,c,'D',historyOfMoves,currentString+'D',succ);
  }
  if(c+1<cols && maze[r][c+1]!=='*' && mostRecentMove!=='L'){
    findAllWaysOutOfMazeRec(maze,r,c+1,'R',historyOfMoves,currentString+'R',succ);
  }
  if(r-1>=0 && maze[r-1][c]!=='*' && mostRecentMove!=='D'){
    findAllWaysOutOfMazeRec(maze,r-1,c,'U',historyOfMoves,currentString+'U',succ);
  }
  if(c-1>=0 && maze[r][c-1]!=='*' && mostRecentMove!=='R'){
    findAllWaysOutOfMazeRec(maze,r,c-1,'L',historyOfMoves,currentString+'L',succ);
  }

  //Come here after every path has been explored.
  historyOfMoves[`${r},${c}`]=false;
}

console.log(findAllWaysOutOfMaze(maze));


function perm(str){
  //going to do case-insensitive (so dumM=duMm) and assume repeats of a char are possible.
  const perms=[];
  const available={};
  str=str.toLowerCase();
  for(let i=0;i<str.length;i++){
    if(!available[str.charAt(i)]){
      available[str.charAt(i)]=1;
    }
    else{
      available[str.charAt(i)]++;
    }
  }

  permRec('',str.length,available,perms);
  return perms;
}

function permRec(str,n,letters,perms){
  if(str.length===n){
    perms.push(str);
    return;
  }
  Object.keys(letters).forEach(letter=>{
    if(letters[letter]>0){
      letters[letter]--;
      permRec(str+letter,n,letters,perms);
      letters[letter]++;
    }
  });
}

console.log(perm('dass'));


const orgChart={
  Zuckerberg:{
    bossa:{
      manaa:{grunta:{verybottom:true},gruntb:true},
      manab:{grunta:true,gruntb:true},
    },
    bossb:{
      manac:{grunta:true,gruntb:true},
      manad:{grunta:true,gruntb:true},
    },
    bossc:{
      manae:{grunta:true,gruntb:true},
      manaf:{grunta:true,gruntb:true},
      manag:{grunta:true,gruntb:true},

    },
  }
  
  
};


function orgChartTab(chart){
  let arr=[];
  orgChartRec(0,chart,arr);
  return arr;
}

function orgChartRec(level, currentChart,arr){
  if(typeof currentChart!=='object'){
    return;
  }
  Object.keys(currentChart).forEach(name=>{
    let tabs='';
    for(let i=0;i<level;i++){
      tabs+='\t';
    }
    console.log(tabs+name);
    arr.push(tabs+name);
    orgChartRec(level+1,currentChart[name],arr);

  });
  /* let TotalArr=[];
  Object.keys(currentChart).forEach(name=>{
    let singleEmployeeSubtree=[];
    if(typeof currentChart[name] !== 'object'){
      return;
    }
    singleEmployeeSubtree=orgChartRec(level+1, currentChart[name], arr )
  })
  return; */
}


orgChartTab(orgChart);



function binRep(n){
  if(n===0){
    return '';
  }
  return `${binRep(Math.floor(n/2))}${n%2}`;
}

console.log(binRep(4));


