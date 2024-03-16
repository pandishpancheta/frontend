export type AuthResponse = {
  jwt: string;
};

export class FormError extends Error {
  constructor(public message: string) {
    super();
  }
}
