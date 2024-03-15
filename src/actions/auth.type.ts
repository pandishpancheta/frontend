export type AuthResponse = {
  token: string;
  refresh: string;
};

export class FormError extends Error {
  constructor(public message: string) {
    super();
  }
}
