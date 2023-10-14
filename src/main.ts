import Address from "./domain/entity/address";
import Customer from "./domain/entity/customer";
import Order from "./domain/entity/order";
import OrderItem from "./domain/entity/order_item";

let customer = new Customer("123", "John");
const address = new Address("Street", 123, "12345", "City");
customer.Address = address;
customer.activate();

const item1 = new OrderItem("1", "Item 1", 10, "p1", 3);
const item2 = new OrderItem("1", "Item 2", 15, "p2", 2);

const order = new Order("1", "123", [item1, item2]);