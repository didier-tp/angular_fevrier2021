import { TestBed } from '@angular/core/testing';

import { PreferencesService } from './preferences.service';

describe('PreferencesService', () => {
  let service: PreferencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreferencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test addition correcte', () => {
    let res = service.addition(3,2);
    expect(res).toBe(5);
  });

  it('verifier couleur lightgreen',  done => {
    service.couleurFondPreferee="lightgreen";
    service.couleurFondPrefereeObservable.subscribe(
       (couleur) => { console.log("couleur=" + couleur);
                      expect(couleur).toEqual("lightgreen");
                      done();
                     }
    );
    
  });
});

//ng test --watch=false --include=**/service/pref*.spec.ts
