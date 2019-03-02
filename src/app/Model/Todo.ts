export class Todo {
  name: string;
  content: string;

  constructor(name: string, content: string) {
    console.log('constructeur todo', name, content);
    this.name = name;
    this.content = content;
  }
}
