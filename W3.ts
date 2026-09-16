class Product {
    constructor(
        public name: string,
        public price: number,
        public quantity: number
    ) {}

    getSubtotal(): number {
        return this.price * this.quantity;
    }
}

class Order {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    calculateTotal(): number {
        let total = 0;
        for (const product of this.products) {
            total += product.getSubtotal();
        }
        return total;
    }

    calculateDiscount(percent: number): number {
        const total = this.calculateTotal();
        return (total * percent) / 100;
    }
    calculateNetTotal(percent: number): number {
        const total = this.calculateTotal();
        const discount = this.calculateDiscount(percent);
        return total - discount;
    }

    showOrderInfo(): void {
        for (const product of this.products) {
            console.log(`${product.name} ${product.price} บาท x ${product.quantity} ชิ้น Subtotal = ${product.getSubtotal()} บาท`);
        }
    }
}

const order = new Order();

order.addProduct(new Product("Laptop", 10000, 4));
order.addProduct(new Product("Mouse", 2000, 10));
order.addProduct(new Product("Scanner", 12000, 3));
order.showOrderInfo();
const total = order.calculateTotal();
const discount = order.calculateDiscount(10);
const netTotal = order.calculateNetTotal(10);

console.log(`ราคารวม: ${total} บาท`);
console.log(`ส่วนลด (10%): ${discount} บาท`);
console.log(`ราคาสุทธิ: ${netTotal} บาท`);