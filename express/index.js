const express = require('express');
const morgan = require('morgan');

/**
 * express 란
 *  nodejs에서 사용하는 웹 프레임워크 
 * 
 *  1. 어플리케이션 
 *      익스프레스 인스터스를 어플리케이션이라고 함 
 *      - 서버에 필요한 기능인 미들웨어를 어플리케이션에 추가 
 *      - 라우팅 설정 가능 
 *      - 서버를 요청 대기 상태로 만듦
 * 
 *  2. 미들웨어
 *      함수들의 배열 
 *      익스프레스JS에 기능을 추가하고자할때 
 * 
 *  3. 라우팅 
 *      URL 라우팅
 *      요청에 대한 반응을 체크 
 * 
 *  4. 요청/응답객체 
 *  
 * 
 */

const app = express();

// 미들웨어는 본인 할일을 다 마치고 next()함수를 호출함
const logger = (req, res, next)=>{
    console.log('i am logger')
    next();
};

const logger2 = (req, res, next)=>{
    console.log('i am logger2 ');
    next();

}
const commonMw = (req, res, next)=>{
    console.log('commonMw');
    next(new Error("jjw Error"));
}
const errorMiddleWare = (err, req, res, next)=>{

    ///commonMw
    // -> logger, logger2 미들웨어는 사용하지 않음
    // jjw Error

    console.log(err.message);
    next(err);
}

/**
 * morgan 
 *  LOG관련 node 써드파티 모듈
 * GET / 404 3.831 ms - 139
 */
app.use(morgan('dev'));

app.use(commonMw);
app.use(logger);
app.use(logger2);
app.use(errorMiddleWare);
app.set('port', 8080);


// Routing
// 정의: 요청 url에 대해서 적절한 핸들러 함수로 연결해주는 기능을 라우팅이라고 함 
app.get("/", (req, res)=>{
    // res.status, res.json() 등등
    res.send("Hello Express!")
})

app.listen(app.get('port'), ()=>{
    console.log("Server open "+app.get('port'));
})
