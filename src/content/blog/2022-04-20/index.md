---
title: JavaScript 코드의 실행과정
summary: JavaScript 엔진의 코드 실행 과정과 실행 컨텍스트에 대한 상세 설명
tags: [JavaScript]
date: 2022-04-21
category: [JavaScript]
---

# JavaScript의 실행과정

1. 처음 브라우저에서 서버에서 클라이언트 코드를 요청하여 HTML 코드를 읽으며 `<script>` 태그를 이용한 JavaSript(편의상 JS) 코드와
   `OnClick`과 같은 JS 코드가 포함된 속성들을 브라우저의 JS 엔진으로 보낸다.

2. JS는 스크립트를 실행하기 위해 실행 컨텍스트(Execution Context)를 생성한다.

3. JS는 단일 스레드의 특성 상 Execution Stack을 쌓게 된다. GEC(Global Execution Context)가 가장 먼저 쌓이고 그 후로 FEC(Funtion Execution Context)들이 쌓이게 된다.

4. Stack에 쌓인 실행 컨텍스트들이 실행 되고 Pop처리가 되고,
   실행된 컨텍스트는 JS엔진에서 활성 실행 컨텍스트가 된다.

---

## Execution Context (EC)

실행 과정들을 과정을 정확히 이해하기 위해서는 Execution Context에 대한 설명이 필요하다.

EC는 scope, hoisting, this, closure 등의 동작 원리를 담고 있는 자바스크립트의 핵심 원리이다.

Execution Context는 세 가지 종류가 있다.

- Global Execution Context

- Function Execution Context

- Eval Execution Context (하지만 보안 문제로 인해 eval 코드를 절대 사용하지 말 것으로 권고하며, 설명에서도 넘어가도록 한다.)

## Global Execution Context (GEC)

3번 과정에서 Stack을 쌓게될 때 가장 먼저 GEC를 쌓게 된다. 모든 JS 파일은 하나의 GEC만이 존재할 수 있으며, `함수 내부에 없는 전역으로 사용할 수 있는 JS 코드`가 실행되는 컨텍스트이다.

## Function Execution Context (FEC)

함수가 호출될 때 마다 JS 엔진이 GEC 내에서 FEC를 생성한다. 함수마다 고유한 FEC를 만들게 되며, 여러개의 FEC가 존재할 수 있다.

---

## Execution Context의 생성 과정

EC는 다음과 같은 과정으로 생성된다.

## 생성 단계

EC는 생성 단계를 거치며 `Lexical Environment component`와 `VariableEnvrionment component`를 생성하게 된다.

## Leximal Envrionment (LE)

LE는 변수와 함수와 같은 실체 객체의 매핑을 보유하는 Component이다.

예를 들어 아래와 같은 코드가 있다면

```javascript
var a = 20;
var b = 40;

function example() {
  console.log("test");
}
```

LE는 아래와 같은 형태로 만들어진다.

```javascript
LE = {
  a: 20,
  b: 40,
  example: <ref, to example function>
}
```

또한, LE는 3가지의 구성요소를 가지고 있는데

**Environment Record**

변수 및 함수 선언이 LE 내부에 저장되는 곳이다.  
`Declartive Environment Record (변수 및 함수 선언을 저장하는 레코드)`  
`Object Environment Record (브라우저의 창 객체를 저장하는 레코드)`  
이렇게 두가지의 레코드 구조를 가지고 있다.

**Reference to the outer environment**

이름에서 말하 듯이 외부 환경에 대한 참조이며, 외부 환경 내부의 변수를 찾을 수 있게한다.

**This Binidng**

우리가 익히 알고있는 this 속성이다.  
GEC에선 이건 통상 (window)를 뜻한다. 아래는 GEC의 this 호출과 FEC의 this 호출의 차이다.

```javascript
const FEC = {
  m: 100,
  n: 50,
  calc: function () {
    console.log(this.m - this.n);
  },
};

FEC.calc();
// 50이 콘솔에 적히며, calc은 FEC 객체를 참조하기 때문에 this 함수로 FEC 내의 m과n을 참조하게 된다.

const GEC = FEC.calc;
GEC();
// NaN이 출력되며 여기서 calc에서 this는 전역으로 적힌 m과 n을 찾게 되는데 선언된 변수가 없기 때문에 NaN이 출력되게 된다.
```

## Variable Environment (VE)

위에서 정의한 Leximal Environment에서 기술한 구성요소를 모두 가지고 있으며, LE와의 차이점은 LE는 `함수 선언과 변수(let, Const)` 바인딩을 저장하고, VE는 `Var` 형식의 바인딩만을 저장하는데 사용된다.

## 실행 단계

이 단계에서는 모든 변수에 대한 할당이 완료되고, 코드가 최종적으로 실행된다.

아래와 같은 JS가 작성되었을 때

```javascript
let a = 1;
const b = 2;
var c;

function multiple(e, f) {
  var g = 20;
  return e * f * g;
}

c = multiply(20, 30);
```

GEC의 실행단계 까지 과정은 이렇다.

`생성 단계`

```javascript
  GEC = {
    LexicalEnvrionment:{
      EnvironmentRecord: {
        Type: "Object",
        a: uninitalized,
        b: uninitalized
        multiply: <func>
      },
      outer: null,
      ThisBinding: <Global Object>
    },

    VariableEnvironment:{
      EnvironmentRecord: {
        Type: "Object",
        // Identifier bindings go here
        c: undefined,
      },
      outer: <null>,
      ThisBinding: <Global Object>
    }
  };
```

`실행 단계`

```javascript
GEC = {
  LexicalEnvironment: {
      EnvironmentRecord: {
        Type: "Object",
        // Identifier bindings go here
        a: 20,
        b: 30,
        multiply: < func >
      }
      outer: <null>,
      ThisBinding: <Global Object>
    },
  VariableEnvironment: {
      EnvironmentRecord: {
        Type: "Object",
        // Identifier bindings go here
        c: undefined,
      }
      outer: <null>,
      ThisBinding: <Global Object>
    }
  }

```

아래는 multiply 함수가 실행되며 만들어진 FEC의 실행과정이다.

`생성 과정`

```javascript
FunctionExectionContext = {
  LexicalEnvironment: {
      EnvironmentRecord: {
        Type: "Declarative",
        // Identifier bindings go here
        Arguments: {0: 20, 1: 30, length: 2},
      },
      outer: <GlobalLexicalEnvironment>,
      ThisBinding: <Global Object or undefined>,
    },
  VariableEnvironment: {
      EnvironmentRecord: {
        Type: "Declarative",
        // Identifier bindings go here
        g: undefined
      },
      outer: <GlobalLexicalEnvironment>,
      ThisBinding: <Global Object or undefined>
    }
}
```

`실행 과정`

```javascript
FunctionExectionContext = {
  LexicalEnvironment: {
      EnvironmentRecord: {
        Type: "Declarative",
        // Identifier bindings go here
        Arguments: {0: 20, 1: 30, length: 2},
      },
      outer: <GlobalLexicalEnvironment>,
      ThisBinding: <Global Object or undefined>,
    },
  VariableEnvironment: {
      EnvironmentRecord: {
        Type: "Declarative",
        // Identifier bindings go here
        g: 20
      },
      outer: <GlobalLexicalEnvironment>,
      ThisBinding: <Global Object or undefined>
    }
}
```

함수가 완료된 후의 반환 값은 내부에 저장되게 된다. 따라서 GEC가 업데이트 된다.

## 끝 맺으며

오늘은 Javascript의 내부적인 동작 과정에 대해 기술했다.  
 모든 개념을 알아둘 필요는 없을 것 같지만, 전체적인 개념을 충분히 이해하면 Closer, Hoisting(let,const 등장 이후로 쓸일은 없지만...), Scope 등의 개념을 이해하기 훨씬 수월할 것 같다.
