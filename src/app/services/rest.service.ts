import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  private BASE_URL = environment.api.baseApi;
  private RESOURCE;

  constructor(resource) {
    this.RESOURCE = `${this.BASE_URL}/${resource}`;
  }

  getAll() {
    return axios.get(this.RESOURCE);
  }

  getById(id) {
    if (id) {
      return axios.get(`${this.RESOURCE}/${id}`);
    } else {
      throw new Error('o parametro não pode ser vazio');
    }
  }

  post(obj) {
    if (obj) {
      return axios.post(this.RESOURCE, obj);
    } else {
      throw new Error('o parametro não pode ser vazio');
    }
  }

  delete(obj) {
    if (obj) {
      return axios.delete(this.RESOURCE, obj);
    } else {
      throw new Error('o parametro não pode ser vazio');
    }
  }
}
