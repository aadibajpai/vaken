import 'reflect-metadata';
import { Field, ObjectType } from 'type-graphql';

import { User } from './User';

@ObjectType({ description: 'DTO for a Vaken hacker' })
export class Hacker extends User {
	@Field(type => Boolean)
	verified: Boolean = false; // Default init

	@Field(type => Boolean)
	started: Boolean = false;

	@Field(type => Boolean)
	submitted: Boolean = false;

	@Field(type => Boolean)
	accepted: Boolean = false;

	@Field(type => Boolean)
	confirmed: Boolean = false;

	@Field(type => String)
	school!: String;

	@Field(type => String)
	gradYear!: String; // TODO - Enum this

	@Field(type => [String])
  ethnicity!: [String]; // TODO - Enum this

  @Field(type => [String])
	majors!: [String];

  @Field(type => Boolean)
	adult?: boolean;

	@prop()
	firstHackathon?: boolean;

	@prop()
	volunteer?: boolean;

	@prop()
	github?: string;

	@prop()
	linkedin?: string;

	@prop()
	devpost?: string;

	@prop()
	website?: string;

	@arrayProp({ items: String })
	essays?: string[];

	@prop()
	codeOfConduct?: boolean;

	@prop()
	needReimbursement?: boolean;

	@prop()
	lightningTalk?: boolean;

	@prop()
	teamCode?: string;

	@prop()
	walkin?: boolean;
}
