import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from '../users.model';
import { Permission } from './permissions/permissions.model';
import { Transform, Type } from 'class-transformer';

export type RoleDocument = Role & Document;

@Schema()
export class Role {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Prop({ unique: true })
  name: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: Permission.name }],
  })
  @Type(() => Permission)
  permissions: Permission;

  @Prop()
  all_permissions: boolean;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
