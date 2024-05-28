import {Column,DeleteDateColumn,Entity,PrimaryGeneratedColumn,} from "typeorm";

@Entity()
export class ChatboxProducts {
@Column({ primary: true , generated: true})
 id:number;
 @Column()
 sku:string;
 @Column()
 name:string;
 @Column()
 description:string;
 @Column()
 long_description:string;
 @Column()
 characteristics:string;
 @Column()
 specifications:string;
 @Column()
 weight:string;
 @Column()
 category_id:string;
 @Column()
 sub_category_id:string;
 @Column()
 include:string;
 @Column()
 link:string;
 @Column()
 model:string;
}
