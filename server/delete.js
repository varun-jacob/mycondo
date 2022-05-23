//Create (POST) request for resident
router.route('/')
    .post((req, res) => {
        knex('resident')
            .insert(req.body)
            .then((newResidentId) => {
                res.status(201).json(newResidentId);
            })
            .catch(() => {
                res.status(400).json({
                    message: `Error creating user ${req.body.unit}`
                })
            })
});

//Update (PUT) request for resident
router.route('/:id')
    .put((req, res) => {
        knex('residents')
            .where({id: req.params.id })
            .update(req.body)
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err)=>{
                res.status(400).json({
                    message: `Error updating resident ${req.params.id}. Error ${err}`
                })
            })
    });


//Delete (DELETE) request for resident
router.route('/:id')
    .delete((req, res) => {
        knex('residents')
            .where({id: req.params.id })
            .del()
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err)=>{
                res.status(400).json({
                    message: `Error deleting resident ${req.params.id}. Error ${err}`
                })
            })
    });