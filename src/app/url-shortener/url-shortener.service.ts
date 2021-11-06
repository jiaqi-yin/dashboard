import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Shortlink } from "./shortlink.model";

@Injectable({providedIn: 'root'})
export class UrlShortenerService {
    constructor(private http: HttpClient) {}

    shorten(url: {}) {
        return this.http.post<Shortlink>(environment.urlShortenerEndpoint, url);
    }
}