export type FormTypes = {
  name: string;
  email: string;
  phone: string;
  plan: {
    value: string;
    price: string;
    isMonthly: boolean;
  };
  pickOns: PickOns;
};

export type PickOn = {
  value: string;
  price: string;
};

export type PickOns = PickOn[];
