// choose the database
use('AMAZONE');

db.customers.aggregate([
    {
        $project: {
            // we want to return the customer's ID, their name, and their total spending
            _id: 1,
            name: 1,
            // add up all of the money spent by a given customer
            total_spent: {
                // round to 2 significant figures to represent money
                $round:[{
                    $sum: {
                        $reduce: {
                            // we want to consider all current AND past orders
                            input: { $concatArrays: ["$current_orders", "$past_orders"] },
                            initialValue: 0,
                            // in case a particular order_cost is null, replace it with 0 to allow for arithmetic operations
                            // add the current order_cost (given by $$this.order_cost) to the accumulator (given by $$value)
                            in: { $add: ["$$value", { $ifNull: ["$$this.order_cost", 0] }] }
                        }
                    }
                },2]
            }
        }
    },

    // sort the customers from highest spending to lower spending
    {
        $sort: { total_spent: -1 }
    },
    
    // limit to the 3 highest spending customers
    {
        $limit: 3
    }
]);