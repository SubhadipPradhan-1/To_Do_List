let listelement=[];
// display();
function AddElement(){
    let addElement=document.querySelector('#input');
let adddate=document.querySelector('#Date');
    let additeam=addElement.value;
let dateadd=adddate.value;
    listelement.push({iteam:additeam,duedate:dateadd});
    addElement.value='';
    adddate.value='';
    display();
}
function display(){
    let displayElement=document.querySelector('.Adding_Element');
    displayElement.innerHTML='';
    for(let i=0;i<listelement.length;i++){
       // let ITEAM=listelement[i].iteam;
        //let DUEDATE=listelement[i].duedate;
        let {iteam,duedate}=listelement[i];
       displayElement.innerHTML +=`
       <span>${iteam}</span>
       <span>${duedate}</span>
       <button  id="delete_botton"onclick="listelement.splice(${i},1); display();">Delete</button>
       `
    }

    }
