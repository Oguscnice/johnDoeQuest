export interface Hero {
  imageUrl: string;
  title: string;
  age: number;
  description: string;
  testAffiche: boolean;
  onGetHasbulled(): void;
}