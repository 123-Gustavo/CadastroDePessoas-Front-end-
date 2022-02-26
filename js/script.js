var nome1 = document.getElementById("txtNome")
var idade1 = document.getElementById("txtIdade")
var cpf1 = document.getElementById("txtCpf")
var data1 = document.getElementById("txtData")
var tel1 = document.getElementById("txtTel")
var email1 = document.getElementById("txtEmail")
v
function isEmpty(){
    if(nome1.value.length <= 0 || idade1.value.length <= 0 || cpf1.value.length <= 0 || data1.value.length <= 0 || tel1.value.length <= 0 || email1.value.length <= 0){
        return true
    }else{
        return false
    }
}

function cadastrar(){
    if(isEmpty()){
        alert("[ERRO] Por favor, para cadastrar uma pessoa, preencha todos os campos")
        nome1.value = ""
        idade1.value = ""
        cpf1.value = ""
        data1.value = ""
        tel1.value = ""
        email1.value = ""
    }else{
        var pessoa = {
            nome:nome1.value,
            idade:idade1.value,
            cpf:cpf1.value,
            data:data1.value,
            tel:tel1.value,
            email:email1.value
        }

        var nome2 = document.getElementById("lblNome")
        var idade2 = document.getElementById("lblIdade")
        var cpf2 = document.getElementById("lblCpf")
        var data2 = document.getElementById("lblData")
        var tel2 = document.getElementById("lblTel")
        var email2 = document.getElementById("lblEmail")

        nome2.value = pessoa.nome
        idade2.value = pessoa.idade
        cpf2.value = pessoa.cpf
        data2.value = pessoa.data
        tel2.value = pessoa.tel
        email2.value = pessoa.email


        var box = document.createElement("div")

        box.className = 'cadastro-box'

        var nome = document.createElement("h4")
        var resnome = document.createElement("span")
        resnome.innerText = pessoa.nome
        nome.innerText = "Nome: "
        nome.appendChild(resnome)
        box.appendChild(nome)

        var idade = document.createElement("h4")
        var residade = document.createElement("span")
        residade.innerText = pessoa.idade
        idade.innerText = "Idade: "
        idade.appendChild(residade)
        box.appendChild(idade)

        var cpf = document.createElement("h4")
        var rescpf = document.createElement("span")
        rescpf.innerText = pessoa.cpf
        cpf.innerText = "Cpf: "
        cpf.appendChild(rescpf)
        box.appendChild(cpf)

        var data = document.createElement("h4")
        var resdata = document.createElement("span")
        resdata.innerText = pessoa.data
        data.innerText = "Data: "
        data.appendChild(resdata)
        box.appendChild(data)

        var telefone = document.createElement("h4")
        var restelefone = document.createElement("span")
        restelefone.innerText = pessoa.tel
        telefone.innerText = "Telefone: "
        telefone.appendChild(restelefone)
        box.appendChild(telefone)

        var email = document.createElement("h4")
        var resemail = document.createElement("span")
        resemail.innerText = pessoa.email
        email.innerText = "Email: "
        email.appendChild(resemail)
        box.appendChild(email)

        var cadastros = document.getElementById("cadastros")

        cadastros.appendChild(box)
        nome1.value = ""
        idade1.value = ""
        cpf1.value = ""
        data1.value = ""
        tel1.value = ""
        email1.value = ""
    }
}