const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuarios', (err, usuarios) =>{
            if(err){
                res.json(err);
            }
            console.log(usuarios);
            res.render('usuarios', {
                data: usuarios
            })
        })
    });
};

controller.save = (req, res ) => {
    const data = req.body;

    req.getConnection((err, conn)=>{
        conn.query('INSERT INTO usuarios set ?',[data], (err, usuarios)=>{
            res.redirect('/');
        });
    })
    
};

controller.update = (req, res)=>{
    const {id} = req.params;
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM usuarios WHERE id = ?', [id], (err, usuarios) => {
            res.render('usuarios_update', {
                data: usuarios[0]                
            });
        });
    });
};

controller.edit = (req, res) =>{
    const {id} = req.params;
    const newUsuario = req.body;
    req.getConnection((err, conn)=>{
        conn.query('UPDATE usuarios set ? WHERE id= ?', [newUsuario, id], (err, usuarios)=>{
            res.redirect('/');
        });
    }); 
}

controller.delete = (req, res ) => {
    const {id} = req.params;


    req.getConnection((err, conn) => { 
        conn.query('DELETE FROM usuarios WHERE id = ?', [id], (err, usuarios) => {
            res.redirect('/');   
        });
    })   
};

module.exports = controller;