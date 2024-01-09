const { Router } = require("express");
const router= Router();
const shopController= require('./controllers/shopcontroller')


router.get("/shopSport", shopController.buscar);

router.post("/shopSport", shopController.criar);

router.put("/shopSport/:id", shopController.atualizar);

router.delete("/shopSport/:id", shopController.deletar);

module.exports = router;