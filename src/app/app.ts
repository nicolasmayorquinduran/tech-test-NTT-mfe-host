import { Component, signal, inject, OnInit, effect } from '@angular/core';
import { EventStateBridgeService, GlobalStateService } from 'shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('host');
  
  // Inyectar servicios de estado global
  private readonly eventStateBridge = inject(EventStateBridgeService);
  protected readonly globalState = inject(GlobalStateService);

  constructor() {
    // Effect para loggear cambios en el usuario (opcional, para debugging)
    effect(() => {
      const user = this.globalState.user();
      if (user) {
        console.log('[Host] Usuario global actualizado:', user);
      } else {
        console.log('[Host] No hay usuario autenticado');
      }
    });
  }

  ngOnInit(): void {
    // IMPORTANTE: Inicializar el puente EventBus → GlobalState
    this.eventStateBridge.initialize();
    console.log('[Host] EventStateBridge inicializado');
  }
}
