# TubeVídeos

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.2.

## Development server

Para iniciar um servidor de desenvolvimento local, execute:

```bash
ng serve
```

Depois que o servidor estiver em execução, abra seu navegador e navegue até http://localhost:4200/. O aplicativo será recarregado automaticamente sempre que você modificar qualquer um dos arquivos de origem.

Para executar o servidor de endpoints de API:

```bash
json-server --watch db.json --port 3000
```

 A API poderá ser acessada via http://localhost:3000/.

## Sobre

Projeto que simula uma plataforma de vídeos como YouTube, desenvolvido utilizando as tecnologias Angular, Html, Css, TypeScript e Bootstrap.
Uma aplicação web, onde o usuário é recebido na página inicial com o botão de login, que ao clicar no botão é direcionado para uma tela de login do próprio 
Auth0, onde ele pode escolher logar via Google ou Facebook. Após o login bem sucedido, o usuário é redirecionado para a página principal (Home), que exibe os vídeos com título, descrição, visualizações
e data, além de oferece uma barra de busca para explorar o conteúdo. Na tela principal, ao selecionar um vídeos o usuário é direcionado para o plataforma do Youtube. Interface é intuitiva e responsiva, adaptando-se a qualquer dispositivo.


![tubevideo-tela_inicial](https://github.com/user-attachments/assets/87e6b3bd-0a11-4d74-86fd-98e3e4a7c1ee)


![tubevideos-tela_principal](https://github.com/user-attachments/assets/df0784d9-3150-476b-a7e9-ec7fae0d5b84)
