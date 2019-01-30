CREATE TABLE `main_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vid_id` varchar(15) NOT NULL,
  `format` varchar(5) NOT NULL,
  `upload_date` date DEFAULT NULL,
  `is_converted` binary(1) DEFAULT NULL,
  `view_count` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `vid_id` (`vid_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1836 DEFAULT CHARSET=utf8
