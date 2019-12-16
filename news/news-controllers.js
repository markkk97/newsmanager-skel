/*************************************************************************************************
/////////////////////////////////////// NEWS CONTROLLERS /////////////////////////////////////////
*************************************************************************************************/
var app = angular.module('newssapp');
//ROUTING
app.config(function ($routeProvider) { 
    
    $routeProvider.when("/page1", {
        templateUrl: "page1.template.html", controller: "page1Ctrl"
    }).when("news/news-login.html", {
        templateUrl: "news/news-login.html",
        controller: "page2Ctrl" })

    .otherwise({
        templateUrl: "news/news-list.html", controller: "newsListController"
    }); 

   
});



app.controller('newsListController', function($rootScope,$scope,NewsListService) {
    
    $rootScope.userLogged = false;
    $rootScope.categories = ["National", "International", "Economy","Sports"];

    console.log($rootScope.userLogged);
    

    $scope.getArticleList = () => {
        NewsListService.query({}, (data) =>{
            console.log("newslistcontroller"); 
            console.log(data)
            $scope.articleList= data;
        }, (error) =>{
        console.log(error);
        
    })
    }

    $scope.getArticleList();
  

});