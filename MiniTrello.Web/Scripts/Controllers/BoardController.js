﻿'use strict';

// Google Analytics Collection APIs Reference:
// https://developers.google.com/analytics/devguides/collection/analyticsjs/

angular.module('app.controllers')
    // Path: /login
   .controller('BoardController', ['$scope', '$location', '$window', '$stateParams', 'BoardServices', function ($scope, $location, $window, $stateParams, BoardServices) {



       $scope.boardDetailId = $stateParams.boardId;
       $scope.CreateNewBoardModel = { Title: ''};
        //$scope.organizationID = $stateParams.organizationID;
        console.log($scope.boardDetailId);

        $scope.boards = [];

       // var board = { Id: 1, Name: 'Myboard1', Description: 'Description1' };
       // var board1 = { Id: 2, Name: 'Myboard2', Description: 'Description2' };
       // $scope.boards.push(board);
       // $scope.boards.push(board1);
        

        $scope.getBoardsForLoggedUser = function () {
            BoardServices
                .getBoardsForLoggedUser($stateParams.organizationId)
              .success(function (data, status, headers, config) {
                    console.log(data);
                    $scope.boards = data;
                })
              .error(function (data, status, headers, config) {
                console.log(data);
            });
            //$location.path('/');
        };

        $scope.createNewBoardForLoggedUser = function () {
            BoardServices
                .createNewBoardForLoggedUser($scope.CreateNewBoardModel)
              .success(function (data, status, headers, config) {
                  console.log(data);
                  $scope.boards.push(data);
              })
              .error(function (data, status, headers, config) {
                  console.log(data);
              });
        };

        $scope.getBoardsDetails = function () {
            BoardServices
                .getBoardDetails()
              .success(function (data, status, headers, config) {
                  $scope.boards = data;
              })
              .error(function (data, status, headers, config) {
                  console.log(data);
              });
            //$location.path('/');
        };

    /*if ($scope.boardDetailId > 0)
    {
       //
    }
    else
    {*/
        //$scope.getBoardsForLoggedUser();
    //}
    

       

        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }]);