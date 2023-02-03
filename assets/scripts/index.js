const submitButton = document.querySelector("form button");
const socialLoginButton = document.querySelectorAll("section button");
const errorMessages = document.querySelectorAll("span");


function verifyInputs(valueA, valueB) {
    let hasError = false;
    if (valueA.length === 0) {
        errorMessages[0].innerText = "Você deve preencher este campo!";
        hasError = true;
    }
    if (valueB.length === 0) {
        errorMessages[1].innerText = "Você deve preencher este campo!";
        hasError = true;
    }
    return hasError;
};

socialLoginButton.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault()
        const body = document.querySelector("body");

        //Criando os elementos do modal.
        const div = document.createElement("div");
        const h1 = document.createElement("h1");
        const button = document.createElement("button");
        const blackDiv = document.createElement("div")

        //Atribuindo valores para elementos do modal
        blackDiv.id = "black-div"
        div.id = "modal";
        h1.innerText = "Autenticado com sucesso!";
        button.innerText = "Fechar";

        //Atribuindo eventos no botão para fechar o modal
        button.addEventListener("click", (e) => {
            document.getElementById("black-div").remove();
        });

        //Adicionando elemento do modal.
        div.append(h1)
        div.append(button)
        blackDiv.append(div)
        body.append(blackDiv)
    })
});

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const inputFields = document.querySelectorAll("input");
    const returned = verifyInputs(inputFields[0], inputFields[1])
    if (!returned) {
        const body = document.querySelector("body");

        //Criando os elementos do modal.
        const div = document.createElement("div");
        const h1 = document.createElement("h1");
        const button = document.createElement("button");
        const blackDiv = document.createElement("div")

        //Atribuindo valores para elementos do modal
        blackDiv.id = "black-div"
        div.id = "modal";
        h1.innerText = "Autenticado com sucesso!";
        button.innerText = "Fechar";

        //Atribuindo eventos no botão para fechar o modal
        button.addEventListener("click", (e) => {
            document.getElementById("black-div").remove();
        });

        //Adicionando elemento do modal.
        div.append(h1)
        div.append(button)
        blackDiv.append(div)
        body.append(blackDiv)
    }
});