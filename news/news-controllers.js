/*************************************************************************************************
/////////////////////////////////////// NEWS CONTROLLERS /////////////////////////////////////////
*************************************************************************************************/
var app = angular.module('newssapp');
//ROUTING
app.config(function ($routeProvider) { $routeProvider

    .when("/page1", {
        templateUrl: "page1.template.html", controller: "page1Ctrl"
    }).when("/page2", {
        templateUrl: "page2.template.html",
        controller: "page2Ctrl" })

    .otherwise({
        templateUrl: "news/news-list.html", controller: "newsListController"
    }); 
});




app.controller('newsListController', function($scope,LoginService) {
  


    console.log("newsreder controller");
  LoginService.query(params,function (data) {
    console.log("okay");
    
    },
    function (error) {
    // Response KO and info about the response in ‘error’ }
    console.log("error");
    

    });

});