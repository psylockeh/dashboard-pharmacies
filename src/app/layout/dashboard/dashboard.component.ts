import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FaturamentoComponent } from './cards/faturamento/faturamento.component';
import { VendasComponent } from './cards/vendas/vendas.component';
import { EstoqueComponent } from './cards/estoque/estoque.component';
import { TransacoesComponent } from './cards/transacoes/transacoes.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    NavbarComponent,
    FaturamentoComponent,
    VendasComponent,
    EstoqueComponent,
    TransacoesComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor() {
    console.log('✅ DashboardComponent foi carregado!');
  }
}
