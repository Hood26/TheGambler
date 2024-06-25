export class MysteryContainer{
    private container;
    private config;

    constructor(config){
        this.container = this.getOdds(this.containersData)
        this.config    = config;
    }

    public getOdds(containerData) {
        let data = containerData;
        for (const name in data){
            const length = data[name]['rarities'].length;
            for(let i = 0; i < data[name]['rarities'].length; i++){
                if(i == 0) {
                    data[name]['odds'][i] = this.config
                }
            }
        }
    }

    public containersData = {
        'melee': {
            'name': 'melee', 
            'rarities': ["_extremely_rare","_rare", "_uncommon", "_common"],
            'odds': [],
        }
    }
}