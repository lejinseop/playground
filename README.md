# 제품운영 어드민 클라이언트

제품운영 어드민 클라이언트 프로젝트입니다.

## Table of contents

- [환경별 도메인](#환경별-도메인)
  - [Development](#development)
  - [Test](#test)
  - [Production](#production)
- [Node version](#node-version)
- [Prepare](#prepare)
- [Excutation](#excutation)
- [Build](#build)
- [Deployment](#deployment)
- [Folder structure](#folder-structure)
  - [`.environments`](#environments)

## 환경별 도메인

### Development

https://dev-operation-admin.hwahae.co.kr

### Test

https://test-operation-admin.hwahae.co.kr

### Production

https://operation-admin.hwahae.co.kr

## Node version

<img
  alt="node:?"
  src="https://img.shields.io/badge/node-14-green.svg?style=flat-square"
/>

## Prepare

프로젝트 설정 방법입니다.

```sh
# Dependency install

yarn install
#or
yarn i
#or
yarn
```

## Excutation

프로젝트 환경별 실행 방법입니다.

```sh
# Local
yarn start:local

# Dev
yarn start:dev
```

## Build

프로젝트 환경별 빌드 방법입니다.

```sh
# development
yarn build:dev

# test
yarn build:test

# production
yarn build:prd
```

## Deployment

프로젝트 환경별 배포 방법입니다.

- development (상황에 따라서 feature branch가 배포될 수 있습니다.)

  1.  github Actions 탭으로 이동
  2.  .github/workflow/deploy-dev.yml로 이동
  3.  Run workflow에서 Run workflow 클릭

- test

  1. github Actions 탭으로 이동
  2. .github/workflow/deploy-test.yml로 이동
  3. Run workflow에서 Run workflow 클릭

- production

  1. github Actions 탭으로 이동
  2. .github/workflow/deploy-prd.yml로 이동
  3. Run workflow에서 Run workflow 클릭

## Folder structure

제품운영 어드민 클라이언트 프로젝트의 구조는 아래와 같이 구성되어 있습니다.

### `.environments`

환경별 환경변수를 정의하는 폴더입니다.

### `api-types`

api의 type이 정의되는 폴더입니다.

### `apis`

api가 정의되는 폴더입니다.

### `api-hooks`

정의된 api를 이용하여 react-query hook을 정의하는 폴더입니다.

### `theme`

제품운영 어드민의 전반적인 theme 설정들을 정의하는 폴더입니다.

### `components`

제품운영 어드민에서 사용되는 모든 component들을 정의하는 폴더입니다.

#### `components/atoms`

atoms는 물질의 기본 빌딩 블록입니다. 웹 인터페이스에 적용되며 atoms 폼의 텍스트 레이블, 인풋필드 혹은 버튼과 같은 HTML의 태그입니다.
atoms에는 컬러 팔레트, 폰트 그리고 애니메이션과 같은 인터페이스에서 보이지 않는 추상적인 요소가 포함되기도 합니다.

#### `components/molecules`

molecules는 atoms가 결합된 화합물의 가장 기본 단위입니다. 텍스트 레이블, 인풋 필드 그리고 버튼들로 이루어져있는 폼의 형태를 예로 들 수 있습니다.

#### `components/organisms`

organisms은 molecules을 결합한 형태입니다. organisms은 비교적 복잡하며 인터페이스에서 구분된 영역을 형성하는 서로 결합되어있는 molecules 그룹입니다.

#### `components/templates`

templates는 공통적으로 사용되는 Layout, Popup, ErrorScreen등의 범용적으로 사용할 수 있는 UI를 추상화 한 컴포넌트들을 정의하는 폴더입니다.

#### `components/screens`

화면에 보여지는 페이지의 가장 큰 단위인 `*Screen` 컴포넌트들을 정의하는 폴더입니다.

### `pages`

route 구조를 정의하는 폴더입니다.

### `svgs`

SVG componnet를 정의하는 폴더입니다.

### `libs`

`global constant`, `custom utility hook`, `utility function` 들을 정의하는 폴더입니다.

## Environment variables

제품운영 어드민 클라이언트에서 사용되는 환경변수는 다음과 같습니다.

```sh
REACT_APP_DEPLOY_ENV # 운영어드민 deploy 환경을 구분
REACT_APP_API_BASE_URL # 운영어드민에서 사용하는 API URL
REACT_APP_CLIENT_BASE_URL # 운영어드민 Client URL
REACT_APP_SHOPPING_BIZ_CENTER_BASE_URL # 쇼핑센터 URL
REACT_APP_LEGACY_HWAHAE_ADMIN_BASE_URL # legacy 화해 어드민 URL
```

## Development Guide

### 환경변수 추가하는 방법

### import 순서 정렬 방법

### API 추가하는 방법

### 새로운 페이지 개발하는 방법

### 컴포넌트 Styling 하는 방법

### global style 설정하는 방법

### typography theme 설정하는 방법

### palette theme 설정하는 방법

### 각 컴포넌트 theme 설정하는 방법

## 컴포넌트 Styling 방식

### 단순히 컴포넌트를 styling 할 때

```jsx
/** @jsxImportSource @emotion/react */

import { Button } from '@material-ui/core';
import type { ButtonProps } from '@material-ui/core';
import { css } from '@emotion/react';

const sampleButtonStyle = css`
  background-color: #e4f7ba;
`;

const SampleButton: FC = () => {
  return <Button css={sampleButtonStyle}>Sample Button</Button>;
};

export default SampleButton;
```

### 컴포넌트를 styling 하는데 theme 정보를 사용할 때

```jsx
/** @jsxImportSource @emotion/react */

import { Button } from '@material-ui/core';

import { css } from '@emotion/react';
import type { CustomTheme } from '~/theme';

const sampleButtonStyle = (theme: CustomTheme) => css`
  background-color: ${theme.palette.primary.main};
`;

const SampleButton: FC = () => {
  return <Button css={sampleButtonStyle}>Sample Button</Button>;
};

export default SampleButton;
```

### 컴포넌트를 styling 하는데 여러 스타일을 정의해야 할 때

```tsx
/** @jsxImportSource @emotion/react */

import type { FC } from 'react';

import { Button } from '@material-ui/core';

import { css } from '@emotion/react';
import type { CustomTheme } from '~/theme';

import CalendarIcon from '~/svgs/CalendarIcon';

const styles = {
  sampleButton: (theme: CustomTheme) => css`
    background-color: ${theme.palette.primary.main};
  `,
  calendarIcon: css`
    background-color: grey;
  `,
};

const SampleButton: FC = () => {
  return (
    <Button
      css={styles.sampleButton}
      endIcon={<CalendarIcon css={styles.calendarIcon} />}
    >
      Sample Button
    </Button>
  );
};

export default SampleButton;
```

### 컴포넌트를 styling 하는데 theme 정보도 쓰고 property도 사용할 때

```tsx
/** @jsxImportSource @emotion/react */

import type { FC } from 'react';

import { Button } from '@material-ui/core';

import { css } from '@emotion/react';
import type { CustomTheme } from '~/theme';

interface SampleButtonStyleProps {
  happyColor: string;
}

const sampleButtonStyle = (
  theme: CustomTheme,
  props: SampleButtonStyleProps,
) => css`
  background-color: ${theme.palette.primary.main};
  color: ${props.happyColor};
`;

const SampleButton: FC = () => {
  return (
    <Button
      css={(theme) => sampleButtonStyle(theme, { happyColor: '#D1B2FF' })}
    >
      Sample Button
    </Button>
  );
};

export default SampleButton;
```

### material-ui component classes를 override 할 때

[컴포넌트 API](https://material-ui.com/api/button/#css)를 참고하여 아래와 같이 override합니다.

```jsx
/** @jsxImportSource @emotion/react */

import { Button } from '@material-ui/core';

import { css } from '@emotion/react';

const sampleButtonStyle = css`
  background-color: #e4f7ba;

  & .MuiButton-label {
    color: #000;
  }
`;

const SampleButton: FC = () => {
  return <Button css={sampleButtonStyle}>Sample Button</Button>;
};

export default SampleButton;
```

위와 같은 방법으로 custom이 안될때는 [material-ui가 가이드 하는 방식](https://material-ui.com/components/tooltips/#customized-tooltips)으로 진행합니다.

아래 방식은 v5로 마이그레이션 후 [experimentalStyled](https://next.material-ui.com/system/basics/#3-custom-components)을 사용하도록 변경 될 예정입니다.

```tsx
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material/core/styles';
import type { CustomTheme } from '~/theme';

const useTooltipOverrideStyles = makeStyles((theme: CustomTheme) => ({
  tooltip: {
    backgroundColor: theme.palette.mint[500],
  },
}));

const SampleTooltip: FC = () => {
  const tooltipOverrideStylesClasses = useTooltipOverrideStyles;
  return (
    <Tooltip
      title={<>This is tooltip</>}
      classes={tooltipOverrideStylesClasses}
      arrow
    >
      <span>Tooltip sample</span>
    </Tooltip>
  );
};

export default SampleTooltip;
```
