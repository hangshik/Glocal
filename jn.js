// 화명 해상도 크기 구함
function getDisplayInfo() {
  var size = {
    width: window.innerWidth || document.body.clientWidth,
    height: window.innerHeight || document.body.clientHeight
  }
  return size;
}

function bg(bl1,bl2) {
  success_ck=false;
  for(i=0;i<b1*b2;i++){
  if (list[i]===1){
    document.getElementById(i).style.backgroundColor="skyblue";
  } else {
    if((((parseInt(i/b2)-bl2)**2 + (i%b2-bl1)**2)==5)){
      document.getElementById(i).style.backgroundColor="green";
      success_ck=true;
    } else {
      document.getElementById(i).style.backgroundColor="#dddddd";
    }
  }
  document.getElementById(bl1+bl2*b2).style.backgroundColor="red";
}
}

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
      re.textContent ="더 이상 갈 곳이 없습니다. 빨간색을 선택하여 되돌아 가거나, 시작을 클릭하여 다시 시작하십시오."
    }
  }
}

// function clickbt(lo1, lo2) {
//   if(lo1==last_x && lo2==last_y){
//     if(list_number[lo1+lo2*b2]=="1"){
//       window.location.reload();
//     }
    
//     list[lo1+lo2*b2]=(list[lo1+lo2*b2]+1)%2;
//     list_number[lo1+lo2*b2]="0";

//     const element1 = document.getElementById(lo1+lo2*b2);
//     element1.innerText = "";

//     let last_number1=list_number.indexOf(number-2);
//     lo2=parseInt(last_number1/b2);
//     lo1=last_number1%b2;

//     let last_number2=list_number.indexOf(number-3);
//     last_y=parseInt(last_number2/b2);
//     last_x=last_number2%b2;
//     number--;
//     number--;

//     const element = document.getElementById(lo1+lo2*b2);
//     element.innerText = number;
//     list_number[lo1+lo2*b2] = number;
//     number++;
//     bg(lo1,lo2);
//     last_x=lo1;
//     last_y=lo2;
    
//   }

//   if((last_x+last_y==-2 || (((last_x-lo1)**2 + (last_y-lo2)**2)==5))&& list[lo1+lo2*b2]==0 ){
//     list[lo1+lo2*b2]=(list[lo1+lo2*b2]+1)%2;
//     const element = document.getElementById(lo1+lo2*b2);
//     element.innerText = number;
//     list_number[lo1+lo2*b2] = number;
//     number++;
//     bg(lo1,lo2);
//     last_x=lo1;
//     last_y=lo2;
//   }
//   success();
// }

// function main(a1, a2) {
//   list=[];
//   list_number=[];
//   count=1;
//   number = 1;
//   last_x = -1;
//   last_y = -1;
//   let tag = "<div class='container'>";
//     b1 = parseInt(a1);
//     b2 = parseInt(a2);
//     var size = getDisplayInfo();
//     s = Math.min((size.width-15*b2)/b2,60);
//     for (j = 0; j < b1; j++) {30  
//       tag += "<div class='row'>";
//       for (i = 0; i < b2; i++) {
//         list.push(0);
//         tag += "<div class='column' id='"+(i+j*b2)+"' style=width:"+s+"px;height:"+s+"px; onclick='clickbt("+i+","+j+")'></div>";
//       }
//       tag += "</div>";
//     }
//     tag += "</div>";
//     area.innerHTML = tag;
//     console.log=tag;
//     document.getElementById("result").textContent = "네모칸을 선택하여 게임을 시작하십시오.";
//   }

// jn_name=['목포', '여수', '순천', '나주', '광양'];
// jn_left=['152','513','404','242','511'];
// jn_top=['271','277','207','206','192'];

jn_name=['목포', '여수', '순천', '나주', '광양', '담양', '곡성', '구례', '고흥', '보성', '화순', '장흥', '강진', '해남', '영암', '무안', '함평', '영광', '장성', '완도', '진도', '신안'];
jn_left=['58','329','270','140','325','190','240','300','250','225','200','180','140','105','120','85','100','80','140','140','40','0'];
jn_top=['200','209','160','155','150','85','100','100','260','200','150','220','250','280','205','165','120','75','75','320','290','180'];


function clickbt(j) {
    const element = document.getElementById(j);
    element.innerText = jn_name[j]+number;
    list_number[j] = number;
    number++;
    bg(j);
  success();
}


  function main() {
    list=[];
    list_number=[];
    count=1;
    number = 1;
    let tag = "<div class='container'>";
    // 5를 22로 수정할 것
      for (i = 0; i < 22; i++) {
        list.push(0);
        tag += "<div class='column' id='"+i+"' style=width:30px;height:30px;left:"+jn_left[i]+"px;top:"+jn_top[i]+"px; onclick='clickbt("+i+")'></div>";

      }
      tag += "</div>";
      area.innerHTML = tag;
      console.log=tag;
      // document.getElementById("result").textContent = "네모칸을 선택하여 게임을 시작하십시오.";
      
      for (i = 0; i < 22; i++) {
        document.getElementById(i).textContent = jn_name[i];
      }
    }


onload = () => {
  main()
}