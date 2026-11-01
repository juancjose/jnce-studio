const io=new IntersectionObserver(es=>es.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('in'),(i%4)*90);io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));document.getElementById('y').textContent=new Date().getFullYear();
