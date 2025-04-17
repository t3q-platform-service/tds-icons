# TDS Icons

- [SEED Design icons V2](https://github.com/daangn/seed-icon) 프로젝트를 기반으로 생성되었습니다.

### 적용

- 피그마에서 Icona 이용해서 Deploy 실행
- PR 생성 후 github action(`update-icons.yml`) 실행
  - 실행되는 github action은 `update-icons.yml` 파일입니다. 해당 스크립트는 아이콘 파일명 수정
  - 예, `icon/placeholder` -> `placeholder`
- PR 메인으로 머지
- `yarn generate:icona` 실행

### 세팅

- [세팅 과정 및 이슈 정리](https://www.notion.so/t3q/Icona-1205022eb50d41fdba1c05a9f456fcc9?pvs=4)

### 설정

- png, xml, pdf 등의 파일이 필요한 경우 `icona.ts`파일에서 `active: true`로 설정. `generate:icona` 실행 시 `icona.ts`의 `generate`함수 가 실행됩니다. 아이콘이 생성될때 옵션 수정이 필요하다면 해당 파일을 확인해주세요.

  ```ts
  const pngConfig: PNGConfig = {
    active: true, // 수정
    genMode: 'recreate',
    path: 'assets/png',
  };
  ```

### Icona 

- 피그마 플러그인 Icona 설치
- Icon이 있는 피그마 페이지에서 Icona 실행
- Icona > Setting에 아래 값 입력 
  | Key | Value |
  | ------ | ----------- |
  | Github Repository URL   | https://github.com/t3q-platform-service/tds-icons |
  | Github API Key | 담당자에게 문의 |
- Icona > Setting에서 Deploy 실행
