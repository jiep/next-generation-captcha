import Painting from '../models/painting';

const FIELDS = { _id: 1, img: 1 };
const DEFAULT_LIMIT = 6;

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
  Painting.findById(req.params.id, FIELDS, (err, painting) => {
    if(err) res.status(200).send(err);
    res.status(200).jsonp(painting);
  });
}

export function getPaintings(req, res, next) {
  const limit = Object.keys(req.query) && req.query.limit ? +req.query.limit : DEFAULT_LIMIT;
  Painting.findRandom({}, FIELDS, {limit}, (err, paintings) => {
    if(err) res.status(200).send(err);
    res.status(200).send(paintings);
  });
};

export function submitForm(req, res, next) {
  let { paintings } = req.body;
  res.send({message: 'Information successfully sent'});
};

export default { newPainting, getPaintingById, getPaintings, submitForm };
