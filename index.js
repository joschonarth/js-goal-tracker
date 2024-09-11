const { select, input } = require('@inquirer/prompts')

let metas = [ meta ]

const cadastrarMeta = async () => {
    const meta = await input({ message: "Digite sua meta: " })

    if(meta.length == 0) {
        console.log("A meta não pode ser vazia")
        return

    }

    metas.push(
        { value: meta, checked: false}
    )
}

const start = async () => {

    while(true) {

        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })

        switch(opcao) {
            case "cadastrar":
                await cadastrarMeta()
                console.log(metas)
                break
            case "listar":
                console.log("listar")
                break
            case "sair":
                console.log("sair")
                return
        }
    }

}