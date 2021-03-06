﻿'use strict';

angular.module('app.services').factory('BoardServices', ['$http', '$window', function ($http, $window) {

    var board = {};

    var baseRemoteUrl = "http://minitrelloapiajdm.apphb.com";
    var baseLocalUrl = "http://localhost:8080";
    var baseUrl = baseRemoteUrl;

    board.getBoardsForLoggedUser = function (organizationId) {
        return $http.get(baseUrl + '/boards/' + organizationId + '/' + $window.sessionStorage.token);
    };

    board.getMembersForBoard = function (boardId) {
        console.log("BoardIdMembers");
        console.log(boardId);
        return $http.get(baseUrl + '/boards/boardMembers/' + boardId + '/' + $window.sessionStorage.token);
    };

    board.getBoardDetails = function () {
        return $http.get(baseUrl + '/boards/' + $window.sessionStorage.id + '/' + $window.sessionStorage.token);
    };

    board.createNewBoardForLoggedUser = function (model, idOrganization) {
        return $http.post(baseUrl + '/boards/create/' + idOrganization + '/' + $window.sessionStorage.token, model);
    };

    board.deletBoard = function () {
        return $http.delete(baseUrl + '/boards/delete/' + $window.sessionStorage.token);
    };

    return board;

}]);