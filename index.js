/*jshint undef: false, browser: true*/
var app = angular.module("gitref", ['ngSanitize', 'angular-toArrayFilter']);

app.controller("GitRefController", function ($scope, $http, $sce, $interval) {

    console.log("git ref controller connected.");
    $scope.commands = commandData;
    $scope.examples = exampleData;
    $scope.pickedCommand = {
        title: "",
        long: "Select a git command from the list to the left to see a full description with examples."
    };
    $scope.activeCommand = "";
    $scope.randomTip = "";

    $scope.filter = {
        favOption: "", // Show only favs; true for yes, blank for no
        categories: {
            "Branching & Merging": true,
            "Setup & Config": true,
            "Project Admin": true,
            "Patching": true,
            "Inspect & Compare": true,
            "Git": true,
            "Debugging": true,
            "Commitment": true
        }
    };



    $scope.displayDesc = function (command) {
        console.log("picked command is: " + command);
        $scope.activeCommand = command;
        $scope.pickedCommand.title = command;
        $scope.pickedCommand.long = $sce.trustAsHtml($scope.commands[command].long);
        /* Get examples */
        if ($scope.examples[command]) {
            $scope.pickedCommand.examples = exampleData[command].examples;
            for (var i = 0; i < $scope.pickedCommand.examples.length; i++) {
                $scope.pickedCommand.examples[i].desc = $sce.trustAsHtml($scope.pickedCommand.examples[i].desc);
            }
        } else {
            $scope.pickedCommand.examples = "";
        }
        $scope.pickedCommand.reference = "See reference for more info about this command: ";
        $scope.pickedCommand.link = $scope.commands[command].reference;
    };


    $scope.getRandomTip = function () {
        var n = tips.length;
        var i = Math.floor(Math.random() * n);
        $scope.randomTip = tips[i];
    };


    $scope.filterFav = function (flag) {
        if (flag) {
            $scope.filter.favOption = true;
        } else {
            $scope.filter.favOption = "";
        }
    };


    $scope.showFilterCategories = function () {

    };


    $scope.filterCategory = function (category) {};


    $scope.getRandomTip();
});
