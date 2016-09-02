/*jshint undef: false, browser: true*/
var app = angular.module("gitref", ['ngSanitize','angular-toArrayFilter']);

app.controller("GitRefController", function ($scope, $http, $sce, $interval) {

    console.log("git ref controller connected.");
    $scope.commands = commandData;
    $scope.pickedCommand = {};
    $scope.pickedCommand.title = "";
    $scope.pickedCommand.long = "Select a git command from the list to the left to see a full description with examples.";
    $scope.activeCommand = "";
    $scope.randomTip = "";

    $scope.filter = {
        fav: "",
        favOption:  ""
    };


    $scope.displayDesc = function (command) {
        $scope.activeCommand = command;
        $scope.pickedCommand.title = command;
        $scope.pickedCommand.long = $sce.trustAsHtml($scope.commands[command].long);
        $scope.pickedCommand.examples = $scope.commands[command].examples;
        for (var i = 0; i < $scope.pickedCommand.examples.length; i++) {
            $scope.pickedCommand.examples[i].desc = $sce.trustAsHtml($scope.pickedCommand.examples[i].desc);
        }

        $scope.pickedCommand.reference = "See reference for more info about this command: ";
        $scope.pickedCommand.link = $scope.commands[command].reference;
    };

    $scope.getRandomTip = function () {
        var n = tips.length;
        var i = Math.floor(Math.random() * n);
        $scope.randomTip = tips[i];
    };

    $scope.filterFav = function (flag){
        if(flag){
            $scope.filter.favOption = "filter:{command.fav: true}";
        } else {
            $scope.favOption = "";
        }
    };

    $scope.getRandomTip();
});

