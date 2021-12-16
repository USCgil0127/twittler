# Sprint - Twittler 

이제 JavaScript를 이용해서 Twitter가 실제로 작동되도록 만들어봅니다. Interactive web application을 만들면서 Front-end 개발의 전반적인 과정을 연습할 수 있는 좋은 기회입니다.

#### Getting Started

1. repo 구조를 파악합니다.
   - index.html이 불러오는 파일은 어떤 파일들이 있나요?
2. index.html 파일을 브라우저로 열어봅니다.
3. script.js 내에 작성된 스크립트 파일이 잘 실행되고 있는지 확인하세요.
   - DATA 변수는 어디에 정의되어 있나요?
   - generateNewTweet() 함수는 어디에 정의되어 있나요?
4. data.js 에는 트윗 목록이 담긴 DATA라는 변수, 그리고 Twittler 작성에 도움이 될만한 유틸리티 함수들이 있습니다. 각 변수 및 함수의 목적이 무엇인지 파악하세요.
> data.js 파일에 정의된 변수 및 함수는 script.js 에서도 사용할 수 있습니다.
이는 스크립트 로딩 및 실행 순서에 따른 작동입니다.

### Bare Minimum Requirements
1. 하드코딩되어있던 트윗 대신에, JavaScript에 담긴 이미 작성되어 있는 트윗들을 보여주세요.
> DATA라는 변수를 이용하세요. 또는, 무작위로 트윗을 생성하는 함수를 이용할 수도 있습니다.

2. 언제 트윗들이 만들어졌는지에 대한 timestamp를 보여주세요. 이 timestamp는 트윗이 작성된 실제 시간을 반영해야하며 하드코딩되지 않아야합니다.
![](https://images.velog.io/images/gil0127/post/125e2c88-86ee-4257-a52b-b3bc0cbdcd7c/555555555555555555555.png)

3. 트윗을 작성하고 제출하면, 목록에 신규 트윗이 추가될 수 있게 하세요.

   - 단순히 DOM을 이용해 화면에 표시되는 것으로 충분하지 않습니다. 새 트윗이 추가되면 DATA 변수에도 새 트윗 객체가 추가되어야 합니다.
   - 아래 스크린샷을 참고하세요. 화면에 표시되는 트윗과, DATA 배열의 항목이 일치하는 것을 확인할 수 있습니다.
   ![](https://images.velog.io/images/gil0127/post/73385950-8de5-41fc-a4c6-0be1fe5f2182/aaaaaaa.png)
4. 트윗 작성자의 이름을 클릭하면 해당 작성자로만 필터링하여, 해당 타임라인을 볼 수 있도록 하세요.
![](https://images.velog.io/images/gil0127/post/85ecbd1e-2724-4420-9030-8ad82ec52ea8/bbbbbbbbbbbbbbbbbb.gif)
> `<div>ingikim</div>` 엘리먼트를 클릭하면, 콘솔에 `ingikim`이라는 텍스트를 출력하는 것부터 시작해보세요.
클릭이벤트가 일어나면 이벤트의 target 속성을 이용해 DATA 배열에서 해당 작성자의 트윗만 필터링 할 수 있습니다.
또한 DOM에 필터링된 트윗을 화면에 표시할때는 이미 화면에 있는 트윗들을 지우고 새로 렌더해야합니다.

#### 몇가지 제약

1. 다음과 같이 HTML에 직접 onclick attribute를 사용하지 마세요.
   - `<div onclick="doSomething()"></div>`
2. 이름으로 트윗 목록을 필터링할 때에, 새로운 페이지로 전환되는 것이 아닙니다. 오직 index.html 안에서만 이루어집니다. 
   - > 이렇게 한 페이지 안에서 JavaScript를 이용해 모든 화면 구현을 하는 것을 가리켜 Single Page Application(SPA)이라고 부릅니다.
   
### Advanced Challenges
- 트윗이 언제 만들어졌는지 인간 친화적인 방식(e.g. "10분 전")으로 보여주세요. 이를 위해 라이브러리를 찾고 사용해야 할 것입니다.

- 이 Web app은 새로고침하면 새로 작성한 트윗이 전부 리셋되는 한계를 가지고 있습니다. 이를 위해서는 우리는 (Node.js와 같은) Server-side 기술을 익혀야 하지만, 지금은 단순히 [Web Storage](https://html.spec.whatwg.org/multipage/webstorage.html)라는 기술을 이용해서 Client의 저장소에 트윗 내용을 저장할 수도 있습니다. 이에 대해 궁금하다면, 다음 문서를 참조하여 Local Storage 사용법을 익히고, 여러분의 Twittler에 적용해 보십시오.
   - [How to Use Local Storage with JavaScript](https://www.taniarascia.com/how-to-use-local-storage-with-javascript/) 
   

------------------
