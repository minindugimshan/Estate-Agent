const { body } = require('express-validator');

exports.validateProperty = [
  body('title').trim().isLength({ min: 5, max: 255 }),
  body('type').isIn(['house', 'flat']),
  body('bedrooms').isInt({ min: 1 }),
  body('price').isFloat({ min: 10000 }),
  body('tenure').isIn(['Freehold', 'Leasehold']),
  body('postcode')
    .matches(/^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/i)
    .withMessage('Invalid UK postcode format'),
  body('images').optional().isArray(),
  body('images.*').isURL(),
  body('floorPlan').optional().isURL(),
  body('iframe').optional().isURL()
];