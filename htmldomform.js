//form creation
var form=document.createElement('form');
form.setAttribute('name','myform');

// firstname
var fnam=document.createElement('label');
fnam.setAttribute('for','fname');
fnam.innerHTML="First name";
var in1=document.createElement('input');
in1.setAttribute('type','text');
in1.setAttribute('id','fname');
var br1=document.createElement('br')
var br2=document.createElement('br')

// lastname
var lnam=document.createElement('label');
lnam.setAttribute('for','lname');
lnam.innerHTML="Last name";
var in2=document.createElement('input');
in2.setAttribute('type','text');
in2.setAttribute('id','lname');
var br3=document.createElement('br')
var br4=document.createElement('br')

// address
var add=document.createElement('label');
add.setAttribute('for','add');
add.innerHTML="Address";
var in3=document.createElement('input');
in3.setAttribute('type','text');
in3.setAttribute('id','add');
var br5=document.createElement('br')
var br6=document.createElement('br')

// pincode
var pin=document.createElement('label');
pin.setAttribute('for','pin');
pin.innerHTML="Pincode";
var in4=document.createElement('input');
in4.setAttribute('type','number');
in4.setAttribute('id','pin');
var br7=document.createElement('br')
var br8=document.createElement('br')

// gender
var gen=document.createElement('label');
gen.setAttribute('for','gender');
gen.innerHTML="Gender";
var in5=document.createElement('input');
in5.setAttribute('type','text');
in5.setAttribute('id','gender');
var br9=document.createElement('br')
var br10=document.createElement('br')

//food
var p=document.createElement('p');
p.innerHTML="Food"



var in6=document.createElement('input');
in6.setAttribute('type','checkbox');
in6.setAttribute('id','food1');
in6.setAttribute('value','idly')
var l1=document.createElement('label');
l1.setAttribute('for','food1');
l1.innerHTML="idly";


var in61=document.createElement('input');
in61.setAttribute('type','checkbox');
in61.setAttribute('id','food2');
in61.setAttribute('value','dosa');
var l2=document.createElement('label');
l2.setAttribute('for','food2');
l2.innerHTML="dosa";



var in62=document.createElement('input');
in62.setAttribute('type','checkbox');
in62.setAttribute('id','food3');
in62.setAttribute('value','puri')
var l3=document.createElement('label');
l3.setAttribute('for','food3');
l3.innerHTML="puri";


var in63=document.createElement('input');
in63.setAttribute('type','checkbox');
in63.setAttribute('id','food4');
in63.setAttribute('value','pongal');
var l4=document.createElement('label');
l4.setAttribute('for','food4');
l4.innerHTML="pongal";


var in64=document.createElement('input');
in64.setAttribute('type','checkbox');
in64.setAttribute('id','food5');
in64.setAttribute('value','uttappam');
var l5=document.createElement('label');
l5.setAttribute('for','food5');
l5.innerHTML="uttappam";



var br11=document.createElement('br')
var br12=document.createElement('br')




//state
var state=document.createElement('label');
state.setAttribute('for','state');
state.innerHTML="State";
var in7=document.createElement('input');
in7.setAttribute('type','text');
in7.setAttribute('id','state');
var br13=document.createElement('br')
var br14=document.createElement('br')


//country
var con=document.createElement('label');
con.setAttribute('for','con');
con.innerHTML="Country";
var in8=document.createElement('input');
in8.setAttribute('type','text');
in8.setAttribute('id','con');
var br15=document.createElement('br')
var br16=document.createElement('br')

//submit
var  in9=document.createElement('input');
in9.setAttribute('type','submit');
in9.setAttribute('value','submit');

//table creation
var table=document.createElement('table');
table.setAttribute('class','table');
var thead=document.createElement('thead');
var tr=document.createElement('tr');
var th1=document.createElement('th');
th1.innerHTML="First name";
var th2=document.createElement('th');
th2.innerHTML="last name";
var th3=document.createElement('th');
th3.innerHTML="Address";
var th4=document.createElement('th');
th4.innerHTML="Pincode";
var th5=document.createElement('th');
th5.innerHTML="Gender";
 var th6=document.createElement('th');
 th6.innerHTML="Food";
var th7=document.createElement('th');
th7.innerHTML="state";
var th8=document.createElement('th');
th8.innerHTML="Country";

//adding submit event
form.addEventListener('submit', function zz(h){
    h.preventDefault();
    var q=in1.value;
    console.log(q)
    //passing the value entered in the textbox to new varriables
var w=in2.value;
var e=in3.value;
var r=in4.value;
var t=in5.value;
var y=in7.value;
var u=in8.value;
//creating empty array and passing the value of the checkbox which is checked
var arr=[];

if(in6.checked){
    arr.push(in6.value)
}

if(in61.checked){
    arr.push(in61.value)
}

if(in62.checked){
    arr.push(in62.value)
}
if(in63.checked){
    arr.push(in63.value)
}
if(in64.checked){
    arr.push(in64.value)
}

if(arr.length<2)

   
 {
     alert('mimimun two choice to be made')
     return false;
    }   
    



var tbody=document.createElement('tbody');
var tr1=document.createElement('tr');
var td1=document.createElement('td');
td1.innerHTML=q;
var td2=document.createElement('td');
td2.innerHTML=w;
var td3=document.createElement('td');
td3.innerHTML=e;
var td4=document.createElement('td');
td4.innerHTML=r;
var td5=document.createElement('td');
td5.innerHTML=t;
 var td6=document.createElement('td');
td6.innerHTML=arr;
var td7=document.createElement('td');
td7.innerHTML=y;
 var td8=document.createElement('td');
 td8.innerHTML=u;

tr.append(th1,th2,th3,th4,th5,th6,th7,th8)
thead.append(tr)

tr1.append(td1,td2,td3,td4,td5,td6,td7,td8)
tbody.append(tr1)

table.append(thead,tbody)
document.body.append(table)
document.myform.reset();


})

//form append
form.append(fnam,in1,br1,br2);
form.append(lnam,in2,br3,br4);
form.append(add,in3,br5,br6);
form.append(pin,in4,br7,br8);
form.append(gen,in5,br9,br10);
form.append(p);
form.append(in6,l1,in61,l2,in62,l3,in63,l4,in64,l5,br11,br12)
form.append(state,in7,br13,br14);
form.append(con,in8,br15,br16);
form.append(in9)
document.body.append(form);


