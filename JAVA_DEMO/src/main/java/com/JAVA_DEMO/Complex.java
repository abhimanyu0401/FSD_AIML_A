package com.JAVA_DEMO;

public class Complex {
    int real;
    int imaginary;

     Complex() {
        real = 0;
        imaginary =0;
    }

    Complex(int real, int imaginary){
        this.real = real;
        this.imaginary = imaginary;
    }

    Complex(Complex c){
         this.real = c.real;
         this.imaginary = c.imaginary;
    }

    void display(){
        System.out.println(real+" +i"+imaginary);
    }

     void sum(Complex c){
         this.real = this.real + c.real;
         this.imaginary = this.imaginary + c.imaginary;
    }

    void product(Complex c){
         this.real = this.real * c.real - this.imaginary * c.imaginary;
         this.imaginary = this.real * c.imaginary + c.real * this.imaginary;
    }
}
