
var submit_btn = document.querySelector(".submit_form")
const inputcriteria = document.querySelector("#inputcriteria")
const inputalternatives = document.querySelector("#inputalternatives")
const btn_add = document.querySelector('.cr-row')
// refresh.addEventListener()script.js
const done=false;
submit_btn.addEventListener("submit" , function(e)
{
    e.preventDefault();
    console.log("Submitted");
    const criteria_text = document.createElement('h3');
    criteria_text.innerHTML = "Enter the Attributes of Criteria";
    btn_add.appendChild(criteria_text);
    // const newLi = document.createElement("LI");
    // newLi.innerHTML = inputcriteria.value;
    const val = inputcriteria.value;
    for (let num = 0; num < val; num++) {
        const el = document.createElement('div');
        el.setAttribute('class' , 'col-md-2'); 
        const inp = document.createElement('input');
        inp.setAttribute('type', 'text');  
        inp.setAttribute('class', 'form-control');  
        inp.setAttribute('id', `cr${num+1}`);  
        inp.setAttribute('id', 'crpad');  
        inp.setAttribute('value', `cr${num+1}`);  
        el.appendChild(inp);
        btn_add.appendChild(el);
    }
     
  
    const attribute_submit= document.createElement('div');
    attribute_submit.setAttribute('class', 'form submit-btn');
    const attribute_btn = document.createElement('button');
    attribute_btn.setAttribute('class', 'btn btn-success');
    attribute_btn.setAttribute('type', 'submit');
    attribute_btn.innerHTML = "Let's Go";
    attribute_submit.appendChild(attribute_btn);
    btn_add.appendChild(attribute_submit);

});
const final_criteria = document.querySelector(".final_criteria");
final_criteria.addEventListener("submit" , function(e)
{
    console.log("THe criteria is done");
})



