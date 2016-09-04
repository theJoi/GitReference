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
  //  $scope.questionMode = false;

    $scope.filter = {
        favOption: "", // Show only favs; true for yes, blank for no
        order: 'name',
        reverseOrder: false,
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
        selectAll: true,
        catCount: 8,
        catFilters: [],
        keywords: []
    };
    $scope.reset = false;



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


    /* Function to select categories for category filter (catFilter) */
    $scope.filterCategory = function () {
        angular.forEach($scope.filter.categories, function (value, key) {
            var i;
            if (!value) {
                console.log("remove the following category: " + key);

                if ((i = $scope.filter.catFilters.indexOf(key)) > -1) {
                    $scope.filter.catFilters.splice(i, 1);
                }
            } else if ((i = $scope.filter.catFilters.indexOf(key)) < 0) {
                $scope.filter.catFilters.push(key);
            }
        });
        $scope.showCatFilter = false;
        if ($scope.filter.catFilters.length < $scope.filter.catCount) {
            $scope.filterActive = true;
            console.log("Category filter active.");
        } else {
            $scope.filterActive = false;
        }
    };


    /* Select All feature for category filter */
    $scope.selectAll = function () {
        console.log($scope.filter.categories);
        angular.forEach($scope.filter.categories, function (value, key) {
            $scope.filter.categories[key] = $scope.filter.selectAll;
        });
        console.log($scope.filter.categories);

    };


    /* Custom filter for categories */
    $scope.catFilter = function (command) {
        if ($scope.filter.catFilters.length > 0) {
            if ($scope.filter.catFilters.indexOf(command.type) < 0)
                return;
        }
        return command;
    };


    /* Get keywords for use with question mode filter */
    $scope.getKeywords = function (keywordStr) {
        if(keywordStr === undefined){
            alert('Please enter a question first');
            return;
        }
        if(keywordStr.length < 3){
            alert('Please enter at least 3 characters before searching.');
            return;
        }
        $scope.filter.keywords = keywordStr.split(' ');
        console.log($scope.filter.keywords);
        angular.forEach($scope.filter.keywords, function (value,key) {
            $scope.filter.keywords[key] = value.toLowerCase();
        });
        console.log($scope.filter.keywords);
        $scope.reset = true;
    };


    /* Calculate relevance score */
    $scope.relevanceCalc = function (command) {
        if($scope.filter.keywords.length < 1){
            return;
        }
        var rScore = 0;
        angular.forEach($scope.filter.keywords, function (keyword){
            if(command.name == keyword){
                rScore += 50;
            }
            if(command.keywords.indexOf(keyword) > -1){
                rScore += 25;
            }
            if(command.short.includes(keyword)){
                var re = new RegExp(keyword,"g");
                var count = (command.short.match(re) || []).length;
                console.log(count);
                rScore += (10 * count);
            }
            if(command.long.includes(keyword)){
                var re = new RegExp(keyword,"g");
                var count = (command.long.match(re) || []).length;
                console.log(count);
                rScore += (5 * count);
            }
        });
        return rScore;
    };


    /* Custom filter for question mode */
    $scope.questionFilter = function (command) {
        var score = $scope.relevanceCalc(command);
        command.score = score;
        if(score > 0 || score === undefined){
            return command;
        }
        return;
    };


    /* Resets question mode */
    $scope.resetQuestion = function () {
        angular.forEach($scope.commands, function(command){
            command.score = undefined;
        });
        $scope.filter.keywords = [];
        $scope.reset = false;

    };


    $scope.getRandomTip();
});
