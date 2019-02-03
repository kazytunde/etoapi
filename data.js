const EntityType = [
  {
    id: 1,
    name: "BillPayment",
    createdDate: "20/10/2019",
    updatedDate: "20/10/2019"
  },
  {
    id: 2,
    name: "Appointment",
    createdDate: "20/10/2019",
    updatedDate: "20/10/2019"
  },
  {
    id: 3,
    name: "Food",
    createdDate: "20/10/2019",
    updatedDate: "20/10/2019"
  }
];

const BillPayment = {
  id: 1,
  entityType: EntityType,
  paymentAmount: 120,
  amountRemainig: 1000,
  nextDueDate: "12/20/2018",
  paymentEndDate: "12/20/2018",
  billType: "electric payment",
  paymentMethod: "manual pay",
  createdBy: user,
  createdDate: "20/10/2019",
  updatedDate: "20/10/2019"
};

const Appointment = {
  id: 1,
  entityType: EntityType,
  date: "20/10/2019",
  starttime: "9:30am",
  endtime: "10:30am",
  type: "Doctor Appointment",
  venue: "123 main street",
  appointmentOwner: user,
  description: "Visit local clinic for yearly physical checkup",
  createdBy: user,
  createdDate: "20/10/2019",
  updatedDate: "20/10/2019"
};

const Food = {
  id: 1,
  entityType: EntityType,
  type: "snack",
  budget: 500,
  spent: 450,
  puchasedDate: "20/10/2019",
  endtime: "20/10/2019",
  status: ["BELOW-BUBGET", "ABOVE-BUBGET", "PENDING"],
  createdBy: user,
  createdDate: "20/10/2019",
  updatedDate: "20/10/2019"
};

const trackables = [
  {
    id: 1,
    name: "Ally Financial",
    createdDate: "20/10/2019",
    updatedDate: "20/10/2019",
    entityType: "Food",
    entity: [Entity],
    enabled: true,
    owner: user
  },
  {
    id: 2,
    name: "Metro PC",
    createdDate: "20/10/2019",
    updatedDate: "20/10/2019",
    entityType: "BillPayment",
    entity: [Entity],
    enabled: true,
    owner: user
  },
  {
    id: 3,
    name: "6 years doctors appointment",
    createdDate: "20/10/2019",
    updatedDate: "20/10/2019",
    entityType: "Appointment",
    entity: [Entity],
    enabled: true,
    owner: user
  },
  {
    id: 4,
    name: "Plantain",
    createdDate: "20/10/2019",
    updatedDate: "20/10/2019",
    entity: [Entity],
    enabled: true,
    owner: user
  }
];

const products = [
  {
    id: 1,
    name: "Rice",
    amount: 10
  },
  {
    id: 2,
    name: "plantain",
    amount: 5
  },
  {
    id: 3,
    name: "Chicken",
    amount: 5
  }
];

const cart = [
  {
    id: 1,
    productId: 1,
    quantity: 10
  },
  {
    id: 2,
    productId: 3,
    quantity: 5
  }
];

module.exports = {
  trackables,
  products,
  cart
};
