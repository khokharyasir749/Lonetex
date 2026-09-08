# Lonetex Pakistan — Commercial Cleaning Equipment E-Commerce Platform

A production-grade, minimalist commercial e-commerce storefront built with React, Vite, and Tailwind CSS. This project reproduces the digital catalog and wholesale experience of **Lonetex Pakistan**, featuring dedicated product views, interactive specification matrices, real-time RFQ cart state management, and direct commercial lead generation via WhatsApp and direct telephony.

---

## 🚀 Key Features

* **1:1 Product Detail Architecture**: Full-page product routing featuring an interactive multi-angle gallery carousel, SKU indexing, dynamic quantity counter, and collapsible accordion sections (Description, Material & Care, Orders & Returns).
* **Technical Specifications Matrix**: High-contrast, industrial-grade 3-column specification tables (`Size` | `Weight` | `Packing`) tailored for B2B procurement clarity.
* **Direct Lead Routing**: Pre-wired inquiry pathways linking quote baskets and single-item commercial orders directly to WhatsApp (`+92 328 0790704`) and direct call desks.
* **Edge-to-Edge Wholesale Section**: Full-bleed warehouse visual backdrop with a neutral glassmorphic overlay for bulk orders and commercial facility contracting.
* **Minimalist White & Deep Navy Theme**: Modern e-commerce layout utilizing deep navy accents (`#0A1D37`), clean white canvas spaces (`#FFFFFF`), light grey utility strips (`#F8FAFC`), and subtle border scaffolding.
* **Persistent State Management**: Built-in `ProductContext` and `QuoteContext` with cache-busting storage keys for state handling across catalog and quote inquiries.

---

## 🛠️ Tech Stack

* **Frontend Library**: React 18
* **Build Tool**: Vite
* **Styling**: Tailwind CSS, Glassmorphism UI
* **Icons**: Lucide React
* **State Management**: React Context API (`ProductContext`, `QuoteContext`)
* **Storage**: Browser LocalStorage with versioned cache keys

---

## 📁 Project Structure

```text
src/
├── assets/               # Static icons, banners, and logos
├── components/           # Core modular UI components
│   ├── AnnouncementBar.jsx   # Top utility strip & contact ticker
│   ├── Navbar.jsx            # Brand navigation & quick actions
│   ├── HeroSlider.jsx        # Production & facility hero carousel
│   ├── ProductCard.jsx       # Catalog listing cards
│   ├── ProductDetailPage.jsx # Dedicated 2-column product view
│   ├── WholesaleInfoSection.jsx # Full-bleed commercial inquiry section
│   ├── SearchModal.jsx       # Instant search dialog
│   ├── AdminDashboard.jsx    # Internal catalog controller
│   └── Footer.jsx            # 4-column corporate contact layout
├── context/              # Global application context
│   ├── ProductContext.jsx    # Catalog data and active product selection
│   └── QuoteContext.jsx      # Commercial inquiry & cart management
├── data/                 # Product schemas and initial inventory
│   └── lonetexProducts.js
├── App.jsx               # Application entry & layout routing
└── main.jsx              # React DOM mounting
```

---

## ⚙️ Getting Started

### Prerequisites

* Node.js (v18.0.0 or higher recommended)
* npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/khokharyasir749/Lonetex.git
   cd Lonetex
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 📞 Commercial & Support Contact

* **Factory / Showroom**: Behind Kingston College, Main Canal Road, Lahore, Pakistan
* **Direct Line**: `+92 328 0790704`
* **WhatsApp**: `+92 328 0790704`
* **Inquiries**: `khokharyasir749@gmail.com`

---

## 📄 License

This repository is maintained for portfolio demonstration and development purposes. All product concepts, names, and branding belong to their respective trademark holders.
