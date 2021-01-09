document.getElementById("addRow").addEventListener("click", AddRow);
document.getElementById("subRow").addEventListener("click", SubRow);
document.getElementById("addColumns").addEventListener("click", AddColumns);
document.getElementById("subColumns").addEventListener("click", SubColumns);


let a;

let row = document.getElementById("usersTable").firstElementChild;
let col = row.firstElementChild;
function AddRow()
{
    
let rowL = document.getElementById("usersTable").getElementsByTagName("tr").length;
let colL = document.getElementById("usersTable").getElementsByTagName("td").length/rowL;
    
let row = document.getElementById("usersTable").firstElementChild;
let col = row.firstElementChild;


    let tr = document.createElement("tr");
    tr.setAttribute("id", "usersTable");
   
    
    for(let i = 0; i < colL; i++)
    {
        let td = document.createElement("td")
        td.setAttribute("id", "usersTable");
        td.setAttribute("class", "t");
        tr.append(td);
    
    }
    row.append(tr);
    a = document.getElementsByClassName("t");
}

function SubRow()
{
    let rowL = document.getElementById("usersTable").getElementsByTagName("tr").length;
    if(rowL > 1){
    row.firstElementChild.remove();
    a = document.getElementsByClassName("t");
}
}

function AddColumns()
{
    
let rowL = document.getElementById("usersTable").getElementsByTagName("tr").length;
let colL = document.getElementById("usersTable").getElementsByTagName("td").length/rowL;

let row = document.getElementById("usersTable").firstElementChild;
let col = row.firstElementChild;
    for(let i = 0; i < rowL; i++)
    {
        let td = document.createElement("td")
        td.setAttribute("id", "usersTable");
        td.setAttribute("class", "t");
        if(i===0){
        col.append(td);
        }
        
        else{
            col = col.nextElementSibling;
           col.append(td)
           
        }
       
    }
    a = document.getElementsByClassName("t");
}

function SubColumns()
{
    let rowL = document.getElementById("usersTable").getElementsByTagName("tr").length;
    let colL = document.getElementById("usersTable").getElementsByTagName("td").length/rowL;
    
    let row = document.getElementById("usersTable").firstElementChild;
    let col = row.firstElementChild;
    
    if(colL > 1){
        for(let i = 0; i < rowL; i++)
        {
            if(i===0){
               col.firstElementChild.remove();
            }
            
            else{
                col = col.nextElementSibling;
               col.firstElementChild.remove();
               
            }
           
        }
        a = document.getElementsByClassName("t");
    }
}

let colour = "";
$('#colors  li a').on('click', function(){colour = $(this).text();});

a = document.getElementsByClassName("t");


document.getElementById("usersTable").addEventListener('click',function()
{
    for(let i = 0; i<a.length; i++){

    a[i].addEventListener("mousemove", function() {
        if (down) {
          a[i].style.background = colour
        }
      })
    
    
         a[i].addEventListener('click', function() {
            a[i].style.background = colour;
        })}
    }
    
);



let down = false;
$(document).mousedown(function () {
  down = true;
}).mouseup(function () {
  down = false;
});


document.getElementById("clear").addEventListener("click",function(){
    for(let i = 0; i < a.length; i++){
        a[i].style.background = "White";}
});

document.getElementById("fill").addEventListener("click", Fill)


function Fill()
{

    for(let i = 0; i < a.length; i++){
        if(a[i].style.background == "" || a[i].style.background == "white" )
        a[i].style.background = colour;
        
    }
 }







