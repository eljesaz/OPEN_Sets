module OPENSets.Services {
  export class HttpRequestService {
    public gameName: string;
    private gameState: Helpers.GameState;

    constructor() {
      this.gameState = Helpers.GameState.getInstance();
    }

    startGame(): void {

      let data: string;
      this.gameName = 'Sets';

      let http: XMLHttpRequest = new XMLHttpRequest();
      http.onreadystatechange = () => {
        if (http.readyState === 4 && http.status === 200) {
          this.gameState.guid = http.responseText;
          console.log(this.gameState.guid);
        }
      };

      http.open('GET', 'http://localhost:3000/api/GameStarted/' + this.gameName, true);
      http.send();
    }
  }
}
