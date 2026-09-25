package com.rahatshop.exception;

public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException(String resourceName, String fieldName, Object fieldValue) {
        super(String.format("%s tapılmadı: %s = '%s'", resourceName, fieldName, fieldValue));
    }
}
