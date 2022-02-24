//! Object Literal 생성
  //* Object Literal : 중괄호 안에 프로퍼티와 메소드를 정의하는 것만으로도 객체를 생성할 수 있다.
  //* 세가지 방법 : Factory function / Constructor function / Class



//! 기본적인 객체형 변수 만들기

const user1 = {
  email: 'bin11788@gmail.com',
  birthdate: '1990-02-07',
  buy(item) {
    console.log(`${this.email} buy ${item.name}`);
  },
}

const item = {
  name: '스웨터',
  price: 30000,
}

console.log(user1.email);
console.log(user1.birthdate);
user1.buy(item);



//! Factory Function(createUser function) : 객체를 생성해서 리턴하는 함수

function createUser(email, birthdate) {
  const user = {
    email: email,
    // email property:  email parameter;
    birthdate,
    // birthdate property와 parameter의 값이 같으면 다음과 같이 생략할 수 있다.
    buy(item) {
      console.log(`${this.email} buy ${item.name}`);
    }
  }
  return user;
}

console.log(typeof createUser)    // function
console.log(typeof createUser())  // object

const user2 = createUser("bin1178@naver.com", "1992-07-2");
const user3 = createUser("asdkkd8@naver.com", "1989-02-22");
const user4 = createUser("bias2378@naver.com", "1991-04-10");

console.log(user1.email)
console.log(user2.email)
console.log(user3.email)

user1.buy(item)
user2.buy(item)
user3.buy(item)



//! Constructor Function (생성자 함수)
  //* 꼭 new를 붙여서 호출해야 객체를 생성할 수 있다.
  //* 함수의 이름중 첫번째 글자는 대문자로 해야한다(관습임)


function User(email, birthdate) {
  this.email = email;
  // 여기서 this는 생성되는 객체를 나타낸다
  this.birthdate = birthdate;
  this.buy = function (item) {
    console.log(`${this.email} buy ${item.name}`);
  }
}

//* 함수 앞에 new를 붙이고 호출해서 객체 호출하기

const user5 = new User("bsdkj123@gmail.com", "1989-02-12");
const user6 = new User("bsdkj123@gmail.com", "1989-02-12");
const user7 = new User("bsdkj123@gmail.com", "1989-02-12");
console.log(user5.email);
console.log(user5.birthdate);
user5.buy(item);





//! class function
  //* ES6에 추가된 객체지향 프로그래밍 방법
  //* 보통 프로퍼티의 경우 constructor 안에 정의하고, 메소드의 경우 constructor 밖에 정의합니다.
  //* constructor function과 동일 하게 new를 붙이고 함수를 호출하여 객체를 호출한다.


class MakeUser {
  constructor(email, birthdate) {
    // constructor function : 생성자 함수
    this.email = email;
    this.birthdate = birthdate;
  }

  buy(item) {
    // 메소드는 constructor function 밖에 써준다
    console.log(`${this.email} buy ${item.name}`);
  }

  //* setter method
  set email(address) {
    // setter method
    if (address.includes('@')) {
      this._email = address;
    } else {
      throw new Error('invalid email address');
    }
  }

  //* getter method
  get email() {
    return `Email address is ${this._email}`;
  }
}

const user8 = new MakeUser('class1@naver.com', '1992-04-29');
console.log(user8.email);
console.log(user8.birthdate);
user8.buy(item);

const user9 = new MakeUser('class2@naver.com', '1990-02-10');
console.log(user9.email);
console.log(user9.birthdate);
user9.buy(item);


//! 캡슐화 : 객체의 특정 프로퍼티에 직접 접근하지 못하도록 막는 것.
  // 객체를 사용하는 사람이 객체의 프로퍼티에 이상한 값을 할당 하는 것을 막을 수 있고,
  // 이를 통해 프로그램의 안전성을 높일 수 있다.

//* setter method
// user9.email = 'young bin'; '@'이 포함되지 않은 이메일을 할당 할 경우 에러 메세지 발생
user9.email = 'bin11788@gmail.com'
console.log(user9._email);  // 'bin11788@gmail.com'
// 제대로된 이메일을 새로 할당 할 경우 _email에 새로 할당 된다.


//* getter method

console.log(user9.email);  // 'Email address is bin11788@gmail.com'
// _email이 아닌 email(get function)을 실행하여 리턴값을 불러옴





//! prototype

function Person (name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  // this.sum = function () {
  //   return this.first + this.second;
  // }
}

Person.prototype.sum = function () {
  return this.first + this.second;
}

const kim = new Person('kim', 10, 20)
console.log("kim.sum()", kim.sum())