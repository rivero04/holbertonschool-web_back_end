export default class Building{
    constructor(sqft){
        this._sqft = sqft
    }

    get sqft(){
        return this._sqft
    }

    static checkExtendingClass() {
        if (this.constructor !== Building && !this.evacuationWarningMessage) {
          throw new Error('Class extending Building must override evacuationWarningMessage');
        }
    }
}