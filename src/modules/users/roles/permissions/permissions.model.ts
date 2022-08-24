import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import { Transform } from 'class-transformer';

export type PermissionDocument = Permission & Document;

@Schema()
export class Permission {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Prop({ unique: true })
  name: string;
}

export const PermissionSchema = SchemaFactory.createForClass(Permission);
