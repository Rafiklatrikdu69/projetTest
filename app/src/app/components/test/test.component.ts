import { Component } from '@angular/core';
import { CommuneService } from '../../services/commune.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  
  getColor(Province: string) {
    switch(Province) {
      case 'Nord': return 'blue';
      case 'Sud': return 'red';
      case 'Iles': return 'green';
      default: return 'black';
    }
  }
  
  getFontSize(Population: number) {
    if (Population > 10000) {
      return 24;
    } else if (Population > 5000) {
      return 20;
    } else {
      return 16;
    }
  }
  
  communes: any;
  
  constructor(private communesService: CommuneService) { }
  
  ngOnInit(): void {
     this.communesService.sendOk().subscribe((comm: any)=>{
       console.log(comm);
     })
  }
}
