module OPENSets.Services {
  export class HttpRequestService {
    public counter: number;
    public guidService: Services.GUIDGenerator;
    public guid: string;
    public gameName: string;

    constructor() { }

    startGame(): void {

      this.guidService = new Services.GUIDGenerator();
      this.guid = this.guidService.generateGUID();
      let data: string;
      this.gameName = 'Sets';

       let xhr: XMLHttpRequest = new XMLHttpRequest();
      xhr.addEventListener('onreadystatechange', () => {
        if (xhr.readyState === 4) {
          console.log(xhr.responseText);
        }
      });

      xhr.open('GET', 'http://localhost:3000/api/setsGameStarted/' + this.gameName, true);
      xhr.send();
    }
  }
}
