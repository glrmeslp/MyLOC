import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class Produto {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    description: string;

    @Column()
    cod: string;

    @Column()
    status: string;
}
