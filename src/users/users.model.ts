import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import * as mongoose from 'mongoose';
import { Role } from './roles/roles.model';
import { Transform, Exclude, Type } from 'class-transformer';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Transform(({ value }) => value.toString)
  _id: ObjectId;

  @Prop({ unique: true })
  username: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Role.toString() })
  @Type(() => Role)
  role: Role;

  @Prop()
  @Exclude()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
