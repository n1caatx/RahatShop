package com.rahatshop.service;

import com.rahatshop.dto.CategoryResponse;
import com.rahatshop.entity.Category;
import com.rahatshop.repository.CategoryRepository;
import com.rahatshop.util.SlugUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public List<CategoryResponse> getAllCategories() {
        return categoryRepository.findAll().stream().map(this::mapToDto).collect(Collectors.toList());
    }

    public CategoryResponse getCategoryBySlug(String slug) {
        Category category = categoryRepository.findBySlug(slug)
                .orElseThrow(() -> new RuntimeException("Kateqoriya tapılmadı"));
        return mapToDto(category);
    }

    public CategoryResponse createCategory(String name, Long parentId) {
        Category category = new Category();
        category.setName(name);
        category.setSlug(SlugUtil.generateSlug(name));
        category.setCreatedAt(Instant.now());

        if (parentId != null) {
            Category parent = categoryRepository.findById(parentId).orElse(null);
            category.setParent(parent);
        }

        category = categoryRepository.save(category);
        return mapToDto(category);
    }

    private CategoryResponse mapToDto(Category c) {
        CategoryResponse dto = new CategoryResponse();
        dto.setId(c.getId());
        dto.setName(c.getName());
        dto.setSlug(c.getSlug());
        if (c.getParent() != null) dto.setParentId(c.getParent().getId());
        return dto;
    }
}
