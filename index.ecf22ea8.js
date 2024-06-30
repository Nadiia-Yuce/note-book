function t(t){const e={};return new FormData(t.currentTarget).forEach(((t,n)=>{e[n]=t})),e}({form:document.querySelector("#task-form")}).form.addEventListener("submit",(function(e){e.preventDefault();const n=t(e);console.log(n)}));
//# sourceMappingURL=index.ecf22ea8.js.map
