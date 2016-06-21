module OPENSets.Helpers {
  export class GameState {
    private static _instance: GameState = new GameState();

    public pairs: Array<Models.Pair>;
    public wrongTriesTreshold: number;
    public guid: string;
    public pairsImagesPrefix: string = 'assets/pairs/';
    public imageSuffix: string = '.png';

    public static getInstance(): GameState {
      return GameState._instance;
    }

    constructor() {
      if (GameState._instance) {
        throw new Error('Error: Instantiation failed: Use GameState.getInstance() instead of new.');
      }

      GameState._instance = this;
      this.pairs = new Array<Models.Pair>();
      this.wrongTriesTreshold = 6;
    }
  }
}
