# Cypress Discovery
</h1>

Cypress é um framework Node.js, confiável e fácil de usar para testar aplicações modernas que rodam no navegador. Neste curso, você primeiro aprenderá sobre o que é o Cypress, seus recursos, como ele é diferente dos demais. Além disso, vai conhecer o básico da sua linguagem que é o Javascript.

## 🚀 Tecnologias

- [Node.js] - plataforma de desenvolvimento
- [Javascript] - linguagem de programação universal
- [Cypress] - framework de testes automatizados

## 👨🏻‍💻 Como executar o projeto

[Node.js](https://nodejs.org/) v16 ou superior para executar.

Abra o Prompt de comandos como Administrador e ative o Yarn por meio [do Corepack](https://nodejs.org/dist/latest/docs/api/corepack.html) executando o comando abaixo:

```sh
corepack enable
```

Execute os comandos abaixo para instalar das dependências do projeto e execução dos testes:

```sh
cd cypress-discovery
yarn install
npx cypress run
```

No Windows PowerShell, se aparecer `UnauthorizedAccess` ao rodar `npm` ou `npx`, o bloqueio é da policy do próprio PowerShell para os arquivos `npm.ps1` e `npx.ps1`. Use uma destas opções:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm run cy:open
npm run cy:run
```

Ou chame diretamente os wrappers do Windows:

```powershell
npm.cmd run cy:open
npx.cmd cypress run
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

[![Github](https://img.shields.io/badge/-Github-595D60?style=flat-square&logo=Github&logoColor=white&link=https://github.com/nayaraquino/)](https://github.com/papitorocks/)
[![Linkedin](https://img.shields.io/badge/-LinkedIn-595D60?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/nayaraquino//)](https://www.linkedin.com/in/papitoio/)
