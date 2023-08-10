import { Response } from '@/types';
import { RequestProvider } from './requestProvider';
import { Error } from './mocks';
// import { ACCOUNT } from '@/constants';

export class DevelopmentProvider implements RequestProvider{
  async getRequest(url: string, _headers?: string): Promise<Response> {
    switch (url) {
    // case ACCOUNT:
    //   return Account;
    default:
      return Error;
    }
  }
  async postRequest(
    url: string,
    _body: Object,
    _headers?: string
  ): Promise<Response> {
    switch (url) {
    default:
      return Error;
    }
  }
  async putRequest(
    url: string,
    _body: Object,
    _headers?: string
  ): Promise<Response> {
    switch (url) {
    default:
      return Error;
    }
  }
  async deleteRequest(url: string, _headers?: string): Promise<Response> {
    switch (url) {
    default:
      return Error;
    }
  }
}
