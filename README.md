<div align="center">

# 🚗 SaveDrive - Front-end

</div>

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
- ✨ Experiência visual elegante

A aplicação apresenta informações sobre os planos, fluxo de navegação institucional e uma regra de negócio especial para cálculo de vantagens.

---

# 🏠 Home

<p align="center">
  <img 
    src="https://github.com/user-attachments/assets/3a502812-59aa-47d3-b88a-1c0508798761"
    alt="Preview Home SaveDrive"
    width="100%"
  />
</p>


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
