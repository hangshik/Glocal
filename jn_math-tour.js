function bg(bb) {
  success_ck=false;
  for(i=0;i<22;i++){
    if(mathtour_list[i]==1)
      document.getElementById(i).style.backgroundColor="#ffc19e";
  }

  for(i=0;i<22;i++){
  if (list[i]==1){
    document.getElementById(i).style.backgroundColor="skyblue";
  } else {
    if((path[parseInt(bb)].includes(i))){
      document.getElementById(i).style.backgroundColor="green";
      success_ck=true;
    } else {
      if(mathtour_list[i]==1)
        document.getElementById(i).style.backgroundColor="#d1b2ff";
        else
        document.getElementById(i).style.backgroundColor="#dddddd";
      
    }
  }
  document.getElementById(bb).style.backgroundColor="red";
  }
}


let count = 1;

function success(){
  let re = document.getElementById("result");
  math_sum=0;
  for(i=0;i<22;i++)
    math_sum=math_sum+list[i]*mathtour_list[i]
 
  if(math_sum==10){
    re.textContent ="축하합니다. 성공하였습니다."
  } else {
    if(success_ck){
      re.textContent ="게임중입니다."
    } else {
      re.textContent ="더 이상 갈 곳이 없습니다."
    }
  }
}

jn_name=['목포', '여수', '순천', '나주', '광양', '담양', '곡성', '구례', '고흥', '보성', '화순', '장흥', '강진', '해남', '영암', '무안', '함평', '영광', '장성', '완도', '진도', '신안'];
jn_left=['70','320','267','140','325','190','245','300','250','225','200','180','140','100','120','85','100','80','140','130','40','5'];
jn_top=['250','249','200','195','190','125','140','140','300','245','200','265','290','320','245','205','160','115','115','360','335','220'];

path=[[14,15,21],[2,4,8],[1,4,6,7,9,10],[10,14,15,16],[1,2],[6,10,18],[2,5,7,10],[2,6],[1,9],[2,8,10,11],[2,3,5,6,9,11],[9,10,12,14],[11,13,14,19],[12,14,19,20],[0,3,11,12,13,15],[0,3,14,16,21],[3,15,17,18],[16,18],[5,16,17],[12,13],[13],[0,15]];

mathtour_list=[1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0]


function clickbt(j) {
  if(Math.max(...list)==0 || (list[j]==0 && path[parseInt(last_j)].includes(j))){
    const element = document.getElementById(j);
    element.innerText = jn_name[j]+"\n"+number;
    list_number[j] = number;
    number++;
    list[j]=1;
    bg(j);
  } else {
    if(list_number[j]==number-1){
      const element = document.getElementById(j);
      element.innerText = jn_name[j];
      list_number[j]=0;
      number--;
      list[j]=0;
      bg(list_number.indexOf(number-1));
    }
  }

  if(Math.max(...list)==0){
    main()
  }
  last_j=list_number.indexOf(Math.max(...list_number));

  success();
  
}

  function main() {
    list=[];
    list_number=[];
    count=1;
    number = 1;
    document.imgp.src="jn_img.png";
    document.imgp.width="380";

    let tag = "<div class='container'>";
      for (i = 0; i < 22; i++) {
        list.push(0);
        list_number.push(0);
        tag += "<div class='column' id='"+i+"' style=width:40px;height:40px;left:"+(jn_left[i]-180)+"px;top:"+(jn_top[i]-75)+"px; onclick='clickbt("+i+")'></div>";      }
      
      tag += "</div>";
      area.innerHTML = tag;
      console.log=tag;
      document.getElementById("result").textContent = "출발지를 선택하십시오.";
      
      for (i = 0; i < 22; i++) {
        document.getElementById(i).textContent = jn_name[i];
        if(mathtour_list[i]==1)
          document.getElementById(i).style.backgroundColor="#d1b2ff";
      }
    }

onload = () => {
  main()
}