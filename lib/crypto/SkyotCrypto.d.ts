export declare class SkyotCrypto {
    static encryptedSHA256(value: string): string;
    static encrypted(value: string, secretKey: string): string;
    static descrypted(value: string, secretKey: string): string;
    private static checkExistsParams;
    private static stringify;
}
