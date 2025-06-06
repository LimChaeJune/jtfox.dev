---
title: "Saige Vision V2"
company: "Saige"
startDate: "2024-01-15"
domain: "AI"
summary: "AI VISION 솔루션인 Saige Vision의 차세대 버전인 V2 개발에 참여했습니다."
image: "/images/projects/saigevision.png"
technologies: [React, Electron, TypeScript, Xstate, Vite, Emotion, Storybook]
link: "https://saige.ai/kr/solutions/vision"
---

SaigeVision의 후속 제품 개발 프로젝트에 참여해서, 검사 자동화를 위한 올인원 솔루션을 개발했어요.

- **아키텍처 개선:** 기존 제품의 데이터셋과 프로젝트 간 의존성을 제거해서, 각 부분을 독립적으로 관리할 수 있도록 만들었어요.
- **사용자 경험 향상:** 라벨링 편의 기능을 강화해서 데이터 구축에 들어가는 리소스를 줄이는 데 기여했고요.
- **확장성 설계:** Developer 에디션부터 Enterprise 에디션까지 확장할 수 있는 유연한 구조를 고민했어요. 특히 딥러닝 기반 프로젝트에서도 핵심 기능을 다시 쓸 수 있도록 라벨링 기능을 모듈로 만들어 개발했죠.
- **상태 관리 최적화:** 7개나 되는 주요 모듈로 이루어진 복잡한 사용자 흐름을 안정적으로 관리하기 위해, State Management 설계에도 많은 고민과 노력을 담았어요.

회사 여러 제품군에 일관된 UI/UX를 제공하고 개발 생산성을 높이려고 디자인 시스템을
만들었어요. 이걸로 중복 개발을 최대한 줄이고 유지보수 비용도 아낄 수 있었고요, 디자이너랑
개발자 사이에 편하게 의견을 주고받는 피드백 창구를 만들어서 프로젝트 효율도 높였어요.

- **일관된 UI/UX:** 다양한 제품군에 일관된 UI/UX를 적용해서 중복 개발을 최대한 줄이고 유지보수 비용도 아낄 수 있도록 했어요.
- **효율적인 소통:** 디자이너와 개발자 사이에 편하게 의견을 주고받는 피드백 창구를 만들어서 프로젝트 효율도 높였고요.
- **브랜드 정체성:** 개발 속도와 안정성을 높이려고 MUI를 한번 감싸서 사용했고, style override로 저희 회사 브랜드 정체성을 담은 컴포넌트를 만들었어요.
- **체계적인 설계:** Atomic Design 방법론을 도입해서, 가장 작은 단위인 Atom 레벨부터 디자인 토큰을 정하고 이걸 상위 컴포넌트까지 일관되게 적용했어요. 덕분에 컴포넌트를 다시 쓰고 유지보수하기 훨씬 편하게 만들 수 있었죠.

개발 속도랑 안정성을 높이려고 MUI를 한번 감싸서 사용했고, style override로 저희 회사 브랜드 정체성을 담은 컴포넌트를 만들었어요. Atomic Design 방법론을 써서 atoms, molecules, organisms 단위로 체계적인 구조를 설계했고요.

가장 작은 단위인 Atoms 단계에서 디자인 토큰을 정하고 위쪽 컴포넌트까지 일관되게 적용해서, 컴포넌트를 다시 쓰고 유지보수하기 훨씬 편하게 만들었어요.

제품 배포 자동화 파이프라인을 만들어서 개발자 경험(DX)도 향상시켰어요.
하나하나 손으로 하던 과정들을 자동화해서 반복적인 일을 줄이고 실수할 가능성도 낮췄고요.

덕분에 배포 시간을 30분 넘게 줄였고, 특정 사람만 하던 배포 작업을 표준화해서 팀원 누구나 쉽게 배포할 수 있게 개선했어요. 이걸로 개발 생산성도 높이고, 새로 오신 팀원분들이 OJT 문서를 보면서 코드 레벨 문서까지 정리하는 데 도움을 드려서, 배포 때문에 생기는 부담을 덜고 진짜 중요한 핵심 기능 개발에 더 집중할 수 있게 되었어요.

## 디자인 시스템

Atomic Design 방법론을 써서 컴포넌트를 atoms, molecules, organisms 단위로 나눠서 다시 쓰고 유지보수하기 좋게 디자인 시스템을 만들었어요.

- atoms 컴포넌트 레벨에서 props로 다양한 모습(variants)이랑 상태(states)를 조절할 수 있게 해서 엄청 유연하게 쓸 수 있도록 했어요.
- MUI의 props 타입을 확장해서, color, size, variant 같은 곳에 저희만의 커스텀 토큰을 정했어요. 이걸로 디자인 시스템 전체적으로 타입은 안전하게 지키면서도 브랜드 고유의 스타일이랑 기능을 한결같이 적용할 수 있었어요.
- 그리고 브랜드 정체성을 담으려고, style override 기술을 적극적으로 써서 회사 고유의 브랜드 느낌을 디자인 시스템 전체에 일관되게 반영했어요.
- Storybook을 도입해서 컴포넌트를 어떻게 쓰고 눈으로 봤을 때 어떤 결과가 나오는지 명확하게 문서로 만들었어요.
- 디자이너분이 의도한 거랑 실제 개발 결과물 사이에 차이가 나는 걸 효과적으로 줄였고, 팀 안팎의 관계자분들께 확실한 시각적인 참고 자료를 제공해서 편하게 소통하고 협업하는 데 도움이 되었어요.
- 여러 가지 모양의 폼을 유연하게 쓸 수 있도록, 컴포지션 패턴으로 폼 구조에 대한 데이터를 받으면 거기에 맞게 컴포넌트를 조합해서 화면에 보여주는 방식으로 구현했어요.

## DX 개선

### 번들링 도구 개선

앱 규모가 커지면서 콜드 스타트 시간이랑 빌드 시간이 점점 늘어나는 문제도 있었고, 개발 서버 켜는 속도랑 전체 빌드 시간을 줄여서 개발 생산성을 높이려고 Webpack 환경에서 Vite로 옮겨갔어요.

### 배포 자동화

저희 제품이 온프레미스 기반이라서 따로 배포 서버 없이 NAS(Network Attached Storage)로 클라이언트 패키지를 전달하고, 백엔드 쪽에서 그 패키지로 인스톨러를 만들어서 고객사에 드리는 방식이었어요.

이 과정이 tag 만들고 → webpack 빌드하고 → Electron 패키징하고 → NAS에 올리고... 이렇게 손으로 하는 일이 많아서 반복적이고 실수할 가능성도 컸고요, 새로 오신 팀원분들이 익히기에도 좀 어려웠어요.

처음에는 스크립트를 써서 자동화했었는데, 관리하기도 어렵고 다시 쓰기도 좀 그랬어요.
게다가 외부 해킹 사고 때문에 SFTP 접속이 막혀서 NAS에 접근하려면 직접 NAS에 연결해서 파일을 올려야 하는 번거로움도 있었고, 올리는 데 시간도 엄청 오래 걸렸어요.

Jenkins에서 Electron 빌드랑 NAS 연결 관련 hook을 제공하는 걸 확인하고, 아래처럼 CI/CD 파이프라인을 만들었어요.

- Git tag 만드는 걸 감지해서 자동으로 빌드를 시작.
- 릴리즈 노트도 자동 작성.
- Electron 기반 클라이언트 패키지를 빌드하고 압축.
- net use 명령어로 NAS 네트워크 드라이브를 연결하고 후 파일 업로드.
- 파일 올리기가 끝나면 드라이브 연결을 해제.
- 마지막으로 Teams 채널로 배포 완료 알림.
- 이렇게 반복적인 손길이 가던 일들을 Jenkins Pipeline으로 대신해서, 배포 시간을 30분 넘게 줄일 수 있었어요.
- 특정 사람(본인)만 하던 배포 작업을 표준화하고 자동화해서 팀원 누구나 쉽게 배포할 수 있게 만들었어요.

## 타입 안정성 강화 및 폼 개발 효율화

### 도입 배경

제품 특성상 Stepper가 들어가는 복잡한 폼 입력이 많았어요. 이걸 데이터 유효성 검증 로직이랑 타입 정의가 안 맞는 문제를 해결해서 개발 생산성이랑 코드 안정성을 높이고 싶었어요.

### 단축키

라벨링 생산성을 높이려고 여러 가지 키보드 단축키 기능이 필요했어요.
입력 필드, 다이얼로그, 버튼 같은 활성화된 요소 상태에 따라서 단축키 동작을 조절하고, 이벤트 리스너를 하나하나 손으로 관리하는 건 복잡하고 실수할 가능성도 높았고요.

단축키 조합, 콜백, 타겟(window, page) 같은 걸 추상화한 훅을 만들어서, 훅 안에서 컴포넌트 생명주기에 맞춰 이벤트 리스너를 자동으로 붙였다 뗐다 하면서 메모리가 새는 걸 막았어요.
그리고 입력 필드, 다이얼로그, 버튼이 활성화됐을 때는 단축키를 기본적으로 막고, 특별한 경우에만 동작하도록 로직을 만들었어요.

또, ImmdediatePropagation 옵션을 만들어서 특정 키(Esc, Enter, Tab)는 이벤트 전파를 허용하거나 막을 수 있게 했어요.

## ErrorBoundary

- 앱 규모가 점점 커지면서 런타임 에러가 났을 때 전체 UI가 멈춰버리는 문제를 막고, 여기저기 흩어져 있는 에러 처리랑 로깅 로직 때문에 개발하거나 운영할 때 비효율적인 걸 개선할 필요가 있었어요.
- 하나하나 try...catch 쓰고 로깅 코드 짜는 걸 줄이고, 에러 처리를 좀 더 선언적으로 관리하고 싶었어요.
- 앱 전체적으로 일관된 방식으로 에러를 처리하고 로그를 남기는 정책을 강제해서 코드 품질이랑 유지보수성을 높였어요.

## State Managamenet

7개 프로젝트의 복잡하고 많은 사용자 흐름을 관리할 때 Redux-Saga를 썼더니 암시적인 상태 문제, 보일러플레이트 코드, 동시성 관리 같은 문제가 생겨서 XState를 도입했어요.

- 각 플로우를 명시적인 상태 차트로 모델링하고 Actor 모델을 통해 동시성 관리. 이를 통해 상태 예측 가능성 증대, 코드 복잡도 감소, 안정성 및 유지보수성 향상. 복잡한 플로우 로직의 시각화(Xstate Visualization) 및 팀 내 커뮤니케이션 효율 개선.

- ContextAPI를 통해 서버 데이터와 컴포넌트 State 관리 분리.
- zod를 사용하여 각 폼 필드의 데이터 타입, 필수 여부, 형식(이메일, 숫자 범위 등) 및 커스텀 유효성 검증 규칙을 선언적 스키마로 정의.
- zod 스키마로부터 TypeScript 타입을 자동 추론, 프로젝트별로 상이한 스키마에 대한 타입 안정성 확보.
- @hookform/resolvers/zod를 사용하여 zod 스키마를 react-hook-form과 연동. Controller 컴포넌트로 전체 폼 리렌더링 방지, debounce 기법 등을 적용하여 제어 컴포넌트 사용 시 성능 저하 완화.

## Canvas 개발

**Image Viewer**
캔버스 기반의 DrawingEditor 컴포넌트를 독립적으로 개발해서 라벨링 뷰어랑 통합했어요.

Core(핵심 렌더링 및 도형 관리), Controller(사용자 입력 및 상태 제어), Util(데이터 형식 컨버팅 및 관리) 구조로 모듈을 나눠서 관심사를 분리하고 Class 형태로 구현했어요.
폴리곤 클리핑, 합집합, 교집합 같은 기하학적인 연산은 어디서든 쓸 수 있게 만들었고요.

### 단축키

라벨링 생산성을 높이려고 여러 가지 키보드 단축키 기능이 필요했어요.
그런데 입력 필드, 다이얼로그, 버튼 같은 활성화된 요소 상태에 따라서 단축키 동작을 조절하고, 이벤트 리스너를 하나하나 손으로 관리하는 건 복잡하고 실수할 가능성도 높았어요.

단축키 조합, 콜백, 타겟(window, page) 같은 걸 추상화한 훅을 만들어서, 훅 안에서 컴포넌트 생명주기에 맞춰 이벤트 리스너를 자동으로 붙였다 뗐다 하면서 메모리가 새는 걸 막았어요.

그리고 입력 필드, 다이얼로그, 버튼이 활성화됐을 때는 단축키를 기본적으로 막고, 특별한 경우에만 동작하도록 로직을 만들었어요. 또, ImmdediatePropagation 옵션을 만들어서 특정 키(Esc, Enter, Tab)는 이벤트 전파를 허용하거나 막을 수 있게 했어요.
