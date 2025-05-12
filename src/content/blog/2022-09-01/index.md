---
title: React에 StoryBook 셋업하기!
summary: React 프로젝트에 Storybook을 설치하고 설정하는 방법
tags: [Web, React, Testing, StoryBook]
date: 2022-09-01
category: [React, Testing]
---

## Storybook install

storybook 설치

```ps
npm i @storybook/react
```

storybook init

```ps
npx storybook init
```

## Storybook setting

`stories/main.js`

```js
module.exports = {
  addons: ["@storybook/addon-essentials"],
  babel: async (options) => ({
    ...options,
  }),
  framework: "@storybook/react",
  stories: ["../src/**/*.stories.@(js|mdx)"],
  webpackFinal: async (config, { configType }) => {
    return config;
  },
};
```

위에는 storybook에서 제공하는 main.js configuartion 코드이다.

- addons - 스토리북에서 사용하는 bable로 치면 plugin같이 서드파티 혹은 다른 라이브러리와 상호작용하기 위한 목록

- babel - storybook build 시에 babel 구성

- webpackFinal - storybook build 시에 webpack 구성

- framework - 로딩 및 빌드 프로세스를 돕기 위한 프레임워크 구성

- stories - 스토리 파일의 위치

`button.stories.tsx`

```tsx
export default {
  title: "button",
  component: Button,
  argTypes: {
    label: {
      description: "overwritten description",
      table: {
        type: {
          summary: "something short",
          detail: "something really really long",
        },
      },
      control: {
        type: "text",
      },
    },
  },
};

export const Default = (props: BunttonProps) => {
  return <Button {...props}>Example</Button>;
};

Default.storyName = "Default";
Default.args = {
  color: "primary",
};
```

위와 같이 스토리를 생성한 컴포넌트로 기반으로 작성할 수 있으며, args로 초기 argument들을 정의할 수 있고,
argTypes를 통해 storybook 내에서 설정한 control을 사용해 props 값을 변경할 수 있다.
