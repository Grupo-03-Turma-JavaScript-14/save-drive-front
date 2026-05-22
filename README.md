<div align="center">
  
# 🚗 SaveDrive - Front-end
</h1>

Plataforma desenvolvida para simular e gerenciar seguros automotivos, oferecendo uma experiência moderna, ágil e focada na proteção do motorista.

---

## 💙 Sobre o Projeto

O **SaveDrive** é uma aplicação de seguro automotivo que atua de forma preventiva e corretiva, oferecendo suporte completo antes, durante e após imprevistos. Diferente das seguradoras tradicionais, que atuam apenas após sinistros, o SaveDrive foca em prevenção, reduzindo riscos e custos para o cliente através de manutenção e suporte contínuo.

Este repositório contém todo o desenvolvimento do Front-end da aplicação, construído com foco em:

- 🎨 Interface moderna e acessível
- 📱 Responsividade
- ♻️ Componentização reutilizável
- 🚀 Performance e escalabilidade
- 🧠 Navegação intuitiva
- ✨ Experiência visual 

A aplicação apresenta informações sobre os planos, fluxo de navegação institucional e uma regra de negócio especial para cálculo de vantagens.

---
## 🏠 Home

<p align="center">
  <img 
    src="https://private-user-images.githubusercontent.com/203920656/596313887-ef6e7fe1-2f4f-4f8e-ace1-7b40b33e6de4.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkzOTIxMzEsIm5iZiI6MTc3OTM5MTgzMSwicGF0aCI6Ii8yMDM5MjA2NTYvNTk2MzEzODg3LWVmNmU3ZmUxLTJmNGYtNGY4ZS1hY2UxLTdiNDBiMzNlNmRlNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTIxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUyMVQxOTMwMzFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03M2M3MTM0ODBiOTBhNjc0N2IxNWRmMWVmMDJmZDNjZWZlN2RmOWU0YzQyNDg0ZjY2YTQwZjY2OTk4NzMzNWY1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.GEYuyrzhtCSKaXpfHIm5HLt-bJIwsizlofVpRhuEqlc"
    alt="Preview Home SaveDrive"
    width="100%"
  />
</p>
---

# 🚀 Funcionalidades da Interface

- ✅ Navegação entre páginas com rotas fluidas e intuitivas
- ✅ Sistema automatizado de cálculo de desconto
- ✅ Aplicação de **20% de desconto** para veículos com mais de 10 anos
- ✅ Layout totalmente responsivo
- ✅ Componentização reutilizável
- ✅ Integração completa com API REST
- ✅ Estrutura escalável e organizada

---

# 🧠 Tecnologias Utilizadas

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

</div>

---

# 📁 Estrutura do Projeto

```text
src
 ┣ 📂 assets
 ┃ ┣ 📂 aboutus
 ┃ ┣ 📜 hero.png
 ┃ ┣ 📜 react.svg
 ┃ ┣ 📜 Savedrive-logo.png
 ┃ ┗ 📜 vite.svg
 ┃
 ┣ 📂 components
 ┃ ┣ 📂 cardcategoria
 ┃ ┃ ┣ 📜 CardCategoria.css
 ┃ ┃ ┗ 📜 CardCategoria.tsx
 ┃ ┣ 📂 cardusuario
 ┃ ┃ ┣ 📜 CardUsuario.css
 ┃ ┃ ┗ 📜 CardUsuario.tsx
 ┃ ┣ 📂 categoria
 ┃ ┃ ┗ 📜 CategoriaModal.tsx
 ┃ ┣ 📂 footer
 ┃ ┃ ┣ 📜 Footer.css
 ┃ ┃ ┗ 📜 Footer.tsx
 ┃ ┣ 📂 Loading
 ┃ ┣ 📂 modalpopup
 ┃ ┗ 📂 navbar
 ┃
 ┣ 📂 pages
 ┃ ┣ 📂 css
 ┃ ┃ ┣ 📂 Produto
 ┃ ┃ ┣ 📜 CalculoSeguro.css
 ┃ ┃ ┗ 📜 Home.css
 ┃ ┗ 📂 tsx
 ┃ ┃ ┣ 📂 Produto
 ┃ ┃ ┣ 📜 Aboutus.tsx
 ┃ ┃ ┣ 📜 CalculoSeguro.tsx
 ┃ ┃ ┗ 📜 Home.tsx
 ┃
 ┣ 📂 service
 ┃ ┣ 📜 Service.ts
 ┃ ┗ 📜 Types.ts
 ┃
 ┣ 📜 App.tsx
 ┣ 📜 main.tsx
 ┗ 📜 styles.css
```

---

# 🎨 Identidade Visual

A interface do **SaveDrive** foi construída utilizando uma identidade visual baseada em sentimentos de:

- 🛡️ Proteção
- 🚘 Segurança
- 💙 Estabilidade
- 🤝 Credibilidade

### 🐢 Mascote Oficial

A tartaruga foi escolhida como símbolo oficial por representar:

- Resistência
- Segurança contínua
- Solidez
- Proteção no trajeto

### ✨ Estética Geral

- Contrastes acessíveis
- Interface baseada em cards
- Sombras suaves
- Layout moderno e organizado
- Navegação intuitiva

---

# 🚀 Como Executar o Projeto

## 📥 Clone o repositório

```bash
git clone https://github.com/Grupo-03-Turma-JS-14/front-end-savedrive.git
```

---

## 📂 Acesse a pasta do projeto

```bash
cd front-end-savedrive
```

---

## 📦 Instale as dependências

```bash
npm install
```

---

## ▶️ Execute o projeto

```bash
npm run dev
```

---

# 🌐 Integração com o Back-end

O Front-end foi estruturado para realizar requisições HTTP consumindo a API desenvolvida em **NestJS** e **MySQL**, permitindo operações completas de CRUD.

## 🔗 Repositório do Back-end

👉 https://github.com/Grupo-03-Turma-JavaScript-14/savedrive

---

# 👩‍💻 Equipe

<table>
  <tr>

<td align="center">
  <a href="https://github.com/Duartetais">
    <img src="https://github.com/Duartetais.png" width="100px;" alt="Taís Duarte"/><br/>
    <sub><b>Taís Duarte</b></sub>
  </a>
</td>

<td align="center">
  <a href="https://github.com/darkblacks">
    <img src="https://github.com/darkblacks.png" width="100px;" alt="darkblacks"/><br/>
    <sub><b>darkblacks</b></sub>
  </a>
</td>

<td align="center">
  <a href="https://github.com/BiaNascimento">
    <img src="https://github.com/BiaNascimento.png" width="100px;" alt="BiaNascimento"/><br/>
    <sub><b>BiaNascimento</b></sub>
  </a>
</td>

<td align="center">
  <a href="https://github.com/KefilweLourenco">
    <img src="https://github.com/KefilweLourenco.png" width="100px;" alt="KefilweLourenco"/><br/>
    <sub><b>KefilweLourenco</b></sub>
  </a>
</td>

<td align="center">
  <a href="https://github.com/Kauvinzera">
    <img src="https://github.com/Kauvinzera.png" width="100px;" alt="Kauvinzera"/><br/>
    <sub><b>Kauvinzera</b></sub>
  </a>
</td>

<td align="center">
  <a href="https://github.com/leticiafnss">
    <img src="https://github.com/leticiafnss.png" width="100px;" alt="leticiafnss"/><br/>
    <sub><b>leticiafnss</b></sub>
  </a>
</td>

<td align="center">
  <a href="https://github.com/JhonatanMiranda221">
    <img src="https://github.com/JhonatanMiranda221.png" width="100px;" alt="JhonatanMiranda221"/><br/>
    <sub><b>JhonatanMiranda221</b></sub>
  </a>
</td>

  </tr>
</table>

---

# 📚 Finalidade

Este projeto foi desenvolvido para fins acadêmicos e educacionais através da formação Full Stack da Generation Brasil.

---

<div align="center">

## 🚗 SaveDrive

### _Estabilidade, proteção e tecnologia para o seu caminho._

</div>
