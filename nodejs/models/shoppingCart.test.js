const { ShoppingCart } = require('./shoppingCart'); // OJO CLASES EMPIEZAN EN MAYUSCULAS

describe('Shopping Cart', ()=> {
    test('Pruebas shopping cart', () => {
        const cart = new ShoppingCart("Euro")
        expect(cart.getItemCount()).toBe(0);

    });
    // test('deberia dividir dos numeros', () => {
    //   expect(dividir(3, 3)).toBe(1);
    //   expect(dividir(4, 2)).toBe(2);
    //   expect(() => dividir(5, 0)).toThrowError("No se puede dividir entre cero"); 
    //   expect(typeof dividir(5,5)).toBe("number");
    // });
    // test('pruebas de restar', () => {
    //   expect(restar(10, 2)).toBe(8)
  
    // });
    // test('pruebas de formatPrice', () => {
    //   // expect(formatPrice(9.95)).toBe("$9.95")
    //   expect(formatPrice(9.999)).toBe("$10.00")
    //   expect(formatPrice(9.994)).toBe("$9.99")
    //   expect(formatPrice(9.995)).toBe("$9.99")
    //   expect(formatPrice(9.996)).toBe("$10.00")
    // });
    // test('pruebas de convertirDuracion', () => {
    //   expect(convertirDuracion(120, "segundos", "minutos")).toBe(2)
    //   expect(convertirDuracion(120, "segundos", "segundos")).toBe(120)
    //   expect(convertirDuracion(2, "minutos", "segundos")).toBe(120)
    // });
  })
  
  