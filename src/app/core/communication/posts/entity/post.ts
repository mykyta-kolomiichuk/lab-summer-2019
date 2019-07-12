export class Post {
  constructor(
    public readonly userId: number,
    public readonly id: number,
    public readonly title: string,
    public readonly body: string,
  ) {}
}
