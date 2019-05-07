export class ResponseError {
    private _message: string;
    private _errorCode: string;

    constructor(message: string, errorCode: string) {
        this.message = message;
        this.errorCode = errorCode;
    }
    
    public get message(): string {
        return this._message;
    }
    public set message(value: string) {
        this._message = value;
    }
    
    public get errorCode(): string {
        return this._errorCode;
    }
    public set errorCode(value: string) {
        this._errorCode = value;
    }

}