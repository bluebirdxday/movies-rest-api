var express = require('express')
var app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// 임시 데이터
const data = {

  // 회원
  users : [
    { id : 1, nickname : '스너글', email : 'one1@gmail.com', enrollDate : '2023-01-01', userType : 'N'},
    { id : 2, nickname : '고양이솜주먹', email : 'two2@gmail.com', enrollDate : '2023-05-15', userType : 'N'},
    { id : 3, nickname : '여름언제와', email : 'three3@gmail.com', enrollDate : '2023-10-23', userType : 'D'},
    { id : 4, nickname : '식사는없어배고파도', email : 'nosick4@gmail.com', enrollDate : '2023-08-29', userType : 'M'}
  ],

  // 영화
  movies : [
    { 
      id : 1,
      title : '헌터킬러',
      genre : ['액션', '스릴러'],
      director : '도노반 마시',
      country : '미국',
      openDate : '2018-10-26',
      runtime : 121,
      filmRating : '15+',
      trailer : 'https://www.youtube.com/watch?v=ffhhLVtbRxQ',
      posterUrl : 'poster1.jpeg',
      description : '세계 최강의 공격형 잠수함, 헌터 킬러가 잠항에 나섰다. 쿠데타 세력에게 납치된 러시아 대통령을 구출하는 일촉즉발 합동 작전. 숨소리도 내서는 안 된다. 실패하면 제3차 세계 대전이 일어날지도 모르니.',
      isDeleted : 'N',
      createdAt : '2018-09-14'
    },
    { 
      id : 2,
      title : '나이브스 아웃 : 글래스 어니언',
      genre : ['미스터리', '코미디'],
      director : '라이언 존슨',
      country : '미국',
      openDate : '2022-09-10',
      runtime : 130,
      filmRating : '15+',
      trailer : 'https://youtu.be/DovtsQyZHYc?si=hC_54BXsJo0GvH8o',
      posterUrl : 'poster2.jpeg',
      description : '그리스로 향하는 세계적인 탐정 브누아 블랑. 억만장자와 그가 초대한 각계각층의 지인들 틈에서 겹겹이 싸인 미스터리의 진실을 밝혀나간다.',
      isDeleted : 'N',
      createdAt : '2022-03-24'
    },
    { 
      id : 3,
      title : '미스 슬로운',
      genre : ['스릴러'],
      director : '존 매든',
      country : '미국',
      openDate : '2016-12-25',
      runtime : 132,
      filmRating : '15+',
      trailer : 'https://youtu.be/nGLqs3JQiJ0?si=vnweBlVMoBqA1X3W',
      posterUrl : 'poster3.jpeg',
      description : '워싱턴 최고의 로비스트 슬로운. 늘 승리로만 경력을 채워온 그녀가 이길 수 없는 불가능한 싸움을 시작한다. 총기 규제 법안을 통과시키기 위해.',
      isDeleted : 'N',
      createdAt : '2016-10-20'
    },
    { 
      id : 4,
      title : '써니',
      genre : ['드라마, 코미디'],
      director : '강형철',
      country : '한국',
      openDate : '2011-05-04',
      runtime : 124,
      filmRating : '15+',
      trailer : 'https://youtu.be/3MImYkHfx-k?si=wSGyhATKZUze_WWH',
      posterUrl : 'poster4.jpg',
      description : '구수한 사투리로 전학 첫날부터 놀림거리가 된 나미. 이때 포스 넘치는 여섯 소녀가 구세주처럼 등장하더니 아예 나미를 멤버로 영입하는데. 이름하여 칠공주 써니 탄생!',
      isDeleted : 'N',
      createdAt : '2010-12-16'
    },
    { 
      id : 5,
      title : '고스트 워',
      genre : ['SF'],
      director : '닉 마티유',
      country : '미국',
      openDate : '2016-12-09',
      runtime : 107,
      filmRating : '15+',
      trailer : 'https://youtu.be/nGLqs3JQiJ0?si=vnweBlVMoBqA1X3W',
      posterUrl : 'poster5.jpeg',
      description : '보이지 않는 적의 출현으로 인해 유럽의 거리는 초토화가 된다. 이 위기를 해결하기 위해 나선 엘리트 특수 작전 부대와 미지의 적과의 사투가 시작된다. 전율을 부르는 SF 스릴러.',
      isDeleted : 'N',
      createdAt : '2016-05-08'
    },
    { 
      id : 6,
      title : '제로 다크 서티',
      genre : ['전쟁', '액션', '스릴러'],
      director : '캐스린 비글로',
      country : '미국',
      openDate : '2012-12-19',
      runtime : 157,
      filmRating : '15+',
      trailer : 'https://youtu.be/LJFra3B9sbA?si=aV1MA8nfL9WwLtH8',
      posterUrl : 'poster6.jpeg',
      description : '9/11 테러 공격 후 오사마 빈라덴을 찾기 위해 10년간 이어온 추적. 별다른 소득이 없자 단호한 결단력을 지닌 CIA 요원이 직감을 따라 움직이기로 한다.',
      isDeleted : 'N',
      createdAt : '2012-11-19'
    },
    { 
      id : 7,
      title : '언포기버블',
      genre : ['드라마'],
      director : '노라 핑샤이트',
      country : '영국',
      openDate : '2021-12-10',
      runtime : 112,
      filmRating : '15+',
      trailer : 'https://youtu.be/5vEU4S4k6CI?si=Ahc3lJrZKHpnXA73',
      posterUrl : 'poster6.jpeg',
      description : '살인죄로 복역 후 출소한 루스. 과거를 용서해주지 않는 냉담한 사회에서 고통받던 그녀는 오래전 헤어져야 했던 동생을 찾으러 나선다.',
      isDeleted : 'N',
      createdAt : '2021-10-13'
    }
  ],

  likes : [
    { id : 1, movieId : 1, userId : 3},
    { id : 2, movieId : 4, userId : 1},
    { id : 3, movieId : 2, userId : 3},
    { id : 4, movieId : 2, userId : 4}
  ],

  reviews : [
    { id : 1, comment : "이 영화의 소재는 참신했지만 영화의 스토리를 만들기 위해 너무 과도한 설정을 한 것으로 느껴진다 실존하는 이론을 영화 내용에 넣어 현실성을 주려 한듯하지만 너무 멀리 갔다고 본다 '보스-아인슈타인 응축'이라니... 일반인이 보기에 과학법칙이나 이론을 이해하기보다는 그냥 '아.. 신기한 거구나~'하고 보는 게 편할 것 같음", star : 3.5, movieId : 5, userId : 2},
    { id : 2, comment : "신선한 소재와 짜임새 있는 스토리, 화려한 액션씬, 깔끔함", star : 4.5, movieId : 5, userId : 1},
    { id : 3, comment : "영화를 보는 순간, 모두가 그녀의 적이 된다. 그러나 그 누구도 그녀에게 대적할 만한 상대는 되지 못할 것이다", star : 5, movieId : 3, userId : 3},
    { id : 4, comment : "영화 첫 10분동안 지루한영화 각이네 이러고 보고있는데 산드라블록의 표정이 무미건조 시니컬하고 세상다산 느낌이다가 점점 살아있는 표정이 나오면서 배우들의 연기력이 폭발하더니 마지막 포옹씬에서 코끝이 갑자기 찡해지더니 눈물이 나는 신기한 영화", star : 4, movieId : 7, userId : 2}
  ]
}

/*
  @path {GET} http://localhost:3000/
  @description 메인화면
*/
app.get("/", (req, res) => {
  res.send("movies restful api");
});


// 회원 API
/*
  @path {GET} http://localhost:3000/users
  @description 회원 전체 목록 조회
*/
app.get("/users", (req, res) => {

  // 유저 정보 반환
  res.json({ ok: true, users: data.users});
});


/*
  @path {GET} http://localhost:3000/users/:userId
  @description 특정 회원 정보 조회
*/
app.get("/users/:userId", (req, res) => {
  
  const userId = req.params.userId;
  const user = data.users.find(user => user.id == userId);
  
  if(!user)
    return res.status(404).json({ ok: false, error : "404 Not Found"});

  // 유저 정보 반환
  res.json({ ok: true, user: user});
});


/*
  @path {POST} http://localhost:3000/users
  @description 특정 회원 정보 삽입
*/
app.post("/users", (req, res) => {

  const { nickname, email, userType } = req.body;

  // 필수 키 검증
  if (!nickname || !email || !userType) {
    return res.status(400).json({ ok: false, error: "400 Bad Request" });
  }

  const newUser = createUser(req.body);
  data.users.push(newUser);

  res.json({ok: true, user: newUser});
  
});


/*
  @path {PATCH} http://localhost:3000/users/:userId
  @description 특정 회원 탈퇴 처리
*/
app.patch("/users/:userId", (req, res) => {

  const userId = req.params.userId;
  const {userType} = req.body;
  const userItem = data.users.find(user => user.id == userId);

  if(!userType)
    return res.status(400).json({ ok: false, error: "400 Bad Request" });


  if(!userItem || userType=="D")
    return res.status(404).json({ ok: false, error : "404 Not Found"});

  userItem.userType = "D";

  res.json({ok: true, message: "탈퇴처리 되었습니다."});
  
});


// 영화 API
/*
  @path {GET} http://localhost:3000/movies
  @description 영화 전체 목록 조회

  @path {GET} http://localhost:3000/movies?keyword=“영화제목"
  @description 영화 검색
*/

app.get('/movies', (req, res) => {
  const keyword = req.query.keyword.trim();

  // 만약 쿼리스트링이 없으면 전체 영화 목록 반환
  if (!keyword) {
    const isNotDeletedMovies = data.movies.filter(movie => movie.isDeleted === 'N');
    return res.json({ ok: true, movies: isNotDeletedMovies});
  }

  // 특정 단어를 포함하는 객체들을 필터링
  const searchMovies = data.movies.filter(movie => movie.title.toLowerCase().includes(keyword.toLowerCase()));  

  res.json({ ok: true, movies: searchMovies});

});




/*
  @path {GET} http://localhost:3000/movies/:movieId
  @description 영화 상세 정보 조회
*/
app.get("/movies/:movieId", (req, res) => {
  
  const movieId = req.params.movieId;
  const movieItem = data.movies.find(movie => movie.id == movieId && movie.isDeleted === 'N');

  if(!movieItem)
    return res.status(404).json({ ok: false, error : "404 Not Found"});

  const foundReviews = data.reviews.filter(review => review.movieId == movieItem.id && review.isDeleted === 'N'); // -> 없다면 빈 배열 반환
  let rating  = 0.0;

  // 리뷰가 하나라도 존재하는 경우에 평점 계산
  if(foundReviews.length > 0){
    const totalRating = foundReviews.reduce((sum, review) => sum + review.star, 0);
    const averageRating = totalRating / foundReviews.length;

    // 소수점 첫째 자리까지 반올림하여 할당
    rating = Math.round(averageRating*10)/10;
  }


  res.json({ ok: true, movie: movieItem, reviews : foundReviews, rating : rating});

});


/*
  @path {POST} http://localhost:3000/movies
  @description 영화 등록(삽입)
*/
app.post("/movies", (req, res) => {

  const { title, director, country, openDate, runtime, filmRating, description } = req.body;

  // 필수 키 검증
  if (!title || !director || !country || !openDate || !runtime || !filmRating || !description) 
    return res.status(400).json({ ok: false, error: "400 Bad Request" });
  
  const newMovie = createMovie(req.body);
  data.movies.push(newMovie);

  res.json({ok: true, movie: newMovie});

});



/*
  @path {PUT} http://localhost:3000/movies/:movieId
  @description 영화 상세 정보 수정
*/
app.put("/movies/:movieId", (req, res) => {

  const movieId = req.params.movieId;
  const movieItem = data.movies.find(movie => movie.id == movieId && movie.isDeleted === 'N');

  const { title, director, country, openDate, runtime, filmRating, description } = req.body;

  // 필수 키 검증
  if (!title || !director || !country || !openDate || !runtime || !filmRating || !description) 
    return res.status(400).json({ ok: false, error: "400 Bad Request" });


  if(!movieItem)
    return res.status(404).json({ ok: false, error : "404 Not Found"});
  

  modifyMovie(req.body, movieItem);
  res.json({ ok: true, movie: movieItem});

});


//---------------------------------------------------------------------  여기서부터 다시 하기


/*
  @path {PATCH} http://localhost:3000/movies/:movieId
  @description 영화 삭제
*/
app.patch("/movies/:movieId", (req, res) => {

  const movieId = req.params.movieId;
  const {isDeleted} = req.body;
  const movieItem = data.movies.find(movie => movie.id == movieId);

  if(!movieItem || isDeleted!="N")
    return res.status(400).json({ ok: false, error : "400 Bad Request"});

  movieItem.isDeleted = "Y";
  res.json({ ok: true, movie: data.movies, message: "삭제 완료되었습니다."});
});



/*
  @path {GET} http://localhost:3000/movies/rank
  @description 영화 순위 조회 [보류]
*/



// 관심작품 API
/*
  @path {PATCH} http://localhost:3000/like-movie/:movieId
  @description 관심작품으로 등록 및 해제 - 회원 정보 필요
*/
app.patch("/like-movie/:movieId", (req, res) => {

  const movieId = req.params.movieId;
  const {userId, isLikeNow} = req.body;

  const movieItem = data.movies.find(movie => movie.id == movieId);

  if(!movieItem)
    return res.status(400).json({ ok: false, error : "400 Bad Request"});


  const likeItemIndex = data.likes.findIndex(like => like.movieId == movieId && like.userId == userId);
  
  // 현재 관심작품 등록 상태
  if(isLikeNow=='N' && likeItemIndex === -1) {
    
    const newLike = createLike(movieId, userId);
    data.likes.push(newLike);
    
    return res.json({ ok: true, message: "Successfully registered as a favorite.", data : data.likes});
  }
    
  if(isLikeNow=='Y' && likeItemIndex !== -1){

    // 해당 인덱스의 항목을 제거
    data.likes.splice(likeItemIndex, 1);
    return res.json({ ok: true, message: 'Like removed successfully.' });
  }
    
  res.json({ ok: false, error: 'Like not found.'});

});


/*
  @path {GET} http://localhost:3000/like-movie
  @description 전체 회원의 관심목록 조회

  @path {GET} http://localhost:3000/like-movie?user=1
  @description 특정 회원의 관심목록 조회
*/
app.get("/like-movie", (req, res) =>{
  
  const userId = req.query.user;

  const userItem = data.users.find(user => user.id == userId);

  if(!userItem)
    return res.status(404).json({ ok: false, error : "404 Not Found"});


  // user 쿼리스트링이 존재하지 않을 경우 전체 목록 조회
  const likeMovieIds = userId
  ? data.likes.filter(like => like.userId == userId).map(like => like.movieId) // 특정회원
  : data.likes.map(like => like.movieId);   // 전체목록


  const likeMoviesWithUsers = data.movies
    .filter(movie => likeMovieIds.includes(movie.id))
    .map(movie => {
      const likedUsers = data.likes
        .filter(like => like.movieId === movie.id)
        .map(like => {
          const user = data.users.find(user => user.id === like.userId);
          return { id: user.id, nickname: user.nickname, email: user.email };
        });
      return { ...movie, likedUsers};
    });

  res.json({ ok: true, movies: likeMoviesWithUsers});
  
});



// 리뷰 API
/*
  @path {GET} http://localhost:3000/reviews
  @description 영화 리뷰 전체 목록 조회
*/
app.get("/reviews", (req, res) => {
  const reviewsWithUser = data.reviews.map(review => {
    const user = data.users.find(user => user.id === review.userId);
    return {
      ...review,
      writer : {
        id: user.id,
        nickname: user.nickname,
        email: user.email
      }
    };
  });

  res.json({ ok: true, reviews: reviewsWithUser});
});



/*
  @path {POST} http://localhost:3000/reviews
  @description 영화 리뷰 등록 - 회원 정보 필요
*/
app.post("/reviews", (req, res) => {

  const newReview = createReview(req.body);
  data.reviews.push(newReview);

  res.json({ok: true, review: newReview});
});


/*
  @path {PUT} http://localhost:3000/reviews/:reviewId
  @description 영화 리뷰 수정
*/
app.put("/reviews/:reviewId", (req, res) => {

  const reviewId = req.params.reviewId;
  const {star, comment} = req.body;
  const reviewItem = data.reviews.find(review => review.id == reviewId);

  if(!reviewItem)
    return res.status(400).json({ ok: false, error : "400 Bad Request"});
  
  reviewItem.star = star;
  reviewItem.comment = comment;

  res.json({ ok: true, review: reviewItem});
});



/*
  @path {PATCH} http://localhost:3000/reviews/:reviewId
  @description 영화 리뷰 삭제 - 회원 정보 필요
*/
app.patch("/reviews/:reviewId", (req, res) => {

  const reviewId = req.params.reviewId;
  const {isDeleted} = req.body;
  const reviewItem = data.reviews.find(review => review.id == reviewId);

  if(!reviewItem || isDeleted!="N")
    return res.status(400).json({ ok: false, error : "400 Bad Request"});

  reviewItem.isDeleted = "Y";
  res.json({ ok: true, reviews: data.reviews, message: "삭제 완료되었습니다."});
});




// 영화 객체 생성 함수
function createMovie(body){

  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;

  // 아이디 생성
  // movieId 없을 경우 초기 id를 1로 설정, 데이터가 있을 경우 최대값 id + 1
  let movieId = 1;
  if (data.movies.length > 0) 
    movieId = Math.max(...data.movies.map(movie => movie.id)) + 1;


  return {
    id: movieId,
    title: body.title,
    genre: body.genre,
    director: body.director,
    country: body.country,
    openDate: body.openDate,
    runtime: body.runtime,
    filmRating: body.filmRating,
    trailer: body.trailer,
    posterUrl: body.posterUrl,
    description: body.description,
    isDeleted: 'N',
    createdAt: formattedDate
  };

}


// 영화 객체 수정 함수
function modifyMovie(body, movie){

  movie.title = body.title;
  movie.genre = body.genre;
  movie.director = body.director;
  movie.country = body.country;
  movie.openDate = body.openDate;
  movie.runtime = body.runtime;
  movie.filmRating = body.filmRating;
  movie.trailer = body.trailer;
  movie.posterUrl = body.posterUrl;
  movie.description = body.description;
}



// 리뷰 객체 생성 함수
function createReview(body){

  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;

  const {comment, star, movieId, userId} = body;

  let reviewId = 1;
  if (data.reviews.length > 0) 
    reviewId = Math.max(...data.reviews.map(review => review.id)) + 1;


  return {
    id: reviewId,
    comment : comment,
    star : star,
    movieId : movieId,
    userId : userId,
    createdAt: formattedDate,
    isDeleted: 'N'
  };

}


// 유저 객체 생성 함수 
function createUser(body){

  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;

  let userId = 1;
  if (data.users.length > 0) 
    userId = Math.max(...data.users.map(user => user.id)) + 1;
  

  const {nickname, email, userType} = body;

  return {
    id: userId,
    nickname : nickname,
    email : email,
    enrollDate: formattedDate,
    userType : userType
  };

}

// like 객체 생성 함수
function createLike(movieId, userId){

  let likeId = 1;
  if (data.likes.length > 0) 
    likeId = Math.max(...data.likes.map(like => like.id)) + 1;

  return {
    id: likeId,
    movieId : movieId,
    userId : userId
  };

}



// 3000 포트로 서버 오픈
app.listen(3000, function() {
    console.log("start! express server on port 3000")
})
