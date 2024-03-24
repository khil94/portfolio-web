import { IImageCompProp, IProject, ISkill } from "@/types/type";

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

export const PROJECT_LIST: IProject[] = [
  {
    name: "보험 추천 어플리케이션 개발/유지보수",
    detail: [
      "사용자의 보험상황을 분석하여 보험을 추천해주는 어플리케이션 개발",
      "기존 코드 유지보수 및 신규기능 개발을 담당",
      "React-Native 기반의 하이브리드 어플리케이션 서비스",
      "Redux는 사용하지 않고 react context로 전역변수 관리",
    ],
    skills: ["React-Native", "Javascript", "Axios", "Styled-Components"],
  },
  {
    name: "보험 추천 웹 서비스 개발",
    detail: [
      "React + Typescript 기반 보험 추천 웹 서비스 개발",
      "기존 서비스가 Js를 기반으로 개발을 하여 버그핸들링에 애로사항을 느껴 Ts로 변경하여 개발",
      "전반적인 화면및 기능개발",
    ],
    skills: ["React", "Typescript", "Axios", "Styled-Components"],
  },
  {
    name: "로보어드바이저 서비스 모니터링을 위한 어드민 페이지 개발",
    detail: [
      "사내 서비스로 개발중이던 로보어드바이저의 어드민 페이지의 개발을 담당",
      "서비스 전반과 시뮬레이션 화면을 담당",
      "그래프는 우선은 Nivo 차트를 이용. 데이터가 복잡해지는 추후에는 유료 라이브러리 도입예정이었음",
    ],
    skills: ["React", "Typescript", "Axios", "emotion", "Nivo"],
  },
  {
    name: "Lolstat.net",
    detail: [
      "게임 League of Legneds 의 전적을 검색 / 확인할 수 있는 웹 사이트의 개발",
      "riot사에서 제공하는 api를 활용한 사이트",
      "AWS Amplify를 통한 배포",
      "프로젝트의 FE전체를 담당",
      "상세내용은 https://victorious-lyric-b3b.notion.site/Lolstat-net-aba231e30c5448a08fb7653b45455d20 ",
    ],
    skills: ["React", "Typescript", "Axios", "Scss", "Vite", "swr"],
  },
] as const;
