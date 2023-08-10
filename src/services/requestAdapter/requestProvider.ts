import { Response } from '@/types';

export abstract class RequestProvider {
  abstract getRequest(url: string, headers?:string): Promise<Response>;
  abstract postRequest(url: string, body: Object, headers?:string): Promise<Response>;
  abstract putRequest(url: string, body: Object, headers?:string,): Promise<Response>;
  abstract deleteRequest(url: string, headers?:string): Promise<Response>;
}