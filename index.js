/*jshint undef: false, browser: true*/
var app = angular.module("gitref", ['ngSanitize']);

app.controller("GitRefController", function($scope,$http,$sce) {

    console.log("git ref controller connected.");
    $scope.commands = commandData;
    $scope.pickedCommand = {};
    $scope.pickedCommand.title = "";
    $scope.pickedCommand.long = "Select a git command from the list to the left to see a full description with examples.";
    $scope.activeCommand = "";

    $scope.displayDesc = function(command){
        $scope.activeCommand = command;
        $scope.pickedCommand.title = command;
        $scope.pickedCommand.long = $sce.trustAsHtml($scope.commands[command].long);
        $scope.pickedCommand.examples = $scope.commands[command].examples;
        $scope.pickedCommand.reference = "See reference for more info about this command: ";
        $scope.pickedCommand.link =  $scope.commands[command].reference;
    };
});
