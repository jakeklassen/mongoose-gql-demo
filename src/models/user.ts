import {
  getModelForClass,
  index,
  modelOptions,
  prop,
} from '@typegoose/typegoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
@index({
  createdAt: 1,
  updatedAt: 1,
})
export class User {
  @prop({
    required: true,
    trim: true,
  })
  public name: string = '';

  @prop({
    lowercase: true,
    trim: true,
    unique: true,
    required: true,
  })
  public email: string = '';
}

export const UserModel = getModelForClass(User);
export const UserModelTC = composeWithMongoose(UserModel);
