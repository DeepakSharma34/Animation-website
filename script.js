var tl = gsap.timeline({scrollTrigger:{
    trigger : ".two",
    start : "0% 95%",
    end : "70% 50%",
    scrub : true,
}})

tl.to("#fanta", {
    top : "120%",
    left : "0%"
},'orange')

tl.to("#orange-cut", {
    top : "160%",
    left : "23%"
},'orange')

tl.to("#orange", {
    width : "13%",
    top : "164%",
    right : "10%"
},'orange')

tl.to("#leaf", {
    top : "103%",
    left : "40%",
    rotate : "360deg"
},'orange')

tl.to("#leaf2", {
    top : "103%",
    rotate : "130deg",
    left : "0%"
},'orange')

var tl2 = gsap.timeline({scrollTrigger:{
    trigger : ".three",
    start : "0% 95%",
    end : "20% 50%",
    scrub : true,
}})

tl2.from(".lemon1", {
    left : "-50%",
    top : "50%",
    rotate : "-90deg"
},"ca")

tl2.from("#cocacola", {
    left : "-50%",
    top : "50%",
    rotate : "-90deg"
},"ca")

tl2.from(".lemon2", {
    left : "50%",
    top : "45%",
    rotate : "90deg"
}, "ca")

tl2.from("#pepsi", {
    left : "50%",
    top : "50%",
    rotate : "90deg"
},"ca")

tl2.to("#orange-cut", {
    left : "41%",
    top : "198%",
    width : "18%"
}, "ca")

tl2.to("#fanta", {
    left : "32%",
    top : "210%",
    width : "35%"
},"ca")