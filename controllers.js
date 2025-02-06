import {forma} from './modeloLivros.js'

const regis = async (req, res) =>{
try {
const{nome, autor} = req.body

if (!nome || !autor) {
    res.json({
        erro:true,
        mensage:"todos os campos são obrigatórios"
    })
}

const livro = new forma({nome, autor})
await livro.save()
res.json({
    mensage:"livro salvo"
})


    
} catch (error) {
    res.json({
        erro:true,
        mensage: error
    })
}

}


const alt = async (req, res) => {

try {
   const {id} = req.params
   
    const livro = await forma.findByIdAndUpdate(id, req.body, {new:true})
res.json(livro)

} catch (error) {
    res.json({
        erro:true,
        mensage: error
    })
}
}



const busc = async (req, res) => {

    try {
       
        const {id} = req.params
        const livro = await forma.findById(id)
        
        if (!livro) {
            res.json({
erro:true,
mensage:"livor nao encontrado"

            })
        }

        res.json({
            erro:false,
            livro
        })


    } catch (error) {
        res.json({
            erro:true,
            mensage: error
        })
    }
}

const list = async (req,res )=> {

    try {
        const livro = await forma.find()
        res.json(livro)
    } catch (error) {
        res.json({
            erro:true,
            mensage: error
        })
    }
}

const del = async (req, res) => {

try {
    const {id} = req.params
    const livro = await forma.findByIdAndDelete(id)
res.json({
    erro:false,
    mensage:"livo excluido"
})

if (!aluno) {
    res.json({
        erro:true,
        mensage:"livro nao encontrado"
    })
}


} catch (error) {
    
}
     res.json({
            erro:true,
            mensage: "erro"
        })
}

export default {regis, list, busc, alt, del}