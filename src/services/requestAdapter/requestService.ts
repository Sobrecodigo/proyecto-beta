import { RequestProvider } from './requestProvider';

export class RequestService {
  constructor(private requestProvider: RequestProvider) {}
  async getRequest(url: string, headers?: string) {
    return await this.requestProvider.getRequest(url, headers);
  }
  async postRequest(url: string, body: Object, headers?: string) {
    return await this.requestProvider.postRequest(url, body, headers);
  }
  async putRequest(url: string, body: Object, headers?: string) {
    return await this.requestProvider.putRequest(url, body, headers);
  }
  async deleteRequest(url: string, headers?: string) {
    return await this.requestProvider.deleteRequest(url, headers);
  }
}
