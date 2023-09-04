-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 04, 2023 at 09:18 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `movie-blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `movie`
--

CREATE TABLE `movie` (
  `id` int(11) NOT NULL,
  `data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`data`)),
  `title` varchar(255) DEFAULT NULL,
  `date` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `movie`
--

INSERT INTO `movie` (`id`, `data`, `title`, `date`) VALUES
(78, '{\"title\":\"The Shawshank Redemption\",\"director\":\"Frank Darabont\",\"producer\":\"Niki Marvin\",\"releaseDate\":\"September 23, 1994\",\"runningTime\":\"142 minutes\",\"genre\":[\"Drama\",\"Crime\"],\"rating\":\"R\",\"cast\":[\"Tim Robbins\",\"Morgan Freeman\",\"Bob Gunton\",\"William Sadler\",\"Clancy Brown\"],\"plot\":\"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.\",\"setting\":\"Shawshank State Penitentiary, 1940s-1960s\",\"cinematography\":\"Roger Deakins\",\"soundtrack\":\"Thomas Newman\",\"boxOffice\":\"$58.3 million\",\"awards\":[\"7 Academy Award nominations\",\"National Board of Review: Best Film\"],\"productionCompany\":\"Castle Rock Entertainment\",\"budget\":\"$25 million\",\"screenplay\":\"Frank Darabont\",\"adaptation\":\"Based on Stephen King\'s novella\",\"visualEffects\":\"Minimal use of visual effects\",\"reception\":\"Highly acclaimed by critics and audiences\",\"sequelsPrequels\":\"None\",\"marketing\":\"Limited marketing, but word-of-mouth praise\",\"distribution\":\"Columbia Pictures\",\"culturalSignificance\":\"Cult classic, often cited as one of the greatest films ever made\",\"messageMoral\":\"Hope, friendship, and the power of redemption\",\"style\":\"Realistic, character-driven drama\",\"themes\":[\"Redemption\",\"Hope\",\"Friendship\"],\"symbolism\":\"The poster of Raquel Welch\",\"historicalContext\":\"Set against the backdrop of the mid-20th century\",\"story\":\"Based on Stephen King\'s novella, it tells the story of Andy Dufresne, a banker wrongly convicted of murder, and his experiences in Shawshank State Penitentiary.\",\"theme\":\"The central idea is the transformative power of hope and friendship.\",\"cinema\":\"Hollywood\",\"type\":\"Movie\",\"imdbRating\":9.3,\"rottenTomatoRating\":91}', 'The Shawshank Redemption', 'Mon Sep 04 2023 10:16:03 GMT+0'),
(79, '{\"title\":\"The Godfather\",\"director\":\"Francis Ford Coppola\",\"producer\":\"Albert S. Ruddy\",\"releaseDate\":\"March 24, 1972\",\"runningTime\":\"175 minutes\",\"genre\":[\"Crime\",\"Drama\"],\"rating\":\"R\",\"cast\":[\"Marlon Brando\",\"Al Pacino\",\"James Caan\",\"Robert Duvall\",\"Diane Keaton\"],\"plot\":\"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.\",\"setting\":\"1940s and 1950s New York\",\"cinematography\":\"Gordon Willis\",\"soundtrack\":\"Nino Rota\",\"boxOffice\":\"$245-287 million\",\"awards\":[\"3 Academy Awards including Best Picture\",\"Golden Globe for Best Motion Picture - Drama\"],\"productionCompany\":\"Paramount Pictures\",\"budget\":\"$6-7 million\",\"screenplay\":\"Mario Puzo and Francis Ford Coppola\",\"adaptation\":\"Based on Mario Puzo\'s novel\",\"visualEffects\":\"Limited visual effects\",\"reception\":\"Critical acclaim, considered one of the greatest films in world cinema\",\"sequelsPrequels\":[\"The Godfather Part II\",\"The Godfather Part III\"],\"marketing\":\"Successful marketing campaign\",\"distribution\":\"Paramount Pictures\",\"culturalSignificance\":\"Cultural phenomenon, influenced subsequent crime films\",\"messageMoral\":\"The corrupting influence of power and the consequences of family loyalty\",\"style\":\"Epic crime drama\",\"themes\":[\"Power\",\"Family\",\"Crime\"],\"symbolism\":\"Oranges as a symbol of impending death\",\"historicalContext\":\"Post-World War II America\",\"story\":\"The story follows the transformation of Michael Corleone from a reluctant outsider to a ruthless mafia boss.\",\"theme\":\"The central idea is the corrupting influence of power and the consequences of family loyalty.\",\"cinema\":\"Hollywood\",\"type\":\"Movie\",\"imdbRating\":9.2,\"rottenTomatoRating\":98}', 'The Godfather', 'Mon Sep 04 2023 10:16:03 GMT+0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movie`
--
ALTER TABLE `movie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
