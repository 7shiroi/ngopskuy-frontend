-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 15 Mar 2022 pada 08.59
-- Versi server: 10.4.22-MariaDB
-- Versi PHP: 8.1.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ngopskuy2`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `category`
--

INSERT INTO `category` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'coffee', '2022-03-11 19:49:46', '2022-03-11 12:49:37'),
(2, 'non coffee', '2022-03-11 19:49:46', '2022-03-11 12:49:37'),
(3, 'desert', '2022-03-11 20:52:21', '2022-03-11 20:53:13');

-- --------------------------------------------------------

--
-- Struktur dari tabel `delivery_type`
--

CREATE TABLE `delivery_type` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `delivery_type`
--

INSERT INTO `delivery_type` (`id`, `name`, `created_at`, `updated_at`) VALUES
(7, 'Delivery', '2022-03-10 14:08:36', NULL),
(8, 'Take Away', '2022-03-10 14:21:44', NULL),
(9, 'dine in', '2022-03-15 08:14:41', '2022-03-15 02:14:35');

-- --------------------------------------------------------

--
-- Struktur dari tabel `otp`
--

CREATE TABLE `otp` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `id_otp_type` int(11) NOT NULL,
  `code` varchar(6) NOT NULL,
  `is_expired` tinyint(4) NOT NULL DEFAULT 0,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `otp`
--

INSERT INTO `otp` (`id`, `email`, `id_otp_type`, `code`, `is_expired`, `created_at`, `updated_at`) VALUES
(4, 'bisefeh455@toudrum.com', 1, '386412', 1, '2022-03-11 13:21:40', '2022-03-11 13:23:42'),
(10, 'bisefeh455@toudrum.com', 2, '172784', 1, '2022-03-11 13:50:15', '2022-03-11 13:53:44'),
(11, 'hiraspds@gmail.com', 1, '251380', 1, '2022-03-14 08:34:37', '2022-03-14 08:35:36'),
(12, 'hiraspds@gmail.com', 1, '253077', 1, '2022-03-14 09:09:50', '2022-03-14 09:10:05'),
(13, 'hiraspds@gmail.com', 2, '742737', 1, '2022-03-14 09:10:28', '2022-03-14 09:11:00'),
(14, 'hirasparasian@gmail.com', 1, '460712', 1, '2022-03-14 11:31:34', '2022-03-14 11:31:53'),
(15, 'hirasparasian@gmail.com', 1, '647224', 1, '2022-03-15 08:40:23', '2022-03-15 08:40:47'),
(16, 'sigol66673@tourcc.com', 1, '288380', 1, '2022-03-15 09:44:56', '2022-03-15 09:45:32'),
(17, 'sigol66673@tourcc.com', 2, '157331', 1, '2022-03-15 09:46:40', '2022-03-15 09:47:41'),
(18, 'fakawa5727@songsign.com', 2, '457655', 1, '2022-03-15 10:23:25', '2022-03-15 10:24:16'),
(19, 'fakawa5727@songsign.com', 1, '023302', 1, '2022-03-15 10:25:12', '2022-03-15 10:25:39');

-- --------------------------------------------------------

--
-- Struktur dari tabel `otp_type`
--

CREATE TABLE `otp_type` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `otp_type`
--

INSERT INTO `otp_type` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'verify user', '2022-03-11 13:03:56', '2022-03-11 06:03:45'),
(2, 'forgot password', '2022-03-11 13:03:56', '2022-03-11 06:03:45');

-- --------------------------------------------------------

--
-- Struktur dari tabel `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `id_category` int(11) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(12,2) NOT NULL,
  `stock` int(11) NOT NULL,
  `delivery_hour_start` time NOT NULL,
  `delivery_hour_end` time NOT NULL,
  `image` text NOT NULL,
  `is_deleted` tinyint(4) NOT NULL DEFAULT 0,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `product`
--

INSERT INTO `product` (`id`, `name`, `id_category`, `description`, `price`, `stock`, `delivery_hour_start`, `delivery_hour_end`, `image`, `is_deleted`, `created_at`, `updated_at`) VALUES
(1, 'Kapal Api', 1, 'This is Kopi, Kapal Api', '30000.00', 5, '10:00:00', '23:00:00', '', 0, '2022-03-11 20:00:31', '2022-03-15 09:06:40'),
(2, 'Choco Milkshake', 2, '100% non coffee choco shakers', '20000.00', 7, '10:00:00', '23:00:00', 'https://res.cloudinary.com/fazztrackfw5/image/upload/v1647001832/ngopskuy/uploads/product/product-1647001830490.png', 1, '2022-03-11 20:18:22', '2022-03-15 10:33:13'),
(3, 'Choco Milkshakes', 2, '100% non coffee choco shakers', '20000.00', 7, '10:00:00', '23:00:00', '', 1, '2022-03-11 20:19:27', '2022-03-11 20:48:11'),
(4, 'Choco Milkshakess', 2, '100% non coffee choco shakers', '20000.00', 7, '10:00:00', '23:00:00', '', 1, '2022-03-11 20:20:11', '2022-03-14 09:13:04'),
(5, 'Choco Milk', 2, '100% non coffee choco shakers', '40000.00', 7, '10:00:00', '23:00:00', 'https://res.cloudinary.com/fazztrackfw5/image/upload/v1647001321/ngopskuy/uploads/product/product-1647001319431.png', 0, '2022-03-11 20:22:09', '2022-03-15 10:34:25'),
(6, 'Choco Milkshakesss', 2, '100% non coffee choco shakers', '20000.00', 7, '10:00:00', '23:00:00', '', 0, '2022-03-13 14:29:03', NULL),
(7, 'Choco Milkshakesss', 2, '100% non coffee choco shakers', '20000.00', 7, '10:00:00', '23:00:00', '', 0, '2022-03-13 14:34:43', NULL),
(8, 'Choco Milkshakesss', 2, '100% non coffee choco shakers', '20000.00', 7, '10:00:00', '23:00:00', '', 0, '2022-03-13 14:34:53', NULL),
(9, 'Choco Milkshakesss', 2, '100% non coffee choco shakers', '20000.00', 7, '10:00:00', '23:00:00', '', 0, '2022-03-13 14:50:29', NULL),
(10, 'Choco Milkshakesss', 2, '100% non coffee choco shakers', '20000.00', 7, '10:00:00', '23:00:00', 'https://res.cloudinary.com/fazztrackfw5/image/upload/v1647154240/ngopskuy/uploads/product/product-1647154238488.png', 0, '2022-03-13 14:50:41', NULL),
(11, 'Choco Milkshakesss', 2, '100% non coffee choco shakers', '20000.00', 7, '10:00:00', '23:00:00', 'https://res.cloudinary.com/fazztrackfw5/image/upload/v1647154252/ngopskuy/uploads/product/product-1647154250086.png', 0, '2022-03-13 14:51:00', NULL),
(12, 'Luwak White Coffee', 1, 'Kopi Nikmat Tidak Bikin Kembung', '5000.00', 6, '04:00:00', '07:00:00', 'https://res.cloudinary.com/fazztrackfw5/image/upload/v1647188048/ngopskuy/uploads/product/product-1647188044627.png', 0, '2022-03-13 23:14:06', NULL),
(13, 'Kapalapi', 2, 'asdas', '70000.00', 7, '10:00:00', '11:00:00', 'https://res.cloudinary.com/fazztrackfw5/image/upload/v1647224056/ngopskuy/uploads/product/product-1647224053432.png', 0, '2022-03-14 09:14:15', NULL),
(14, 'Black Forest', 3, 'Manis', '70000.00', 10, '14:00:00', '18:00:00', 'https://res.cloudinary.com/fazztrackfw5/image/upload/v1647291879/ngopskuy/uploads/product/product-1647291877840.png', 0, '2022-03-15 04:04:40', NULL),
(15, 'Black Forest', 3, 'Manis', '70000.00', 10, '14:00:00', '18:00:00', 'https://res.cloudinary.com/fazztrackfw5/image/upload/v1647292014/ngopskuy/uploads/product/product-1647292012710.png', 0, '2022-03-15 04:06:55', NULL),
(16, 'Black Forest', 3, 'Manis', '70000.00', 10, '14:00:00', '18:00:00', 'https://res.cloudinary.com/fazztrackfw5/image/upload/v1647292017/ngopskuy/uploads/product/product-1647292015682.png', 0, '2022-03-15 04:06:58', NULL),
(17, 'Black Forest', 3, 'Manis', '72000.00', 6, '07:00:00', '18:00:00', 'https://res.cloudinary.com/fazztrackfw5/image/upload/v1647292065/ngopskuy/uploads/product/product-1647292063602.png', 0, '2022-03-15 04:07:45', NULL),
(18, 'New Product', 2, 'Manis', '33000.00', 7, '06:00:00', '13:00:00', 'https://res.cloudinary.com/fazztrackfw5/image/upload/v1647292260/ngopskuy/uploads/product/product-1647292258509.png', 0, '2022-03-15 04:11:01', NULL),
(19, 'New Product', 2, 'Manis', '33000.00', 7, '06:00:00', '13:00:00', 'https://res.cloudinary.com/fazztrackfw5/image/upload/v1647292282/ngopskuy/uploads/product/product-1647292280627.png', 0, '2022-03-15 04:11:22', NULL),
(20, 'New Product', 2, 'Manis', '33000.00', 7, '06:00:00', '13:00:00', 'https://res.cloudinary.com/fazztrackfw5/image/upload/v1647292290/ngopskuy/uploads/product/product-1647292288322.png', 0, '2022-03-15 04:11:30', NULL),
(21, 'Starbucks', 1, 'asdas', '70000.00', 9, '07:00:00', '13:00:00', 'https://res.cloudinary.com/fazztrackfw5/image/upload/v1647306839/ngopskuy/uploads/product/product-1647306837302.png', 0, '2022-03-15 08:14:00', NULL),
(22, 'Starbucks', 1, 'asdas', '70000.00', 9, '07:00:00', '13:00:00', 'https://res.cloudinary.com/fazztrackfw5/image/upload/v1647306894/ngopskuy/uploads/product/product-1647306892700.png', 0, '2022-03-15 08:14:55', NULL),
(23, 'Starbucks', 1, 'asdas', '70000.00', 9, '07:00:00', '13:00:00', 'https://res.cloudinary.com/fazztrackfw5/image/upload/v1647306904/ngopskuy/uploads/product/product-1647306902386.png', 0, '2022-03-15 08:15:05', NULL),
(24, 'Starbucks', 1, 'asdas', '70000.00', 9, '07:00:00', '13:00:00', 'https://res.cloudinary.com/fazztrackfw5/image/upload/v1647306906/ngopskuy/uploads/product/product-1647306904802.png', 0, '2022-03-15 08:15:07', NULL),
(25, 'Starbucks 2', 3, 'Manis', '70000.00', 6, '07:00:00', '11:00:00', 'https://res.cloudinary.com/fazztrackfw5/image/upload/v1647315367/ngopskuy/uploads/product/product-1647315366195.png', 0, '2022-03-15 10:36:08', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `product_delivery_type`
--

CREATE TABLE `product_delivery_type` (
  `id` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `id_delivery_type` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `product_delivery_type`
--

INSERT INTO `product_delivery_type` (`id`, `id_product`, `id_delivery_type`, `created_at`, `updated_at`) VALUES
(1, 18, 7, '2022-03-15 04:11:01', NULL),
(2, 19, 7, '2022-03-15 04:11:22', NULL),
(3, 20, 7, '2022-03-15 04:11:30', NULL),
(4, 21, 7, '2022-03-15 08:14:00', NULL),
(5, 22, 7, '2022-03-15 08:14:55', NULL),
(6, 22, 9, '2022-03-15 08:14:55', NULL),
(7, 22, 8, '2022-03-15 08:14:55', NULL),
(8, 23, 7, '2022-03-15 08:15:05', NULL),
(9, 23, 9, '2022-03-15 08:15:05', NULL),
(10, 23, 8, '2022-03-15 08:15:05', NULL),
(11, 24, 7, '2022-03-15 08:15:07', NULL),
(12, 24, 9, '2022-03-15 08:15:07', NULL),
(13, 24, 8, '2022-03-15 08:15:07', NULL),
(14, 25, 7, '2022-03-15 10:36:08', NULL),
(15, 25, 9, '2022-03-15 10:36:08', NULL),
(16, 25, 8, '2022-03-15 10:36:08', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `product_size`
--

CREATE TABLE `product_size` (
  `id` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `id_size` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `product_size`
--

INSERT INTO `product_size` (`id`, `id_product`, `id_size`, `created_at`, `updated_at`) VALUES
(1, 14, 1, '2022-03-15 04:04:40', NULL),
(2, 14, 2, '2022-03-15 04:04:40', NULL),
(3, 15, 1, '2022-03-15 04:06:55', NULL),
(4, 15, 2, '2022-03-15 04:06:55', NULL),
(5, 16, 1, '2022-03-15 04:06:58', NULL),
(6, 16, 2, '2022-03-15 04:06:58', NULL),
(7, 17, 1, '2022-03-15 04:07:46', NULL),
(8, 17, 2, '2022-03-15 04:07:46', NULL),
(9, 18, 1, '2022-03-15 04:11:01', NULL),
(10, 18, 2, '2022-03-15 04:11:01', NULL),
(11, 19, 1, '2022-03-15 04:11:22', NULL),
(12, 19, 2, '2022-03-15 04:11:22', NULL),
(13, 20, 1, '2022-03-15 04:11:30', NULL),
(14, 20, 2, '2022-03-15 04:11:30', NULL),
(15, 21, 1, '2022-03-15 08:14:00', NULL),
(16, 22, 1, '2022-03-15 08:14:55', NULL),
(17, 23, 1, '2022-03-15 08:15:05', NULL),
(18, 24, 1, '2022-03-15 08:15:07', NULL),
(19, 25, 1, '2022-03-15 10:36:08', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `promo`
--

CREATE TABLE `promo` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `normal_price` decimal(12,2) NOT NULL,
  `description` text NOT NULL,
  `promo_code` varchar(8) NOT NULL,
  `date_start` date NOT NULL,
  `date_end` date NOT NULL,
  `discount_value` int(11) NOT NULL,
  `image` text DEFAULT NULL,
  `is_deleted` tinyint(4) NOT NULL DEFAULT 0,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `promo`
--

INSERT INTO `promo` (`id`, `name`, `normal_price`, `description`, `promo_code`, `date_start`, `date_end`, `discount_value`, `image`, `is_deleted`, `created_at`, `updated_at`) VALUES
(1, 'Beef Break1', '80000.00', 'Your super breakfast with smoked beef and teas', 'B3EDON2', '2022-03-11', '2022-03-13', 28, 'https://res.cloudinary.com/fazztrackfw5/image/upload/v1647313055/ngopskuy/uploads/promo/promo-1647313054033.png', 0, '2022-03-12 00:17:45', '2022-03-15 09:57:55'),
(2, 'Smokey Steak', '60000.00', 'Steak and some juicy lemonade for your super lunch', 'SL21SLJL', '2022-03-09', '2022-03-11', 15, 'https://res.cloudinary.com/fazztrackfw5/image/upload/v1647158764/ngopskuy/uploads/promo/promo-1647158762863.png', 0, '2022-03-13 15:49:18', '2022-03-13 16:06:06'),
(3, 'Kapalapi', '30000.00', 'asdas', 'BEST2023', '2022-03-10', '2022-03-23', 20, NULL, 0, '2022-03-14 12:15:50', NULL),
(4, 'janganpencettt', '30000.00', 'Manis', 'BEST2022', '2022-03-15', '2022-04-01', 70, 'https://res.cloudinary.com/fazztrackfw5/image/upload/v1647308640/ngopskuy/uploads/promo/promo-1647308639204.png', 0, '2022-03-15 08:44:01', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `promo_delivery_type`
--

CREATE TABLE `promo_delivery_type` (
  `id` int(11) NOT NULL,
  `id_promo` int(11) NOT NULL,
  `id_delivery_type` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `promo_delivery_type`
--

INSERT INTO `promo_delivery_type` (`id`, `id_promo`, `id_delivery_type`, `created_at`, `updated_at`) VALUES
(1, 1, 7, '2022-03-15 09:56:59', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `promo_size`
--

CREATE TABLE `promo_size` (
  `id` int(11) NOT NULL,
  `id_promo` int(11) NOT NULL,
  `id_size` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `promo_size`
--

INSERT INTO `promo_size` (`id`, `id_promo`, `id_size`, `created_at`, `updated_at`) VALUES
(2, 1, 2, '2022-03-12 00:20:46', '2022-03-12 00:34:47');

-- --------------------------------------------------------

--
-- Struktur dari tabel `size`
--

CREATE TABLE `size` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `label` varchar(5) NOT NULL,
  `description` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `size`
--

INSERT INTO `size` (`id`, `name`, `label`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Regular', 'R', '250gr', '2022-03-11 21:07:59', '2022-03-11 21:14:38'),
(2, 'Large', 'L', '350gr', '2022-03-11 21:13:28', NULL),
(4, 'Xtra Large', 'XL', '500gr', '2022-03-15 08:45:16', '2022-03-15 02:44:45');

-- --------------------------------------------------------

--
-- Struktur dari tabel `transaction`
--

CREATE TABLE `transaction` (
  `id` int(11) NOT NULL,
  `id_product` int(20) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_transaction_status` int(11) NOT NULL,
  `quantity` int(20) NOT NULL,
  `payment_method` enum('card','bank account','cash on delivery') DEFAULT NULL,
  `is_delivered` tinyint(4) NOT NULL,
  `table_number` int(11) DEFAULT NULL,
  `total_price` decimal(12,2) NOT NULL,
  `is_deleted` tinyint(4) DEFAULT 0,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `transaction`
--

INSERT INTO `transaction` (`id`, `id_product`, `id_user`, `id_transaction_status`, `quantity`, `payment_method`, `is_delivered`, `table_number`, `total_price`, `is_deleted`, `created_at`, `updated_at`) VALUES
(1, 0, 18, 1, 0, 'card', 0, 2, '15000.00', 0, '2022-03-12 13:34:07', NULL),
(2, 0, 18, 1, 0, 'card', 0, 2, '30000.00', 0, '2022-03-12 13:34:49', NULL),
(3, 1, 20, 2, 2, 'card', 0, 0, '30000.00', 1, '2022-03-15 07:53:49', '2022-03-15 07:54:20'),
(4, 1, 20, 2, 2, 'card', 0, 0, '30000.00', 1, '2022-03-15 07:56:13', '2022-03-15 07:59:48'),
(5, 1, 20, 2, 7, 'card', 0, 0, '105000.00', 1, '2022-03-15 07:56:47', '2022-03-15 07:57:40'),
(6, 1, 20, 2, 2, 'card', 0, 0, '30000.00', 1, '2022-03-15 08:00:06', '2022-03-15 08:04:40'),
(7, 1, 20, 2, 3, 'card', 0, 0, '45000.00', 1, '2022-03-15 08:00:09', '2022-03-15 08:05:12'),
(8, 2, 20, 2, 3, 'card', 0, 0, '60000.00', 1, '2022-03-15 08:00:15', '2022-03-15 08:08:20'),
(9, 8, 20, 2, 4, 'card', 0, 0, '80000.00', 1, '2022-03-15 08:00:25', '2022-03-15 08:04:24'),
(10, 8, 20, 2, 2, 'card', 0, 0, '40000.00', 0, '2022-03-15 08:05:35', '2022-03-15 08:05:38'),
(11, 8, 20, 2, 2, 'card', 0, 0, '40000.00', 0, '2022-03-15 08:08:33', '2022-03-15 08:08:53'),
(12, 8, 20, 2, 4, 'card', 0, 0, '80000.00', 0, '2022-03-15 08:08:38', '2022-03-15 08:08:53'),
(13, 7, 20, 2, 4, 'card', 0, 0, '80000.00', 0, '2022-03-15 08:08:46', '2022-03-15 08:08:53'),
(14, 7, 20, 2, 4, 'card', 0, 0, '80000.00', 0, '2022-03-15 08:08:48', '2022-03-15 08:08:53'),
(15, 1, 20, 2, 4, 'card', 0, 0, '60000.00', 0, '2022-03-15 08:09:58', '2022-03-15 08:18:51'),
(16, 8, 20, 2, 4, 'card', 0, 0, '80000.00', 0, '2022-03-15 08:10:02', '2022-03-15 08:18:51'),
(17, 1, 20, 2, 2, 'card', 0, 0, '30000.00', 0, '2022-03-15 08:18:36', '2022-03-15 08:18:51'),
(18, 1, 20, 2, 2, 'card', 0, 0, '30000.00', 0, '2022-03-15 08:19:10', '2022-03-15 08:19:20'),
(19, 1, 20, 2, 2, 'card', 0, 0, '30000.00', 0, '2022-03-15 08:20:58', '2022-03-15 08:33:10'),
(20, 1, 20, 2, 2, 'card', 0, 0, '30000.00', 0, '2022-03-15 08:25:37', '2022-03-15 08:33:10'),
(21, 1, 20, 2, 2, 'card', 0, 0, '30000.00', 0, '2022-03-15 08:33:00', '2022-03-15 08:33:10'),
(22, 2, 20, 2, 2, 'card', 0, 0, '40000.00', 0, '2022-03-15 08:35:26', '2022-03-15 08:36:18'),
(23, 8, 20, 2, 2, 'card', 0, 0, '40000.00', 0, '2022-03-15 08:35:56', '2022-03-15 08:36:18'),
(24, 1, 20, 2, 2, 'card', 0, 0, '30000.00', 0, '2022-03-15 08:36:30', '2022-03-15 08:37:21'),
(25, 2, 26, 2, 2, 'card', 0, 0, '40000.00', 1, '2022-03-15 10:30:47', '2022-03-15 10:31:56'),
(26, 13, 26, 2, 3, 'card', 0, 0, '210000.00', 0, '2022-03-15 10:31:12', '2022-03-15 10:31:28'),
(27, 1, 26, 1, 2, 'card', 0, 0, '60000.00', 0, '2022-03-15 10:53:00', NULL),
(28, 1, 24, 1, 2, 'card', 0, 0, '60000.00', 0, '2022-03-15 11:15:43', NULL),
(29, 1, 24, 1, 2, 'card', 0, 0, '60000.00', 0, '2022-03-15 11:18:57', NULL),
(30, 1, 24, 1, 2, 'card', 0, 0, '60000.00', 0, '2022-03-15 11:19:23', NULL),
(31, 1, 24, 1, 2, 'card', 0, 0, '60000.00', 0, '2022-03-15 11:23:11', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `transaction_product`
--

CREATE TABLE `transaction_product` (
  `id` int(11) NOT NULL,
  `id_transaction` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `transaction_product`
--

INSERT INTO `transaction_product` (`id`, `id_transaction`, `id_product`, `quantity`, `created_at`, `updated_at`) VALUES
(2, 1, 1, 2, '2022-03-12 14:53:31', '2022-03-12 15:12:29'),
(4, 1, 2, 3, '2022-03-12 16:41:50', NULL),
(5, 2, 2, 1, '2022-03-12 17:11:47', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `transaction_status`
--

CREATE TABLE `transaction_status` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `transaction_status`
--

INSERT INTO `transaction_status` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'In cart', '2022-03-12 13:28:01', '2022-03-12 13:58:34'),
(2, 'Checked out', '2022-03-12 13:28:08', '2022-03-12 13:59:07'),
(3, 'Paid', '2022-03-12 13:28:12', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(120) NOT NULL,
  `display_name` varchar(100) DEFAULT NULL,
  `gender` enum('male','female') DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `address` text DEFAULT NULL,
  `phone_number` varchar(14) DEFAULT NULL,
  `is_verified` tinyint(4) NOT NULL DEFAULT 0,
  `image` text DEFAULT NULL,
  `id_role` int(11) NOT NULL DEFAULT 3,
  `is_deleted` tinyint(4) NOT NULL DEFAULT 0,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `update_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `password`, `display_name`, `gender`, `birth_date`, `address`, `phone_number`, `is_verified`, `image`, `id_role`, `is_deleted`, `created_at`, `update_at`) VALUES
(1, 'first', 'user', 'firstuser@mail.com', '$argon2i$v=19$m=4096,t=3,p=1$SX62ePbe4NzzpumkyEwi3Q$f0ibNogfFrWsKFAec2L++ynolQyjcx+PY1fagvRRBW0', NULL, NULL, NULL, NULL, NULL, 0, 'https://res.cloudinary.com/fazztrackfw5/image/upload/v1646936708/ngopskuy/uploads/user/user-1646936705683.png', 2, 0, '2022-03-10 01:14:16', '2022-03-11 02:25:07'),
(17, 'Random', 'User', 'randomuser@mail.com', '$argon2i$v=19$m=4096,t=3,p=1$8k5pJS4CO8duWWZ8txEAYw$L7rmGrTcAHE+148CEmAxh3ZB2doRVZeSzevf5u+6fPU', NULL, NULL, NULL, NULL, NULL, 0, 'https://res.cloudinary.com/fazztrackfw5/image/upload/v1646931860/ngopskuy/uploads/user/user-1646931858181.png', 3, 0, '2022-03-11 01:04:19', NULL),
(18, 'Bise', 'Feh', 'bisefeh455@toudrum.com', '$argon2i$v=19$m=4096,t=3,p=1$DLwFNJrsK6KVxQ8kUFjMSg$4e+c1S0A0umP9MDflN+5mlNk+Dj0YMlOvI6mDHfGshs', 'BiseF', 'male', '1998-08-09', NULL, '0897449841', 1, 'https://res.cloudinary.com/fazztrackfw5/image/upload/v1647057401/ngopskuy/uploads/user/user-1647057399644.png', 3, 0, '2022-03-11 10:29:46', '2022-03-12 12:49:13'),
(19, 'kelvin', 'wong', 'lucky7kelvin@yahoo.com', '$argon2i$v=19$m=4096,t=3,p=1$vSMoB88ZPMC8iZ3yElOJ0g$Pgn78DYcAA+8keWvAHXG+TqvZIHp/8darVcqJOmjmug', NULL, NULL, NULL, NULL, NULL, 0, NULL, 3, 0, '2022-03-13 21:16:58', NULL),
(20, 'Hiras', 'Doloksaribu', 'hirasparasian@gmail.com', '$argon2i$v=19$m=4096,t=3,p=1$f5MDvfUl/TpOUYNQsqHY0Q$+8DBeU5mDcWsmVsIPDkHFg6M3YGS3Ih5dS+kMNkVZAI', 'Hir', NULL, NULL, 'Jl.Perjuangan Rt 10/002 No 1 Teluk Pucung , Bekasi Utara', '+6281388981122', 1, 'https://res.cloudinary.com/fazztrackfw5/image/upload/v1647308298/ngopskuy/uploads/user/user-1647308296323.png', 1, 0, '2022-03-13 21:33:19', '2022-03-15 08:42:30'),
(21, 'janganpencet', NULL, 'hiras@gmail.com', '$argon2i$v=19$m=4096,t=3,p=1$l7wzT6kzhpSswXjXNalKjQ$1H+8lGOWdb9lde1K0bnuf5FgpaHqu0kStY49Vfn1mrQ', NULL, NULL, NULL, NULL, NULL, 0, NULL, 3, 0, '2022-03-14 08:31:14', NULL),
(22, 'Hiras', 'Doloksaribu', 'hirasparss@gmail.com', '$argon2i$v=19$m=4096,t=3,p=1$NR8EoNTqjHu4bELRJrSbaw$daZ8XKVC3ZHI8abB/5dW7XVDoSIYuzOdpZR45wOcaJI', 'Hir', NULL, NULL, 'Jl.Perjuangan Rt 10/002 No 1 Teluk Pucung , Bekasi Utara', '+6281388981122', 1, NULL, 3, 0, '2022-03-14 08:32:26', '2022-03-14 08:36:32'),
(23, 'Hiras', 'Doloksaribu', 'hiraspdsa@gmail.com', '$argon2i$v=19$m=4096,t=3,p=1$Ey5W4IQCBqGDjQgXQ2T5gg$mYd9XdWmVhJ0LnZKLy2km/PBBd+RTI69cSc0NjFtI/U', NULL, NULL, NULL, 'Jl.Perjuangan Rt 10/002 No 1 Teluk Pucung , Bekasi Utara', '+6281388981122', 1, 'https://res.cloudinary.com/fazztrackfw5/image/upload/v1647223958/ngopskuy/uploads/user/user-1647223954487.png', 3, 0, '2022-03-14 09:09:11', '2022-03-14 09:27:47'),
(24, 'Hiras', 'Doloksaribu', 'hiraspds@gmail.com', '$argon2i$v=19$m=4096,t=3,p=1$/T/03wAyusRxraLX9udBMA$oOp3rfx/b7xEdaweNAwHVMuLm622aWTalXjCoOaOHcg', NULL, NULL, NULL, NULL, NULL, 0, NULL, 3, 0, '2022-03-14 12:42:06', '2022-03-15 11:14:52'),
(25, 'Hiras', 'Doloksaribu', 'sigol66673@tourcc.com', '$argon2i$v=19$m=4096,t=3,p=1$HMlSF1m/5NIGnv23GnHtcw$h41znuhkxpmpnSlB0RLBAXJmDUZWLbXsL+lWp8XD6t8', NULL, NULL, NULL, NULL, NULL, 1, 'https://res.cloudinary.com/fazztrackfw5/image/upload/v1647312285/ngopskuy/uploads/user/user-1647312283730.png', 3, 0, '2022-03-15 09:44:11', '2022-03-15 09:47:41'),
(26, 'Hiras', 'Doloksaribu', 'fakawa5727@songsign.com', '$argon2i$v=19$m=4096,t=3,p=1$K+/fPHefqQDuK5Yngm1V9Q$NgZ3CXqNylNrmGXX0q3VVTasqSUstOKtPLlpOcBzozA', NULL, NULL, NULL, 'Jl.Perjuangan Rt 10/002 No 1 Teluk Pucung , Bekasi Utara', '+6281388981122', 1, 'https://res.cloudinary.com/fazztrackfw5/image/upload/v1647314791/ngopskuy/uploads/user/user-1647314789178.png', 3, 0, '2022-03-15 10:21:44', '2022-03-15 10:27:32');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user_role`
--

CREATE TABLE `user_role` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user_role`
--

INSERT INTO `user_role` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'superadmin', '2022-03-09 20:06:39', '2022-03-09 13:06:27'),
(2, 'admin', '2022-03-09 20:06:39', '2022-03-09 13:06:27'),
(3, 'user', '2022-03-09 20:06:46', '2022-03-09 13:06:43');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `delivery_type`
--
ALTER TABLE `delivery_type`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `otp`
--
ALTER TABLE `otp`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_otp_type` (`id_otp_type`);

--
-- Indeks untuk tabel `otp_type`
--
ALTER TABLE `otp_type`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_category` (`id_category`);

--
-- Indeks untuk tabel `product_delivery_type`
--
ALTER TABLE `product_delivery_type`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_product` (`id_product`,`id_delivery_type`),
  ADD KEY `id_delivery_type` (`id_delivery_type`);

--
-- Indeks untuk tabel `product_size`
--
ALTER TABLE `product_size`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_product` (`id_product`,`id_size`),
  ADD KEY `id_size` (`id_size`);

--
-- Indeks untuk tabel `promo`
--
ALTER TABLE `promo`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `promo_delivery_type`
--
ALTER TABLE `promo_delivery_type`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_promo` (`id_promo`,`id_delivery_type`),
  ADD KEY `id_delivery_type` (`id_delivery_type`);

--
-- Indeks untuk tabel `promo_size`
--
ALTER TABLE `promo_size`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_promo` (`id_promo`,`id_size`),
  ADD KEY `id_size` (`id_size`);

--
-- Indeks untuk tabel `size`
--
ALTER TABLE `size`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`,`id_transaction_status`),
  ADD KEY `id_transaction_status` (`id_transaction_status`);

--
-- Indeks untuk tabel `transaction_product`
--
ALTER TABLE `transaction_product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_transaction` (`id_transaction`,`id_product`),
  ADD KEY `id_product` (`id_product`);

--
-- Indeks untuk tabel `transaction_status`
--
ALTER TABLE `transaction_status`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `id_role` (`id_role`);

--
-- Indeks untuk tabel `user_role`
--
ALTER TABLE `user_role`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `delivery_type`
--
ALTER TABLE `delivery_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT untuk tabel `otp`
--
ALTER TABLE `otp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT untuk tabel `otp_type`
--
ALTER TABLE `otp_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT untuk tabel `product_delivery_type`
--
ALTER TABLE `product_delivery_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT untuk tabel `product_size`
--
ALTER TABLE `product_size`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT untuk tabel `promo`
--
ALTER TABLE `promo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `promo_delivery_type`
--
ALTER TABLE `promo_delivery_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `promo_size`
--
ALTER TABLE `promo_size`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `size`
--
ALTER TABLE `size`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `transaction`
--
ALTER TABLE `transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT untuk tabel `transaction_product`
--
ALTER TABLE `transaction_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `transaction_status`
--
ALTER TABLE `transaction_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT untuk tabel `user_role`
--
ALTER TABLE `user_role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `otp`
--
ALTER TABLE `otp`
  ADD CONSTRAINT `otp_ibfk_1` FOREIGN KEY (`id_otp_type`) REFERENCES `otp_type` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `product_delivery_type`
--
ALTER TABLE `product_delivery_type`
  ADD CONSTRAINT `product_delivery_type_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `product_delivery_type_ibfk_2` FOREIGN KEY (`id_delivery_type`) REFERENCES `delivery_type` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `product_size`
--
ALTER TABLE `product_size`
  ADD CONSTRAINT `product_size_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `product_size_ibfk_2` FOREIGN KEY (`id_size`) REFERENCES `size` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `promo_delivery_type`
--
ALTER TABLE `promo_delivery_type`
  ADD CONSTRAINT `promo_delivery_type_ibfk_1` FOREIGN KEY (`id_promo`) REFERENCES `promo` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `promo_delivery_type_ibfk_2` FOREIGN KEY (`id_delivery_type`) REFERENCES `delivery_type` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `promo_size`
--
ALTER TABLE `promo_size`
  ADD CONSTRAINT `promo_size_ibfk_1` FOREIGN KEY (`id_promo`) REFERENCES `promo` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `promo_size_ibfk_2` FOREIGN KEY (`id_size`) REFERENCES `size` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `transaction_ibfk_1` FOREIGN KEY (`id_transaction_status`) REFERENCES `transaction_status` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `transaction_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `transaction_product`
--
ALTER TABLE `transaction_product`
  ADD CONSTRAINT `transaction_product_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `transaction_product_ibfk_2` FOREIGN KEY (`id_transaction`) REFERENCES `transaction` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_role`) REFERENCES `user_role` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
