
const form = document.getElementById('logf')
if (form != null){
    form.addEventListener('submit' , validate);
}

function Redirect() {
    window.location = "admin.html";
}
function validate(event){
	const user = document.getElementById('user');
	const pass = document.getElementById('pass');
	if(user.value == 'admin'){
        if(pass.value == '13890412'){
            document.write("You will be redirected to main page in 10 sec.");
            setTimeout('Redirect()', 10000);
        }
    }

}
const formT = document.getElementById('textf')
const titlet = document.getElementById('title-text');
const text = document.getElementById('Text');
formT.addEventListener('submit' , sendt);
function sendt(event){
    var article = document.createElement("article"),
        title   = document.createElement("div"),
        titleText = document.createTextNode(title),
        content = document.createElement("section")
        // contentText = document.createTextNode(result[i].content);

    title.appendChild(titlet);
    // content.appendChild(contentText);
    article.appendChild(title);
    article.appendChild(text);
}
