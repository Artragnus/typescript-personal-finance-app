import { ValueObject } from "../../shared/domain/value-object";
import { Entity } from "../../shared/domain/value-objects/entity";
import { Uuid } from "../../shared/domain/value-objects/uuid.vo";

export type CategoryCreateCommand = {
  name: string;
};

export type CategoryConstructorProps = {
  category_id?: Uuid;
  name: string;
};

export class Category extends Entity {
  get entity_id(): ValueObject {
    return this.category_id;
  }
  toJSON() {
    return {
      category_id: this.category_id.id,
      name: this.name,
    };
  }
  category_id?: Uuid;
  name: string;

  constructor(props: CategoryConstructorProps) {
    super();
    this.category_id = props.category_id || new Uuid();
    this.name = props.name;
  }

  static create(props: CategoryCreateCommand): Category {
    return new Category(props);
  }
}
