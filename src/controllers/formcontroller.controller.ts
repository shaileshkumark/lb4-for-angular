import {
  Filter,
  repository,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  requestBody,
} from '@loopback/rest';
import { Form } from '../models';
import { FormRepository } from '../repositories';

export class FormController {
  constructor(
    @repository(FormRepository)
    public formRepository: FormRepository,
  ) { }

  @post('/userdetails', {
    responses: {
      '200': {
        description: 'Form model instance',
        content: { 'application/json': { schema: getModelSchemaRef(Form) } },
      },
    },
  })
  async create(

    @requestBody({

      content: {

        'application/json': {

          schema: getModelSchemaRef(Form, { exclude: ['user_id'] }),
        },
      },
    })
    form: Omit<Form, 'user_id'>,
  ): Promise<Form> {
    return this.formRepository.create(form);
  }

  @get('/userdetails', {
    responses: {
      '200': {
        description: 'Array of Form model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: getModelSchemaRef(Form) },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Form)) filter?: Filter<Form>,
  ): Promise<Form[]> {
    return this.formRepository.find(filter);
  }


}
