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
        },
        catCount: 8,
        order: {
            name: false,
            type: 'inactive'
        },
        catFilters: []
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

    /* Function to pick random quote */
    $scope.getRandomTip = function () {
        var n = tips.length;
        var i = Math.floor(Math.random() * n);
        $scope.randomTip = tips[i];
    };

    /* Toggle filter to show only favorites */
    $scope.filterFav = function (flag) {
        if (flag) {
            $scope.filter.favOption = true;
        } else {
            $scope.filter.favOption = "";
        }
    };


    $scope.filterCategory = function () {
        console.log("filter category function activated");
        angular.forEach($scope.filter.categories, function (value, key) {
            var i;
            if (!value) {
                console.log("remove the following category: " + key);

                if((i = $scope.filter.catFilters.indexOf(key)) > -1){
                    $scope.filter.catFilters.splice(i,1);
                }
            } else if((i = $scope.filter.catFilters.indexOf(key)) < 0) {
                $scope.filter.catFilters.push(key);
            }
        });
        console.log("current filter: " + $scope.filter.catFilters);
         console.log("checkboxes: " + $scope.filter.categories);
        $scope.showCatFilter = false;
        if($scope.filter.catFilters.length < $scope.filter.catCount){
            $scope.filterActive = true;
            console.log("cat filter now active");
        }

    };

    $scope.catFilter = function (command) {

        if ($scope.filter.catFilters.length > 0) {
            if ($scope.filter.catFilters.indexOf(command.type) < 0)
                return;
        }

        return command;
    };


    $scope.getRandomTip();
});
