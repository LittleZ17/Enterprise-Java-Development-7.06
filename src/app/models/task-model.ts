export class TaskItem {
  private _isDone: boolean;
  private _isPostponed: boolean;

  constructor(private _name: string) {
    this._isDone = false;
    this._isPostponed = false;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get isDone(): boolean {
    return this._isDone;
  }

  set isDone(isDone: boolean) {
    this._isDone = isDone;
  }
  get isPostponed(): boolean {
    return this._isPostponed;
  }

  set isPostponed(isPostponed: boolean) {
    this._isPostponed = isPostponed;
  }
}