/*
 Navicat Premium Data Transfer

 Source Server         : Localhost
 Source Server Type    : MySQL
 Source Server Version : 80021
 Source Host           : localhost:3306
 Source Schema         : project

 Target Server Type    : MySQL
 Target Server Version : 80021
 File Encoding         : 65001

 Date: 18/03/2021 14:49:10
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for address
-- ----------------------------
DROP TABLE IF EXISTS `address`;
CREATE TABLE `address`  (
  `add_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NULL DEFAULT NULL,
  `address` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `city` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `state` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `country` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `pin` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`add_id`) USING BTREE,
  INDEX `FK_UserAddress`(`user_id`) USING BTREE,
  CONSTRAINT `FK_UserAddress` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of address
-- ----------------------------
INSERT INTO `address` VALUES (1, 28, 'Muktai nagar', 'Jadgaon', 'Maharashtra', 'India', '410501');

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart`  (
  `cart_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NULL DEFAULT NULL,
  `prod_id` int NULL DEFAULT NULL,
  `cart_quantity` int NULL DEFAULT NULL,
  PRIMARY KEY (`cart_id`) USING BTREE,
  INDEX `FK_UserCart`(`user_id`) USING BTREE,
  INDEX `FK_CartProduct`(`prod_id`) USING BTREE,
  CONSTRAINT `FK_CartProduct` FOREIGN KEY (`prod_id`) REFERENCES `product` (`prod_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_UserCart` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES (19, 26, 2, 1);

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `cat_id` int NOT NULL AUTO_INCREMENT,
  `cat_title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `cat_description` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`cat_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES (1, 'Electronics', 'Electronics is the study and use of electrical devices that operate at relatively low voltages by controlling the flow of electrons or other electrically charged particles in devices such as thermionic valves and semiconductors.');
INSERT INTO `category` VALUES (2, 'Decor', 'Beutiful Decor');
INSERT INTO `category` VALUES (3, 'Books', 'Fictional Books');
INSERT INTO `category` VALUES (4, 'Nutritions', 'MuscleBezz');

-- ----------------------------
-- Table structure for company
-- ----------------------------
DROP TABLE IF EXISTS `company`;
CREATE TABLE `company`  (
  `comp_id` int NOT NULL AUTO_INCREMENT,
  `comp_title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `comp_description` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`comp_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of company
-- ----------------------------
INSERT INTO `company` VALUES (1, 'Apple', 'Expensive Comany');
INSERT INTO `company` VALUES (2, 'Samsung', 'Good Company');
INSERT INTO `company` VALUES (3, 'Micromax', 'Indian Brand');
INSERT INTO `company` VALUES (4, 'Classmates', 'Indian TextBook Company');
INSERT INTO `company` VALUES (5, 'Beautify', 'Decor Company');
INSERT INTO `company` VALUES (6, 'Navneet Publication', 'Book Company');

-- ----------------------------
-- Table structure for myorder
-- ----------------------------
DROP TABLE IF EXISTS `myorder`;
CREATE TABLE `myorder`  (
  `myorder_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NULL DEFAULT NULL,
  `orderDate` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `status` int NULL DEFAULT 0,
  `total_price` float NOT NULL,
  PRIMARY KEY (`myorder_id`) USING BTREE,
  INDEX `FK_UserOrder`(`user_id`) USING BTREE,
  CONSTRAINT `FK_UserOrder` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 29 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of myorder
-- ----------------------------
INSERT INTO `myorder` VALUES (1, 1, '2021-03-09', 0, 10000);
INSERT INTO `myorder` VALUES (17, 1, '2021-04-09', 0, 13000);
INSERT INTO `myorder` VALUES (18, 1, '2021-05-09', 0, 20000);
INSERT INTO `myorder` VALUES (19, 1, '2021-06-09', 0, 20000);
INSERT INTO `myorder` VALUES (20, 1, '2021-07-09', 0, 50000);
INSERT INTO `myorder` VALUES (21, 1, '2021-08-09', 0, 25000);
INSERT INTO `myorder` VALUES (22, 1, '2021-09-09', 0, 3000);
INSERT INTO `myorder` VALUES (23, 1, '2021-10-09', 0, 30000);
INSERT INTO `myorder` VALUES (24, 1, '2021-11-09', 0, 11500);
INSERT INTO `myorder` VALUES (25, 1, '2021-12-09', 0, 20000);
INSERT INTO `myorder` VALUES (26, 1, '2022-01-09', 0, 45000);
INSERT INTO `myorder` VALUES (27, 28, '2022-02-09', 2, 35000);
INSERT INTO `myorder` VALUES (28, 28, '2022-03-09', 1, 30000);

-- ----------------------------
-- Table structure for orderdetails
-- ----------------------------
DROP TABLE IF EXISTS `orderdetails`;
CREATE TABLE `orderdetails`  (
  `orderdetails_id` int NOT NULL AUTO_INCREMENT,
  `myorder_id` int NULL DEFAULT NULL,
  `product_id` int NULL DEFAULT NULL,
  `price` float NULL DEFAULT NULL,
  `quantity` int NULL DEFAULT NULL,
  `rating` int NULL DEFAULT NULL,
  `comment` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`orderdetails_id`) USING BTREE,
  INDEX `FK_MyOrderDetails`(`myorder_id`) USING BTREE,
  INDEX `FK_ProductOrderDetails`(`product_id`) USING BTREE,
  CONSTRAINT `FK_MyOrderDetails` FOREIGN KEY (`myorder_id`) REFERENCES `myorder` (`myorder_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_ProductOrderDetails` FOREIGN KEY (`product_id`) REFERENCES `product` (`prod_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 28 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of orderdetails
-- ----------------------------
INSERT INTO `orderdetails` VALUES (1, 1, 1, 200000, 1, 5, 'Good Phone');
INSERT INTO `orderdetails` VALUES (18, 17, 2, 200000, 5, 1, NULL);
INSERT INTO `orderdetails` VALUES (19, 18, 2, 150000, 2, 4, NULL);
INSERT INTO `orderdetails` VALUES (20, 19, 4, 200000, 1, 5, NULL);
INSERT INTO `orderdetails` VALUES (21, 20, 2, 150000, 2, 3, NULL);
INSERT INTO `orderdetails` VALUES (22, 21, 5, 150000, 2, 4, NULL);
INSERT INTO `orderdetails` VALUES (23, 22, 1, 200000, 5, 4, NULL);
INSERT INTO `orderdetails` VALUES (24, 23, 2, 150000, 1, 4, NULL);
INSERT INTO `orderdetails` VALUES (25, 24, 1, 200000, 10, 5, NULL);
INSERT INTO `orderdetails` VALUES (28, 27, 1, 200000, 20, NULL, NULL);
INSERT INTO `orderdetails` VALUES (29, 28, 9, 150000, 20, NULL, NULL);

-- ----------------------------
-- Table structure for payment
-- ----------------------------
DROP TABLE IF EXISTS `payment`;
CREATE TABLE `payment`  (
  `pay_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NULL DEFAULT NULL,
  `pay_amount` float NULL DEFAULT NULL,
  `myorder_id` int NULL DEFAULT NULL,
  `pay_date` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `pay_type` int NULL DEFAULT 0,
  PRIMARY KEY (`pay_id`) USING BTREE,
  INDEX `FK_UserPayment`(`user_id`) USING BTREE,
  INDEX `FK_MyorderPayment`(`myorder_id`) USING BTREE,
  CONSTRAINT `FK_MyorderPayment` FOREIGN KEY (`myorder_id`) REFERENCES `myorder` (`myorder_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_UserPayment` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of payment
-- ----------------------------
INSERT INTO `payment` VALUES (6, 1, 75000, 18, '2021-01-01', 0);
INSERT INTO `payment` VALUES (7, 1, 80000, 19, '2021-02-01', 1);
INSERT INTO `payment` VALUES (8, 1, 5000, 20, '2021-03-01', 1);
INSERT INTO `payment` VALUES (9, 1, 30000, 23, '2021-04-01', 1);
INSERT INTO `payment` VALUES (10, 1, 90000, 25, '2021-05-01', 0);
INSERT INTO `payment` VALUES (11, 1, 50000, 27, '2021-06-01', 0);
INSERT INTO `payment` VALUES (12, 1, 30000, 28, '2021-07-01', 0);
INSERT INTO `payment` VALUES (13, 26, 45000, 27, '2021-08-01', 0);
INSERT INTO `payment` VALUES (14, 26, 30500, 28, '2021-09-01', 0);
INSERT INTO `payment` VALUES (15, 26, 76000, 27, '2021-10-01', 0);
INSERT INTO `payment` VALUES (16, 26, 66000, 27, '2021-11-01', 0);
INSERT INTO `payment` VALUES (17, 2, 55555, 27, '2021-12-01', 0);
INSERT INTO `payment` VALUES (18, 26, 44444, 27, '2022-01-01', 0);

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product`  (
  `prod_id` int NOT NULL AUTO_INCREMENT,
  `prod_title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `prod_description` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `prod_price` float NULL DEFAULT NULL,
  `cat_id` int NULL DEFAULT NULL,
  `comp_id` int NULL DEFAULT NULL,
  `prod_qty` int NULL DEFAULT 0,
  `seller_id` int NULL DEFAULT NULL,
  `photo` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`prod_id`) USING BTREE,
  INDEX `FK_ProductCategory`(`cat_id`) USING BTREE,
  INDEX `FK_ProductCompany`(`comp_id`) USING BTREE,
  CONSTRAINT `FK_ProductCategory` FOREIGN KEY (`cat_id`) REFERENCES `category` (`cat_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_ProductCompany` FOREIGN KEY (`comp_id`) REFERENCES `company` (`comp_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES (1, 'IPhone 12 mini', 'A14 Bionic, the fastest chip in a smartphone.\r\nAn edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.', 200, 1, 1, 1, 26, 'adfcefeb44250097f6ac3ff3dd567af3');
INSERT INTO `product` VALUES (2, 'mi 4A TV', 'S20 Ultra', 14499, 1, 2, 9, 26, 'acbd707940022b0f225af374e1978b9d');
INSERT INTO `product` VALUES (4, 'Sofa', 'Chillax sofa', 25000, 2, 5, 10, 26, 'd9946401136a9dec6e7974b4f3da42ec');
INSERT INTO `product` VALUES (5, 'Running Shoes', 'Book of Sachin Tendulkar', 299, 3, 6, 20, 26, '80c9de6d8dc8a9a065833525a45f469a');
INSERT INTO `product` VALUES (9, 'iPhone 12', 'latest phone', 19999, 1, 1, 13, 26, '99c51e69277ff1921dbc2f8561caa5f7');
INSERT INTO `product` VALUES (10, 'hp spectre laptop', 'nice product', 100, 1, 2, 20, 26, 'd0d751cceb76087c4d361790b1dfef49');
INSERT INTO `product` VALUES (11, 'Wall Clock', 'wall clock', 3, 2, 5, 100, 26, 'c8c0efc54d5ca3b8aee67605492b178d');
INSERT INTO `product` VALUES (12, 'melody', 'melody khao khud jaan jao', 1, 4, 5, 1, 26, '0f73830c7b8dadb7347d10db9201d1b5');
INSERT INTO `product` VALUES (13, 'SmartBuy FK2268S Tilt TV Mount', 'Tilt TV Mount', 700, 2, 2, 10, 26, '6e51bb0422b9561a97011b66d8000f63');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `user_phone` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `user_email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `user_password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `user_status` int NULL DEFAULT 0,
  `user_role` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT 'CUSTOMER',
  PRIMARY KEY (`user_id`) USING BTREE,
  UNIQUE INDEX `user_email`(`user_email`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 28 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'h', '1234', 'h', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08', 1, 'ADMIN');
INSERT INTO `user` VALUES (2, 'Pankaj', '8007840189', 'chaudharip371@gmail.com', 'Pankaj@98', 1, 'CUSTOMER');
INSERT INTO `user` VALUES (3, 'Roshan', '7972333108', 'rdc420@gmail.com', 'rc123', 1, 'CUSTOMER');
INSERT INTO `user` VALUES (4, 'Hrishi', '9923528048', 'hrishi302@gmail.com', 'hrishi@98', 0, 'CUSTOMER');
INSERT INTO `user` VALUES (18, 'undefined', 'undefined', 'e@gmail.com', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08', 0, 'CUSTOMER');
INSERT INTO `user` VALUES (19, 'bill', '9999999999', 'bill@gmail.com', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08', 1, 'SELLER');
INSERT INTO `user` VALUES (20, 'pranit', '1234', 'pranit@email.com', 'bd5523a9bc938e1bca3f0f145f2d1e9881b3ecf07ed806af337114532c2d9315', 1, 'SELLER');
INSERT INTO `user` VALUES (21, 'pankaj', '1234', 'pankaj@email.com', '7c78eea7a591b0c8a4dad680372e35ca12e11cffdac5c69a39700c8014fbcc82', 1, 'CUSTOMER');
INSERT INTO `user` VALUES (22, 'aditya', '1234', 'aditya@email.com', '265719f4e7ee032fe4a0c5ed5735a0530545e4f35c8648155dc5450330327e2a', 1, 'CUSTOMER');
INSERT INTO `user` VALUES (23, 'yogesh', '1234', 'yogesh@email.com', '28716f5e99d3c20d5bff5082b8fa4c7197a2360d55156f04f0302d4f7db21f0f', 1, 'CUSTOMER');
INSERT INTO `user` VALUES (26, 'a', '123', 'a', 'ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb', 1, 'SELLER');
INSERT INTO `user` VALUES (27, 'dj', '123', 'dj@g.com', '6792a7378ad3efaa577aaa68a96880aed193e09ebea3ac5f6e82514ff7d90c3f', 1, 'ADMIN');
INSERT INTO `user` VALUES (28, 'b', '1', 'b', '3e23e8160039594a33894f6564e1b1348bbd7a0088d42c4acb73eeaed59c009d', 1, 'SELLER');
INSERT INTO `user` VALUES (29, 'c', '1', 'c', '2e7d2c03a9507ae265ecf5b5356885a53393a2029d241394997265a1a25aefc6', 0, 'ADMIN');
INSERT INTO `user` VALUES (30, 'd', '2', 'd', '18ac3e7343f016890c510e93f935261169d9e3f565436429830faf0934f4f8e4', 1, 'CUSTOMER');

SET FOREIGN_KEY_CHECKS = 1;
