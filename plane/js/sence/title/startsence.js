class StartSence extends GuaSence {
    constructor(game) {
        super(game)
        var ps = new GuaParticleSystem(game)
        this.addElement(ps)
    }
}
