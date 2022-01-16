import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Listing extends Vue {
  @Prop()
  products: any;

  formattedPrice(price:any) {
    return +price / 100;
  }

  addToCart(product: any) {
    this.$emit('addToCart', product);
  }
}
