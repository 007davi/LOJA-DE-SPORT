create database dbApiShopSport; 

use dbApiShopSport;

create table  IF not EXISTS shop (
id int primary key auto_increment,
nome varchar(50),
descricao varchar(100),
codigo varchar(15),
preco varchar(10)
);


insert into shop (nome, descricao, codigo, preco) values ('bol', 'bola de futebol', '580459654', '300');
insert into shop (nome, descricao, codigo, preco) values ('bal', 'tenis de futebol', '580554954', '3569');

select * from shop