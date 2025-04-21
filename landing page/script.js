

let steps = document.querySelectorAll('#steps');

function getid(id){
  return document.getElementById(id);
}

// observe element intersection to screen
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{

      entry.target.classList.toggle("animate",entry.isIntersecting)
      if(entry.isIntersecting){
        observer.unobserve(entry.target)
      }
      
    })


},
{
    threshold:1,
})

steps.forEach((step)=>{
    observer.observe(step)
})

let showcasing =getid("showcasing");
let networking =getid("networking");
observer.observe(showcasing);
observer.observe(networking);

let comment_count = 0;
let comments = document.querySelectorAll("#comment");

getid('next').addEventListener("click",()=>{

 
  if(comment_count<comments.length-1){
    if (comment_count==0) {

      comments[comment_count].style.height = "200px";
    }
    
    getid("comments").style.transform += "translateX(-357px)";
    comments[comment_count+1].classList.add("c-comment")
    comments[comment_count].classList.remove("c-comment")


    comment_count++;
  }
  else{
    getid("comments").style.transform = "translateX(0)";
    comments[0].classList.add("c-comment")
    comments[comments.length-1].classList.remove("c-comment")

  comment_count =0
  
  }
});

getid('prev').addEventListener("click",()=>{
 
  
  if(comment_count>0){
    
    getid("comments").style.transform += "translateX(357px)";
    comments[comment_count-1].classList.add("c-comment")
    comments[comment_count].classList.remove("c-comment")

    comment_count--;
  }
});

let question_plus = document.querySelectorAll('#q-ans')
let ans_plus = document.querySelectorAll('#ans')


question_plus.forEach((plus)=>{
  plus.addEventListener("click",(e)=>{
    e.target.classList.toggle('rotate-plus')

  })
})
