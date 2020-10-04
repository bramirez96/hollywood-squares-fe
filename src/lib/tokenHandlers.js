const tokenName = 'hollywoodSquaresToken';

export const write = (token) => localStorage.setItem(tokenName, token);
export const read = () => localStorage.getItem(tokenName);
export const clear = () => localStorage.removeItem(tokenName);
