import {Component,Renderer2,ViewChild,} from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  @ViewChild('drag', { read: DragScrollComponent })
  private ds!: DragScrollComponent;
  constructor(private render2: Renderer2) {}

  redirecTo(value: string) {
    if (value === 'blog') {
      window.open('https://github.com/oguzhan18/Full-Detailed-Blog-Application', '_blank');
    } else if (value === 'emaliye') {
      window.open('http://emaliye.rf.gd/', '_blank');
    } else if (value === 'fiyattakip') {  
      window.open('https://github.com/oguzhan18/fiyattakip', '_blank');
    } else if (value === 'otelfiyat') {
      window.open('https://firebasestorage.googleapis.com/v0/b/angularcurd-a8b2b.appspot.com/o/uploads%2F857348%2FGreenPark_v.2.png?alt=media&token=85fe7462-1677-4cce-b8d0-6cc14a36cf27', '_blank');
    }else if (value === 'ytportfolio') {
      window.open('https://github.com/oguzhan18/manageable-portfolio', '_blank');
    } else if (value === 'speedmeeting') {
      window.open('https://github.com/oguzhan18/instant_meeting','_blank');
    }else if (value === 'masterfx') {
      window.open('https://github.com/oguzhan18/masterFX', '_blank');
    } else if (value === 'chatapp') {
        window.open('https://github.com/oguzhan18/ChatAPP','_blank');
    }else if (value === 'bussinesbook') {
      window.open('https://github.com/oguzhan18/BusinessBook', '_blank');
    }
  }
}
