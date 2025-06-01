# Don't Do That (돈두댓)

습관 개선을 위한 **하지 말아야 할 일** 기록 서비스

<br/><br/>

## 프로젝트 개요

- **프로젝트 기간**: 2024.07.13 ~ 2024.08.06
- **맡은 역할**: 기획, 디자인, 프론트엔드
- **배포 주소**: [**dont-do-that.vercel.app**](https://dont-do-that.vercel.app/)

<br/><br/>

## 프로젝트 배경

우리는 일상에서 해야 할 일은 쉽게 리스트로 만들지만, **하지 말아야 할 일**은 쉽게 잊거나 무시하기 쉽다.

<br/>

그러나 일상에서 **하지 말아야 할 일**은 우리의 행동 패턴과 생활 습관을 좌우하는 중요한 요소이다. 예를 들어, "늦잠 자기", "폭식하기", "핸드폰 오래 보기" 같은 행동은 알고는 있지만 반복되기 쉽고, 이를 자각하고 변화시키기 위해서는 **의식적인 기록과 피드백**이 필요하다.

<br/>

이런 문제의식에서 출발하여,

> “어떻게 하면 사람들이 나쁜 습관을 자각하고 고칠 수 있을까?”
> 
> 
> “하지 말아야 할 행동을 재미있고 지속적으로 기록하게 만들 수는 없을까?”
> 

에 대해 고민하게 되었고, 기록을 통해 행동을 되돌아보고, 반복하지 않도록 유도하는 서비스를 만들어보자는 목표로 이 프로젝트를 기획하게 되었다.

<br/><br/>

## 주요 기능

- 회원가입 / 로그인
- 고치고 싶은 습관 등록 / 수정 / 삭제 (일 단위)
- 친구 등록 및 방명록 작성 / 삭제
- 월간 습관 체크 개수에 따른 아이스크림 캐릭터 보상
- 마이페이지 (회원 정보 / 친구 관리 / 습관 개선 현황 확인)

<br/><br/>

## 사용 기술

| 분야 | 기술 스택 |
| --- | --- |
| **Frontend** | React, TypeScript |
| **상태 관리** | TanStack Query, Zustand |
| **스타일링** | Tailwind CSS |
| **폼 관리** | React Hook Form, Zod |
| **기타** | Vite, Vercel, Day.js, MSW |

<br/><br/>

## 폴더 구조

```
src/
├── assets            # 폰트 및 이미지
├── components/       # 공통 UI 컴포넌트
├── constants/        # 상수
├── hooks/            # 커스텀 훅
│   └── schema/       # 폼 스키마 및 훅
├── mocks/            # MSW 설정
├── pages/            # 라우트 단위 페이지
│   └── components/   # 각 페이지별 컴포넌트
├── services/         # API 함수, 쿼리키, 커스텀 훅
├── store/            # Zustand 상태 관리
├── styles/           # Tailwind 전역 스타일
├── types/            # 타입 선언
└── utils/            # 공용 유틸 함수
```

<br/><br/>

## 상세 화면
<img width="549" alt="스크린샷 2025-06-01 오후 6 26 20" src="https://github.com/user-attachments/assets/11823a46-face-429d-b2dd-eb2ebf7efb32" />
<img width="787" alt="스크린샷 2025-06-01 오후 6 28 42" src="https://github.com/user-attachments/assets/0d1b853c-2525-4363-a8bd-16a62924a51f" />
<img width="742" alt="스크린샷 2025-06-01 오후 6 29 15" src="https://github.com/user-attachments/assets/939bff76-a6c3-414f-9efe-855c6589e5c9" />
<img width="777" alt="스크린샷 2025-06-01 오후 6 29 29" src="https://github.com/user-attachments/assets/19934541-f1cc-44e8-b9ea-f17e4c1e0a3e" />
<img width="746" alt="스크린샷 2025-06-01 오후 6 30 21" src="https://github.com/user-attachments/assets/120dfa32-0202-4148-b1ad-47ffaf083901" />
