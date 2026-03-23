declare module 'aos' {
  interface AOS {
    init(options?: {
      duration?: number;
      once?: boolean;
      offset?: number;
      easing?: string;
      delay?: number;
      [key: string]: any;
    }): void;
    refresh(): void;
    refreshHard(): void;
  }

  const AOS: AOS;
  export default AOS;
}
