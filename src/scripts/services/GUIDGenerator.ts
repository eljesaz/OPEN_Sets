module OPENSets.Services {
  export class GUIDGenerator {
    public r: number;
    public v: string;
    public date: Date;
    public guid: string;

    constructor() { }

    public generateGUID(): string {
      let time: number;
      this.date = new Date();
      time = this.date.getTime();
      this.guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c: string): string {
        let r: number = (time + Math.random() * 16) % 16 | 0;
        time = Math.floor(time / 16);
        return (this.c === 'x' ? r : (r & 0x3 | 0x8)).toString();
      });
      console.log(this.guid);
      return this.guid;
    }
  }
}
