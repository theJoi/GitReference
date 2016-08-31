/*jshint undef: false, browser: true*/
var app = angular.module("gitref", []);

app.controller("GitRefController", function($scope,$http) {

    console.log("git ref controller connected.");
    $scope.commands = commandData;

    $scope.title = "";
    $scope.longDescription = "Select a git command from the list to the left to see a full description with examples.";
    $scope.activeCommand = "";

    $scope.displayDesc = function(command){
        console.log(command);
        console.log($scope.commands[command]['description']);
        $scope.title = command;
        $scope.longDescription = $scope.commands[command]['description'];
        console.log($scope.longDescription);
        $scope.activeCommand = command;
    };
});
