-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 01, 2022 at 09:10 AM
-- Server version: 10.3.32-MariaDB-cll-lve
-- PHP Version: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cp1751062p38_lahya`
--

-- --------------------------------------------------------

--
-- Table structure for table `activity_domain`
--

CREATE TABLE `activity_domain` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `id` int(11) NOT NULL,
  `street` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `postal_code` char(50) NOT NULL,
  `country` varchar(50) NOT NULL,
  `region` varchar(50) NOT NULL,
  `id_company` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `application`
--

CREATE TABLE `application` (
  `id` int(11) NOT NULL,
  `current_step` enum('1','2','3','4','5','6') NOT NULL,
  `cv_link` varchar(50) DEFAULT NULL,
  `motivation_link` varchar(50) DEFAULT NULL,
  `validation_link` varchar(50) DEFAULT NULL,
  `signed_validation_link` varchar(50) DEFAULT NULL,
  `convention_link` varchar(50) DEFAULT NULL,
  `signed_convention_link` varchar(50) DEFAULT NULL,
  `id_company` int(11) NOT NULL,
  `id_users` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `students_accepted` int(11) NOT NULL,
  `students_visible` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `grades_by_students`
--

CREATE TABLE `grades_by_students` (
  `id` int(11) NOT NULL,
  `value` int(11) NOT NULL,
  `comment` text DEFAULT NULL,
  `reaction_emoji` varchar(50) DEFAULT NULL,
  `id_users` int(11) NOT NULL,
  `id_company` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `has1`
--

CREATE TABLE `has1` (
  `id` int(11) NOT NULL,
  `id_users` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `has2`
--

CREATE TABLE `has2` (
  `id` int(11) NOT NULL,
  `id_permission` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `internship`
--

CREATE TABLE `internship` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `minor` varchar(50) NOT NULL,
  `lasts` date NOT NULL,
  `salary` decimal(15,3) NOT NULL,
  `published_at` date NOT NULL,
  `places_available` int(11) NOT NULL,
  `id_company` int(11) NOT NULL,
  `id_address` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `is_working_in`
--

CREATE TABLE `is_working_in` (
  `id` int(11) NOT NULL,
  `id_company` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `permission`
--

CREATE TABLE `permission` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `code` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `login` varchar(50) NOT NULL,
  `hash` varchar(256) NOT NULL,
  `school` varchar(50) NOT NULL,
  `class` varchar(50) NOT NULL,
  `id_permission` int(11) NOT NULL,
  `id_permission_has3` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `wishlists`
--

CREATE TABLE `wishlists` (
  `id` int(11) NOT NULL,
  `id_internship` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activity_domain`
--
ALTER TABLE `activity_domain`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`),
  ADD KEY `address_company_FK` (`id_company`);

--
-- Indexes for table `application`
--
ALTER TABLE `application`
  ADD PRIMARY KEY (`id`),
  ADD KEY `application_company_FK` (`id_company`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `grades_by_students`
--
ALTER TABLE `grades_by_students`
  ADD PRIMARY KEY (`id`),
  ADD KEY `grades_by_students_users_FK` (`id_users`),
  ADD KEY `grades_by_students_company0_FK` (`id_company`);

--
-- Indexes for table `has1`
--
ALTER TABLE `has1`
  ADD PRIMARY KEY (`id`,`id_users`),
  ADD KEY `has1_users0_FK` (`id_users`);

--
-- Indexes for table `has2`
--
ALTER TABLE `has2`
  ADD PRIMARY KEY (`id`,`id_permission`),
  ADD KEY `has2_permission0_FK` (`id_permission`);

--
-- Indexes for table `internship`
--
ALTER TABLE `internship`
  ADD PRIMARY KEY (`id`),
  ADD KEY `internship_company_FK` (`id_company`),
  ADD KEY `internship_address0_FK` (`id_address`);

--
-- Indexes for table `is_working_in`
--
ALTER TABLE `is_working_in`
  ADD PRIMARY KEY (`id`,`id_company`),
  ADD KEY `is_working_in_company0_FK` (`id_company`);

--
-- Indexes for table `permission`
--
ALTER TABLE `permission`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_permission_FK` (`id_permission_has3`);

--
-- Indexes for table `wishlists`
--
ALTER TABLE `wishlists`
  ADD PRIMARY KEY (`id`,`id_internship`),
  ADD KEY `wishlists_internship0_FK` (`id_internship`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activity_domain`
--
ALTER TABLE `activity_domain`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `application`
--
ALTER TABLE `application`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `grades_by_students`
--
ALTER TABLE `grades_by_students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `has1`
--
ALTER TABLE `has1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `has2`
--
ALTER TABLE `has2`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `internship`
--
ALTER TABLE `internship`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `is_working_in`
--
ALTER TABLE `is_working_in`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `permission`
--
ALTER TABLE `permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `address_company_FK` FOREIGN KEY (`id_company`) REFERENCES `company` (`id`);

--
-- Constraints for table `application`
--
ALTER TABLE `application`
  ADD CONSTRAINT `application_company_FK` FOREIGN KEY (`id_company`) REFERENCES `company` (`id`);

--
-- Constraints for table `grades_by_students`
--
ALTER TABLE `grades_by_students`
  ADD CONSTRAINT `grades_by_students_company0_FK` FOREIGN KEY (`id_company`) REFERENCES `company` (`id`),
  ADD CONSTRAINT `grades_by_students_users_FK` FOREIGN KEY (`id_users`) REFERENCES `users` (`id`);

--
-- Constraints for table `has1`
--
ALTER TABLE `has1`
  ADD CONSTRAINT `has1_role_FK` FOREIGN KEY (`id`) REFERENCES `role` (`id`),
  ADD CONSTRAINT `has1_users0_FK` FOREIGN KEY (`id_users`) REFERENCES `users` (`id`);

--
-- Constraints for table `has2`
--
ALTER TABLE `has2`
  ADD CONSTRAINT `has2_permission0_FK` FOREIGN KEY (`id_permission`) REFERENCES `permission` (`id`),
  ADD CONSTRAINT `has2_role_FK` FOREIGN KEY (`id`) REFERENCES `role` (`id`);

--
-- Constraints for table `internship`
--
ALTER TABLE `internship`
  ADD CONSTRAINT `internship_address0_FK` FOREIGN KEY (`id_address`) REFERENCES `address` (`id`),
  ADD CONSTRAINT `internship_company_FK` FOREIGN KEY (`id_company`) REFERENCES `company` (`id`);

--
-- Constraints for table `is_working_in`
--
ALTER TABLE `is_working_in`
  ADD CONSTRAINT `is_working_in_activity_domain_FK` FOREIGN KEY (`id`) REFERENCES `activity_domain` (`id`),
  ADD CONSTRAINT `is_working_in_company0_FK` FOREIGN KEY (`id_company`) REFERENCES `company` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_permission_FK` FOREIGN KEY (`id_permission_has3`) REFERENCES `permission` (`id`);

--
-- Constraints for table `wishlists`
--
ALTER TABLE `wishlists`
  ADD CONSTRAINT `wishlists_internship0_FK` FOREIGN KEY (`id_internship`) REFERENCES `internship` (`id`),
  ADD CONSTRAINT `wishlists_users_FK` FOREIGN KEY (`id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
