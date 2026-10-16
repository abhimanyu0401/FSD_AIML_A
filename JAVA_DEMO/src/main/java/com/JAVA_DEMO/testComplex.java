package com.JAVA_DEMO;

public class testComplex {
    static void main() {
        Complex c1 , c2, c3;
        c1 = new Complex();
        c2 = new Complex(3,4);
        c3 = new Complex(c2);
        c1.display();
        c2.display();
        c3.display();
        c1.sum(c2);
        System.out.print("Sum : ");
        c1.display();
        c1.product(c3);
        System.out.print("Product : ");
        c1.display();
        
    }
}
