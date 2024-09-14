function checkValidation(){
    if(confirm("제출하시겠습니까?")){
        if(checkEmail() ){
		    return true;
        }else return false;
	}else return false;
}
function checkEmail(){
    var emailPatter = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    var email = document.getElementById("email").value;
    if(email == "") return true;
    if(email.match(emailPatter)){
        return true;
    }else{
        alert("이메일 형식이 올바르지 않습니다")
        return false;
    }
}
document.addEventListener("DOMContentLoaded", onload);
function onload(){
    document.getElementById("fromdate").min=new Date().toLocaleDateString('fr-ca');
    document.getElementById("fromdate").value=new Date().toLocaleDateString('fr-ca');
    document.getElementById("todate").min=new Date().toLocaleDateString('fr-ca');
    document.getElementById("todate").value=new Date().toLocaleDateString('fr-ca');
    document.getElementById("city").disabled = true;
}
document.getElementById("country").addEventListener("change", function(){
    const selcount = document.getElementById("country");
    const selcity = document.getElementById("city");
    const cities = {
        korea:['Seoul', 'Busan', 'Ulsan', 'Daegu', 'Gwangju', 'Iksan'],
        china:['Beijing', 'Taiyuan', 'Datong', 'Zhundai', 'Nanjing'],
        japan:['Tokyo', 'Nagoya', 'Osaka', 'Kyoto', 'Hiroshima']
    };
    const nowcount = selcount.value;
    selcity.innerHTML = '<option value = "">Choose...</option>';
    selcity.disabled = true;
    if(nowcount){
        cities[nowcount].forEach(c=>{
            const opt = document.createElement("option");
            opt.value = c;
            opt.textContent = c;
            selcity.appendChild(opt);
        })
        selcity.disabled = false;
    }
})
