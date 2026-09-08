/**
 * Lonetex Cleaning Products Catalog Data
 * Official Product Line for Lonetex Pakistan & Saudi Arabia (lonetex.co)
 */

export const DEFAULT_PRODUCT_IMAGE = "/products/spray-mop.png";

export const LONETEX_COMPANY = {
  name: "Lonetex",
  tagline: "Come Clean",
  fullTagline: "Come Clean — Professional Cleaning Products & Uniforms",
  phone: "+92 328 0790704",
  phoneDisplay: "0328-0790704",
  altPhones: ["0327-7771764", "042-35253436", "+966 542 863 980", "+966 598 481 826", "+966 56 747 1842"],
  headOfficePhone: "042-35253436",
  email: "khokharyasir749@gmail.com",
  factoryAddress: "Behind Kingston College, Main Canal Road, Lahore, Pakistan",
  headOffice: "71-C3 Gulberg, Lahore, Pakistan",
  showroomAddress: "Khaira Rd, Khaira, Lahore, Pakistan",
  ksaBranch: {
    address: "Ash Shoula, Dammam, KSA 34264",
    phone: "+966 542 863 980",
    phoneRaw: "966542863980",
  },
  operatingHours: "Monday – Saturday: 9:00 AM – 6:00 PM (PKT / AST)",
  whatsappNumber: "923280790704",
  announcementText: "WHOLESALE & BULK ORDERS WELCOME",
  tickerAnnouncements: [
    "📍 VISIT OUR LAHORE SHOWROOM — KHAIRA RD, KHAIRA, LAHORE",
    "📞 Call: 0328-0790704 · 0327-7771764 · 042-35253436 · +966 542 863 980 · +966 598 481 826 · +966 56 747 1842",
    "💼 REQUEST A BULK QUOTE — CONTACT US ONLINE OR VIA WHATSAPP",
    "📦 WHOLESALE SUPPLIER — BULK ORDERS WELCOME FOR BUSINESSES & FACILITIES"
  ]
};

export const CATEGORIES = [
  "All",
  "Kentucky Mops",
  "Practical Cleaning",
  "Flat Mops",
  "Handles & Accessories",
  "Cloths"
];

// Helper to map category name variations safely
export function normalizeCategory(cat) {
  if (!cat || cat === "All" || cat === "All Products") return "All";
  if (cat === "Flat Mops" || cat === "Dust / Flat Mops" || cat === "Dust/Flat Mops") return "Flat Mops";
  if (cat === "Cleaning Cloths" || cat === "Cloths") return "Cloths";
  if (cat === "Accessories" || cat === "Handles & Accessories") return "Handles & Accessories";
  return cat;
}

export const lonetexProducts = [
  // ==========================================
  // 1. BEST SELLING COLLECTION (10 Official Lonetex Items)
  // ==========================================
  {
    id: "lon-bs-001",
    name: "Spray Mops",
    subtitle: "- Product",
    sku: "LTX-BS-001",
    category: "Best Selling",
    price: "Contact for price",
    inStock: true,
    image: "/products/spray-mop.png",
    specs: [
      "750ml Refillable Solution Bottle",
      "Ergonomic Trigger Handle",
      "360° Swivel Aluminum Head",
      "Includes Washable Microfiber Pad"
    ],
    description: "Commercial spray mop system with ergonomic trigger grip and fine mist nozzle for fast, efficient floor cleaning.",
    features: [
      "Fine mist spray nozzle gives uniform liquid coverage",
      "Ergonomic trigger handle reduces worker fatigue",
      "Reusable microfiber pad traps fine dirt and grease",
      "Lightweight aluminum pole ensures durability"
    ]
  },
  {
    id: "lon-bs-002",
    name: "Spin Mop Set",
    subtitle: "- Product",
    sku: "LTX-BS-002",
    category: "Best Selling",
    price: "Contact for price",
    inStock: true,
    image: "/products/spin-mop.png",
    specs: [
      "Stainless Steel De-Watering Spinner",
      "Dual Clean / Dirty Water Bucket",
      "Telescopic Stainless Steel Handle",
      "2x Microfiber Round Mop Heads"
    ],
    description: "Industrial 360° spin mop set featuring a stainless steel centrifugal wringer basket for rapid moisture extraction.",
    features: [
      "Stainless steel spin dryer basket provides fast moisture extraction",
      "Dual chamber bucket system with easy drain spout",
      "Soft microfibers safe on all tiles, polished marble, and hardwood",
      "Hands-free foot press and handle pump spin mechanism"
    ]
  },
  {
    id: "lon-bs-003",
    name: "Microfiber Dust Mop",
    subtitle: "- Dust/Flat Mops",
    sku: "LTX-BS-003",
    category: "Best Selling",
    price: "Contact for price",
    inStock: true,
    image: "/products/microfiber-dust-mop.png",
    specs: [
      "60cm High-Density Electrostatic Microfiber",
      "Dual Reinforced Canvas Pockets",
      "Commercial Grade Serged Edges",
      "Fits Standard Wire Frames"
    ],
    description: "High-performance electrostatic microfiber dry dust mop for sweeping large halls, corridors, and commercial floors without airborne dust.",
    features: [
      "Generates static friction to magnetically trap dust and fine debris",
      "Durable canvas pockets fit standard folding wire frames securely",
      "Withstands 300+ commercial laundry wash cycles",
      "Non-abrasive microfiber safe on polished marble and epoxy floors"
    ]
  },
  {
    id: "lon-bs-004",
    name: "Self Wringing Mop",
    subtitle: "- Self-Wringing Mop",
    sku: "LTX-BS-004",
    category: "Best Selling",
    price: "Contact for price",
    inStock: true,
    image: "/products/self-wringing-mop.png",
    specs: [
      "Internal Ratchet Twist Mechanism",
      "Extra-Thick Microfiber Strands",
      "Built-in Scrubbing Scraper Tip",
      "135cm Powder-Coated Steel Handle"
    ],
    description: "Hands-free self-wringing twist mop with built-in ratchet mechanism for effortless water extraction without touching soiled yarn.",
    features: [
      "Easy hand-twist wringing with locking ratchet gear",
      "Dense microfiber strands lift water, grease, and hair instantly",
      "Integrated abrasive tip removes stubborn shoe scuffs and stains",
      "Compact and portable for quick janitorial touch-ups"
    ]
  },
  {
    id: "lon-bs-005",
    name: "Aluminum Handle",
    subtitle: "- Aluminium Mop Handles",
    sku: "LTX-BS-005",
    category: "Best Selling",
    price: "Contact for price",
    inStock: true,
    image: "/products/aluminum-handle.png",
    specs: [
      "150cm Length (60 inch)",
      "25mm Heavy Anodized Aluminum",
      "Color-Coded Ergonomic Top Cap",
      "Universal Screw & Clip Fitting"
    ],
    description: "Heavy-gauge anodized aluminum mop handle engineered for rigorous daily janitorial duty. Rustproof, lightweight, and extremely durable.",
    features: [
      "Corrosion-resistant aircraft grade anodized aluminum tube",
      "Ergonomic non-slip grip with hanging hole for neat wall storage",
      "Color-coded caps (Red, Blue, Green, Yellow) for hygiene zones",
      "Universal connector compatible with Kentucky mop clips and wire frames"
    ]
  },
  {
    id: "lon-bs-006",
    name: "Kentucky Clamp Handle",
    subtitle: "- Handles",
    sku: "LTX-BS-006",
    category: "Best Selling",
    price: "Contact for price",
    inStock: true,
    image: "/products/clamp-handle.png",
    specs: [
      "Heavy Duty Polymer Clamp Jaw",
      "Fits All Standard Kentucky Mop Bands",
      "Reinforced 150cm Pole",
      "Quick Release Locking Mechanism"
    ],
    description: "Commercial heavy duty Kentucky clamp handle designed for quick mop head changes and firm, slip-free jaw locking.",
    features: [
      "Heavy duty polymer clamp jaw locks mop heads tightly",
      "Quick release lever for touch-free mop head replacement",
      "Ergonomic handle grip reduces hand strain during continuous use",
      "Resistant to high chemical exposure and hot water"
    ]
  },
  {
    id: "lon-bs-007",
    name: "Iron Handle",
    subtitle: "- Iron Mop Handles",
    sku: "LTX-BS-007",
    category: "Best Selling",
    price: "Contact for price",
    inStock: true,
    image: "/products/iron-handle.png",
    specs: [
      "150cm Heavy-Gauge Steel Tube",
      "Anti-Rust Powder Coating",
      "Universal Threaded Tip",
      "Institutional Duty Build"
    ],
    description: "Commercial powder-coated iron mop handle designed for high-stress wet mopping and rough floor scrubbing applications.",
    features: [
      "Thick steel tube withstands maximum downward scrubbing pressure",
      "Anti-rust baked enamel powder coating",
      "Threaded metal tip compatible with standard mop heads and brooms",
      "Durable top cap with hanging eyelet"
    ]
  },
  {
    id: "lon-bs-008",
    name: "Mini Mop",
    subtitle: "- Mini Mop",
    sku: "LTX-BS-008",
    category: "Best Selling",
    price: "Contact for price",
    inStock: true,
    image: "/products/mini-mop.png",
    specs: [
      "Compact Squeeze-Action Squeegee Mop",
      "Highly Absorbent Sponge Foam",
      "Hands-Free Pull Wringer Mechanism",
      "Ideal for Glass, Mirrors & Countertops"
    ],
    description: "Portable handheld mini mop with self-squeezing mechanism for effortless cleaning of bathroom glass, kitchen countertops, mirrors, and tight spaces.",
    features: [
      "Compact handheld size for tight corners and table surfaces",
      "High-density sponge head absorbs liquids and oils rapidly",
      "Pull-ring self-wringing mechanism squeezes sponge completely dry",
      "Lightweight and hanging hook design for easy storage"
    ]
  },
  {
    id: "lon-bs-009",
    name: "Mop Handle Colored With Colored Grip 150cm",
    subtitle: "- Aluminium Mop Handles",
    sku: "LTX-BS-009",
    category: "Best Selling",
    price: "Contact for price",
    inStock: true,
    image: "/products/colored-grip-handle.png",
    specs: [
      "150cm Full Length",
      "Color-Coordinated Anodized Tube & Soft Grip",
      "Available in Blue, Red, Green, Yellow",
      "HACCP Hygiene Zone Compliant"
    ],
    description: "Commercial colored aluminum mop handle with matching ergonomic soft grip for HACCP color-coded zone segregation in food preparation, healthcare, and restrooms.",
    features: [
      "Color-coded design prevents cross-contamination across facility zones",
      "Comfortable textured soft grip provides excellent control when wet",
      "Anodized aluminum alloy body resists corrosion and bending",
      "Standard screw fitting fits all Lonetex brushes, mops, and squeegees"
    ]
  },
  {
    id: "lon-bs-010",
    name: "Floor Brush",
    subtitle: "- Cleaning Accessories",
    sku: "LTX-BS-010",
    category: "Best Selling",
    price: "Contact for price",
    inStock: true,
    image: "/products/floor-brush.png",
    specs: [
      "Stiff Polypropylene Scrubbing Bristles",
      "Heavy-Duty Threaded Socket Head",
      "Angled Flare for Grout & Corner Cleaning",
      "Resistant to Harsh Chemical Detergents"
    ],
    description: "High-density heavy duty commercial floor scrubbing brush for aggressive cleaning of tile grout, concrete surfaces, industrial floors, and exterior patios.",
    features: [
      "Stiff crimped bristles loosen tough grease, algae, and grime",
      "Angled bristle flare reaches baseboards and floor corners easily",
      "Solid polypropylene block will not crack, warp, or rot",
      "Fits standard threaded janitorial handles securely"
    ]
  },

  // ==========================================
  // 2. KENTUCKY MOPS COLLECTION (10 Official Items)
  // ==========================================
  {
    id: "lon-km-001",
    name: "Kentucky Mop Cotton White Loop-End",
    subtitle: "- Wet/Kentucky Mops",
    sku: "LTX-KM-LE450W",
    category: "Kentucky Mops",
    price: "Contact for price",
    inStock: true,
    image: "/products/kentucky/kentucky-cotton-white-loop.png",
    specs: [
      "450g / 16oz Premium Cotton Yarn",
      "Continuous Loop-End Design",
      "Reinforced Color-Coded Headband",
      "Integrated Tailband for Maximum Spread"
    ],
    description: "Industrial grade loop-end white Kentucky mop head engineered for commercial wet mopping in hospitals, hotels, and corporate towers. Looped ends eliminate yarn fraying and cover 30% more floor space.",
    features: [
      "Continuous looped ends prevent unraveling, linting, and tangles",
      "Heavy absorption capacity for rapid liquid and spill cleanups",
      "Reinforced headband fits standard Kentucky clips and clamps",
      "Commercial machine-washable for extended industrial service life"
    ]
  },
  {
    id: "lon-km-002",
    name: "Kentucky Mop Cotton White Cut-End",
    subtitle: "- Wet/Kentucky Mops",
    sku: "LTX-KM-CE400W",
    category: "Kentucky Mops",
    price: "Contact for price",
    inStock: true,
    image: "/products/kentucky/kentucky-cotton-white-cut.png",
    specs: [
      "400g Natural Cotton Yarn",
      "4-Ply Heavy Twisted Strands",
      "Heavy Duty Central Stitching",
      "Fits Standard Clip-On Clamps"
    ],
    description: "Traditional high-absorbency cut-end white cotton Kentucky mop designed for general wet mopping, liquid absorption, and daily institutional floor maintenance.",
    features: [
      "100% natural absorbent cotton strands",
      "High initial water retention for thorough mopping",
      "Cost-effective solution for large-scale facility contracts",
      "Compatible with all standard janitorial mop buckets and wringers"
    ]
  },
  {
    id: "lon-km-003",
    name: "Kentucky Mop Colored Cut-End",
    subtitle: "- Wet/Kentucky Mops",
    sku: "LTX-KM-CE400C",
    category: "Kentucky Mops",
    price: "Contact for price",
    inStock: true,
    image: "/products/kentucky/kentucky-colored-cut.png",
    specs: [
      "400g Dyed Cotton-Poly Blend",
      "Available in Red, Blue, Green, Yellow",
      "HACCP Sanitation Compliant",
      "High Liquid Absorption"
    ],
    description: "Color-coded cut-end Kentucky mop designed for infection control and cross-contamination prevention in medical clinics, kitchens, and restrooms.",
    features: [
      "Vibrant fade-resistant yarn colors for zone segregation",
      "High liquid pickup capacity for rapid spills cleanup",
      "Heavy duty poly headband fits all standard clamp frames",
      "HACCP compliant cleaning protocol standard"
    ]
  },
  {
    id: "lon-km-004",
    name: "Kentucky Mop Colored Loop-End",
    subtitle: "- Wet/Kentucky Mops",
    sku: "LTX-KM-LE450C",
    category: "Kentucky Mops",
    price: "Contact for price",
    inStock: true,
    image: "/products/kentucky/kentucky-colored-loop.png",
    specs: [
      "450g Premium Yarn Weight",
      "Reinforced Matching Tailband",
      "Red, Blue, Green & Yellow Options",
      "Zero-Fray Loop Construction"
    ],
    description: "Top-tier color-coded loop-end Kentucky mop head combining maximum square meter floor coverage with zero fraying and designated hygiene zone coloring.",
    features: [
      "Looped ends eliminate lint shed and string detachment",
      "Color-coded body and tailband prevent cross-infection",
      "Machine washable with commercial disinfectants",
      "Designed for long-term commercial cleaning service"
    ]
  },
  {
    id: "lon-km-005",
    name: "Kentucky Mop Polyester",
    subtitle: "- Wet/Kentucky Mops",
    sku: "LTX-KM-POLY350",
    category: "Kentucky Mops",
    price: "Contact for price",
    inStock: true,
    image: "/products/kentucky/kentucky-polyester.png",
    specs: [
      "350g Pure Synthetic Polyester",
      "Bleach & Chemical Resistant",
      "Anti-Bacterial Odor Free",
      "Fast Air Drying"
    ],
    description: "Synthetic polyester Kentucky mop designed specifically for healthcare environments, pharmaceutical labs, and food processing plants requiring chemical disinfection.",
    features: [
      "Zero organic fiber rot or bacterial odor buildup",
      "Resistant to high chemical concentrations and chlorine bleach",
      "Color-coded headband and tailband to avoid cross-contamination",
      "Ultra-fast drying fibers reduce mildew formation"
    ]
  },
  {
    id: "lon-km-006",
    name: "Kentucky Off White Recycled",
    subtitle: "- Wet/Kentucky Mops",
    sku: "LTX-KM-REC450",
    category: "Kentucky Mops",
    price: "Contact for price",
    inStock: true,
    image: "/products/kentucky/kentucky-off-white-recycled.png",
    specs: [
      "450g Eco-Friendly Recycled Cotton Yarn",
      "Heavy Duty Multi-Ply Twisted Cords",
      "Cost-Effective Bulk Janitorial Use",
      "Universal Clamp Attachment"
    ],
    description: "Eco-friendly commercial Kentucky mop made from high-grade recycled cotton yarns for heavy-duty industrial facility cleaning and economical bulk contract maintenance.",
    features: [
      "High density recycled cotton fibers offer superb initial water absorption",
      "Heavy duty central band fits all commercial Kentucky mop holders",
      "Economical choice for large warehouses, schools, and outdoor areas",
      "Withstands rigorous daily mopping across coarse concrete and tile floors"
    ]
  },
  {
    id: "lon-km-007",
    name: "Kentucky Rayon White Loop-End",
    subtitle: "- Wet/Kentucky Mops",
    sku: "LTX-KM-RAY-LE",
    category: "Kentucky Mops",
    price: "Contact for price",
    inStock: true,
    image: "/products/kentucky/kentucky-rayon-white-loop.png",
    specs: [
      "450g Continuous Filament Rayon",
      "Zero-Lint Looped Construction",
      "Smooth Polish & Sealant Application",
      "Reinforced Tailband for Even Release"
    ],
    description: "Engineered specifically for floor sealing, wax application, and high-gloss floor polishing. Continuous filament rayon yarn releases floor finishes evenly without shedding lint.",
    features: [
      "Continuous filament looped rayon leaves glass-smooth wax coats",
      "Lint-free formula prevents finish contamination and bubbling",
      "Even liquid release eliminates puddling and streak lines",
      "Quick rinse properties prevent wax hardening in the mop head"
    ]
  },
  {
    id: "lon-km-008",
    name: "Kentucky Rayon White Cut-End",
    subtitle: "- Wet/Kentucky Mops",
    sku: "LTX-KM-RAY-CE",
    category: "Kentucky Mops",
    price: "Contact for price",
    inStock: true,
    image: "/products/kentucky/kentucky-rayon-white-cut.png",
    specs: [
      "400g Premium Cut-End Rayon",
      "Flared Cut-End Base",
      "Ultra-Fast Absorption & Release",
      "Resistant to Mildew and Rot"
    ],
    description: "High-grade cut-end rayon Kentucky mop offering rapid moisture uptake and effortless chemical discharge for general disinfection and floor finishing.",
    features: [
      "Fast chemical pick-up and instant liquid laydown",
      "Flared mop head covers wide corridors and halls rapidly",
      "Mildew resistant synthetic rayon blend for extended storage life",
      "Compatible with all standard commercial down-press wringers"
    ]
  },
  {
    id: "lon-km-009",
    name: "Microfiber Kentucky Mop",
    subtitle: "- Wet/Kentucky Mops",
    sku: "LTX-KM-MF400",
    category: "Kentucky Mops",
    price: "Contact for price",
    inStock: true,
    image: "/products/kentucky/microfiber-kentucky-mop.png",
    specs: [
      "400g Split Microfiber Yarn Tubes",
      "High Density Microfiber Electrostatic Strands",
      "Double Reinforced Tailband",
      "500+ Commercial Wash Cycles"
    ],
    description: "Ultra-absorbent microfiber Kentucky mop engineered to lift and lock microscopic bacteria, grease, and grime with minimal detergent consumption.",
    features: [
      "Split microfiber strands clean 50% faster than conventional cotton",
      "Requires significantly less chemical solution for spotless results",
      "Reinforced headband securely fastens to all Kentucky jaws and clamps",
      "Commercial laundry durable for 500+ high-temperature sanitizing washes"
    ]
  },
  {
    id: "lon-km-010",
    name: "Microfiber Strip Mop / Mini Mop",
    subtitle: "- Wet/Kentucky Mops",
    sku: "LTX-KM-STRIP",
    category: "Kentucky Mops",
    price: "Contact for price",
    inStock: true,
    image: "/products/kentucky/microfiber-strip-mini-mop.png",
    specs: [
      "Triple Microfiber Strip Construction",
      "Push-Fit Universal Plastic Socket",
      "Color Options: Green, Orange/Red, Blue",
      "Super-Lightweight Agility Build"
    ],
    description: "Ergonomic microfiber strip mini mop head designed for rapid spot cleaning, washrooms, narrow stairs, and hard-to-reach corners with push-fit sockets.",
    features: [
      "Lightweight non-woven microfiber strips glide easily over wet surfaces",
      "Push-fit threaded socket fits standard mop handles effortlessly",
      "Quick-drying material prevents damp odor and bacterial accumulation",
      "Color-coded sockets and strips for hygiene zone segregation"
    ]
  },

  // ==========================================
  // 3. HANDLES & ACCESSORIES COLLECTION (9 Official Lonetex Items)
  // ==========================================
  {
    id: "lon-ha-001",
    name: "Mop Handle Colored With Colored Grip 150cm",
    subtitle: "- Aluminium Mop Handles",
    sku: "LTX-HA-CG150",
    category: "Handles & Accessories",
    price: "Contact for price",
    inStock: true,
    image: "/products/accessories/colored-grip-handle.png",
    specs: [
      "150cm (60 inch) Professional Length",
      "Color-Coated Anodized Tube & Soft Grip",
      "Available in Blue, Red, Green, Yellow",
      "HACCP Hygiene Zone Compliant"
    ],
    description: "Commercial colored aluminum mop handle with matching ergonomic soft grip for HACCP color-coded zone segregation in food preparation, healthcare, and restrooms.",
    features: [
      "Color-coded design prevents cross-contamination across facility zones",
      "Comfortable textured soft grip provides excellent control when wet",
      "Anodized aluminum alloy body resists corrosion and bending",
      "Standard screw fitting fits all Lonetex brushes, mops, and squeegees"
    ]
  },
  {
    id: "lon-ha-002",
    name: "Aluminum Handle",
    subtitle: "- Aluminium Mop Handles",
    sku: "LTX-HA-AL150",
    category: "Handles & Accessories",
    price: "Contact for price",
    inStock: true,
    image: "/products/accessories/aluminum-handle-set.png",
    specs: [
      "150cm Length (60 inch)",
      "Heavy Duty Anodized Aluminum Alloy",
      "Multi-Color Plastic Clamp Attachments",
      "Universal Fit for Kentucky Mops & Squeegees"
    ],
    description: "Heavy duty commercial aluminum handle set equipped with color-coded Kentucky clamp attachments for fast mop head swaps and high-traffic floor sanitation.",
    features: [
      "Corrosion-resistant aircraft grade anodized aluminum tube",
      "Includes quick-release heavy duty polymer mop head clamp",
      "Available in standard color coding (Blue, Green, Red, Yellow, White)",
      "Withstands heavy downward scrubbing pressure without buckling"
    ]
  },
  {
    id: "lon-ha-003",
    name: "Iron Handle",
    subtitle: "- Iron Mop Handles",
    sku: "LTX-HA-FE150",
    category: "Handles & Accessories",
    price: "Contact for price",
    inStock: true,
    image: "/products/accessories/iron-handle.png",
    specs: [
      "150cm Heavy-Gauge Steel Tube",
      "Anti-Rust Powder Coating",
      "Universal Threaded Socket & Connector",
      "Heavy Duty Flat Dust Mop Compatible"
    ],
    description: "Commercial powder-coated iron mop handle designed for high-stress wet mopping, flat dust mop frames, and rough floor scrubbing applications.",
    features: [
      "Thick steel tube withstands maximum downward scrubbing pressure",
      "Anti-rust baked enamel powder coating protects against moisture",
      "Threaded metal tip compatible with standard mop heads and brooms",
      "Durable top cap with hanging eyelet"
    ]
  },
  {
    id: "lon-ha-004",
    name: "Telescope Handle",
    subtitle: "- Aluminium Mop Handles",
    sku: "LTX-HA-TEL300",
    category: "Handles & Accessories",
    price: "Contact for price",
    inStock: true,
    image: "/products/accessories/telescope-handle.png",
    specs: [
      "Extends from 1.5m to 3.0m (10 feet)",
      "Multi-Stage Reinforced Aluminum Tubing",
      "Ergonomic Quick-Twist Lock Collars",
      "Universal Tapered & Threaded Tip"
    ],
    description: "Multi-stage telescopic aluminum pole for high-reach glass cleaning, high-wall dusting, cobweb removal, and large floor squeegeeing.",
    features: [
      "Smooth twist-lock mechanism locks securely at any desired length",
      "Lightweight aluminum prevents arm fatigue during overhead work",
      "Fits window squeegees, duster heads, and scrub pads",
      "Non-slip ribbed surface for secure two-handed grip"
    ]
  },
  {
    id: "lon-ha-005",
    name: "Holder With Clip",
    subtitle: "- Plastic Items",
    sku: "LTX-HA-HWC01",
    category: "Handles & Accessories",
    price: "Contact for price",
    inStock: true,
    image: "/products/accessories/holder-with-clip.png",
    specs: [
      "High-Impact Polymer Jaw Construction",
      "Universal Handle Collar Attachment",
      "Secure Locking Cloth & Squeegee Clip",
      "Chemical & Hot Water Resistant"
    ],
    description: "Commercial holder clip attachment designed for quick, secure fastening of floor cloths, squeegee blades, and Kentucky mop bands.",
    features: [
      "Heavy duty polymer clamp jaw locks mop cloths and pads tightly",
      "Quick release lever for touch-free replacement",
      "Fits standard 22mm-25mm aluminum, wood, and steel handles",
      "Resistant to high chemical exposure and harsh industrial detergents"
    ]
  },
  {
    id: "lon-ha-006",
    name: "Mop Frame",
    subtitle: "- Dust/Flat Mop Frames",
    sku: "LTX-HA-MF60",
    category: "Handles & Accessories",
    price: "Contact for price",
    inStock: true,
    image: "/products/accessories/mop-frame.png",
    specs: [
      "60cm / 80cm Galvanized Wire Frame",
      "360° Swivel Blue Plastic Connector",
      "Foot-Release Collapse Action",
      "Fits Standard Dust Mop Sleeves"
    ],
    description: "Electro-zinc plated wire dust mop frame featuring an all-direction swivel connector and push-button folding mechanism for rapid dust mop sleeve insertion.",
    features: [
      "Foot-release pedal collapses frame effortlessly for clean mop sleeve changes",
      "Heavy zinc coating protects wire from rust and moisture",
      "360-degree swivel connector allows smooth figure-eight sweeping maneuvers",
      "Compatible with all standard pocket and tie-on dust mop sleeves"
    ]
  },
  {
    id: "lon-ha-007",
    name: "Wooden Handle",
    subtitle: "- Mop Handles",
    sku: "LTX-HA-WD150",
    category: "Handles & Accessories",
    price: "Contact for price",
    inStock: true,
    image: "/products/accessories/wooden-handle.png",
    specs: [
      "150cm Smooth Sanded Hardwood",
      "Clear Lacquered Splinter-Free Finish",
      "Heavy Duty Threaded Metal / Plastic Tip",
      "Compatible with Commercial Broom & Mop Heads"
    ],
    description: "Natural polished hardwood handle crafted from durable timber for brooms, floor brushes, squeegees, and standard janitorial mop fittings.",
    features: [
      "Smooth lacquered finish prevents splintering and provides comfortable grip",
      "High tensile strength timber resists breaking under heavy sweeping loads",
      "Precision threaded tip ensures firm head connection",
      "Eco-friendly natural timber construction"
    ]
  },
  {
    id: "lon-ha-008",
    name: "Floor Brush",
    subtitle: "- Cleaning Accessories",
    sku: "LTX-HA-FB01",
    category: "Handles & Accessories",
    price: "Contact for price",
    inStock: true,
    image: "/products/accessories/floor-brush.png",
    specs: [
      "Stiff Polypropylene Scrubbing Bristles",
      "Heavy-Duty Threaded Socket Head",
      "Available in Yellow, Red, Blue, Green",
      "Angled Flare for Grout & Corner Cleaning"
    ],
    description: "High-density heavy duty commercial floor scrubbing brush for aggressive cleaning of tile grout, concrete surfaces, industrial floors, and exterior patios.",
    features: [
      "Stiff crimped bristles loosen tough grease, algae, and grime",
      "Angled bristle flare reaches baseboards and floor corners easily",
      "Solid polypropylene block will not crack, warp, or rot",
      "Color-coded for HACCP facility sanitation protocols"
    ]
  },
  {
    id: "lon-ha-009",
    name: "Wiper",
    subtitle: "- Cleaning Accessories",
    sku: "LTX-HA-WP01",
    category: "Handles & Accessories",
    price: "Contact for price",
    inStock: true,
    image: "/products/accessories/wiper.png",
    specs: [
      "Commercial Floor Squeegee / Wiper",
      "High-Elasticity Natural Rubber Wiper Blade",
      "Reinforced Red Ergonomic Socket Housing",
      "Instant Streak-Free Water Removal"
    ],
    description: "Professional floor wiper squeegee designed for rapid water push, wet room drainage, tile drying, and streak-free industrial floor maintenance.",
    features: [
      "Dual flexible rubber edge wipes floors completely dry in a single stroke",
      "Lightweight reinforced socket accepts standard mop and broom handles",
      "Resistant to oil, grease, and cleaning chemicals",
      "Ideal for bathrooms, washrooms, kitchens, and industrial facilities"
    ]
  },

  // ==========================================
  // 4. PRACTICAL CLEANING COLLECTION (4 Official Lonetex Items)
  // ==========================================
  {
    id: "lon-pc-001",
    name: "Self Dryer",
    subtitle: "- Self Dryer",
    sku: "LTX-PC-SDR01",
    category: "Practical Cleaning",
    price: "Contact for price",
    inStock: true,
    image: "/products/practical/self-dryer.png",
    specs: [
      "Hands-Free Flat Mop & Bucket System",
      "Dual-Chamber Wash & Dry Slots",
      "360° Swivel Low-Profile Head",
      "Includes Super-Absorbent Microfiber Pads"
    ],
    description: "Commercial self-dryer dual-chamber wringer bucket system for effortless touchless washing, drying, and streak-free floor cleaning.",
    features: [
      "Dual chamber design keeps clean and dirty water separated",
      "Squeeze groove wrings mop pad dry with simple vertical strokes",
      "Low profile 360-degree swivel head glides under furniture",
      "Drainage plug at bucket bottom for easy water disposal"
    ]
  },
  {
    id: "lon-pc-002",
    name: "Self Wringing Mop",
    subtitle: "- Self-Wringing Mop",
    sku: "LTX-PC-SWR01",
    category: "Practical Cleaning",
    price: "Contact for price",
    inStock: true,
    image: "/products/practical/self-wringing-round.png",
    specs: [
      "Circular Twist-Action Wringer",
      "High-Density Microfiber Strands",
      "Ergonomic Hand Wringing Grip",
      "Available in Blue & Yellow Color Scheme"
    ],
    description: "Hands-free circular self-wringing twist mop designed for fast water extraction, maximum floor absorption, and splash-free cleaning.",
    features: [
      "Hand-twist ratchet mechanism squeezes mop head completely dry",
      "Dense looped microfiber yarn captures dust, grease, and hair",
      "Protective rubber bumper prevents furniture and baseboard scuffs",
      "Compact lightweight design for efficient janitorial use"
    ]
  },
  {
    id: "lon-pc-003",
    name: "Spray Mops",
    subtitle: "- Product",
    sku: "LTX-PC-SP750",
    category: "Practical Cleaning",
    price: "Contact for price",
    inStock: true,
    image: "/products/practical/spray-mop-green.png",
    specs: [
      "Refillable Solution Reservoir",
      "Ergonomic Trigger Mist Dispenser",
      "360° Swivel Aluminum Head",
      "Washable Reusable Microfiber Pad"
    ],
    description: "Commercial spray mop system with ergonomic trigger grip and fine mist nozzle for bucketless fast, efficient floor cleaning.",
    features: [
      "Fine mist spray nozzle gives uniform liquid coverage",
      "Ergonomic trigger handle reduces worker fatigue",
      "Reusable microfiber pad traps fine dirt, spills, and grease",
      "Lightweight aluminum pole ensures durability"
    ]
  },
  {
    id: "lon-pc-004",
    name: "Spin Mop Set",
    subtitle: "- Product",
    sku: "LTX-PC-SPIN01",
    category: "Practical Cleaning",
    price: "Contact for price",
    inStock: true,
    image: "/products/practical/spin-mop-blue.png",
    specs: [
      "Centrifugal Spin Dryer Basket",
      "Heavy Duty Blue Dual Bucket",
      "Telescopic Stainless Steel Handle",
      "Circular Microfiber Mop Head"
    ],
    description: "Industrial 360° spin mop set featuring a high-speed centrifugal wringer basket for rapid moisture extraction and hands-free cleaning.",
    features: [
      "Centrifugal spin basket provides fast moisture extraction",
      "Dual compartment bucket system with easy carry handle",
      "Soft microfibers safe on all tiles, polished marble, and hardwood",
      "Hands-free pump spin mechanism eliminates hand wringing"
    ]
  },

  // ==========================================
  // 5. FLAT MOPS COLLECTION (4 Official Lonetex Items)
  // ==========================================
  {
    id: "lon-fm-001",
    name: "Microfiber Dust Mop",
    subtitle: "- Dust/Flat Mops",
    sku: "LTX-FM-MDM01",
    category: "Flat Mops",
    price: "Contact for price",
    inStock: true,
    image: "/products/flat-mops/microfiber-dust-mop.png",
    specs: [
      "High-Density Electrostatic Microfiber Sleeve",
      "Reinforced Pocket / Backing Canvas",
      "Universal 60cm / 80cm Wire Frame Compatibility",
      "Color-Coded Blue Cleaning Edge"
    ],
    description: "Professional microfiber flat dust mop pad designed for electrostatic dust trapping, hospital floor sweeping, and dry dusting on polished hard floors.",
    features: [
      "Microfiber split filaments grab fine particles and hair without chemicals",
      "Durable polyester backing resists industrial laundry cycles",
      "Glides effortlessly across commercial tile, wood, and marble",
      "Compatible with folding wire and plastic mop frames"
    ]
  },
  {
    id: "lon-fm-002",
    name: "Dust Mop Acrylic",
    subtitle: "- Dust/Flat Mops",
    sku: "LTX-FM-DMA01",
    category: "Flat Mops",
    price: "Contact for price",
    inStock: true,
    image: "/products/flat-mops/dust-mop-acrylic.png",
    specs: [
      "100% Synthetic Acrylic Looped & Cut Fringe",
      "High Electrostatic Charge Generation",
      "Heavy-Duty Heavy Canvas Backing",
      "Available in Vibrant Red Color"
    ],
    description: "Commercial acrylic dust mop sleeve engineered to generate maximum electrostatic charge for collecting fine dust, dirt, and allergens on large hallway floors.",
    features: [
      "Natural electrostatic charge attracts and holds microscopic dust",
      "Fringed borders capture bulky debris and corners effectively",
      "Washable synthetic yarn dries quickly after laundering",
      "Double-stitched backing for extended institutional lifespan"
    ]
  },
  {
    id: "lon-fm-003",
    name: "Dust Mop Cotton",
    subtitle: "- Dust/Flat Mops",
    sku: "LTX-FM-DMC01",
    category: "Flat Mops",
    price: "Contact for price",
    inStock: true,
    image: "/products/flat-mops/dust-mop-cotton.png",
    specs: [
      "100% Premium Bleached/Natural Cotton Yarn",
      "High-Density Cut & Looped Fringe Construction",
      "Heavy Duty Tie / Slip-On Pocket Sleeve",
      "Natural Beige / Off-White Fiber"
    ],
    description: "Heavy-duty 100% cotton dust mop head designed for maximum absorption of dust control oil treatments, dry sweeping, and high-traffic corridor cleaning.",
    features: [
      "High-grade long-staple cotton yarn provides high dust capacity",
      "Excellent compatibility with oil-based and water-based duster sprays",
      "Dense yarn coverage leaves zero streaks or scratches",
      "Heavy-duty reinforced cotton canvas backing"
    ]
  },
  {
    id: "lon-fm-004",
    name: "Rayon Floor Dust Mop",
    subtitle: "- Dust/Flat Mops",
    sku: "LTX-FM-RFD01",
    category: "Flat Mops",
    price: "Contact for price",
    inStock: true,
    image: "/products/flat-mops/rayon-floor-dust-mop.png",
    specs: [
      "High-Sheen Rayon & Synthetic Blend",
      "Lint-Free Looped Yarn Construction",
      "Reinforced Slip-On Channel Backing",
      "Vibrant Green HACCP Color-Coded"
    ],
    description: "Industrial green rayon floor dust mop sleeve designed for lint-free sweeping, hospital operating room hygiene, and rapid large-area floor maintenance.",
    features: [
      "Lint-free rayon blend prevents loose fiber shedding in sterile areas",
      "Continuous looped fringe prevents yarn snagging on threshold strips",
      "Color-coded green for sanitation and cross-contamination control",
      "Fast-drying and resistant to mildew and bacterial growth"
    ]
  },

  // ==========================================
  // 6. CLEANING CLOTHS COLLECTION (3 Official Lonetex Items)
  // ==========================================
  {
    id: "lon-cl-001",
    name: "Kitchen Duster 50cm X 70cm",
    subtitle: "- Kitchen Duster",
    sku: "LTX-CL-KD5070",
    category: "Cloths",
    price: "Contact for price",
    inStock: true,
    image: "/products/cloths/kitchen-duster-50x70.png",
    specs: [
      "50cm × 70cm Large Commercial Size",
      "100% High-Absorption Pure Cotton Weave",
      "Woven Olive/Yellow Grid Pattern",
      "Lint-Free Kitchen & Glass Polishing"
    ],
    description: "Commercial 100% woven cotton kitchen duster towels designed for streak-free glassware polishing, restaurant food prep hygiene, and heavy wiping.",
    features: [
      "Durable natural cotton fibers absorb liquid rapidly",
      "Lint-free finish ideal for sparkling clean crystal and dishware",
      "Hemmed reinforced edges withstand hundreds of industrial launderings",
      "Generous 50x70cm dimension allows multi-fold wiping"
    ]
  },
  {
    id: "lon-cl-002",
    name: "Microfiber Towels",
    subtitle: "- Microfiber Towels",
    sku: "LTX-CL-MT4040",
    category: "Cloths",
    price: "Contact for price",
    inStock: true,
    image: "/products/cloths/microfiber-towels.png",
    specs: [
      "40cm × 40cm Multi-Surface Microfiber",
      "Ultra-Fine Split Fiber Technology",
      "4-Color Pack (Yellow, Blue, Green, Pink)",
      "Non-Abrasive Scratch-Free Polishing"
    ],
    description: "Premium commercial microfiber wiping towels designed for color-coded HACCP sanitation, automotive detailing, screen care, and streak-free dusting.",
    features: [
      "Electrostatically traps dust, grease, and finger smudges without harsh chemicals",
      "Color-coded 4-color assortment prevents cross-contamination across zones",
      "Safe on delicate lacquer, chrome, glass, mirrors, and stainless steel",
      "Machine washable up to 500 wash cycles"
    ]
  },
  {
    id: "lon-cl-003",
    name: "Kitchen Duster",
    subtitle: "- Kitchen Duster",
    sku: "LTX-CL-KDRED01",
    category: "Cloths",
    price: "Contact for price",
    inStock: true,
    image: "/products/cloths/kitchen-duster-red.png",
    specs: [
      "Classic Red & White Checked Cotton Weave",
      "High Heat & Chemical Resistance",
      "Fast-Drying Open Cotton Structure",
      "Heavy-Duty Countertop & Bar Spill Cleanup"
    ],
    description: "Traditional red-and-white checked commercial kitchen duster cloth crafted from 100% durable cotton for cafeteria counters, bar tops, and kitchen stations.",
    features: [
      "High absorption capacity handles hot grease and beverage spills",
      "Classic red-and-white check pattern resists color fading",
      "Reinforced overlocked edges prevent fraying",
      "Dries rapidly between service shifts"
    ]
  }
];

// Curated Collection Getters for Carousels
export function getBestSellingProducts() {
  return lonetexProducts.filter(p => 
    ["lon-bs-001", "lon-bs-002", "lon-bs-003", "lon-bs-004", "lon-bs-005", "lon-bs-006", "lon-bs-007", "lon-bs-008", "lon-bs-009", "lon-bs-010"].includes(p.id) ||
    (p.id && p.id.startsWith("lon-bs-"))
  );
}

export function getKentuckyMopsProducts() {
  return lonetexProducts.filter(p => p.category === "Kentucky Mops");
}

export function getAccessoriesProducts() {
  return lonetexProducts.filter(p => p.category === "Handles & Accessories");
}

export function getPracticalCleaningProducts() {
  return lonetexProducts.filter(p => p.category === "Practical Cleaning");
}

export function getFlatMopsProducts() {
  return lonetexProducts.filter(p => p.category === "Flat Mops" || p.category === "Dust/Flat Mops" || (p.id && p.id.startsWith("lon-fm-")));
}

export function getClothsProducts() {
  return lonetexProducts.filter(p => p.category === "Cloths" || p.category === "Cleaning Cloths" || (p.id && p.id.startsWith("lon-cl-")));
}

/**
 * WhatsApp Quote URL Generator Helper
 * Exact required format:
 * "Hello Lonetex, I would like to inquire about bulk wholesale pricing for [Product Name] (SKU: [SKU])."
 */
export function generateWhatsAppQuoteUrl(product, quantity = null) {
  if (!product) {
    return `https://wa.me/${LONETEX_COMPANY.whatsappNumber}`;
  }
  const name = product.name || 'Commercial Product';
  const sku = product.sku || 'N/A';
  let message = `Hello Lonetex, I would like to inquire about bulk wholesale pricing for ${name} (SKU: ${sku}).`;
  if (quantity && quantity > 1) {
    message += ` Estimated requirement: ${quantity} units.`;
  }
  return `https://wa.me/${LONETEX_COMPANY.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Multi-Item WhatsApp RFQ Dispatch Generator
 */
export function generateMultiItemWhatsAppUrl(items) {
  if (!items || !Array.isArray(items) || items.length === 0) {
    const defaultText = `Hello Lonetex, I would like to inquire about bulk wholesale pricing and your commercial cleaning catalog.`;
    return `https://wa.me/${LONETEX_COMPANY.whatsappNumber}?text=${encodeURIComponent(defaultText)}`;
  }

  let text = `Hello Lonetex, I would like to inquire about bulk wholesale pricing for the following items:%0A%0A`;
  
  items.forEach((item, index) => {
    if (item) {
      const name = item.name || 'Product';
      const sku = item.sku || 'N/A';
      const qty = item.quantity || 1;
      text += `${index + 1}. *${encodeURIComponent(name)}* (SKU: ${encodeURIComponent(sku)}) — Qty: ${qty} units%0A`;
    }
  });

  text += `%0APlease provide commercial price quotation and delivery timeframe. Thank you!`;
  return `https://wa.me/${LONETEX_COMPANY.whatsappNumber}?text=${text}`;
}
