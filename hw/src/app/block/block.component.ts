import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './block.component.html',
  styleUrl: './block.component.css'
})
export class BlockComponent {
flag = false;
flag1 = false;
flag2 = false;
carInfo: string = "Гелик, также известный как Mercedes-Benz G-Class, является воплощением мощности и роскоши в мире внедорожников. Этот легендарный автомобиль, с момента своего первого выпуска в 1979 году, завоевал сердца автолюбителей по всему миру благодаря своему уникальному сочетанию выдающейся производительности и изысканного дизайна.";
airplaneInfo: string = "Boeing 787 Dreamliner представляет собой вершину инженерного искусства и инноваций в авиации. Его улучшенная топливная эффективность, дальность полета, комфорт и экологичность делают его идеальным выбором для авиакомпаний, стремящихся предложить своим пассажирам высший уровень обслуживания и удобства на дальних рейсах.";
shipInfo: string = "Крейсер «Аврора» – это легендарный корабль, ставший неотъемлемой частью российской истории и символом революционных перемен. Построенный в конце XIX века, этот корабль сыграл ключевую роль в значимых исторических событиях, и сегодня он остается одним из самых узнаваемых символов России.";
}
