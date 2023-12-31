package com.tavares.java_api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tavares.java_api.model.UserModel;
import com.tavares.java_api.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
    
    @Autowired
    private UserService userService;

    @GetMapping("")
    public List<UserModel> getAllUser()
    {
        List<UserModel> listRes = userService.findAll();
        return listRes;
    }

    @GetMapping("/{name}")
    public List<UserModel> getUserByName(@PathVariable String name)
    {
        List<UserModel> listRes = userService.findByName(name);
        return listRes;
    }

    @GetMapping("/{cpf}/{password}")
    public UserModel getUserByCPfPassword(@PathVariable String cpf, @PathVariable String password)
    {
        UserModel res = userService.findByCpfPassword(cpf, password);
        return res;
    }
    
    @PostMapping("")
    public void newUser(@RequestBody UserModel newUser) {
        userService.save(newUser);
    }

    @PutMapping("/{id}")
    public void putUser(@RequestBody UserModel newUser, @PathVariable String id) {
        userService.save(
            (String) id, 
            (String) newUser.getName(), 
            (String) newUser.getBirthday(), 
            (String) newUser.getSex(), 
            (String) newUser.getCpf(), 
            (String) newUser.getBloco(),
            (String) newUser.getApto(),
            (String) newUser.getEmail(),
            (String) newUser.getPassword(),
            (Boolean) newUser.getAdm(),
            (short) newUser.getVaga()
        );
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable String id) {
        userService.delete(id);
    }

}