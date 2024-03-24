export interface IHeading {
  id: string;
  title: string;
}

export interface IImageCompProp {
  src: string;
  text: string;
}

export interface ISkill {
  title: string;
  items: IImageCompProp[];
}

export interface IProject {
  name: string;
  detail: string[];
  skills: string[];
}
