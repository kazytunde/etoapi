const trackables = [
  {
    id: 1,
    name: "Ally Financial",
    createdDate: "20/10/2019",
    updatedDate: "20/10/2019",
    trackableType: "BillPayment",
    metadata: {
      paymentAmount: 120,
      nextDueDate: "12/20/2018",
      paymentEndDate: "12/20/2018",
      billType: "electric payment",
      paymentMethod: "manual pay"
    }
  },
  {
    id: 2,
    name: "Metro PC",
    createdDate: "20/10/2019",
    updatedDate: "20/10/2019",
    trackableType: "BillPayment",
    metadata: {
      paymentAmount: 20,
      nextDueDate: "12/20/2018",
      paymentEndDate: "12/20/2018",
      billType: "Phone Bill",
      paymentMethod: "auto pay"
    }
  },
  {
    id: 3,
    name: "6 years doctors appointment",
    createdDate: "20/10/2019",
    updatedDate: "20/10/2019",
    trackableType: "Appointment",
    metadata: {
      date: "20/10/2019",
      starttime: "9:30am",
      endtime: "10:30am",
      type: "Doctor Appointment",
      venue: "123 main street",
      appointmentOwner: "Abdul-Samad",
      description: "Visit local clinic for yearly physical checkup"
    }
  },
  {
    id: 4,
    name: "Plantain",
    createdDate: "20/10/2019",
    updatedDate: "20/10/2019",
    trackableType: "Food",
    metadata: {
      type: "snack",
      Target: 500,
      actualSpent: 450,
      status: ["met", "notmet", "overlimit"]
    }
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
