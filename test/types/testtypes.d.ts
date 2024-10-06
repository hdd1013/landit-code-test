declare module '*.png' {
  const value:string;
  export default value;
}

declare module '*.webp' {
  const value:string;
  export default value;
}

declare module '*.svg' {
  const value:string;
  export default value;
}

declare module '*.module.scss' {
  const classes:Record<string, string>;
  export default classes;
}
