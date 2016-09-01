/*jshint undef: false, browser: true*/
var app = angular.module("gitref", []);

app.controller("GitRefController", function($scope,$http) {

    console.log("git ref controller connected.");
    $scope.commands = commandData;
    $scope.pickedCommand = {};
    $scope.pickedCommand.title = "";
    $scope.pickedCommand.longDescription = "Select a git command from the list to the left to see a full description with examples.<strong>This is to test bold</strong>";
    $scope.activeCommand = "";

    $scope.displayDesc = function(command){
        $scope.pickedCommand.title = command;
        $scope.pickedCommand.longDescription = $scope.commands[command]['description'];
        $scope.activeCommand = command;
        $scope.pickedCommand.reference = "For more info about this command: ";
        $scope.pickedCommand.link =  $scope.commands[command]['reference'];
    };
});
