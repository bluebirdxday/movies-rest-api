var express = require('express')
var app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 임시 데이터
const data = {

  // 회원
  users : [
    { id : 1, nickname : '스너글', email : 'one1@gmail.com', enrollDate : '2023-01-01'},
    { id : 2, nickname : '고양이솜주먹', email : 'two2@gmail.com', enrollDate : '2023-05-15'},
    { id : 3, nickname : '여름언제와', email : 'three3@gmail.com', enrollDate : '2023-10-23'},
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
      star : 0.0,
      review : [],
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
      star : 0.0,
      review : [],
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
      star : 0.0,
      review : [],
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
      star : 0.0,
      review : [],
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
      star : 0.0,
      review : [],
      isDeleted : 'N',
      createdAt : '2016-05-08'
    }
  ],

  likes : [
    { id : 1, movieId : 1, userId : 3},
    { id : 2, movieId : 4, userId : 1},
    { id : 3, movieId : 2, userId : 3}
  ],

  reviews : []

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
app.get("/user", (req, res) => {

  // 유저 정보 반환
  res.json({ ok: true, users: data.users});
}) 


// 영화 API
/*
  @path {GET} http://localhost:3000/movies
  @description 영화 전체 목록 조회
*/
app.get("/movies", (req, res) => {

  // 삭제된 영화 제외
  const isNotDeletedMovies = data.movies.filter(object => object.isDeleted === 'N');
  res.json({ ok: true, movies: isNotDeletedMovies});

});

/*
  @path {GET} http://localhost:3000/movies/:movieId
  @description 영화 상세 정보 조회
*/
app.get("/movies/:movieId", (req, res) => {
  
  const movieId = req.params.movieId;
  const movieItem = data.movies.find(object => object.id == movieId && object.isDeleted === 'N');

  if(movieItem){
    res.json({ ok: true, movie: movieItem});
  }else{
    res.status(400).send('400 Bad Request');
    return;
  }
});

/*
  @path {POST} http://localhost:3000/movies
  @description 영화 등록(삽입)
*/
app.post("/movies", (req, res) => {

  const movie = createMovie(req.body);
  data.movies.push(movie);

  res.json({ok: true, movie: movie});

});


/*
  @path {PUT} http://localhost:3000/movies/:movieId
  @description 영화 상세 정보 수정
*/
app.put("/movies/:movieId", (req, res) => {

  const movieId = req.params.movieId;
  const movieItem = data.movies.find(object => object.id == movieId && object.isDeleted === 'N');

  if(movieItem){
    modifyMovie(req.body, movieItem);
    res.json({ ok: true, movie: movieItem});
  }else{
    res.status(400).send('400 Bad Request');
    return;
  }
});


/*
  @path {PATCH} http://localhost:3000/movies/:movieId
  @description 영화 삭제
*/
app.patch("/movies/:movieId", (req, res) => {

  const movieId = req.params.movieId;
  const isDeleted = req.body.isDeleted;
  const movieItem = data.movies.find(object => object.id == movieId);

  if(movieItem && isDeleted=='N'){
    movieItem.isDeleted = 'Y';
    res.json({ ok: true, movie: data.movies});
  }else{
    res.status(400).send('400 Bad Request');
    return;
  }
});


/*
  @path {GET} http://localhost:3000/movies?keyword=“영화 제목/감독 이름/국가/제작사/배급사/등장인물”&genre=“장르”&sort=정렬방식(기본값 desc)&country=“국가”&startDate=YYYY-MM-DD&endDate=YYYY-MM-DD&filmRating=등급분류
  @description 영화 검색
*/

/*
  @path {GET} http://localhost:3000/movies/rank
  @description 영화 순위 조회
*/



// 관심작품 API
/*
  @path {PATCH} http://localhost:3000/like-movie/:movieId
  @description 관심작품으로 등록 및 해제 - 회원 정보 필요
*/
app.patch("/like-movie/:movieId", (req, res) => {

  const movieId = req.params.movieId;
  const isLikeNow = req.body.isLike;
  const movieItem = data.movies.find(object => object.id == movieId);

  // 현재 관심작품 등록 상태
  if(isLikeNow == 'Y') {

  }else{
  }

});

/*
  @path {GET} http://localhost:3000/like-movie?user=1
  @description 특정 회원의 관심목록 조회
*/


// 리뷰 API
/*
  @path {POST} http://localhost:3000/movies/rating
  @description 영화 리뷰 등록
*/
app.post("/movies/rating", (req, res) => {

  const {userId, movieId, star, comment} = req.body;

});

/*
  @path {PUT} http://localhost:3000/movies/rating/:ratingId
  @description 영화 리뷰 수정
*/
app.put("/movies/rating/:ratingId", (req, res) => {

  const ratingId = req.params.ratingId;
  const {star, comment} = req.body;
  const ratingItem = data.movies.find(object => object.id == ratingId);

  if(ratingItem){
    ratingItem.star = star;
    ratingItem.comment = comment;

    res.json({ ok: true, rating: ratingItem});
  }else{
    res.status(400).send('400 Bad Request');
    return;
  }




});

/*
  @path {PATCH} http://localhost:3000/movies/rating/:ratingId
  @description 영화 리뷰 삭제 - 원래 session을 이용해서 
*/




// 영화 객체 생성 함수
function createMovie(body){

  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;

  // 아이디 생성
  // 데이터가 없을 경우 초기 id를 1로 설정, 데이터가 있을 경우 마지막 id + 1
  let movieId = data.movies.length > 0 ? data.movies[data.movies.length - 1].id : 0;
  movieId = movieId + 1;

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
    star: 0.0,
    review: [],
    isDeleted: 'N',
    createdAt: formattedDate
  };

}


// 영화 객체 수정 함수
function modifyMovie(body, movie){

  const {title, genre, director, country, openDate, runtime, filmRating, trailer, posterUrl, description} = body;
  
  movie.title = title;
  movie.genre = genre;
  movie.director = director;
  movie.country = country;
  movie.openDate = openDate;
  movie.runtime = runtime;
  movie.filmRating = filmRating;
  movie.trailer = trailer;
  movie.posterUrl = posterUrl;
  movie.description = description;
}



// 리뷰 객체 생성 함수
function createRating(body){

  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;

  // 아이디 생성
  // 데이터가 없을 경우 초기 id를 1로 설정, 데이터가 있을 경우 마지막 id + 1
  let ratingId = data.rating.length > 0 ? data.rating[data.rating.length - 1].id : 0;
  ratingId = ratingId + 1;

  return {
    id: ratingId,
    star : body.star,
    comment : body.comment,
    isDeleted: 'N',
    createdAt: formattedDate
  };

}



// 3000 포트로 서버 오픈
app.listen(3000, function() {
    console.log("start! express server on port 3000")
})
