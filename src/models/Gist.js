
class Gist {
    constructor(data) {
        this.image = data.owner.avatar_url
        this.name = Object.keys(data.files)[0]
    }
    
}


export default Gist