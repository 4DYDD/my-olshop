interface Order {
  orderId: string;
  orderDate: string;
  customerId: string;
  orderStatus: string;
  totalPrice: number; // Changed to number
  paymentMethod: string;
  shippingMethod: string;
}

const fakeOrders: Order[] = [
  {
    orderId: "ORD001",
    orderDate: "2025-01-15",
    customerId: "CUST001",
    orderStatus: "Shipped",
    totalPrice: 150000,
    paymentMethod: "COD",
    shippingMethod: "Mandiri",
  },
  {
    orderId: "ORD002",
    orderDate: "2025-03-22",
    customerId: "CUST002",
    orderStatus: "Processing",
    totalPrice: 200000,
    paymentMethod: "COD",
    shippingMethod: "Mandiri",
  },
  {
    orderId: "ORD003",
    orderDate: "2025-07-10",
    customerId: "CUST003",
    orderStatus: "Delivered",
    totalPrice: 300000,
    paymentMethod: "COD",
    shippingMethod: "Mandiri",
  },
  {
    orderId: "ORD004",
    orderDate: "2025-12-05",
    customerId: "CUST004",
    orderStatus: "Cancelled",
    totalPrice: 100000,
    paymentMethod: "COD",
    shippingMethod: "Mandiri",
  },
];

export default fakeOrders;
