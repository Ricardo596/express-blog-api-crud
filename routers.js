const express = require ("express")
const router = express.Router


router.get(`/`, controller.index) 
 
router.get(`/:id`, controller.show)
    
router.post(`/`, controller.update)
 

router.put ("/:id", controller.store)


router.patch(`/:id`, controller.destroy )






module.exports = router


