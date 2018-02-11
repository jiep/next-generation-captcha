import Painting from '../models/painting';

export function newPainting(req, res, next) {
  console.log(req.body);
  let painting = new Painting({
    name: req.body.name,
    isGenerated: req.body.isGenerated || false,
    // TODO: Add more fields and image
  });

  painting.save(error => {
    if(error){
      res.status(200).send(error);
    }else{
      res.status(201).json({
        message: 'Painting created successfully',
      });
    }
  });
};

export function getPaintings(req, res, next) {
  // TODO
};

export default { newPainting, getPaintings };
