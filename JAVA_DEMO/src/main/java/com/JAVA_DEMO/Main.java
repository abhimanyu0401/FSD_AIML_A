package com.JAVA_DEMO;

import java.util.Scanner;

public class Main {
    static void main() {
        int a,b;
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter first number : ");
        a = sc.nextInt();
        System.out.print("Enter second number : ");
        b = sc.nextInt();
        Calculate obj = new Calculate();
        System.out.println("Sum = " + obj.add(a,b));
        System.out.println("Difference = " + obj.subtract(a,b));
        System.out.println("Product = " + obj.multiply(a,b));
        System.out.println("Division = " + obj.divide(a,b));

    }
}
