exports.pagina_no_encontrada = (req, res, next) => {
/*             // Si tiene una sesion activa muestra otro 404
            if (req.session.user) {
                return res.status(404)
                          .render('404/index_404.ejs');
            } */
            
            var local_i = {
                Titulo: 'Página no encontrada',
                autor: 'EDGIDIO RANZE LEÓN FLOREZ',
            };

            return res.status(404)
                      .render('pages/404/index_404.ejs', {
                        local_i
                      });
}