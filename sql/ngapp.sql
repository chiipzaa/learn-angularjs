/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50531
Source Host           : localhost:3306
Source Database       : ngapp

Target Server Type    : MYSQL
Target Server Version : 50531
File Encoding         : 65001

Date: 2016-09-17 23:06:28
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `members`
-- ----------------------------
DROP TABLE IF EXISTS `members`;
CREATE TABLE `members` (
  `username` varchar(50) NOT NULL DEFAULT '',
  `password` varchar(200) DEFAULT NULL,
  `fname` varchar(255) DEFAULT NULL,
  `lname` varchar(255) DEFAULT NULL,
  `tel` varchar(10) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `imgUrl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=tis620;

-- ----------------------------
-- Records of members
-- ----------------------------
INSERT INTO `members` VALUES ('kukks', '123456789', 'Suputtana', 'Pingmaung', '123458888', 'kukks205@udonsoft.com', 'img/1.jpg');
INSERT INTO `members` VALUES ('jonh', '1234567890', 'Jonh', 'Doe', '088888888', 'jonh@udonsoft.com', 'img/2.jpg');
INSERT INTO `members` VALUES ('mk', '158538988', 'Mongkol', 'JaiDee', '0789998789', 'mk@udonsoft.com', 'img/3.jpg');
INSERT INTO `members` VALUES ('sw', '0878785478', 'Sangwan', 'Dee', '1456878754', 'kkuuuuuasasas', 'img/4.jpg');
INSERT INTO `members` VALUES ('tong', '', 'Tongdee', '', '0888888888', 'kkkk@udonsoft.com', '');
