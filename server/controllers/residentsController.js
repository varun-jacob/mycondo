const knex = require('knex')(require('../knexfile').development);
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const authenticate = require('../middleware/authenticate');  /*TO BE USED LATER FOR USER AUTHENTICATION*/

exports.index = (_req, res) => {
  knex('residents')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving Residents: ${err}`)
    );
};

//Read (GET) request for single resident
exports.resident = ((req, res) => {
        knex('residents')
            .where({id: req.params.id })
            .then((data) => {
                //If record is not found respond with 404
				if (!data.length) {
				return res.status(404).send(`Record with id: ${req.params.id} is not found`);
				}
                res.status(200).json(data[0]);
            })
            .catch((err)=>{
                res.status(400).json({
                    message: `Error getting resident ${req.params.id} ${err}`
                })
            })
    });

//Read (GET) request for single resident bookings
exports.residentBookings = (req, res) => {
    knex('bookings')
      .leftJoin('amenities', 'bookings.amenity_id', '=', 'amenities.id')
      .select('bookings.id', 'bookings.condo_id', 'bookings.resident_id', 'bookings.amenity_id', 'bookings.date', 'bookings.start_time', 'bookings.end_time','bookings.updated_at', 'amenities.name')
      .where({ resident_id: req.params.id })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) =>
        res
          .status(400)
          .send(
            `Error retrieving bookings for Resident ${req.params.id} ${err}`
          )
      );
  };

//Create (POST) request for resident
exports.addResident = (req, res) => {
    // Validate the request body for required data
    const { condo_id, unit, name, phone, email, password } = req.body;

    if (!condo_id || !unit || !name || !phone || !email || !password) {
      return res.status(400).send('Please make sure to provide condo_id, unit, name, phone, email, password fields in a request');
    }

    const hashedPassword = bcrypt.hashSync(password, 12);

    const newResident = {
        condo_id: condo_id,
        unit: unit,
        name: name,
        phone: phone,
        email: email,
        password: hashedPassword,
    };
  
    knex('residents')
      .insert(newResident)
      .then((data) => {
        // For POST requests we need to respond with 201 and the location of the newly created record
        const newResidentURL = `/residents/${data[0]}`;
        res.status(201).location(newResidentURL).send(newResidentURL);
      })
      .catch((err) => res.status(400).send(`Error creating Resident: ${err}`));
  };

//Update (PUT) request for resident
exports.updateResident = (req, res) => {
    knex('residents')
      .update(req.body)
      .where({ id: req.params.id })
      .then(() => {
        res.status(200).send(`Resident with id: ${req.params.id} has been updated`);
      })
      .catch((err) =>
        res.status(400).send(`Error updating Resident with id: ${req.params.id} ${err}`)
      );
  };

//Delete (DELETE) request for resident
exports.deleteResident = (req, res) => {
    knex('residents')
      .delete()
      .where({ id: req.params.id })
      .then(() => {
        // For DELETE response we can use 204 status code
        res.status(204).send(`Resident with id: ${req.params.id} has been deleted`);
      })
      .catch((err) =>
        res.status(400).send(`Error deleting Resident ${req.params.id} ${err}`)
      );
  };

// ## POST /api/users/login
// -   Generates and responds a JWT for the user to use for future authorization.
// -   Expected body: { email, password }
// -   Response format: { token: "JWT_TOKEN_HERE" }
exports.residentLogin = (req, res) => {
    const { unit, password } = req.body;
    
    if (!unit || !password) {
        return res.status(400).send("Please enter resident unit no. and password");
    }

    // Find the user
    knex('residents')
        .where({ unit: unit })
        .first()
        .then((resident) => {
            const isPasswordCorrect = bcrypt.compareSync(password, resident.password);

            if (!isPasswordCorrect) {
                return res.status(400).send("Invalid password");
            }

            // Create a token
            const token = jwt.sign(
                { id: resident.id, unit: resident.unit },
                process.env.JWT_KEY,
                { expiresIn: "24h" }
            );

            res.json({ token });
        })
        .catch(() => {
            res.status(400).send("Invalid credentials");
        });
};

/*  TO BE ADDED LATER FOR USER AUTHENTICATION

// ## GET /api/users/current
// -   Gets information about the currently logged in user.
// -   Expects valid JWT authentication to run through the "authenticate" middleware
router.get('/current', authenticate, (req, res) => {
    knex('users')
        .where({ email: req.user.email })
        .first()
        .then((user) => {
            // Respond with the user data
            delete user.password;
            res.json(user);
        });
});

*/