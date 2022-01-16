import { Vue, Component } from 'vue-property-decorator';
import { getRequest } from '@/utils/axiosClient';
import { STATUS_CODE } from '@/constants/status';

@Component({
  data() {
    return {
      products: null,
      cart: [],
      loaded: true,
      error: false,
    };
  },
})
export default class App extends Vue {
  products: any;

  cart: any;

  loaded: boolean;

  error: boolean;

  async mounted() {
    const response = await getRequest('products');

    this.loaded = false;

    if (response.status === STATUS_CODE.OK) {
      const { data } = response;
      this.products = data.products;
      this.error = false;
    } else {
      this.error = true;
    }
  }

  addToCart(product: any) {
    console.log(product);
    this.cart = [...this.cart, product];
  }
}
