import Painting from '../models/painting';

export function newPainting(req, res, next) {
  if(!req.file){
    res.status(200).send({error: 'Painting must contain a photo'});
  }else{
    let painting = new Painting({
      name: req.body.name,
      isGenerated: req.body.isGenerated || false,
      img: req.file.filename
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
  }
};

export function getPaintingById(req, res, next) {
  Painting.findById(req.params.id, '_id img', (err, painting) => {
    if(err) res.status(200).send(error);

    res.status(200).jsonp(painting);
  });
}

export function getPaintings(req, res, next) {
  // TODO
};

export default { newPainting, getPaintingById, getPaintings };
