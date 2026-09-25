package com.rahatshop.service;

import com.rahatshop.dto.StoreRequest;
import com.rahatshop.dto.StoreResponse;
import com.rahatshop.entity.Store;
import com.rahatshop.entity.User;
import com.rahatshop.repository.StoreRepository;
import com.rahatshop.repository.UserRepository;
import com.rahatshop.util.SlugUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class StoreService {

    @Autowired
    private StoreRepository storeRepository;

    @Autowired
    private UserRepository userRepository;

    public StoreResponse createStore(StoreRequest request, String ownerEmail) {
        User user = userRepository.findByEmail(ownerEmail).orElseThrow();
        Store store = new Store();
        store.setName(request.getName());
        store.setSlug(SlugUtil.generateSlug(request.getName()));
        store.setDescription(request.getDescription());
        store.setCity(request.getCity());
        store.setPhone(request.getPhone());
        store.setOwner(user);
        store.setCreatedAt(Instant.now());
        store.setUpdatedAt(Instant.now());

        storeRepository.save(store);
        return mapToDto(store);
    }

    public StoreResponse getStoreBySlug(String slug) {
        Store store = storeRepository.findBySlug(slug).orElseThrow();
        return mapToDto(store);
    }

    public List<StoreResponse> getAllStores() {
        return storeRepository.findAll().stream().map(this::mapToDto).collect(Collectors.toList());
    }

    private StoreResponse mapToDto(Store s) {
        StoreResponse r = new StoreResponse();
        r.setId(s.getId());
        r.setName(s.getName());
        r.setSlug(s.getSlug());
        r.setDescription(s.getDescription());
        r.setCity(s.getCity());
        r.setPhone(s.getPhone());
        r.setOwnerEmail(s.getOwner().getEmail());
        return r;
    }
}
