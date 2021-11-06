import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { CodeGenerator, CodeVerifier } from "./verification-code.model";

@Injectable({providedIn: 'root'})
export class VerificationCodeService {
    constructor(private http: HttpClient) {}

    generate(codeGenerator: CodeGenerator) {
        return this.http.post(environment.verificationCodeEndpoint + "/generate", codeGenerator);
    }

    verify(codeVerifier: CodeVerifier) {
        return this.http.post(environment.verificationCodeEndpoint + "/verify", codeVerifier);
    }
}