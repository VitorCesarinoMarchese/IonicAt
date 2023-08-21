import { Component } from '@angular/core';
import { Itec } from '../model/Itec';
import { AlertController, ToastController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router,
    public alertController: AlertController,
    public toastController: ToastController) {}


  listaTec: Itec[] = [
    {
      nome: "IA",
      descricao: "A Inteligência Artificial (IA) é um campo da ciência da computação que se dedica a criar sistemas capazes de realizar tarefas que, normalmente, requerem inteligência humana. Essas tarefas abrangem desde a compreensão de linguagem natural e reconhecimento de padrões até a tomada de decisões complexas. A IA se baseia em algoritmos e modelos matemáticos que permitem que os computadores aprendam a partir de dados e melhorem seu desempenho ao longo do tempo.",
      img: "https://www.cienciaedados.com/wp-content/uploads/2023/04/Por-Que-o-ChatGPT-Nao-e-Tao-Inteligente-Quanto-Muitos-Acreditam.jpg",
      pagina: '/IA',
      favorito: false,
    },
    {
      nome: "Aplicativos de Transporte",
      descricao: "Os aplicativos de transporte revolucionaram a maneira como nos deslocamos nas cidades modernas. Essas inovações tecnológicas trouxeram conveniência, eficiência e uma nova dinâmica para a indústria de transporte. Ao conectar motoristas particulares a passageiros em tempo real, esses aplicativos oferecem uma alternativa flexível e acessível aos tradicionais serviços de táxi e transporte público.",
      img: "https://d3i4yxtzktqr9n.cloudfront.net/uber-sites/f452c7aefd72a6f52b36705c8015464e.jpg",
      pagina: '/Aplicativos-de-Transporte',
      favorito: false,
    },
    {
      nome: "Aplicativos de Saúde Pessoal",
      descricao: "Os aplicativos de saúde pessoal estão revolucionando a forma como as pessoas gerenciam sua saúde e bem-estar. Essas ferramentas tecnológicas oferecem uma maneira conveniente e acessível de monitorar e melhorar diversos aspectos da saúde, desde atividade física até hábitos alimentares e sono.",
      img: "https://play-lh.googleusercontent.com/RSu_Yble-5MgqnXbuqaYdj9r97Wv3yE0ICX2vDGAw2QCZPF4wZLA71Q1cEndjR1WpDM",
      pagina: 'Aplicativos-de-Saúde-Pessoal',
      favorito: false,
    },
    {
      nome: "Aprendizado Online",
      descricao: "O aprendizado online revolucionou a forma como as pessoas adquirem conhecimento e habilidades. Através das plataformas de educação online, estudantes de todo o mundo podem acessar uma ampla variedade de cursos, palestras e recursos educativos de forma conveniente e flexível.",
      img: "https://s.udemycdn.com/meta/default-meta-image-v2.png",
      pagina: '/Aprendizado-Online',
      favorito: false,
    }
  ]
  async exibirAlertaFavorito(tec: Itec) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o tecnologia?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            tec.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            tec.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }
  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Tecnologia adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }
  exibirtec(tec: Itec){
    const navigationExtras: NavigationExtras = {state:{paramTec:tec}};
    this.router.navigate(['detalhes'],navigationExtras);
  }

}


