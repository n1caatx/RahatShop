package com.rahatshop.controller;

import com.rahatshop.dto.CategoryResponse;
import com.rahatshop.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/")
    public List<CategoryResponse> getAll() {
        return categoryService.getAllCategories();
    }

    @GetMapping("/{slug}")
    public CategoryResponse getBySlug(@PathVariable String slug) {
        return categoryService.getCategoryBySlug(slug);
    }

    @PostMapping("/")
    public CategoryResponse create(@RequestParam String name, @RequestParam(required=false) Long parentId) {
        return categoryService.createCategory(name, parentId);
    }
}
