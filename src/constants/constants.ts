import { IImageCompProp, ISkill } from "@/types/type";

export const EXPERIENCED_SKILL_LIST: IImageCompProp[] = [
  {
    src: "html",
    text: "HTML",
  },
  {
    src: "css",
    text: "CSS",
  },
  {
    src: "js",
    text: "JS",
  },
  {
    src: "ts",
    text: "TS",
  },
  {
    src: "react",
    text: "React",
  },
  {
    src: "sass",
    text: "Sass",
  },
];

export const COLLABORATION_SKILL_LIST: IImageCompProp[] = [
  {
    src: "monday",
    text: "Monday",
  },
  {
    src: "slack",
    text: "Slack",
  },
  {
    src: "figma",
    text: "Figma",
  },
  {
    src: "jira",
    text: "Jira",
  },
  {
    src: "git",
    text: "git",
  },
];

export const HAVE_EXPERIENCE_SKILL_LIST: IImageCompProp[] = [
  {
    src: "react-native",
    text: "React-Native",
  },
  {
    src: "styled-components",
    text: "Styled-Components",
  },
  {
    src: "swr",
    text: "swr",
  },
  {
    src: "redux",
    text: "Redux",
  },
  {
    src: "react-query",
    text: "React-Query",
  },
  {
    src: "aws-amplify",
    text: "AWS-Amplify",
  },
];

export const EXPERIENCED_SKILL: ISkill = {
  title: "Experienced",
  items: EXPERIENCED_SKILL_LIST,
};

export const HAVE_EXPERIENCE_SKILL: ISkill = {
  title: "Have Experience",
  items: HAVE_EXPERIENCE_SKILL_LIST,
};

export const COLLABORATION_SKILL: ISkill = {
  title: "Collaboration tools",
  items: COLLABORATION_SKILL_LIST,
};

export const SKILL_LIST: ISkill[] = [
  EXPERIENCED_SKILL,
  HAVE_EXPERIENCE_SKILL,
  COLLABORATION_SKILL,
];

export const SIZE = {
  lg: 1024,
  md: 768,
  mob: 360,
} as const;
