# 학습

- Git을 이용한, 개발소스 형상관리하기
- GitHub 저장소와 연동하기
- GitHub Actions을 이용한, CI 지속적 배포 해보기
  - GitHub Push시, 자동으로 Docker 이미지 빌드 후 배포
- Dockerfile 작성
- docker-compose.yml을 작성을 통한, 통합적 어플리케이션 컨테이터 작업 관리하기
  
### 구성

- local 환경에서 소스 수정 
- local 환경에서 테스트 완료한 소스 GitHub Push
- GitHub Actions가 자동으로 Push 감지 후, Docker 이미지 빌드
- 빌드가 완료된 이미지 Docker Hub에 Push
- 추후에 PROD 환경에 SSH 접근 후, 이미지 Pull 처리 후, 서버 실행