// const { text } = require("express")

const submit_form = document.querySelector(".submit_form")
const inputcriteria = document.querySelector("#inputcriteria")
const inputalternatives = document.querySelector("#inputalternatives")
const btn_add = document.querySelector('.cr-row')
const submit__btn = document.querySelector(".submit-btn")
const inputval = inputcriteria.value;

submit_form.addEventListener("submit" , function(e)
{
    e.preventDefault();
    // console.log("Submitted");
    submit__btn.disabled = true;
    const criteria_text = document.createElement('h3');
    criteria_text.setAttribute("class" , "name_top_1")
    criteria_text.innerHTML = "Enter the Attributes of Criteria";
    btn_add.appendChild(criteria_text);

    const val = inputcriteria.value;
    for (let num = 0; num < val; num++) {
        const el = document.createElement('div');
        el.setAttribute('class' , 'col-md-2'); 
        const inp = document.createElement('input');
        inp.setAttribute('type', 'text');  
        inp.setAttribute('class', 'form-control');  
        inp.setAttribute('id', `cr${num+1}`);  
        inp.setAttribute('value', `cr${num+1}`);  
        el.appendChild(inp);
        btn_add.appendChild(el);
    }
     
  
    const attribute_submit= document.createElement('div');
    attribute_submit.setAttribute('class', 'form submit-btn');
    const attribute_btn = document.createElement('button');
    attribute_btn.setAttribute('class', ' btn btn-success');
    attribute_btn.setAttribute('id', "crit-btn");
    attribute_btn.setAttribute('type', 'submit');
    attribute_btn.innerHTML = "Let's Go";
    attribute_submit.appendChild(attribute_btn);
    btn_add.appendChild(attribute_submit);

});
const final_criteria = document.querySelector(".final_criteria");

final_criteria.addEventListener("submit" , function(e)
{
    e.preventDefault();
    const attribute_submit1 = document.getElementById("crit-btn");
    attribute_submit1.disabled = true;

   
    // creating table for input data
    const table_format = document.querySelector('.tbl-fixed');
    
    const table_scroll = document.createElement('table');
    table_scroll.setAttribute("class" , "table table-hover");
    
    var cells = inputcriteria.value ;
    const thead = document.createElement('thead');
    thead.setAttribute("class" , "table-dark");
    const tr = document.createElement('tr');
    const corner = document.createElement('th');
    corner.setAttribute('class', 'table-dark');
    corner.setAttribute('scope','col');
    corner.innerHTML = "Contractor Selection";
    tr.appendChild(corner);
    for (let num = 0; num <= cells; num++) {
        if(num==cells)
        {
         const corner1 = document.createElement('th');  
         corner1.setAttribute('class', 'table-head');
         corner1.setAttribute('scope','col');
         corner1.innerHTML="Eigen Value";
         tr.appendChild(corner1);
         continue; 
        }
        const attri = document.getElementById(`cr${num+1}`);
        // console.log(attri);
        const corner1 = document.createElement('th');  
        corner1.setAttribute('class', 'table-head');
        corner1.setAttribute('scope','col');
        corner1.innerHTML=attri.value;
        
        tr.appendChild(corner1);
    }  
    //   const eigen = document.createElement('tr');
    // corner.innerHTML="eigen";
    // eigen.appendChild(corner);
    thead.append(tr);
    
    // thead.appendChild(eigen);
    table_scroll.appendChild(thead);
    table_format.appendChild(table_scroll);
    const name_top = document.createElement('h2')
    name_top.setAttribute("class", "name_top_1")
    name_top.innerText = "Pair wise comparison for Criteria";
    const tbl_container = document.querySelector('.tbl-container');
    tbl_container.appendChild(name_top)
    tbl_container.appendChild(table_format);

    // corner.setAttribute('class', 'table-dark');
    // corner.setAttribute('scope', 'col');
    // corner.innerHTML="eigen";
    // eige
    
  // criteria row ends
  // data fields start
    const table_body = document.createElement('tbody');
    for (let num = 1; num <= cells; num++) {
        
        const tr1 = document.createElement('tr');
        const th1 = document.createElement('th');
        th1.setAttribute('class','table-dark  ');
        th1.setAttribute('scope', 'row');
        th1.innerHTML = document.getElementById(`cr${num}`).value;
        tr1.appendChild(th1);
        for (let num1 = 0; num1 <= cells; num1++) {
            if(num1==cells)
            {
                const td = document.createElement('td');
                // td.setAttribute('class',' ')
                const input=document.createElement('input');
                input.setAttribute('class', 'data-input input-box');
                // input.setAttribute('size','4');
                input.setAttribute('disabled','disabled');
                input.setAttribute('value','Submit to find out');
                input.setAttribute('id',`${num}-${num1+1}`);
                td.appendChild(input);
                tr1.appendChild(td);
                continue;
            }
            const td = document.createElement('td');
            const input=document.createElement('input');
            input.setAttribute('class', 'data-input input-box');
            if(num1+1 <= num)
            {
                input.setAttribute('type','number');
                input.setAttribute('step','any');
                if(num==num1+1)
                {                
                  input.setAttribute('value','1');
                  input.setAttribute('step','any');
                }
                // input.setAttribute('size','4');

                input.setAttribute('disabled','disabled');

            }
            else
            {
                input.setAttribute('name',`${num}-${num1+1}`) //for verificaton of empty fields
            }
            input.setAttribute('id',`${num}-${num1+1}`);
            td.appendChild(input);
            tr1.appendChild(td);
        }
        table_body.appendChild(tr1);

    }
    
    // table button large
    table_scroll.appendChild(table_body);
    const table_btn_holder= document.createElement('div');
    table_btn_holder.setAttribute('class', 'd-grid gap-2')
    const table_button = document.createElement('button');
    table_button.setAttribute('class', 'btn btn-success');
    table_button.setAttribute('id', "table_button");
    table_button.setAttribute('type', 'submit');
    // table_button.setAttribute('onclick', '');
    // table_button.onclick=this_function;
    table_button.innerHTML = "Find the Result";
    table_btn_holder.appendChild(table_button);
 
    tbl_container.appendChild(table_btn_holder);
    // table button large ends
    // data field ends

})

// document.getElementById('table_button').onclick=this_function;
// function this_function()
// {
//     console.log("your college sucks")

// }
// table should not be empty
let sumar = new Array(inputval+1); for (let i=0; i<=inputval; ++i) sumar[i] = 0;

function validateForm() {
    for (let num = 1; num <= inputcriteria.value; num++) {
        for (let num1 = 1; num1 <= inputcriteria.value; num1++) {
            if(num1 <= num){continue;}
            var x = document.forms["data-form"][`${num}-${num1}`].value;
            if(x=="")
            {
                alert("All criterias should be filled");
                return false;
            }
            else
            {
              const changed1 =document.getElementById(`${num}-${num1}`).value;
              var temp= 1/changed1;
              temp=temp.toFixed(3);
            //   console.log(`${num1}-${num}`);
              document.getElementById(`${num1}-${num}`).value=temp; 
                            
            }
        }   
    }
    for (let num = 1; num <= inputcriteria.value; num++) {
        for (let num1 = 1; num1 <= inputcriteria.value; num1++) {
                const temp = document.getElementById(`${num}-${num1}`).value-'0';
                // console.log(typeof(temp));
                sumar[num1]+=temp;
        }
    }
    var eigenarray = new Array(inputval+1);
    for (let i = 0; i <= inputval+1; i++) {
        eigenarray[i]=new Array(inputval+1);
    }
    var eigenvalue = new Array(inputval+1); for(let i=0; i<=inputval; ++i) eigenvalue[i] = 0;
    for (let num = 1; num <= inputcriteria.value; num++) {
        for (let num1 = 1; num1 <= inputcriteria.value; num1++) {
            var temp= document.getElementById(`${num}-${num1}`).value;
            const temp1=sumar[num1];
            var nos = temp/(temp1);
            nos = nos.toFixed(3);
            // console.log(num)
            // console.log(num1)
            // console.log(nos)
              eigenarray[num][num1] = nos ;
              eigenvalue[num]+=nos-'0';
            //   console.log(eigenvalue[num]);
        }
    }
   for (let index = 1; index <= inputval; index++) {  
    eigenvalue[index] = eigenvalue[index]/inputval;
    eigenvalue[index] = eigenvalue[index].toFixed(3)-'0';
    // console.log(eigenvalue[index]);
    var temp= document.getElementById(`${index}-${(inputval-'0')+1}`);
    temp.value = eigenvalue[index];
    // console.log(`${(inputval-'0')+1}`);
    const eigeninfo = document.createElement('h2');
    eigeninfo.innerHTML = "Scroll to the last column for Eigen values";
    const tbl_container = document.querySelector('.tbl-container');
    // if((inputval-'0')>=6)
    // {if(index == inputval){
    // tbl_container.appendChild(eigeninfo);
    // }}     
   }
 // this the body of normalised matrix of the table
 const table_format = document.querySelector('.tbl-norm');
    
 const table_scroll = document.createElement('table');
 table_scroll.setAttribute("class" , "table table-hover");
 // criteria row   
 var cells = inputcriteria.value ;
 const thead = document.createElement('thead');
 thead.setAttribute("class" , "table-dark");
 const tr = document.createElement('tr');
 const corner = document.createElement('th');
 corner.setAttribute('class', 'table-dark');
 corner.setAttribute('scope','col');
 corner.innerHTML = "Contractor Selection";
 tr.appendChild(corner);
 for (let num = 0; num <= cells; num++) {
     if(num==cells)
     {
    
      continue; 
     }
     const attri = document.getElementById(`cr${num+1}`);
     // console.log(attri);
     const corner1 = document.createElement('th');  
     corner1.setAttribute('class', 'table-head');
     corner1.setAttribute('scope','col');
     corner1.innerHTML=attri.value;
     
     tr.appendChild(corner1);
 }  
 //   const eigen = document.createElement('tr');
 // corner.innerHTML="eigen";
 // eigen.appendChild(corner);
 thead.append(tr);
 const name_top = document.createElement('h2')
 name_top.setAttribute("class", "name_top_1")
 name_top.innerText = ("Normalised or Syntesized matrix")
//  tbl_container.appendChild(name_top)
 // thead.appendChild(eigen);
 table_scroll.appendChild(thead);
 table_format.appendChild(table_scroll);
 const tbl_container = document.querySelector('.tbl-cont-norm');
 tbl_container.appendChild(name_top);
 tbl_container.appendChild(table_format);

 //These are the values of input matrix
 const table_body = document.createElement('tbody');
 for (let num = 1; num <= cells; num++) {
      
     const tr1 = document.createElement('tr');
     const th1 = document.createElement('th');
     th1.setAttribute('class','table-dark  ');
     th1.setAttribute('scope', 'row');
     th1.innerHTML = document.getElementById(`cr${num}`).value;
     tr1.appendChild(th1);
     for (let num1 = 0; num1 < cells; num1++) {
         console.log(num) 
         console.log(num1)
         const td = document.createElement('td');
         const input=document.createElement('input');
         input.setAttribute('class', 'data-input input-box');
        //  if(num1 != 0)
        //  {
             input.setAttribute('type','number');
             input.setAttribute('step','any');
            //  if(num==num1+1)
            //  {                
               input.setAttribute('value',eigenarray[num][num1+1]);
               input.setAttribute('step','any');
            //  }
             // input.setAttribute('size','4');

             input.setAttribute('disabled','disabled');

        //  }
        //  elseF
        //  {F
        //      input.setAttribute('name',`${numF}-${num1+1}`) //for verificaton of empty fieldsF
        //  }F
         input.setAttribute('id',`${num}-${num1+1}`);
         td.appendChild(input);
         tr1.appendChild(td);
     }
     table_body.appendChild(tr1);

 }
 // table button large
 table_scroll.appendChild(table_body);
 const table_btn_holder= document.createElement('div');
 table_btn_holder.setAttribute('class', 'd-grid gap-2')
 tbl_container.appendChild(table_btn_holder);

  }
// console.log(sumar);
  // table data parsing
  const tbl_container = document.querySelector('.tbl-container');

  tbl_container.addEventListener("submit",function(event)
  {
     event.preventDefault();
  })

// for (let num = 0; num < array.length; num++) {
//     const element = array[num];
    
// }
// console.log("DESIMETOR")
// console.log(inputval);