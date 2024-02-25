// 화명 해상도 크기 구함
function getDisplayInfo() {
  var size = {
    width: window.innerWidth || document.body.clientWidth,
    height: window.innerHeight || document.body.clientHeight
  }
  return size;
}


// function bg(bl1,bl2) {
//   success_ck=false;
//   for(i=0;i<b1*b2;i++){
//   if (list[i]===1){
//     document.getElementById(i).style.backgroundColor="skyblue";
//   } else {
//     if((((parseInt(i/b2)-bl2)**2 + (i%b2-bl1)**2)==5)){
//       document.getElementById(i).style.backgroundColor="green";
//       success_ck=true;
//     } else {
//       document.getElementById(i).style.backgroundColor="#dddddd";
//     }
//   }
//   document.getElementById(bl1+bl2*b2).style.backgroundColor="red";
// }
// }

function bg(bb) {
  success_ck=false;
  for(i=0;i<22;i++){
  if (list[i]===1){
    document.getElementById(i).style.backgroundColor="skyblue";
  } else {
    if((path[parseInt(bb)].includes(i))){
      document.getElementById(i).style.backgroundColor="green";
      success_ck=true;
    } else {
      document.getElementById(i).style.backgroundColor="#dddddd";
    }
  }
  document.getElementById(bb).style.backgroundColor="red";
}
}

// path=[2,3,[4,5]];

let count = 1;

function success(){
  let re = document.getElementById("result");
  const average = list.reduce((a,c)=>a+c)/list.length;
  if(average==1){
    re.textContent ="축하합니다. 성공하였습니다."
  } else {
    if(success_ck){
      re.textContent ="게임중입니다. 녹색을 선택하여 이동하십시오."
    } else {
      re.textContent ="더 이상 갈 곳이 없습니다."
    }
  }
}

jn_name=['목포', '여수', '순천', '나주', '광양', '담양', '곡성', '구례', '고흥', '보성', '화순', '장흥', '강진', '해남', '영암', '무안', '함평', '영광', '장성', '완도', '진도', '신안'];
jn_left=['58','329','270','140','325','190','240','300','250','225','200','180','140','105','120','85','100','80','140','140','40','0'];
jn_top=['240','249','200','195','190','125','140','140','300','240','190','260','290','320','245','205','160','115','115','360','330','220'];

path=[[14,15,21],[2,4,8],[1,4,6,7,9,10],[10,14,15,16],[1,2],[6,10,18],[2,5,7,10],[2,6],[1,9],[2,8,10,11],[2,3,5,6,9,11],[9,10,12,14],[11,13,14,19],[12,14,19,20],[0,3,11,12,13,15],[0,3,14,16,21],[3,15,17,18],[16,18],[5,16,17],[12,13],[13],[0,15]];


function clickbt(j) {
  if(list[j]==0){
    const element = document.getElementById(j);
    element.innerText = jn_name[j]+number;
    list_number[j] = number;
    number++;
    list[j]=1;
    bg(j);
  } else {
    if(list_number[j]==number-1){
      if(list_number.indexOf(number-2)==0){
        main()
      } else{
        const element = document.getElementById(j);
        element.innerText = jn_name[j];
        list_number[j]=0;
        number--;
        list[j]=0;
        bg(list_number.indexOf(number-1));
      }
    }

  }
  success();
  let re1 = document.getElementById("aaa");
  re1.textContent =list
  let re2 = document.getElementById("bbb");
  re2.textContent =list_number
  let re3 = document.getElementById("ccc");
  re3.textContent =list_number.indexOf(number-1)
}


  function main() {
    list=[];
    list_number=[];
    count=1;
    number = 1;
    let tag = "<div class='container'>";
      for (i = 0; i < 22; i++) {
        list.push(0);
        list_number.push(0);
        tag += "<div class='column' id='"+i+"' style=width:30px;height:30px;left:"+jn_left[i]+"px;top:"+jn_top[i]+"px; onclick='clickbt("+i+")'></div>";
      }
      tag += "</div>";
      area.innerHTML = tag;
      console.log=tag;
      document.getElementById("result").textContent = "출발지를 선택하십시오.";
      
      for (i = 0; i < 22; i++) {
        document.getElementById(i).textContent = jn_name[i];
      }
    }



onload = () => {
  main()
}