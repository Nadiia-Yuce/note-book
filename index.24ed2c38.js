!function(){function n(n){var r={};return new FormData(n.currentTarget).forEach((function(n,t){r[t]=n})),r}({form:document.querySelector("#task-form")}).form.addEventListener("submit",(function(r){r.preventDefault();var t=n(r);console.log(t)}))}();
//# sourceMappingURL=index.24ed2c38.js.map
