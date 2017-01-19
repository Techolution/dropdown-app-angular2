/* tslint:disable:no-unused-variable */
import {
  TestBed,
  getTestBed,
  async,
  inject
} from '@angular/core/testing';
import {
  Headers, BaseRequestOptions,
  Response, HttpModule, Http, XHRBackend, RequestMethod
} from '@angular/http';

import {ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { makeModelService }  from './app.service';
describe('Component: DropDownApp', () => {

  var fixture: any, compiled: any, componentInstance: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations: [AppComponent],
      providers: [
        makeModelService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
            (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                return new Http(backend, defaultOptions);
            }
         }
      ],
    });


    fixture = TestBed.createComponent(AppComponent);
    compiled = fixture.debugElement.nativeElement;
    componentInstance = fixture.debugElement.componentInstance;
    var data = [  
   {  
      "Key":"Ford",
      "Value":"Ford",
      "Associated":[  
         {  
            "Key":"Edge",
            "Value":"Edge",
            "Count":0,
            "img":"http://static.usnews.rankingsandreviews.com/images/Auto/custom/13366/2017_Ford_Edge_1.jpg",
            "Associated":null
         },
         {  
            "Key":"Escape",
            "Value":"Escape",
            "Count":0,
            "img":"http://o.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/http://o.aolcdn.com/commerce/autodata/images/USC70FOS131A021001.jpg",
            "Associated":null
         }
      ]
   },
   {  
      "Key":"Acura",
      "Value":"Acura",
      "Associated":[  
         {  
            "Key":"ILX",
            "Value":"ILX",
            "Count":0,
            "img":"http://st.motortrend.com/uploads/sites/10/2016/05/2017-acura-ilx-technology-plus-a-spec-sedan-angular-front.png",
            "Associated":null
         },
         {  
            "Key":"MDX",
            "Value":"MDX",
            "img":"http://media.caranddriver.com/images/16q1/665058/2017-acura-mdx-photos-and-info-news-car-and-driver-photo-667193-s-original.jpg",
            "Count":0,
            "Associated":null
         }
      ]
   }
]
    componentInstance.makemodellist = data;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Browse by Make & Model'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Browse by Make & Model');
  }));

  it('should render title in a h4 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    
    expect(compiled.querySelector('h4').textContent).toContain('Browse by Make & Model');
  }));
   it('should have methods makeSelect(), modelSelect()', () => {
    expect(componentInstance.makeSelect).toBeDefined();
    expect(componentInstance.modelSelect).toBeDefined();
  });

   it("should create and open dropdown", async(() => {
      componentInstance.MakeValue =componentInstance.makemodellist[0].Value;
      componentInstance.makeSelect(componentInstance.makemodellist[0].Value);
      fixture.detectChanges();
      componentInstance.ModelValue = componentInstance.makemodellistData.Associated[0].Value;
      componentInstance.modelSelect(componentInstance.makemodellistData.Associated[0].Value);
      fixture.detectChanges();
      expect(componentInstance.modelImgUrl).toBeDefined();
    }));
});


