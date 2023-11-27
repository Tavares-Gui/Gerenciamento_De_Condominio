package com.tavares.java_api.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("user")
public class UserModel {
    @Id
    private String id;
    private String name;
    private String birthday;
    private String sex;
    private String cpf;
    private String bloco;
    private String apto;
    private String email;
    private String password;
    private Boolean adm;
    private short vaga;

    public UserModel(String name, String email, String cpf, String birthday, String sex, String apto, String bloco, short vaga,String password,Boolean adm)
    {
        this.name = name;
        this.email = email;
        this.cpf = cpf;
        this.birthday = birthday;
        this.sex = sex;
        this.apto = apto;
        this.bloco = bloco;
        this.vaga = vaga;
        this.password = password;
        this.adm = adm;
    }

    public UserModel(UserModel user)
    {
        this.id = user.getId();
        this.name = user.getName();
        this.email = user.getEmail();
        this.cpf = user.getCpf();
        this.birthday = user.getBirthday();
        this.sex = user.getSex();
        this.apto = user.getApto();
        this.bloco = user.getBloco();
        this.vaga = user.getVaga();
        this.password = user.getPassword();
        this.adm = user.getAdm();
    }

    public UserModel(String id)
    {
        this.id = id;
    }

    public UserModel(String cpf, String password)
    {
        this.cpf = cpf;
        this.password = password;
    }

    public UserModel() { }
}