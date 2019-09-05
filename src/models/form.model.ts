import { Entity, model, property } from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'user_details',
    }
  }
})
export class Form extends Entity {
  @property({
    type: 'number',
    id: true,
    required: false,
  })
  user_id: number;

  @property({
    type: 'string',
    required: true,
  })
  email_id: string;

  @property({
    type: 'number',
    required: true,
  })
  mobile_no: number;

  @property({
    type: 'string',
    required: true,
  })
  company: string;

  @property({
    type: 'string',
    required: true,
  })
  country: string;

  @property({
    type: 'string',
    required: true,
  })
  gender: string;

  @property({
    type: 'string',
    required: true,
  })
  DOB: Date;

  @property({
    type: 'number',
    required: true,
  })
  insurance: number;

  @property({
    type: 'string',
    required: true,
  })
  network: string;


  constructor(data?: Partial<Form>) {
    super(data);
  }
}

export interface FormRelations {
  // describe navigational properties here
}

export type FormWithRelations = Form & FormRelations;
