import { Component } from '@angular/core';
import { makeModelService }  from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Browse by Make & Model';
  constructor(private makeModelServiceList: makeModelService) { 
	
  	}
  	public makemodellist: any;
  	public makemodellistData: any ={
  	};
  	public modelImgUrl:any;
  	public MakeValue = 0;
  	public ModelValue = 0;
  	ngOnInit() {
  		let that = this;
	  	this.makeModelServiceList.getMakeDataList().then((res) => {
	  		this.makemodellist = res[0].data;
	  	});
	}
	makeSelect(model){
		for (let associate in this.makemodellist) {
			if(this.makemodellist[associate].Value === model){
				this.makemodellistData.Associated = this.makemodellist[associate].Associated;
				this.ModelValue = 0;
				break;
			}
		}
		
	}
	modelSelect(model){
		for (let associate in this.makemodellistData.Associated) {
			if(this.makemodellistData.Associated[associate].Value === model){
				this.modelImgUrl= this.makemodellistData.Associated[associate].img;
				break;
			}
		}
		
	}

}
