var SesameStreet = angular.module('SesameStreet',[]);

SesameStreet.controller('sesameCharacter',function($scope){
  $scope.index = 0;
  $scope.char = [{
      "name": "Cookie Monster",
      "img":"CookieMonster.jpg",
      "occupation": "Professional Eater",
      "hobbie": "Eating Cookies",
      "catchphrase":"Om nom nom"
    },
    {
      "name":"Elmo",
      "img":"elmo.jpeg",
      "occupation": "Unemployed",
      "hobbie":"Learning Things",
      "catchphrase":"Elmo has a Question"
    },
    {
      "name":"Oscar",
      "img":"OscarTheGrouch.jpg",
      "occupation": "Dumpster Diver",
      "hobbie":"Eating Trash",
      "catchphrase":"I Love Trash"
    },
    {
      "name":"Bert&Ernie",
      "img":"bertAndErnie.jpeg",
      "occupation": "Dumpster Diver",
      "hobbie":"Eating Trash",
      "catchphrase":"Ernie Says"
    }
  ];
  $scope.first = 1;
  $scope.second = 1;
  $scope.buy = function(){
    alert($scope.char[$scope.index].name + " Is on his way to you now!");
  }
  $scope.next = function(){
      if( $scope.index == $scope.char.length -1){
        $scope.index = 0;
      }
      else{
        $scope.index++;
      }
    };
    $scope.previous = function(){
        if( $scope.index == 0){
          $scope.index = 3;
        }
        else{
          $scope.index--;
        }
      };
});
