// var div=document.createElement("div");
// div.innerHTML=`<input type="text" id="txt">
// <button type="button"onclick="foo()">Search</button>
// <div id="active"></div>`;
// div.style.textAlign="center";
// // document.body.append(div);


// async function foo()
// {
//     let cc=document.getElementById("txt").Value;
//     let res=await fetch('http://makeup-api.herokuapp.com/api/v1/products.json/${brand.name}')
//     let res1=await res.json();
//     console.log(res1);

//     let index=res1.length-1;
//     var result=res1[index].active;
//     console.log(result);
//     document.getElementById("active").innerText='${result}';
// }

var res=fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
res.then((data)=>data.json()).then((data1))=>
{
    console.log(data1);
}