import { Vue, Component, Prop } from 'vue-property-decorator';
import { postRequest } from '@/utils/axiosClient';
import { STATUS_CODE } from '@/constants/status';

@Component({
  data() {
    return {
      coupon: null,
      discount: null,
      appliedCoupon: null,
      error: false,
      loaded: true,
      completed: false,
    };
  },
})
export default class Cart extends Vue {
  @Prop()
  cart: any;

  coupon: string;

  discount: number;

  appliedCoupon: string;

  loaded: boolean;

  error: boolean;

  completed: boolean;

  formattedPrice(price: any) {
    return +price / 100;
  }

  rowFormattedTotalPrice(quantity: any, price: any) {
    return (+quantity * +price) / 100;
  }

  get finalPrice() {
    let price = 0;
    this.cart.map((item: any) => (price = +price + +item.quantity * +item.price));

    if (this.appliedCoupon) {
      return ((price - (price * (this.discount / 100))) / 100).toFixed(2);
    }
    return (price / 100).toFixed(2);
  }

  applyCoupon() {
    switch (this.coupon) {
      case 'HAPPYBIRTHDAY':
        this.appliedCoupon = this.coupon;
        this.discount = 20;
        break;
      case 'KATOO':
        this.appliedCoupon = this.coupon;
        this.discount = 50;
        break;
      case 'ILIKEAPPLES':
        this.appliedCoupon = this.coupon;
        this.discount = 60;
        break;
      default:
        this.appliedCoupon = '';
        this.discount = 0;
        break;
    }

    this.coupon = '';
  }

  async completeOrder() {
    this.loaded = true;

    const response = await postRequest('order', this.cart);

    if (response.status === STATUS_CODE.OK
      && response.data.success) {
      this.completed = true;
    } else {
      this.error = true;
    }
  }
}
