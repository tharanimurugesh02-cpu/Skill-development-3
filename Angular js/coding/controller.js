//Attaching Controller logic to the App module
app.controller('DietController', function($scope) {
    //Application States Setup
    $scope.selectedGoal="Weight Loss";
    $scope.baseprice=350;
    $scope.addonprice=0;
    $scope.totalprice=350;
    $scope.addons={
        proteinShake:false,
        chiaPudding: false
    };

    // Dataset structure for the Diet application
    var mealDatabase = {
        "Weight Loss": {
            price: 350,
            menu: [
                { time: "Breakfast", name: "Oatmeal with Berries & Almonds", calories: 350 },
                { time: "Lunch", name: "Grilled Chicken Salad / Tofu Stir Fry", calories: 450 },
                { time: "Snack", name: "Green Tea with Roasted Chana", calories: 120 },
                { time: "Dinner", name: "Baked Fish with Sautéed Broccoli", calories: 380 }
            ]
        },
        "Muscle Gain": {
            price: 450,
            menu: [
                { time: "Breakfast", name: "Scrambled Eggs with Whole Wheat Toast", calories: 550 },
                { time: "Lunch", name: "Brown Rice, Grilled Chicken Breast & Dal", calories: 750 },
                { time: "Snack", name: "Peanut Butter Banana Toast", calories: 350 },
                { time: "Dinner", name: "Paneer / Steak with Sweet Potato Mash", calories: 600 }
            ]
        },
        "Keto Diet": {
            price: 400,
            menu: [
                { time: "Breakfast", name: "Avocado & Bacon Omelette", calories: 500 },
                { time: "Lunch", name: "Cheesy Creamy Spinach Mushroom Salad", calories: 600 },
                { time: "Snack", name: "Handful of Walnuts & Almonds", calories: 250 },
                { time: "Dinner", name: "Butter Paneer / Grilled Salmon", calories: 550 }
            ]
        }
    };

    // Re-evaluates meal views when dropdown updates
    $scope.updateMeals = function() {
        var selectedData = mealDatabase[$scope.selectedGoal];
        $scope.currentMenu = selectedData.menu;
        $scope.basePrice = selectedData.price;
        $scope.calculateTotal(); 
    };

    // Real-time calculation engine for checkboxes
    $scope.calculateTotal = function() {
        $scope.addonPrice = 0;
        
        if ($scope.addons.proteinShake) {
            $scope.addonPrice += 150;
        }
        if ($scope.addons.chiaPudding) {
            $scope.addonPrice += 80;
        }
        
        $scope.totalPrice = $scope.basePrice + $scope.addonPrice;
    };

    // Submits data and alerts validation status
    $scope.placeOrder = function() {
        if (!$scope.userName || !$scope.userAddress) {
            alert("Macha, fill your name and address first!");
            return;
        }
        alert("Awesome " + $scope.userName + "! Your " + $scope.selectedGoal + " subscription worth ₹" + $scope.totalPrice + "/day is confirmed. Diet kits will reach: " + $scope.userAddress);
    };

    // Default initialization bootstrap trigger
    $scope.updateMeals();
});
    