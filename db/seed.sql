create table if not exists fandom (
    fandom_id serial primary key,
    fandom_name varchar(30),
    image varchar(250)
);