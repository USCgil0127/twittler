// your code here

// DATA는 이미 작성된 트윗을 표시합니다.
console.log(DATA)

// generateNewTweet을 호출할 때마다 새로운 트윗을 생성합니다.
// 객체를 반환한다.
console.log(generateNewTweet());

function attachRandomTweet() {

let obj = generateNewTweet();

const liTag = document.createElement('li');

const containerDiv = document.createElement('div');
containerDiv.setAttribute( "class","flex-container" );


const nameDiv = document.createElement('div');
nameDiv.setAttribute("class", "name");
nameDiv.textContent = obj.user;

const dateDiv = document.createElement('span');
dateDiv.setAttribute("class", "date");
// dateDiv.textContent = obj.created_at;

// Advanced용 으로 시간대를 바꿔봄
dateDiv.textContent = obj.created_at_replace;

containerDiv.append( nameDiv, dateDiv );

const contentDiv = document.createElement('div');
contentDiv.setAttribute("class", "content");
contentDiv.textContent = obj.message;

liTag.append( containerDiv, contentDiv );

const ulTag = document.querySelector('ul');
ulTag.append( liTag );

DATA.push( obj );
}

attachRandomTweet();
attachRandomTweet();
attachRandomTweet();
attachRandomTweet();
attachRandomTweet();

// form에서 제출되는 데이터를 처리하자

const submitBtn = document.querySelector('form');
submitBtn.addEventListener( 'submit', (el) => { 
  el.preventDefault();
  console.dir(el);

  const inputBox = document.querySelectorAll('form>input');
  console.log(inputBox[0].value, inputBox[1].value);
  const userName = inputBox[0].value;
  const comment = inputBox[1].value;
  // const submitDate = new Date().format();
  // Advanced 용 시간 format
  const submitDate = dayjs( new Date().format()).fromNow();

  if( !inputBox[0].value.trim() || !inputBox[1].value.trim() ){
    alert("아이디와 댓글을 올바르게 채워주세요 😥");
    return;
  }

  const liTag = document.createElement('li');

  const containerDiv = document.createElement('div');
  containerDiv.setAttribute( "class","flex-container" );


  const nameDiv = document.createElement('div');
  nameDiv.setAttribute("class", "name");
  nameDiv.textContent = userName;

  const dateDiv = document.createElement('span');
  dateDiv.setAttribute("class", "date");
  dateDiv.textContent = submitDate;

  containerDiv.append( nameDiv, dateDiv );

  const contentDiv = document.createElement('div');
  contentDiv.setAttribute("class", "content");
  contentDiv.textContent = comment;

  liTag.append( containerDiv, contentDiv );

  const ulTag = document.querySelector('ul');
  // ulTag.append( liTag );
  ulTag.prepend( liTag );

  let obj = { user: userName, message: comment, created_at: submitDate };

  DATA.push( obj );

  inputBox[0].value = "";
  inputBox[1].value = "";

});

// 이제 유저 이름 클릭시 해당 작성자가 작성한 글만 볼 수 있게 하자
const ulTag = document.querySelector('#mainUL');
ulTag.addEventListener('click', (el) => { 
  // console.log(el);
  // console.log("It works");
  const clickedUser = el.target.closest(".name").textContent;
  console.log(clickedUser);

  const resultArr = DATA.filter( obj => obj.user === clickedUser ); 

  console.log(resultArr);

  makeClickedUserPage( resultArr );

});

function makeClickedUserPage( arr ){
  const ulTag = document.querySelector('#mainUL');
  ulTag.style.display = 'none';

  const newUlTag = document.createElement('ul');
  newUlTag.setAttribute("id", "secondpage");
  const mainTag = document.querySelector('main');

  for( let i = 0; i<arr.length; i++ ){

    const liTag = document.createElement('li');

    const containerDiv = document.createElement('div');
    containerDiv.setAttribute( "class","flex-container" );
   
    const nameDiv = document.createElement('div');
    nameDiv.setAttribute("class", "name");
    nameDiv.textContent = arr[i].user;
   
    const dateDiv = document.createElement('span');
    dateDiv.setAttribute("class", "date");
    
    // dateDiv.textContent = arr[i].created_at;
    
    // Advanced 시간 포맷
    dateDiv.textContent = dayjs( new Date( arr[i].created_at ).format()).fromNow();
   
    containerDiv.append( nameDiv, dateDiv );
   
    const contentDiv = document.createElement('div');
    contentDiv.setAttribute("class", "content");
    contentDiv.textContent = arr[i].message;
   
    liTag.append( containerDiv, contentDiv );

    newUlTag.append( liTag );

    mainTag.append( newUlTag );
  }
 
  const button = document.createElement('button');
  button.setAttribute( "id", "goback" );
  button.textContent = "Go Back";
  mainTag.append( button );

  // 해당 버튼은 이 함수가 작동해야만, 생성되기 때문에,
  // 이 안에다가 버튼의 addEventListener()를 넣어주었다.
  let gobackBtn = document.querySelector('button#goback');

  gobackBtn.addEventListener('click', () => {
    const newulTag = document.querySelector('#secondpage');
    // newulTag.style.display = 'none';
    newUlTag.remove();
  
    const ulTag = document.querySelector('#mainUL');
    ulTag.style.display = 'block';
  
    gobackBtn.remove();

  })
}

// 여기서는 아직 해당 버튼이 생성 되지 않았기 때문에,
// null 값으로 잡힌다.
// 왜냐면, 해당 버튼은 유저이름을 클릭한 뒤에야 만들어지기 때문에, 아직 그런 이벤트가 발생하지 상황에서는 짚어올 수가 없기 때문에 에러가 났다.
// 이 문제를 해결해주기 위해서 해당 이벤트가 발생한는 함수 안에 addEventListener()를 넣어주었다. 
// let gobackBtn = document.querySelector('button#goback');

// gobackBtn.addEventListener('click', () => {
//   const newulTag = document.querySelector('#secondpage');
//   newulTag.style.display = 'none';

//   const ulTag = document.querySelector('#mainUL');
//   ulTag.style.display = 'block';

//   gobackBtn.style.display = 'none';

// })