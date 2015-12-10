var app = angular.module('myApp');

app.controller('ride1control', function($scope, mapservice) {

var rides = [
              {
                name: "Farm to (picnic)Table",
                area: "East and Riverfront",
                miles: 11.4,
                time: 64,
                stops:  10,
                waypoint1: "Market Sheds -apples, pears, grapes",
                info1: "Sat 7a-4p, Sun 10a-4p, Tues 9a-3p (June-Oct)",
                waypoint2: "DeVries & Co. 1887 - bread/crackers, cheese, sausage",
                info2: "Tues-Fri 9a-5p, Sat 7a-4p",
                waypoint3: "Germack Pistachio Co. - nuts, snacks",
                info3: "Mon-Sat 8a-4:30p, Sun 10a-4p",
                waypoint4: "CostPlus Wine - bottle of wine",
                info4: "Tues-Fri 9a-6p, Sat 7:30a-4:30p",
                waypoint5: "Sister Pie - dessert",
                info5: "Tues-Fri 8a-6p, Sat-Sun 9a-4p",
                waypoint6: "Belle Isle Aquarium",
                info6: "Sat-Sun 10a-4p",
                waypoint7: "Anna Scripps Whitcomb Conservatory",
                info7: "Wed-Sun 10a-5p",
                waypoint8: "Atwater Brewery",
                info8: "Mon-Fri 5p-10p, Sat 9a-4p, Sun 12p-8p",
                waypoint9: "Trinosophes - coffee and treats",
                info9: "Tues-Fri 9a-6p, Sat 9a-4p, Sun 10a-4p", 
                waypoint10:"Thomas McGee's Sporting House - adult beverages",
                info10: "Mon 4p-2a, Tue-Fri 1p-2a, Sat 9a-2a, Sun 11a-2p "
              },
              {
                name: "Beers & Gears",
                area: "Corktown and Riverfront",
                miles: 6.2,
                time: 32,
                stops: 2,
                waypoint1: "Batch Brewing Company",
                info1: "Mon-Thur 11a-10p, Fri-Sat 11a-12a",
                waypoint2: "Atwater Brewery",
                info2: "Mon-Fri 5p-10p, Sat 9a-4p, Sun 12p-8p"  
              },
              {
                name: "Trails & Cocktails",
                area: "East and Downtown",
                miles: 3.5,
                time: 19,
                stops: 3  
              },
              {
                name: "Dine Fine & White Lines",
                area: "Downtown",
                miles: 1.5,
                time: 13,
                stops: 3
              },
              {
                name: "Fresh Air & Casual Fare",
                area: "Midtown",
                miles: 3.7,
                time: 23,
                stops: 4  
              },
              {
                name: "Corktown Classic",
                area: "Corktown",
                miles: 2.3,
                time: 14,
                stops:  4
              },
              {
                name: "Tacos & Tequila",
                area: "Southwest",
                miles: 3,
                time: 20,
                stops: 3  
              },
              {
                name: "Arts & Crafts",
                area: "Midtown and East",
                miles: 11.3,
                time: 65, 
                stops: 3  
              },
              {
                name: "I Brake for Art",
                area: "East and Downtown",
                miles: 4.4,
                time: 26,
                stops: 5  
              },
              {
                name: "Rockin' Roll",
                area: "Midtown",
                miles: 5.4,
                time: 32,
                stops: 3  
              },
              {
                name: "Stadium Cycle",
                area: "Downtown and Corktown",
                miles: 4.6,
                time: 32,
                stops: 4  
              }, 
              {
                name: "Brunch on Bikes",
                area: "East and Corktown",
                miles: 6.3,
                time: 32,
                stops: 2  
              },
              {
                name: "Sunset & Spokes",
                area: "Corktown and Riverfront",
                miles: 11.4,
                time: 60,
                stops:2 
              }
            ];

  $scope.rides = rides;

  var initmap = mapservice;
  initmap();
});

