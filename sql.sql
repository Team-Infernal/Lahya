#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: company
#------------------------------------------------------------

CREATE TABLE company(
        id                Int  Auto_increment  NOT NULL ,
        name              Varchar (50) NOT NULL ,
        students_accepted Int NOT NULL ,
        students_visible  Bool NOT NULL
	,CONSTRAINT company_PK PRIMARY KEY (id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: activity_domain
#------------------------------------------------------------

CREATE TABLE activity_domain(
        id   Int  Auto_increment  NOT NULL ,
        name Varchar (50) NOT NULL
	,CONSTRAINT activity_domain_PK PRIMARY KEY (id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: address
#------------------------------------------------------------

CREATE TABLE address(
        id          Int  Auto_increment  NOT NULL ,
        street      Varchar (50) NOT NULL ,
        city        Varchar (50) NOT NULL ,
        postal_code Char (50) NOT NULL ,
        country     Varchar (50) NOT NULL ,
        region      Varchar (50) NOT NULL ,
        id_company  Int NOT NULL
	,CONSTRAINT address_PK PRIMARY KEY (id)

	,CONSTRAINT address_company_FK FOREIGN KEY (id_company) REFERENCES company(id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: internship
#------------------------------------------------------------

CREATE TABLE internship(
        id               Int  Auto_increment  NOT NULL ,
        title            Varchar (50) NOT NULL ,
        description      Text NOT NULL ,
        minor            Varchar(50) NOT NULL ,
        lasts            Date NOT NULL ,
        salary           DECIMAL (15,3)  NOT NULL ,
        published_at     Date NOT NULL ,
        places_available Int NOT NULL ,
        id_company       Int NOT NULL ,
        id_address       Int NOT NULL
	,CONSTRAINT internship_PK PRIMARY KEY (id)

	,CONSTRAINT internship_company_FK FOREIGN KEY (id_company) REFERENCES company(id)
	,CONSTRAINT internship_address0_FK FOREIGN KEY (id_address) REFERENCES address(id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: application
#------------------------------------------------------------

CREATE TABLE application(
        id                     Int  Auto_increment  NOT NULL ,
        current_step           Enum ("1","2","3","4","5","6") NOT NULL ,
        cv_link                Varchar (50) ,
        motivation_link        Varchar (50) ,
        validation_link        Varchar (50) ,
        signed_validation_link Varchar (50) ,
        convention_link        Varchar (50) ,
        signed_convention_link Varchar (50) ,
        id_company             Int NOT NULL ,
        id_users               Int NOT NULL
	,CONSTRAINT application_PK PRIMARY KEY (id)

	,CONSTRAINT application_company_FK FOREIGN KEY (id_company) REFERENCES company(id)
	,CONSTRAINT application_users0_FK FOREIGN KEY (id_users) REFERENCES users(id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: role
#------------------------------------------------------------

CREATE TABLE role(
        id   Int  Auto_increment  NOT NULL ,
        name Varchar (50) NOT NULL
	,CONSTRAINT role_PK PRIMARY KEY (id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: permission
#------------------------------------------------------------

CREATE TABLE permission(
        id   Int  Auto_increment  NOT NULL ,
        name Varchar (50) NOT NULL ,
        code Varchar (5) NOT NULL
	,CONSTRAINT permission_PK PRIMARY KEY (id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: users
#------------------------------------------------------------

CREATE TABLE users(
        id                 Int  Auto_increment  NOT NULL ,
        first_name         Varchar (50) NOT NULL ,
        last_name          Varchar (50) NOT NULL ,
        login              Varchar (50) NOT NULL ,
        hash               Varchar (50) NOT NULL ,
        school             Varchar (50) NOT NULL ,
        class              Varchar (50) NOT NULL ,
        id_permission      Int NOT NULL ,
        id_permission_has3 Int NOT NULL
	,CONSTRAINT users_PK PRIMARY KEY (id)

	,CONSTRAINT users_permission_FK FOREIGN KEY (id_permission_has3) REFERENCES permission(id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: grades_by_students
#------------------------------------------------------------

CREATE TABLE grades_by_students(
        id             Int  Auto_increment  NOT NULL ,
        value          Int NOT NULL ,
        comment        Text ,
        reaction_emoji Varchar (50) ,
        id_users       Int NOT NULL ,
        id_company     Int NOT NULL
	,CONSTRAINT grades_by_students_PK PRIMARY KEY (id)

	,CONSTRAINT grades_by_students_users_FK FOREIGN KEY (id_users) REFERENCES users(id)
	,CONSTRAINT grades_by_students_company0_FK FOREIGN KEY (id_company) REFERENCES company(id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: is_working_in
#------------------------------------------------------------

CREATE TABLE is_working_in(
        id         Int  Auto_increment  NOT NULL ,
        id_company Int NOT NULL
	,CONSTRAINT is_working_in_PK PRIMARY KEY (id,id_company)

	,CONSTRAINT is_working_in_activity_domain_FK FOREIGN KEY (id) REFERENCES activity_domain(id)
	,CONSTRAINT is_working_in_company0_FK FOREIGN KEY (id_company) REFERENCES company(id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: wishlists
#------------------------------------------------------------

CREATE TABLE wishlists(
        id            Int  Auto_increment  NOT NULL ,
        id_internship Int NOT NULL
	,CONSTRAINT wishlists_PK PRIMARY KEY (id,id_internship)

	,CONSTRAINT wishlists_users_FK FOREIGN KEY (id) REFERENCES users(id)
	,CONSTRAINT wishlists_internship0_FK FOREIGN KEY (id_internship) REFERENCES internship(id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: has1
#------------------------------------------------------------

CREATE TABLE has1(
        id       Int  Auto_increment  NOT NULL ,
        id_users Int NOT NULL
	,CONSTRAINT has1_PK PRIMARY KEY (id,id_users)

	,CONSTRAINT has1_role_FK FOREIGN KEY (id) REFERENCES role(id)
	,CONSTRAINT has1_users0_FK FOREIGN KEY (id_users) REFERENCES users(id)
)ENGINE=InnoDB;

#------------------------------------------------------------
# Table: has2
#------------------------------------------------------------

CREATE TABLE has2(
        id            Int  Auto_increment  NOT NULL ,
        id_permission Int NOT NULL
	,CONSTRAINT has2_PK PRIMARY KEY (id,id_permission)

	,CONSTRAINT has2_role_FK FOREIGN KEY (id) REFERENCES role(id)
	,CONSTRAINT has2_permission0_FK FOREIGN KEY (id_permission) REFERENCES permission(id)
)ENGINE=InnoDB;

SET FOREIGN_KEY_CHECKS = 0;

#------------------------------------------------------------
# Table: company
#------------------------------------------------------------

INSERT INTO `company` (`name`,`students_accepted`,`students_visible`)
VALUES
  ("nulla.",53,0),
  ("Sed",54,0),
  ("urna",10,0),
  ("pretium",17,1),
  ("odio.",45,1),
  ("Class",39,0),
  ("auctor",12,1),
  ("tristique",30,0),
  ("pede",70,0),
  ("felis",2,0),
  ("magnis",8,1),
  ("ipsum.",67,1),
  ("laoreet,",42,0),
  ("feugiat",96,0),
  ("iaculis",17,1),
  ("Etiam",49,1),
  ("vitae",95,0),
  ("sodales",60,0),
  ("dapibus",27,1),
  ("Nam",95,1),
  ("sem",63,0),
  ("dui,",81,0),
  ("erat",78,1),
  ("ut",65,1),
  ("porttitor",63,0),
  ("rutrum",15,1),
  ("auctor",40,1),
  ("Aliquam",52,1),
  ("nibh",94,0),
  ("in",53,1),
  ("cursus",22,0),
  ("auctor",34,0),
  ("pharetra.",13,1),
  ("nisi",37,0),
  ("leo.",53,0),
  ("mauris",75,0),
  ("orci,",42,0),
  ("molestie",7,0),
  ("Sed",27,1),
  ("nascetur",38,1),
  ("diam",16,1),
  ("Suspendisse",52,0),
  ("ac",62,0),
  ("Fusce",11,0),
  ("urna",63,1),
  ("aliquam",81,1),
  ("tempor",39,0),
  ("nonummy",98,1),
  ("elit.",19,0),
  ("malesuada",98,1);

#------------------------------------------------------------
# Table: activity_domain
#------------------------------------------------------------

INSERT INTO `activity_domain` (`name`)
VALUES
  ("luctus"),
  ("interdum"),
  ("pellentesque."),
  ("sit"),
  ("nisl"),
  ("semper"),
  ("Aliquam"),
  ("Mauris"),
  ("Donec"),
  ("Cum"),
  ("vestibulum,"),
  ("velit"),
  ("odio."),
  ("mattis"),
  ("Praesent"),
  ("Vivamus"),
  ("neque"),
  ("Sed"),
  ("in"),
  ("arcu"),
  ("montes,"),
  ("euismod"),
  ("risus"),
  ("felis"),
  ("sodales"),
  ("auctor"),
  ("pellentesque"),
  ("elit,"),
  ("Phasellus"),
  ("sed,"),
  ("nisl."),
  ("Ut"),
  ("placerat."),
  ("arcu."),
  ("amet"),
  ("non,"),
  ("posuere,"),
  ("nisl"),
  ("quis"),
  ("Aenean"),
  ("facilisis"),
  ("nascetur"),
  ("non"),
  ("magna."),
  ("lorem"),
  ("semper"),
  ("ante"),
  ("non"),
  ("Praesent"),
  ("Integer");

#------------------------------------------------------------
# Table: address
#------------------------------------------------------------

INSERT INTO `address` (`street`,`city`,`postal_code`,`country`,`region`,`id_company`)
VALUES
  ("189-2164 Ipsum St.","Sevastopol","01-551","Poland","Tamaulipas",37),
  ("P.O. Box 477, 2142 Cras Road","La Dorada","16224","Australia","Bahia",43),
  ("P.O. Box 284, 6785 Auctor Rd.","Camiña","8795","Canada","Northwest Territories",31),
  ("1814 Sit Street","Trujillo","878272","Netherlands","North Island",17),
  ("803-9022 Augue Rd.","Leeuwarden","256663","Ukraine","Aragón",45),
  ("P.O. Box 175, 9310 Ligula. Av.","Sengkang","6431","Poland","Gävleborgs län",47),
  ("P.O. Box 524, 4780 Nonummy Ave","Tibet","8424","Ukraine","North Sumatra",2),
  ("257-2547 Phasellus Avenue","Kitzbühel","4531","Norway","Rogaland",16),
  ("P.O. Box 591, 3894 Tempor Av.","Motala","27814","United States","Aisén",48),
  ("104-1863 Ornare, Rd.","Irkutsk","74-48","Peru","Central Region",34),
  ("Ap #681-1083 Amet St.","León","54-48","China","Rogaland",3),
  ("1709 Interdum. Ave","Paraíso","16856","Italy","Alsace",28),
  ("985-4328 Luctus Street","Bydgoszcz","654445","Chile","South Jeolla",20),
  ("7322 Parturient Avenue","Xinjiang","582832","Singapore","Arequipa",6),
  ("Ap #947-956 Phasellus Road","Stargard Szczeciński","85354","Italy","North-East Region",29),
  ("723-5927 Ridiculus Street","Jambi","5326-2884","Sweden","Henegouwen",2),
  ("Ap #288-5536 Ligula. Avenue","Pagadian","4212","United States","Northern Territory",28),
  ("474-4945 Pellentesque Avenue","Manokwari","73-218","Austria","Alajuela",48),
  ("598-1545 Interdum Street","Tranås","711243","New Zealand","Soccsksargen",24),
  ("Ap #567-3332 Venenatis St.","Pangkalpinang","9926","South Africa","Quảng Ngãi",33),
  ("698-1092 In Rd.","El Tabo","14807","Turkey","Western Cape",31),
  ("4919 Libero. Av.","South Burlington","77-42","India","North Region",9),
  ("558-1624 Integer Ave","Davao City","495167","Chile","Northern Cape",42),
  ("107-4560 Aliquet. Avenue","Ludvika","28817","Germany","Ulster",27),
  ("P.O. Box 735, 3736 Nulla Ave","Hoogeveen","366426","South Africa","Cà Mau",1),
  ("P.O. Box 187, 3614 Maecenas Avenue","Gresham","966049","South Korea","Kano",33),
  ("743-1644 Sodales Road","Palu","480348","China","Limón",8),
  ("Ap #531-6682 Ipsum Av.","Jaboatão dos Guararapes","42-29","New Zealand","Kentucky",36),
  ("300 Imperdiet, Ave","Alto del Carmen","42-26","France","Bangka Belitung Islands",35),
  ("849-4637 Feugiat Av.","Osasco","565612","Netherlands","Opolskie",10),
  ("Ap #221-9981 Fermentum Av.","Compiègne","30503","Mexico","Putumayo",42),
  ("P.O. Box 682, 9860 Phasellus Street","Port Harcourt","15182","South Korea","Santa Catarina",16),
  ("Ap #205-5128 Libero Ave","Narbolia","9177","Sweden","Piemonte",26),
  ("P.O. Box 579, 2567 Vulputate Av.","Finspång","231564","South Africa","Bihar",12),
  ("Ap #353-9873 Eget Av.","Neunkirchen","15-56","United States","Wyoming",7),
  ("341-4009 Amet Rd.","Chuncheon","2782","Peru","Volgograd Oblast",28),
  ("Ap #709-4173 Integer Ave","Hebei","2611 EU","Colombia","Bahia",17),
  ("595-6524 Vulputate Avenue","Pietermaritzburg","HE3G 9EK","China","Atacama",11),
  ("450-5406 Elit Av.","Vetlanda","898054","Mexico","Brandenburg",46),
  ("Ap #871-6129 Sagittis. St.","Kurram Agency","648715","Turkey","Vestfold og Telemark",24),
  ("Ap #685-8925 Dignissim. Av.","Mannheim","7367","Australia","Western Cape",29),
  ("3328 Donec Street","Passau","25S 8E4","Mexico","Mykolaiv oblast",45),
  ("Ap #958-5791 Lacus Av.","Des Moines","21316","Colombia","Munster",5),
  ("383-5659 Cras St.","Cessnock","38526","India","Caldas",35),
  ("991-2606 Malesuada Road","Kaluga","30451","Peru","Bryansk Oblast",13),
  ("521-1268 Neque. Ave","Gijón","699885","Italy","Lazio",50),
  ("741-5650 Ullamcorper, Street","Curridabat","745551","United Kingdom","Salzburg",6),
  ("Ap #777-3892 Nam Road","Wansin","6336-6355","United Kingdom","Bourgogne",19),
  ("P.O. Box 136, 9403 Magnis Rd.","Kursk","13524","Singapore","Castilla y León",25),
  ("955-5821 Feugiat Street","Hạ Long","61257","Poland","Konya",21);

#------------------------------------------------------------
# Table: internship
#------------------------------------------------------------

INSERT INTO `internship` (`title`,`description`,`minor`,`lasts`,`salary`,`published_at`,`places_available`,`id_company`)
VALUES
  ("auctor","ipsum dolor sit amet, consectetuer","Cum","2021-10-30",639,"2020-11-4",1,19),
  ("nibh","vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras","nulla.","2021-11-28",595,"2020-7-23",2,40),
  ("egestas.","fringilla mi lacinia mattis.","dapibus","2021-12-21",669,"2019-5-4",7,48),
  ("tellus.","dignissim magna a tortor. Nunc commodo auctor velit.","mi","2021-12-3",412,"2020-4-24",10,13),
  ("purus.","volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean","sit","2022-1-4",487,"2020-4-8",4,25),
  ("sem","felis, adipiscing fringilla, porttitor vulputate, posuere vulputate,","rhoncus.","2021-10-18",269,"2020-12-8",7,39),
  ("Phasellus","semper erat,","blandit","2021-11-14",139,"2019-11-14",9,13),
  ("lorem","varius et, euismod et, commodo at, libero. Morbi accumsan","Mauris","2021-5-29",249,"2019-3-19",5,27),
  ("nulla.","fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra","venenatis","2022-2-4",238,"2020-10-26",9,44),
  ("placerat","Cras convallis convallis dolor. Quisque tincidunt pede","convallis","2022-1-25",628,"2020-4-19",8,7),
  ("nisi","velit. Cras","vitae,","2021-11-23",196,"2019-12-4",9,6),
  ("orci,","amet ultricies sem magna nec","nonummy","2021-10-27",533,"2020-5-28",10,32),
  ("Nam","Vestibulum ut eros","pulvinar","2021-6-24",429,"2021-3-7",8,47),
  ("tellus","non, feugiat nec, diam. Duis","eleifend","2021-12-5",119,"2019-7-12",5,45),
  ("molestie","arcu ac orci. Ut semper pretium neque. Morbi","purus.","2022-2-6",188,"2019-12-15",0,8),
  ("placerat","mollis. Integer tincidunt","a","2021-8-28",678,"2020-5-20",2,37),
  ("pulvinar","lorem, sit amet ultricies","egestas","2021-6-4",449,"2020-4-24",3,12),
  ("quis","a purus. Duis elementum, dui quis accumsan","sem,","2022-1-29",344,"2020-9-6",9,38),
  ("hendrerit","arcu. Vestibulum ante ipsum primis in faucibus orci luctus","Aenean","2021-12-14",572,"2020-5-14",7,45),
  ("Sed","eget laoreet posuere, enim nisl elementum","Aenean","2021-3-26",211,"2021-2-20",5,9),
  ("eu","est, vitae sodales nisi","In","2021-10-2",244,"2020-8-26",0,45),
  ("id","nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique","justo.","2021-9-12",219,"2019-12-14",2,20),
  ("feugiat.","in aliquet lobortis, nisi nibh","Vestibulum","2021-4-14",555,"2021-3-15",6,4),
  ("porttitor","in sodales elit erat vitae risus. Duis a mi fringilla","aliquet","2021-7-17",589,"2020-2-6",4,48),
  ("eu","quis arcu vel quam","eu","2021-7-15",210,"2020-9-24",6,36),
  ("sodales","sagittis semper. Nam tempor diam dictum","semper","2021-11-23",655,"2020-9-7",2,49),
  ("ac","ultricies ligula. Nullam enim. Sed nulla","magna","2021-7-15",452,"2020-10-12",8,20),
  ("et","mollis dui, in sodales elit erat vitae","et","2021-10-27",21,"2020-9-1",4,27),
  ("conubia","cubilia Curae Phasellus ornare.","Pellentesque","2021-11-2",573,"2020-10-7",2,40),
  ("semper","netus et malesuada fames ac turpis egestas. Aliquam","eu,","2021-9-10",271,"2019-10-20",6,12),
  ("non","massa. Suspendisse eleifend. Cras sed leo. Cras","Lorem","2022-2-2",40,"2019-12-17",1,29),
  ("lectus","faucibus id,","enim","2021-4-20",475,"2020-6-10",5,9),
  ("eget,","luctus vulputate, nisi sem semper erat, in","aliquam","2021-12-10",493,"2019-11-6",7,37),
  ("eleifend","viverra. Donec tempus, lorem","eros.","2021-11-4",529,"2020-12-29",3,35),
  ("quis","Aliquam nisl. Nulla eu neque pellentesque massa","odio.","2022-2-23",303,"2020-12-8",5,10),
  ("malesuada","eleifend. Cras sed leo. Cras vehicula aliquet libero.","nisi.","2022-2-11",422,"2020-10-25",4,17),
  ("eleifend","vitae odio sagittis","scelerisque","2021-6-15",109,"2019-6-25",6,47),
  ("at,","consequat nec, mollis vitae, posuere","nec,","2022-1-10",693,"2021-2-23",5,28),
  ("nascetur","Mauris quis","risus.","2022-3-2",662,"2020-1-9",1,27),
  ("magna,","non leo. Vivamus nibh dolor,","vehicula.","2021-11-30",332,"2021-1-18",4,23),
  ("vitae,","nunc id enim. Curabitur massa. Vestibulum accumsan","Cras","2021-8-10",66,"2019-9-21",10,2),
  ("vehicula","Integer sem elit, pharetra ut, pharetra sed, hendrerit","eu","2021-12-24",182,"2020-10-25",7,32),
  ("lacus.","feugiat non,","vitae,","2021-11-12",339,"2020-6-9",8,38),
  ("mauris","a neque.","semper","2021-8-28",108,"2020-4-28",7,24),
  ("sociis","Curabitur dictum. Phasellus in felis. Nulla tempor","Nunc","2021-12-25",453,"2019-9-1",5,31),
  ("ligula","Praesent luctus. Curabitur egestas nunc","turpis.","2021-5-7",97,"2019-3-31",4,6),
  ("turpis","Vivamus euismod urna. Nullam lobortis quam a felis","ipsum","2021-4-10",596,"2020-10-13",7,44),
  ("suscipit","arcu. Vivamus sit","dictum","2022-1-25",563,"2020-9-14",6,6),
  ("amet","eget varius","lectus.","2021-9-16",330,"2020-7-14",8,4),
  ("pede","sapien, gravida non, sollicitudin a, malesuada id, erat.","mollis","2022-1-21",272,"2019-10-13",6,39);

#------------------------------------------------------------
# Table: application
#------------------------------------------------------------

INSERT INTO `application` (`current_step`,`cv_link`,`motivation_link`,`validation_link`,`signed_validation_link`,`convention_link`,`signed_convention_link`,`id_company`, `id_users`)
VALUES
  ("1","google.com","google.com","google.com","google.com","google.com","google.com",35,1),
  ("4","google.com","google.com","google.com","google.com","google.com","google.com",34,2),
  ("1","google.com","google.com","google.com","google.com","google.com","google.com",2,2),
  ("4","google.com","google.com","google.com","google.com","google.com","google.com",8,3),
  ("4","google.com","google.com","google.com","google.com","google.com","google.com",14,4),
  ("1","google.com","google.com","google.com","google.com","google.com","google.com",27,5),
  ("1","google.com","google.com","google.com","google.com","google.com","google.com",3,6),
  ("1","google.com","google.com","google.com","google.com","google.com","google.com",45,7),
  ("4","google.com","google.com","google.com","google.com","google.com","google.com",25,8),
  ("4","google.com","google.com","google.com","google.com","google.com","google.com",8,9),
  ("1","google.com","google.com","google.com","google.com","google.com","google.com",7,10),
  ("1","google.com","google.com","google.com","google.com","google.com","google.com",20,11),
  ("2","google.com","google.com","google.com","google.com","google.com","google.com",45,12),
  ("4","google.com","google.com","google.com","google.com","google.com","google.com",13,13),
  ("3","google.com","google.com","google.com","google.com","google.com","google.com",35,14),
  ("3","google.com","google.com","google.com","google.com","google.com","google.com",3,15),
  ("2","google.com","google.com","google.com","google.com","google.com","google.com",26,16),
  ("1","google.com","google.com","google.com","google.com","google.com","google.com",41,17),
  ("2","google.com","google.com","google.com","google.com","google.com","google.com",31,18),
  ("3","google.com","google.com","google.com","google.com","google.com","google.com",33,19),
  ("4","google.com","google.com","google.com","google.com","google.com","google.com",28,20),
  ("1","google.com","google.com","google.com","google.com","google.com","google.com",13,21),
  ("3","google.com","google.com","google.com","google.com","google.com","google.com",47,22),
  ("1","google.com","google.com","google.com","google.com","google.com","google.com",14,23),
  ("2","google.com","google.com","google.com","google.com","google.com","google.com",41,24),
  ("2","google.com","google.com","google.com","google.com","google.com","google.com",46,25),
  ("5","google.com","google.com","google.com","google.com","google.com","google.com",26,26),
  ("3","google.com","google.com","google.com","google.com","google.com","google.com",15,27),
  ("3","google.com","google.com","google.com","google.com","google.com","google.com",7,28),
  ("1","google.com","google.com","google.com","google.com","google.com","google.com",27,30),
  ("4","google.com","google.com","google.com","google.com","google.com","google.com",39,31),
  ("5","google.com","google.com","google.com","google.com","google.com","google.com",46,32),
  ("5","google.com","google.com","google.com","google.com","google.com","google.com",50,33),
  ("2","google.com","google.com","google.com","google.com","google.com","google.com",4,34),
  ("5","google.com","google.com","google.com","google.com","google.com","google.com",15,35),
  ("5","google.com","google.com","google.com","google.com","google.com","google.com",11,36),
  ("5","google.com","google.com","google.com","google.com","google.com","google.com",6,37),
  ("4","google.com","google.com","google.com","google.com","google.com","google.com",7,38),
  ("5","google.com","google.com","google.com","google.com","google.com","google.com",26,39),
  ("3","google.com","google.com","google.com","google.com","google.com","google.com",17,40),
  ("3","google.com","google.com","google.com","google.com","google.com","google.com",13,41),
  ("4","google.com","google.com","google.com","google.com","google.com","google.com",33,42),
  ("3","google.com","google.com","google.com","google.com","google.com","google.com",27,43),
  ("3","google.com","google.com","google.com","google.com","google.com","google.com",48,44),
  ("2","google.com","google.com","google.com","google.com","google.com","google.com",6,45),
  ("2","google.com","google.com","google.com","google.com","google.com","google.com",16,56),
  ("1","google.com","google.com","google.com","google.com","google.com","google.com",39,47),
  ("5","google.com","google.com","google.com","google.com","google.com","google.com",39,48),
  ("2","google.com","google.com","google.com","google.com","google.com","google.com",39,49),
  ("4","google.com","google.com","google.com","google.com","google.com","google.com",13,50);

#------------------------------------------------------------
# Table: role
#------------------------------------------------------------

INSERT INTO `role` (`name`)
VALUES
  ("ac"),
  ("Lorem"),
  ("ultrices"),
  ("tincidunt"),
  ("non,"),
  ("eu"),
  ("Ut"),
  ("facilisis"),
  ("Duis"),
  ("arcu"),
  ("eu"),
  ("neque"),
  ("et"),
  ("tincidunt"),
  ("libero."),
  ("Integer"),
  ("Nullam"),
  ("mi"),
  ("parturient"),
  ("lacus,"),
  ("lacus."),
  ("ultrices,"),
  ("at,"),
  ("Nullam"),
  ("aliquam"),
  ("aliquet"),
  ("mauris"),
  ("diam."),
  ("Donec"),
  ("eleifend"),
  ("non,"),
  ("risus."),
  ("Vestibulum"),
  ("Aliquam"),
  ("massa."),
  ("convallis,"),
  ("litora"),
  ("massa."),
  ("imperdiet"),
  ("penatibus"),
  ("erat."),
  ("aliquet"),
  ("mi"),
  ("magna."),
  ("arcu"),
  ("Suspendisse"),
  ("Cras"),
  ("nunc"),
  ("egestas."),
  ("leo.");

#------------------------------------------------------------
# Table: permission
#------------------------------------------------------------

INSERT INTO `permission` (`name`,`code`)
VALUES
  ("sit","55612"),
  ("erat","15176"),
  ("mi","67341"),
  ("tellus","90212"),
  ("parturient","18411"),
  ("erat","68558"),
  ("luctus","98981"),
  ("elit","76838"),
  ("cursus","36244"),
  ("diam","07733"),
  ("nibh","86444"),
  ("orci.","76252"),
  ("dignissim","34758"),
  ("semper","95478"),
  ("sodales","99946"),
  ("nisl","34345"),
  ("imperdiet","50341"),
  ("pede,","08043"),
  ("augue","08814"),
  ("quis","43344"),
  ("laoreet,","82337"),
  ("Nunc","63642"),
  ("at,","53664"),
  ("sed,","43454"),
  ("eget","66384"),
  ("volutpat.","51293"),
  ("massa.","46833"),
  ("quis","64842"),
  ("nec,","92877"),
  ("nulla.","24504"),
  ("vulputate,","64864"),
  ("adipiscing","55372"),
  ("diam.","08143"),
  ("malesuada","58823"),
  ("mauris","12158"),
  ("ante,","85487"),
  ("rutrum","55243"),
  ("dolor,","45142"),
  ("arcu","61997"),
  ("diam","44221"),
  ("gravida","34448"),
  ("pharetra,","27532"),
  ("Maecenas","80223"),
  ("quis","36186"),
  ("risus.","64716"),
  ("taciti","21470"),
  ("ultrices","55666"),
  ("dolor","06317"),
  ("tincidunt","87381"),
  ("scelerisque,","58362");

#------------------------------------------------------------
# Table: users
#------------------------------------------------------------

INSERT INTO `users` (`first_name`,`last_name`,`login`,`hash`,`school`,`class`,`id_permission`)
VALUES
  ("Regan","Gamble","tempus.eu@yahoo.fr","SVN23JGS8YG","Mauris","felis.",40),
  ("Axel","Thornton","mauris.ut@hotmail.com","MEP64YGB2JO","in","fermentum",7),
  ("Alyssa","Wilkerson","sed@google.org","DDC28TNF6WN","mi,","inceptos",32),
  ("Hilel","Cobb","venenatis.lacus.etiam@outlook.com","GIN87ENU4SE","Cum","massa.",35),
  ("Petra","Lindsay","suscipit.nonummy@yahoo.fr","TOT42XHV7XQ","Proin","Donec",44),
  ("Cameron","Head","ante.ipsum@hotmail.org","VOI67VIU4HY","justo.","pellentesque,",3),
  ("Mercedes","Gutierrez","sapien@yahoo.com","FDN68AKL2JQ","enim.","tincidunt,",25),
  ("Wing","Hall","ut@google.com","PXM20SIG6IG","Proin","porta",40),
  ("Cathleen","Graves","quis.turpis@hotmail.fr","IQJ54ECX9FM","risus.","quam,",34),
  ("Rajah","Green","neque.morbi@hotmail.fr","BTM44TUB6EJ","odio.","dui.",33),
  ("Marshall","Massey","est.mauris@yahoo.fr","RVJ51DNU4NQ","imperdiet","lacus.",45),
  ("Sean","Adams","sollicitudin.a@google.com","EXV94BCH6RS","enim,","magna.",40),
  ("Medge","Slater","placerat.cras@hotmail.com","HPX40TVO2HW","velit","eros",45),
  ("Adria","Tanner","massa.non@yahoo.fr","DRC85IIL7NO","eu","mus.",16),
  ("Charity","Brock","nullam.vitae@hotmail.com","XCY82VMI4DE","tellus.","Nunc",3),
  ("MacKenzie","Rodriquez","vestibulum.lorem@hotmail.com","UWL12SBM2NK","quam","ipsum",47),
  ("Noelani","Mitchell","cras.dolor@google.fr","QMD58KEV7RC","Sed","non",2),
  ("Colin","Ross","porttitor.interdum.sed@yahoo.fr","QLH22VND4OR","Vivamus","commodo",26),
  ("Dawn","Moreno","duis@hotmail.com","INN77VFH8NI","urna,","tempus",7),
  ("Murphy","Frost","vel.venenatis@yahoo.org","JVW04HBB6BT","mi,","ante",41),
  ("Benjamin","Crosby","interdum@outlook.org","WLJ87UTY1UZ","natoque","Etiam",31),
  ("Clio","Butler","tortor.nibh@hotmail.fr","QVF49BIT1WW","erat","Curabitur",19),
  ("Rose","Goodman","vivamus@google.org","BGE12WYT0NZ","porttitor","ante",26),
  ("Mona","Bonner","lectus@hotmail.com","QUC44DOE7DQ","nibh","Donec",37),
  ("Desiree","Franklin","feugiat.sed.nec@google.fr","FJW30FNJ3NB","Sed","cursus",16),
  ("Helen","Slater","pharetra.quisque@outlook.fr","RIF66NNU2MM","Integer","id",30),
  ("Kiona","Ewing","quisque.varius@google.com","XHI54KCB2LY","aliquet","sollicitudin",15),
  ("Phoebe","Burnett","eu.eros@hotmail.fr","JXL71STA2ID","felis","urna.",10),
  ("Plato","Hanson","ornare.fusce@google.com","HBS59EYR7PX","nisl","velit.",40),
  ("Burton","Dawson","adipiscing.mauris@yahoo.org","GYM94DGJ7YL","volutpat","ipsum",33),
  ("Madaline","Lamb","aliquet.metus.urna@google.org","YTU55CFJ4YV","pretium","enim",10),
  ("Simon","Moss","in.consectetuer@hotmail.fr","YLM41YOB7TP","fermentum","sit",8),
  ("Samuel","Weaver","per.inceptos@google.fr","GRQ12HTN2OS","tincidunt","a,",36),
  ("Caldwell","Little","ut@google.org","EJE65FVZ4PB","sed,","ultrices",12),
  ("Maggy","Merritt","duis@google.fr","EYU45QKG2DO","nulla.","amet",49),
  ("Diana","Guy","feugiat.metus@google.com","LYU95JXY0VG","pede","lacus.",2),
  ("Ann","Albert","et.netus@hotmail.com","EIC53YEG7EY","cursus","aliquet,",23),
  ("Danielle","Frank","neque.sed.eget@hotmail.org","LTM64NID6GD","netus","sed",19),
  ("Gregory","Mcgowan","dignissim.pharetra@yahoo.org","WYK32IGU8ZX","justo","Nullam",39),
  ("Minerva","Franklin","curabitur.sed.tortor@outlook.org","PRD62SVQ3FE","sociis","parturient",43),
  ("Steven","Ball","aliquam.rutrum@yahoo.com","OKU69OAP1UJ","Sed","eu",16),
  ("Lacota","Mooney","orci@hotmail.fr","GCJ50IRH2GQ","Nulla","amet",36),
  ("Adena","Coffey","ante.maecenas@google.org","DUQ03FJN1CW","pede","consectetuer",7),
  ("Jin","Gomez","dolor.dapibus@hotmail.com","HKU51QHO2VD","commodo","sociis",13),
  ("Fuller","Wallace","suspendisse.aliquet.sem@google.org","ITW34HNE6YV","nec","risus.",34),
  ("Neve","Payne","in.ornare@outlook.fr","KLW87TDP8CG","velit","tristique",3),
  ("Breanna","Cantrell","iaculis.lacus@hotmail.org","UNU41NYT7CX","consectetuer","mollis.",14),
  ("Carolyn","Olson","senectus@yahoo.fr","FAE57XEX9YR","fermentum","dolor.",8),
  ("Allen","Case","nisi.mauris.nulla@yahoo.com","MRA37QIU3OQ","placerat","non,",31),
  ("Justina","Murray","convallis.dolor.quisque@yahoo.org","KUD95WJM7FM","lorem","hendrerit",25);

#------------------------------------------------------------
# Table: grades_by_students
#------------------------------------------------------------

INSERT INTO `grades_by_students` (`value`,`comment`,`reaction_emoji`,`id_users`,`id_company`)
VALUES
  (3,"vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante","U+1F60D",44,24),
  (2,"adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in","U+1F92C",5,30),
  (4,"rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere","U+1F60D",44,33),
  (2,"congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et","U+1F60D",26,42),
  (3,"sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum leo elementum sem, vitae aliquam","U+1F601",22,2),
  (3,"malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis.","U+1F92C",14,27),
  (4,"interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis","U+1F60D",25,28),
  (4,"Sed congue, elit sed consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio.","U+1F60D",4,48),
  (1,"In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem","U+1F92C",48,3),
  (1,"luctus et ultrices posuere cubilia Curae Donec tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla","U+1F60D",32,14),
  (3,"orci, in consequat enim diam vel arcu. Curabitur ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales","U+1F601",37,33),
  (0,"Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas.","U+1F601",16,37),
  (1,"Donec tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac","U+1F92C",21,39),
  (4,"Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio.","U+1F60D",49,4),
  (3,"ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor","U+1F60D",24,28),
  (1,"Aenean eget magna. Suspendisse","U+1F60D",25,29),
  (4,"Donec at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor,","U+1F60D",16,21),
  (2,"velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam","U+1F60D",40,13),
  (0,"amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit","U+1F601",37,4),
  (4,"Phasellus vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna","U+1F92C",36,10),
  (0,"et magnis dis parturient","U+1F601",29,39),
  (4,"mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo eu arcu. Morbi sit","U+1F60D",44,47),
  (2,"Donec sollicitudin adipiscing ligula. Aenean gravida nunc","U+1F60D",31,24),
  (2,"augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu.","U+1F601",11,26),
  (4,"molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non,","U+1F92C",43,44),
  (1,"dictum magna. Ut tincidunt orci quis lectus.","U+1F60D",43,38),
  (1,"ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu.","U+1F601",44,32),
  (3,"rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet","U+1F60D",1,30),
  (4,"risus varius orci, in consequat enim diam vel arcu. Curabitur ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut,","U+1F60D",28,33),
  (2,"Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum","U+1F60D",29,16),
  (4,"sit amet, faucibus ut, nulla. Cras eu","U+1F601",10,8),
  (4,"tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat,","U+1F601",29,37),
  (3,"non, feugiat nec, diam. Duis","U+1F92C",46,13),
  (3,"parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed","U+1F92C",39,18),
  (5,"est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum leo elementum sem, vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus","U+1F92C",25,12),
  (1,"est, vitae sodales","U+1F60D",50,15),
  (5,"eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","U+1F92C",32,49),
  (2,"et ultrices posuere cubilia Curae Donec tincidunt. Donec vitae erat vel pede blandit congue. In","U+1F60D",14,17),
  (3,"vitae purus gravida sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue","U+1F60D",19,37),
  (3,"interdum. Sed auctor odio","U+1F92C",14,6),
  (1,"nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum","U+1F92C",46,48),
  (2,"at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare.","U+1F60D",38,19),
  (1,"Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id,","U+1F60D",43,13),
  (4,"Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim,","U+1F60D",48,26),
  (2,"eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit erat vitae","U+1F60D",28,37),
  (2,"et ultrices posuere cubilia Curae Phasellus ornare. Fusce mollis. Duis sit amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut,","U+1F60D",48,50),
  (4,"vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero","U+1F92C",45,18),
  (2,"mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum leo elementum sem, vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus gravida sagittis.","U+1F92C",19,4),
  (4,"lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus","U+1F601",14,17),
  (1,"malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus","U+1F60D",31,21);

#------------------------------------------------------------
# Table: is_working_in
#------------------------------------------------------------

INSERT INTO `is_working_in` (`id_company`)
VALUES
  (12),
  (3),
  (36),
  (37),
  (9),
  (5),
  (6),
  (37),
  (46),
  (33),
  (3),
  (44),
  (41),
  (33),
  (2),
  (26),
  (16),
  (29),
  (34),
  (24),
  (46),
  (25),
  (11),
  (46),
  (2),
  (11),
  (45),
  (16),
  (25),
  (32),
  (34),
  (14),
  (48),
  (39),
  (34),
  (6),
  (44),
  (1),
  (3),
  (31),
  (14),
  (11),
  (46),
  (13),
  (48),
  (15),
  (22),
  (31),
  (48),
  (11);

#------------------------------------------------------------
# Table: wishlists
#------------------------------------------------------------

INSERT INTO `wishlists` (`id_internship`)
VALUES
  (17),
  (27),
  (24),
  (22),
  (20),
  (33),
  (17),
  (14),
  (28),
  (39),
  (32),
  (25),
  (19),
  (3),
  (13),
  (39),
  (11),
  (15),
  (14),
  (36),
  (36),
  (48),
  (34),
  (44),
  (41),
  (41),
  (2),
  (16),
  (48),
  (26),
  (31),
  (45),
  (4),
  (32),
  (42),
  (5),
  (11),
  (6),
  (17),
  (41),
  (6),
  (23),
  (34),
  (35),
  (18),
  (39),
  (7),
  (14),
  (49),
  (36);


#------------------------------------------------------------
# Table: has1
#------------------------------------------------------------

INSERT INTO `has1` (`id_users`)
VALUES
  (25),
  (20),
  (42),
  (28),
  (8),
  (7),
  (35),
  (39),
  (49),
  (45),
  (46),
  (13),
  (23),
  (22),
  (32),
  (14),
  (15),
  (3),
  (29),
  (17),
  (2),
  (41),
  (37),
  (19),
  (12),
  (10),
  (48),
  (47),
  (40),
  (21),
  (30);

#------------------------------------------------------------
# Table: has2
#------------------------------------------------------------

INSERT INTO `has2` (`id_permission`)
VALUES
  (25),
  (20),
  (42),
  (28),
  (8),
  (7),
  (35),
  (39),
  (49),
  (45),
  (46),
  (13),
  (23),
  (22),
  (32),
  (14),
  (15),
  (3),
  (29),
  (17),
  (2),
  (41),
  (37),
  (19),
  (12),
  (10),
  (48),
  (47),
  (40),
  (21),
  (30);

SET FOREIGN_KEY_CHECKS = 1;