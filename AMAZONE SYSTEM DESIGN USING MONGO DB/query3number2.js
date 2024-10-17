// this query is identical to the first one, with a different customer and a different order

// choose the database
use('AMAZONE');

// identify which customer is ordering something
var customer_id = 4;
// specify the order ID
var order_id = 12349859;
// the date the order is being made
var date = new Date("2023-12-05");
// bank card details provided by the customer
var card_number = 4938102837492856;
var expiry_date = new Date("2032-06-01");


// create the new order
var new_order = {
    // specify the order ID
    _id: order_id,
    // create the cart
    items:[
        {
            "product_id":1,
            "quantity":5
        },
        {
            "product_id":18,
            "quantity":3
        }
    ]
};

db.customers.update(
    {"_id": customer_id },
    {$push: { "current_orders": new_order }}
);


// the following is copy and pasted from the code which loads the customers collection
// it updates the cost for each of the orders, but in particular the one that was just added

db.customers.find().forEach(function(customer) {
    // go through each of their current orders
    customer.current_orders.forEach(function(order) {
        var order_cost = 0; // initialize the order cost for this order

        // go through each of the items in this order
        order.items.forEach(function(item) {
            // for each item, find out what product it is, by referring to the products collection
            var product = db.products.findOne({ _id: item.product_id });
            
            // if (product) ensures the product actually exists in the products collection
            if (product) {
                // retrieve the price
                item.price = product.price;
                // calculate the price of this item, multiplied by its quantity
                // format to the form of currency
                item.order_item_cost = parseFloat((product.price * item.quantity).toFixed(2)); 
                order_cost += item.order_item_cost; // increment order cost
            }
        });

        // format order_cost to the form of currency
        order_cost = parseFloat(order_cost.toFixed(2));

        // update the current order with all of the relevant information
        db.customers.update(
            { "_id": customer._id, "current_orders._id": order._id },
            {
                $set: {
                    "current_orders.$.date": date,
                    "current_orders.$.items": order.items,
                    "current_orders.$.payment_details": {
                        "card_number": card_number,
                        "expiry_date": expiry_date
                    },
                    "current_orders.$.delivery_status": "awaiting_pickup",
                    "current_orders.$.order_cost": order_cost
                }
            }
        );
    });
});



// now we print a summary of the order, in a format which is human-readable
// fetch the newly added order from the customer's current orders
var order_summary = db.customers.findOne(
    { "_id": customer_id, "current_orders._id": order_id},
    { "current_orders.$": 1 }
);

// retrieve the details of the order e.g. items and quantities
var order_details = order_summary.current_orders[0];
// retrieve the total cost of the order
var total_cost = order_details.order_cost;

// use formatting to make it readable
var formatted_output = `Order ID: ${order_details._id}\nItems:\n`;
order_details.items.forEach(item => {
    formatted_output += `Product ID: ${item.product_id}, Quantity: ${item.quantity}\n`;
});
formatted_output += `Total Cost: ${total_cost}`; 

// print the formatted output
print(formatted_output);
