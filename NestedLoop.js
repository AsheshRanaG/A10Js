const costumer = [
  {
    custId: 1,
    name: "riyana",
    bought: [
      { id: 1, name: "shoes" },
      { id: 2, name: "nailpolish" },
    ],
  },
  {
    custId: 2,
    name: "liza",
    bought: [
      { id: 3, name: "bottle" },
      { id: 4, name: "copy" },
    ],
  },
  {
    custId: 3,
    name: "prabin",
    bought: [
      { id: 1, name: "shoes" },
      { id: 5, name: "hairClip" },
    ],
  },
  {
    custId: 4,
    name: "Basanta",
    bought: [
      { id: 6, name: "guitar" },
      { id: 2, name: "nailpolish" },
    ],
  },
];

const customerResponse = {
  status: 200,
  message: "Customer fetched successfully",
  data: costumer,
};
const getProductsName = () => {
  if (customerResponse.status === 200) {
    let boughtItems = [];
    customerResponse.data.forEach((customer) => {
      customer.bought.map((item) => {
        boughtItems.push(item.name);
      });
    });
    return boughtItems;
  }
};
// console.log(getProductsName());

const getProductNumber = () => {
  if (customerResponse.status === 200) {
    let productNumbers = {};
    customerResponse.data.forEach((customer) => {
      customer.bought.map((item) => {
        {
          if (productNumbers[item.id]) {
            productNumbers[item.id] += 1;
          } else {
            productNumbers[item.id] = 1;
          }
        }
      });
    });
  }
};
console.log(getProductNumber());
// data={
//     lipstikc:2,
//     nailpolsih:2,
//     shoes:1
// }
