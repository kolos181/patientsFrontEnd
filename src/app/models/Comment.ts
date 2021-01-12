import {Patient} from './Patient';

export interface Comment {
  id?: number,
  patient: Patient,
  comment: string,
  date: any
}
