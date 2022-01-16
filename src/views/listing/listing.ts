import { Vue, Component, Prop } from 'vue-property-decorator';
import { v4 as uuidv4 } from 'uuid';

@Component
export default class Listing extends Vue {
  @Prop()
  products: any;

  @Prop()
  cart: any;

  formattedPrice(price: any) {
    return +price / 100;
  }

  async addToCart(product: any) {
    const selectedProduct = { ...product };
    await this.$emit('addToCart', { ...selectedProduct, cardId: uuidv4() });
    const pr = this.products.find((p: any) => p.id === selectedProduct.id);
    pr.quantity = 1;
    // (this.$refs.form as HTMLFormElement).reset();
  }
}
