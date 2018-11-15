# CSR vs SSR example

CSR(Client Side Rendering)과 SSR(Server Side Rendering) 방식 간단히 비교해보는 예제입니다.

## Setup

```
$ cd server
$ npm install
```

## Test

```
$ npm start
```

### SSR

- 브라우저에 다음 주소를 입력

```
localhost:3000/ssr
```

> 브라우저에서 Hello SSR! 화면 뜨면 테스트 성공

HTML 자체를 응답함

- TEST
```
$ curl localhost:3000/ssr
```

- 결과
```
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <p>Hello SSR!</p>
  </body>
</html>
```

### CSR

- 브라우저에 다음 주소를 입력

```
localhost:3000/csr
```

api 서버에서 데이터만 응답함

- TEST
```
$ curl localhost:3000/csr
```

- 결과
```
Hello CSR!
```

브라우저에서 클라이언트 파일을 열기
- client/index.html 파일을 브라우저에서 실행(드래그&드랍)

> 브라우저에서 Hello CSR! 화면 뜨면 테스트 성공

클라이언트에서는 정적 파일만 브라우저에 노출하고, 데이터는 외부 서버에서 가져오는 방식

