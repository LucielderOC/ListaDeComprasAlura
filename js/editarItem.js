export const editarItem = (elemento) => {
    let novoItem = prompt("Digite o novo nome do item:");
    if (novoItem !== null && novoItem.trim() !== "") {
        const itemTextoAtualizado = elemento.querySelector("#item-titulo");
        const dataItem = elemento.querySelector("#id-data-item");
        itemTextoAtualizado.textContent = novoItem;
        dataItem.textContent = `${new Date().toLocaleDateString("pt-BR", { weekday: "long" })} (${new Date().toLocaleDateString("pt-BR")}) às ${new Date().toLocaleTimeString("pt-BR",{hour:"numeric",minute:"numeric"})} `;

        const estavaComprado = elemento.querySelector(".input-checkbox").checked;

        if (estavaComprado) {
            elemento.querySelector(".input-checkbox").checked = true;
            elemento.querySelector(".checkbox-customizado").classList.add("checked");
            itemTextoAtualizado.style.textDecoration = "line-through"
        }
    }
}
