/**
 * cashbook REST API
 * API to communicate with cashbook!
 *
 * OpenAPI spec version: 1.0
 * Contact: pascal.wild@mallorca-software.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { CashbookDto } from '../model/cashbookDto';
import { CreateCashbookDto } from '../model/createCashbookDto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class CashbookControllerService {

    protected basePath = 'http://cashbook.api.mallorca-software.com';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {

        if (configuration) {
            this.configuration = configuration;
            this.configuration.basePath = configuration.basePath || basePath || this.basePath;

        } else {
            this.configuration.basePath = basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * createCashbook
     * 
     * @param createCashbookDto createCashbookDto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createCashbookUsingPUT(createCashbookDto: CreateCashbookDto, observe?: 'body', reportProgress?: boolean): Observable<CashbookDto>;
    public createCashbookUsingPUT(createCashbookDto: CreateCashbookDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CashbookDto>>;
    public createCashbookUsingPUT(createCashbookDto: CreateCashbookDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CashbookDto>>;
    public createCashbookUsingPUT(createCashbookDto: CreateCashbookDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (createCashbookDto === null || createCashbookDto === undefined) {
            throw new Error('Required parameter createCashbookDto was null or undefined when calling createCashbookUsingPUT.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<CashbookDto>(`${this.configuration.basePath}/api/cashbooks`,
            createCashbookDto,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * deleteCashbook
     * 
     * @param cashbookId cashbookId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteCashbookUsingDELETE(cashbookId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteCashbookUsingDELETE(cashbookId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteCashbookUsingDELETE(cashbookId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteCashbookUsingDELETE(cashbookId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (cashbookId === null || cashbookId === undefined) {
            throw new Error('Required parameter cashbookId was null or undefined when calling deleteCashbookUsingDELETE.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.configuration.basePath}/api/cashbooks/${encodeURIComponent(String(cashbookId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getCashbook
     * 
     * @param cashbookId cashbookId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCashbookUsingGET(cashbookId: number, observe?: 'body', reportProgress?: boolean): Observable<CashbookDto>;
    public getCashbookUsingGET(cashbookId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CashbookDto>>;
    public getCashbookUsingGET(cashbookId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CashbookDto>>;
    public getCashbookUsingGET(cashbookId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (cashbookId === null || cashbookId === undefined) {
            throw new Error('Required parameter cashbookId was null or undefined when calling getCashbookUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<CashbookDto>(`${this.configuration.basePath}/api/cashbooks/${encodeURIComponent(String(cashbookId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getCashbooks
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCashbooksUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<CashbookDto>>;
    public getCashbooksUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<CashbookDto>>>;
    public getCashbooksUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<CashbookDto>>>;
    public getCashbooksUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<CashbookDto>>(`${this.configuration.basePath}/api/cashbooks`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * saveCashbook
     * 
     * @param cashbookDto cashbookDto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveCashbookUsingPOST(cashbookDto: CashbookDto, observe?: 'body', reportProgress?: boolean): Observable<CashbookDto>;
    public saveCashbookUsingPOST(cashbookDto: CashbookDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CashbookDto>>;
    public saveCashbookUsingPOST(cashbookDto: CashbookDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CashbookDto>>;
    public saveCashbookUsingPOST(cashbookDto: CashbookDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (cashbookDto === null || cashbookDto === undefined) {
            throw new Error('Required parameter cashbookDto was null or undefined when calling saveCashbookUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<CashbookDto>(`${this.configuration.basePath}/api/cashbooks`,
            cashbookDto,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
