import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import CapHero from './components/CapHero';
import ProductionStage from './components/ProductionStage';
import SupplyChainSection from './components/SupplyChainSection';
import LabSection from './components/LabSection';
import CapCTA from './components/CapCTA';
import LeadTimeSection from './components/LeadTimeSection';
import FooterCTA from '../home/components/FooterCTA';

const stages = [
  {
    number: '01',
    title: 'Sampling & Design',
    subtitle: 'From concept to creation — New York to Tiruppur.',
    description: 'Our multi-category fashion, textile, and digital designers bring extensive experience in creating bespoke products, driving innovation, and providing the latest global trend insights. With offices in New York, we work closely with clients to understand their unique needs and deliver customized solutions. Acting as an extension of their design teams, we collaborate to create products and stories that resonate with their target customers.',
    specs: [
      { label: 'Design Office', value: 'New York' },
      { label: 'Proto Turnaround', value: '7 Days' },
      { label: 'Design Services', value: '3D & Graphics' },
      { label: 'Tech Pack Support', value: 'Full Service' },
    ],
    imageUrl: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/32457a73-6d5f-470c-9024-da4c4f7a661a_Sampling--Design.webp',
    imageAlt: 'Sampling and design studio',
    reverse: false,
    subTypes: [
      { name: 'Trend Intelligence', desc: 'Season-forward trend research and global market insights delivered directly from our New York design hub.' },
      { name: '3D Prototyping & Graphics', desc: 'Digital garment visualisation, graphic design, and 3D prototyping to accelerate sign-off and reduce physical sample rounds.' },
      { name: 'Tech Pack & Pattern Making', desc: 'End-to-end tech pack creation, pattern development, and spec sheets to ensure seamless hand-off to production.' },
    ],
    notes: ['New York Design Office', '3D Digital Prototyping', 'Full Tech Pack Support', 'Custom Sampling Service', 'Trend Intelligence', 'Pattern Making'],
  },
  {
    number: '02',
    title: 'Spinning & Raw Material',
    subtitle: 'Traceability from fibre to garment.',
    description: 'The process begins at the fibre level. We source premium combed and carded cotton yarn from GOTS and OCS certified spinning partners, ensuring every garment starts with consistent, traceable raw material. Full chain-of-custody documentation is maintained for all certified organic orders — from farm to finished garment. We source cotton and cotton blended fabrics such as Poly cotton, Cotton viscose, Modal and other Rayon varieties with certified suppliers who adhere to high quality standards and meet audits.',
    specs: [
      { label: 'Yarn Certification', value: 'GOTS / OCS' },
      { label: 'Traceability', value: 'Full CoC' },
      { label: 'Cotton Type', value: 'Combed & Carded' },
      { label: 'Partner Audited', value: 'Yes' },
    ],
    imageUrl: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/d1fbfcac-8047-4661-846b-4c0887a3e0f1_Spinning--Raw-Material.webp',
    imageAlt: 'Premium raw cotton and natural fibers',
    reverse: true,
    notes: ['GOTS Certified', 'GRS Certified', 'RCS Certified', 'CMIA Certified', 'SUPIMA Cotton', 'GIZA Cotton', 'Suvin Cotton', 'Rayon Blends'],
  },
  {
    number: '03',
    title: 'Yarn & Knitting',
    subtitle: 'The foundation of every great garment.',
    description: 'We source premium combed and carded yarns — cotton, bamboo, modal, blends — from certified mills. Our 48 circular knitting machines produce jersey, rib, interlock, piqué, and custom-engineered fabrics at 50,000 kg monthly capacity. We work with trusted and audited fabric mills and yarn partners to supply technically advanced, consistent-quality fabric. Every lot is lab-tested for critical parameters such as GSM, Shrinkage, Dimensional Stability, and Colour Fastness before they can move to the next process.',
    specs: [
      { label: 'Knitting Machines', value: '48 Units' },
      { label: 'Monthly Capacity', value: '50,000 kg' },
      { label: 'Yarn Types', value: '20+' },
      { label: 'GSM Range', value: '80–600' },
    ],
    imageUrl: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/f4fa3565-cf12-4ecb-9d8b-8977806cf24d_Yarn--Knitting.webp',
    imageAlt: 'Yarn and knitting facility',
    reverse: false,
  },
  {
    number: '04',
    title: 'Dyeing & Processing',
    subtitle: 'Colour precision. Zero compromise.',
    description: 'Our in-house dyeing unit processes 10,000 kg of fabric per day with zero liquid discharge (ZLD) technology. Our expert colourists achieve precise Pantone and custom colour matching across reactive, pigment, and vat dyes. All chemicals are REACH and Oeko-Tex 100 certified — safe for global retail. Every dye batch meets ZDHC MRSL compliant chemistry standards and our process is Higg Index certified through partners.',
    specs: [
      { label: 'Daily Capacity', value: '10,000 kg' },
      { label: 'Dye Ranges', value: '100+ Colours' },
      { label: 'Water Recycled', value: '95%' },
      { label: 'ZLD Compliance', value: '100%' },
    ],
    imageUrl: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/3bfb7ba0-6499-4185-ac04-3f42f1a22ca8_Dyeing--Processing.webp',
    imageAlt: 'Fabric dyeing process',
    reverse: true,
    notes: ['ZDHC MRSL Compliant Dye Chemistry', 'Higg Index Certified Process', 'Zero Liquid Discharge', 'Delta E Values for Colour Matching'],
  },
  {
    number: '05',
    title: 'Cutting & CAD',
    subtitle: 'Precision from pattern to panel.',
    description: 'Our CAD-driven auto-spreading and cutting systems minimise fabric waste to under 8%. With digitised pattern-making and marker planning, we achieve exact replication across bulk runs. Automated spreading machines handle 200 layers per cut, enabling high-speed accurate cutting for all order sizes. We also cut smaller batches for specialised wash programs, engineered stripe fabrics, and high-end specialty fabrics — ensuring precision no matter the scale or complexity.',
    specs: [
      { label: 'Auto-Spreading Lines', value: '6 Lines' },
      { label: 'Layers Per Cut', value: '200 Max' },
      { label: 'Fabric Wastage', value: '< 8%' },
      { label: 'Batch Flexibility', value: 'Bulk & Small' },
    ],
    imageUrl: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/93b3d516-b38c-4724-a88e-d7f6c9e9d62d_Cutting--CAD.webp',
    imageAlt: 'Cutting and CAD facility',
    reverse: false,
  },
  {
    number: '06',
    title: 'Stitching & Assembly',
    subtitle: '15+ flexible lines. Craftsmanship first.',
    description: 'Our stitching floor runs 400+ industrial machines across flat-lock, over-lock, chain-stitch, and bartack operations. With 15+ assembly lines configured per style, our setup is highly flexible to accommodate minimal MOQs without compromise. Output varies by styling and fabric complexity — high-fashion pieces demand greater workmanship, and we embrace that. We focus on craftsmanship for high-end garments, never a rush job. Strict inline QC is embedded at every single stage of production, from the first stitch to the final seam. Our sewing floor is Sedex certified, meeting the strictest global social compliance requirements.',
    specs: [
      { label: 'Sewing Machines', value: '400+' },
      { label: 'Assembly Lines', value: '15+ Lines' },
      { label: 'MOQ Flexibility', value: 'Minimal MOQ' },
      { label: 'Stitch Types', value: '12+' },
    ],
    imageUrl: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/61596b47-e6e3-470f-a417-90b4566a0b2b_Stitching--Assembly.webp',
    imageAlt: 'Premium garment craftsmanship and stitching',
    reverse: true,
    notes: ['Sedex Certified', 'WRAP Certified', 'Minimal MOQ Capable', 'Strict Inline QC at Every Stage', 'Data Driven Systems', 'Flexible Line Planning'],
  },
  {
    number: '07',
    title: 'Embellishments',
    subtitle: 'Details that elevate. Finishes that impress.',
    description: 'Our in-house embellishment unit is equipped for the full range of print and embroidery techniques — bringing creative vision to life at every scale. From high-volume rotary runs to intricate hand-crafted detailing, we execute with precision and a commitment to colourfast, peel-resistant, wash-tested quality that meets the strictest global retail standards.',
    specs: [
      { label: 'Print Techniques', value: '6+ Methods' },
      { label: 'Embroidery Types', value: '4+ Styles' },
      { label: 'Decorative Arts', value: 'Multi-craft' },
      { label: 'Wash Tests', value: '50+ Cycles' },
    ],
    subTypes: [
      { name: 'Print Techniques', desc: 'Rotary, Placement & Digital printing — using Reactive, Discharge, Burnout, Glitter, Flock, Foil, and more — tailored to design intent and fabric type.' },
      { name: 'Embroidery Techniques', desc: 'Chenille, HD Embroidery, Sequin/Sequence, and Appliqué — each technique selected to match the garment\'s aesthetic and construction requirements.' },
      { name: 'Decorative Craft & Trims', desc: 'Rhinestone works, Hand Embroidery, Special Mock Stitches, and Lace applications — bringing artisan-level detail to high-end garments.' },
    ],
    imageUrl: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/ba31879c-68e8-48aa-9f67-8af0be372116_Embellishments.webp',
    imageAlt: 'Embellishments and printing',
    reverse: false,
  },
  {
    number: '08',
    title: 'Washing & Garment Dyeing',
    subtitle: '16+ wash types. Colour. Texture. Finish. Perfected.',
    description: 'We bring deep expertise in both garment washing and garment dyeing — two specialisations that define the final look and feel of every piece. Our garment dyeing capabilities cover Reactive, Pigment, and Lave dye processes, delivering rich, consistent colour from inside out. For washes, we offer a full spectrum of soft and specialty wash treatments as per buyer requirements — including Enzyme Wash, Stone Wash, Acid Wash, PP Spray, Optic Wash, Burnout Wash, and more. Every wash recipe is crafted by experienced technicians to achieve the exact hand-feel, visual effect, and finish the buyer specifies. Water is treated and reused through our ZLD-compliant system, ensuring chemical safety at every step.',
    specs: [
      { label: 'Wash Types', value: '16+' },
      { label: 'Garment Dyeing', value: 'Reactive / Pigment / Lave' },
      { label: 'ZLD Compliance', value: '100%' },
      { label: 'Chemical Safety', value: 'ZDHC' },
    ],
    subTypes: [
      { name: 'Garment Dyeing', desc: 'Reactive, Pigment, and Lave dye processes for full garment colour application — achieving uniform, vibrant results even on complex constructions.' },
      { name: 'Soft & Specialty Washes', desc: 'Enzyme Wash, Stone Wash, Acid Wash, PP Spray, Optic Wash, and Burnout Wash — each tailored to buyer specifications for unique hand-feel and visual effects.' },
      { name: 'ZLD Water Treatment', desc: 'Zero liquid discharge technology ensures all wash water is treated, recycled, and re-used — reducing freshwater consumption and chemical load on every cycle.' },
    ],
    imageUrl: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/8c903a87-6d81-4a6e-8978-1fc7db00d004_Washing--Garment-Dyeing.webp',
    imageAlt: 'Garment washing and dyeing facility',
    reverse: true,
    notes: ['Reactive Dyeing', 'Pigment Dyeing', 'Lave Dye Process', 'Enzyme & Stone Wash', 'Acid & PP Spray Wash', 'Optic & Burnout Wash', 'ZLD Compliant', 'ZDHC Chemical Safety', 'Water Recycling'],
  },
  {
    number: '09',
    title: 'Finishing & QC',
    subtitle: 'Export-ready. Uncompromising quality at every level.',
    description: 'The final stage is where we obsess over details. Steam pressing, tunnelling, folding, tagging, and export packing — all executed to buyer-specific standards. Our standard QC protocol operates at AQL 2.5, but we go further when buyers demand it — offering AQL 1.5 tightened inspection and full 100% garment-on-garment inspection for collections requiring zero tolerance. We are confident and transparent about the quality standards we uphold, and our track record speaks for itself. Shipping documentation, compliance certificates, and test reports are included with every order.',
    specs: [
      { label: 'Standard QC', value: 'AQL 2.5' },
      { label: 'Tightened QC', value: 'AQL 1.5' },
      { label: 'Premium Option', value: '100% G-on-G' },
      { label: 'Defect Rate', value: '< 0.5%' },
    ],
    subTypes: [
      { name: 'AQL 2.5 — Standard Inspection', desc: 'Our default inspection level for all orders — statistically robust sampling that meets global retail and brand requirements with confidence.' },
      { name: 'AQL 1.5 — Tightened Inspection', desc: 'A stricter sampling protocol applied on buyer request — ideal for premium collections, high-value orders, or first-time production runs.' },
      { name: '100% Garment-on-Garment Inspection', desc: 'Full piece-by-piece inspection for the most demanding buyers — every garment checked individually before packing. Zero tolerance, total transparency.' },
    ],
    imageUrl: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/fb0d5948-a3ad-4989-b1e7-bb441641a56e_Finishing--QC.webp',
    imageAlt: 'Finishing and quality control',
    reverse: false,
  },
];

const CapabilitiesPage = () => (
  <div style={{ background: 'var(--c-bg)', minHeight: '100vh', transition: 'background 0.4s ease' }}>
    <Navbar />
    <main>
      <CapHero />
      <LeadTimeSection />
      {stages.map((stage) => (
        <ProductionStage key={stage.number} {...stage} />
      ))}
      <SupplyChainSection />
      <LabSection />
      <CapCTA />
      <FooterCTA />
    </main>
    <Footer />
  </div>
);

export default CapabilitiesPage;
