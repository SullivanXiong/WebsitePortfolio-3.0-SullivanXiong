import {Deserializable} from './deserializable.model';

export class Session implements Deserializable{
    public sessionTitle: string; 
    public name: string;
    public sessionUserLimit: number;

    deserialize(input: any): this {
        return Object.assign(this, input);
    }
}
