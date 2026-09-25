package com.rahatshop.util;

public class SlugUtil {
    public static String generateSlug(String input) {
        if (input == null) return "";
        return input.toLowerCase()
                .replace("ə", "e")
                .replace("ı", "i")
                .replace("ö", "o")
                .replace("ğ", "g")
                .replace("ü", "u")
                .replace("ş", "s")
                .replace("ç", "c")
                .replaceAll("[^a-z0-9\\s-]", "")
                .replaceAll("\\s+", "-")
                .replaceAll("-+", "-");
    }
}
