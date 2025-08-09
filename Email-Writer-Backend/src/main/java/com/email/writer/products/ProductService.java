package com.email.writer.products;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class ProductService {

    List<Product> products = new ArrayList<>(Arrays.asList(
            new Product(1,"Mobile",20000),
            new Product(2,"Phone",20000)
    ));
    public List<Product> getProducts(){
        return products;
    }

    public Product getProductById(int prodId) {
        return products.stream()
                .filter(p->p.getId() == prodId)
                .findFirst().orElse(new Product(0,"No Product Found",0));
    }

    public void addProduct(Product prod) {
        products.add(prod);
    }
}
