import {Number, String, Record, Static} from 'runtypes';

export const Product = Record({
  id: String,
  productAggregateId: String,
  name: String,
  price: Number,
  quantity: Number
})

export type Product = Static<typeof Product>;