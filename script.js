// reveal animation
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
      entry.target.style.transition = "all .8s ease";
    }
  });
},{threshold:0.2});

reveals.forEach(el=>observer.observe(el));

// counters
const counters = document.querySelectorAll("[data-count]");
let started = false;

window.addEventListener("scroll",()=>{
  if(started) return;
  counters.forEach(counter=>{
    const rect = counter.getBoundingClientRect().top;
    if(rect < window.innerHeight){
      started = true;
      let target = +counter.dataset.count;
      let count = 0;
      const inc = Math.ceil(target / 60);

      const update = ()=>{
        count += inc;
        if(count < target){
          counter.innerText = count;
          requestAnimationFrame(update);
        }else{
          counter.innerText = target;
        }
      };
      update();
    }
  });
});
