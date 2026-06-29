export interface Product {
  id: number;
  category: string;
  subCategory?: string;
  name: string;
  fabric: string;
  gender: string;
  moq: string;
  image: string;
  tags: string[];
  note?: string;
}

export interface YarnProduct {
  id: number;
  name: string;
  composition: string;
  certification: string;
  moq: string;
  counts: string;
  image: string;
}

export interface FabricProduct {
  id: number;
  name: string;
  composition: string;
  construction: string;
  gsmRange: string;
  moq: string;
  image: string;
}

export const productCategories = [
  'All',
  'Mens Wear',
  'Womens Wear',
  'Sweater Knit',
  'Woven',
  'Accessories',
  'Kids Wear',
  'Inner Wear',
  'Home Textile',
];

export const fabricsList = [
  '100% Cotton',
  'Cotton Spandex',
  'Poly-Cotton',
  'Poly Cotton Rayon',
  'Poly Viscose Spandex',
  'Viscose Spandex',
  'Poly Cotton (CVC)',
  'Poly Spandex',
  'Modal Spandex',
  '100% Cotton Y/D Spandex',
  '100% Cotton Seer Sucker',
  'Cotton Modal',
];

export const fabricTypes = [
  'Single Jersey', 'Interlock', 'Auto Stripes', 'Single Rib', 'Double Rib',
  'Pointele', 'Airtex', 'Jacquard Designs', '2-Thread Fleece', '3-Thread Fleece',
];

export const clients = [
  'Rip Curl', 'Bonds', 'Sportsgirl', 'Walmart', 'Mothercare',
  'Rockbell', 'Max Fashion', 'VIP', 'Kittenish', 'UMM', 'RBS',
];

export const yarnProducts: YarnProduct[] = [
  {
    id: 1,
    name: 'Combed Cotton Yarn',
    composition: '100% Combed Cotton',
    certification: 'GOTS Certified',
    moq: '500 kg',
    counts: '20s / 30s / 40s Ne',
    image: 'https://readdy.ai/api/search-image?query=premium%20combed%20cotton%20yarn%20cones%20white%20natural%20cream%20color%20studio%20photography%20soft%20texture%20closeup%20clean%20minimal%20background%20textile%20raw%20material%20professional%20product%20photography&width=600&height=600&seq=yarn001&orientation=squarish',
  },
  {
    id: 2,
    name: 'Organic Cotton Yarn',
    composition: '100% Organic Cotton',
    certification: 'OCS Certified',
    moq: '500 kg',
    counts: '20s / 30s / 40s Ne',
    image: 'https://readdy.ai/api/search-image?query=organic%20cotton%20yarn%20skeins%20natural%20undyed%20ecru%20warm%20tone%20soft%20sustainable%20textile%20closeup%20clean%20white%20background%20product%20photography%20studio%20minimal%20premium%20quality%20material&width=600&height=600&seq=yarn002&orientation=squarish',
  },
  {
    id: 3,
    name: 'Cotton-Spandex Blended Yarn',
    composition: 'Cotton 95% / Spandex 5%',
    certification: 'REACH Compliant',
    moq: '500 kg',
    counts: '30s / 40s Ne',
    image: 'https://readdy.ai/api/search-image?query=blended%20cotton%20spandex%20yarn%20cones%20colorful%20grey%20charcoal%20tone%20textile%20manufacturing%20closeup%20soft%20texture%20clean%20minimal%20white%20background%20studio%20product%20photography%20premium%20quality&width=600&height=600&seq=yarn003&orientation=squarish',
  },
  {
    id: 4,
    name: 'Modal Yarn',
    composition: '100% Modal',
    certification: 'Oeko-Tex 100',
    moq: '300 kg',
    counts: '40s / 60s Ne',
    image: 'https://readdy.ai/api/search-image?query=modal%20yarn%20soft%20silky%20cones%20pale%20white%20grey%20luxury%20textile%20closeup%20smooth%20lustrous%20premium%20fiber%20studio%20photography%20clean%20background%20sustainable%20material%20natural%20tone%20product%20shot&width=600&height=600&seq=yarn004&orientation=squarish',
  },
];

export const fabricProducts: FabricProduct[] = [
  {
    id: 1,
    name: '100% Cotton Jersey',
    composition: '100% Combed Cotton',
    construction: 'Single Jersey',
    gsmRange: '140–220 GSM',
    moq: '200 kg',
    image: 'https://readdy.ai/api/search-image?query=cotton%20jersey%20fabric%20swatch%20closeup%20white%20natural%20texture%20knit%20detail%20clean%20studio%20photography%20neutral%20background%20premium%20textile%20quality%20material%20flat%20lay%20minimal%20professional&width=600&height=600&seq=fab001&orientation=squarish',
  },
  {
    id: 2,
    name: 'Cotton Spandex',
    composition: 'Cotton 95% / Spandex 5%',
    construction: 'Single Jersey Stretch',
    gsmRange: '160–240 GSM',
    moq: '200 kg',
    image: 'https://readdy.ai/api/search-image?query=cotton%20spandex%20stretch%20fabric%20swatch%20closeup%20texture%20stretch%20knit%20detail%20clean%20studio%20grey%20neutral%20background%20premium%20textile%20quality%20material%20flat%20lay%20minimal%20professional&width=600&height=600&seq=fab002&orientation=squarish',
  },
  {
    id: 3,
    name: 'Interlock',
    composition: '100% Cotton',
    construction: 'Double Jersey Interlock',
    gsmRange: '180–280 GSM',
    moq: '200 kg',
    image: 'https://readdy.ai/api/search-image?query=interlock%20fabric%20double%20knit%20closeup%20texture%20smooth%20firm%20white%20cotton%20premium%20quality%20textile%20swatch%20clean%20studio%20photography%20neutral%20background%20minimal%20professional%20flat%20lay&width=600&height=600&seq=fab003&orientation=squarish',
  },
  {
    id: 4,
    name: 'Rayon / Viscose',
    composition: '100% Rayon / Viscose',
    construction: 'Single Jersey',
    gsmRange: '120–180 GSM',
    moq: '200 kg',
    image: 'https://readdy.ai/api/search-image?query=rayon%20viscose%20fabric%20swatch%20soft%20silky%20drape%20closeup%20texture%20light%20weight%20fluid%20clean%20studio%20photography%20white%20neutral%20background%20premium%20textile%20product%20shot%20minimal%20flat%20lay&width=600&height=600&seq=fab004&orientation=squarish',
  },
  {
    id: 5,
    name: 'Modal Spandex',
    composition: 'Modal 95% / Spandex 5%',
    construction: 'Single Jersey Stretch',
    gsmRange: '140–200 GSM',
    moq: '200 kg',
    image: 'https://readdy.ai/api/search-image?query=modal%20spandex%20fabric%20swatch%20closeup%20soft%20silky%20stretch%20texture%20natural%20grey%20tone%20premium%20luxury%20textile%20clean%20studio%20photography%20neutral%20background%20flat%20lay%20minimal%20professional&width=600&height=600&seq=fab005&orientation=squarish',
  },
  {
    id: 6,
    name: 'Organic Cotton (GOTS)',
    composition: '100% Organic Cotton',
    construction: 'Single Jersey / Interlock',
    gsmRange: '140–220 GSM',
    moq: '200 kg',
    image: 'https://readdy.ai/api/search-image?query=organic%20cotton%20fabric%20swatch%20natural%20undyed%20ecru%20sustainable%20knit%20closeup%20texture%20soft%20clean%20studio%20photography%20white%20minimal%20neutral%20background%20premium%20eco%20textile%20product%20shot%20flat%20lay&width=600&height=600&seq=fab006&orientation=squarish',
  },
];

export const products: Product[] = [
  // Mens Wear
  { id: 1, category: 'Mens Wear', name: 'Polo T-Shirt', fabric: '100% Cotton', gender: 'Men', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/4ab81d23-7b08-4c5b-905e-ee82199e24d1_Men-1.webp?v=bb5181111c7ab99b7c9866bad37561ec', tags: ['Polo', 'Smart Casual'] },
  { id: 2, category: 'Mens Wear', name: 'Unisex Sweatshirt', fabric: '100% Cotton', gender: 'Men', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/4b00c5f3-2d81-4862-bef7-c7a34612e218_Men-2.webp?v=df5cbd3cc000db7249eeb89e2da628be', tags: ['Sweatshirt', 'Fleece'] },
  { id: 3, category: 'Mens Wear', name: 'AOP Shorts', fabric: 'Poly-Cotton', gender: 'Men', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/00bf72ec-eb1b-4e92-95a8-f993b84ecc4b_Men-3.webp?v=c141dff06df705660ed1fcc2e64ce446', tags: ['Shorts', 'Printed'] },
  { id: 4, category: 'Mens Wear', name: 'AOP T-Shirt', fabric: 'Poly-Cotton', gender: 'Men', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/57336e81-2850-492f-ac59-7d74191cdd4c_Men-4.webp?v=4793e182bffcbaa4f99447942ead9419', tags: ['T-Shirt', 'Printed'] },
  { id: 5, category: 'Mens Wear', name: 'PP Wash Crewneck', fabric: '100% Cotton', gender: 'Men', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/fc3338eb-a413-4517-9190-5df193c3f899_Men-5.webp?v=34d71dbc3c7cba7b0fe89c93a8260145', tags: ['T-Shirt', 'Crewneck'] },
  { id: 6, category: 'Mens Wear', name: 'Unisex Sweatshirt', fabric: '100% Cotton', gender: 'Men', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/ed5d963e-3b06-4f5c-acd3-a387a8b9eaa4_Men-6.webp?v=1c3083d5c710e955a9a681165ec02c39', tags: ['Sweatshirt', 'Fleece'] },
  // Mens Wear — NEW (from uploaded files) batch 1
  { id: 59, category: 'Mens Wear', name: 'Tie & Dye Unisex Sweatshirt', fabric: '100% Cotton', gender: 'Men', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/676c83e9-a70d-4b72-a354-874c81400301_Frame-1.webp', tags: ['Sweatshirt', 'Tie Dye', 'Unisex'] },
  { id: 60, category: 'Mens Wear', name: 'Optic Wash Crop Tee', fabric: '100% Cotton', gender: 'Men', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/6f8cd4e1-1c78-4ec3-8ea2-4d9727a54bb7_Frame-2.webp', tags: ['T-Shirt', 'Crop Tee', 'Optic Wash'] },
  { id: 61, category: 'Mens Wear', name: 'Logo Emb Unisex Joggers', fabric: '100% Cotton', gender: 'Men', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/e486d803-c1b9-4b46-bca3-519cedb81197_Frame-3.webp', tags: ['Joggers', 'Bottoms', 'Embroidery'] },
  { id: 62, category: 'Mens Wear', name: 'Chenille Embroidery L/S Crewneck', fabric: '100% Cotton', gender: 'Men', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/78967e10-5c6f-4a71-b9ec-0fa4c1ef5d45_Frame-4.webp', tags: ['Crewneck', 'Chenille', 'Long Sleeve'] },
  { id: 63, category: 'Mens Wear', name: 'AOP & Embroidery Sweatshirt with Hood', fabric: '100% Cotton', gender: 'Men', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/b9638189-01bf-4e72-aa49-a93de9225e24_Frame-5.webp', tags: ['Hoodie', 'AOP', 'Embroidery'] },
  // Mens Wear — NEW (from uploaded files) batch 2
  { id: 64, category: 'Mens Wear', name: 'Print & Emb Long Sleeve Crewneck with Hood', fabric: '100% Cotton', gender: 'Men', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/af7a2b1f-c0ff-470d-be68-fe69c981fc31_Frame-6.webp', tags: ['Crewneck', 'Hoodie', 'Print & Emb'] },
  { id: 65, category: 'Mens Wear', name: 'Burn Out Wash Unisex Sweatshirts', fabric: 'Poly Cotton', gender: 'Men', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/52293ead-f569-42c0-875a-732bf2012355_Frame-7.webp', tags: ['Sweatshirt', 'Burn Out', 'Unisex'] },
  { id: 66, category: 'Mens Wear', name: 'Print Crop Sweatshirts with Hood', fabric: '100% Cotton', gender: 'Men', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/5c851d50-0a3c-46b2-986c-a5fcf4d12029_Frame-8.webp', tags: ['Crop Sweatshirt', 'Hoodie', 'Print'] },
  { id: 67, category: 'Mens Wear', name: 'Tie & Dye Unisex Sweatshirt', fabric: '100% Cotton', gender: 'Men', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/1f228258-d182-44d1-9bab-2ccd77b7bb36_Frame-9.webp', tags: ['Sweatshirt', 'Tie Dye', 'Unisex'] },
  // Womens Wear — NEW (from uploaded files)
  { id: 68, category: 'Womens Wear', name: 'Pique Polo T-Shirt', fabric: '100% Cotton', gender: 'Women', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/77593b78-2b87-4305-8580-eeb7c313387a_Women-1.webp', tags: ['Polo', 'Pique', 'T-Shirt'] },
  { id: 69, category: 'Womens Wear', name: 'Women Rib Tank', fabric: 'Modal Spandex', gender: 'Women', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/60f43624-d058-49da-8ab0-b9393e493d86_Women-2.webp', tags: ['Tank', 'Rib', 'Women'] },
  { id: 70, category: 'Womens Wear', name: 'Women Tee', fabric: 'Poly Viscose Spandex', gender: 'Women', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/4ec71d4a-cdf9-4c87-b283-fad9813718c0_Women-3.webp', tags: ['Tee', 'Women', 'Striped'] },
  { id: 71, category: 'Womens Wear', name: 'Oversize Thermal Tee', fabric: '100% Cotton Y/D Spandex', gender: 'Women', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/ca560968-7ced-4801-b473-b78c161cb90e_Women-4.webp', tags: ['Thermal', 'Tee', 'Oversize', 'Y/D Spandex', 'Thermal Stripes'] },
  { id: 72, category: 'Womens Wear', name: 'Oversize Hood', fabric: 'Poly-Cotton', gender: 'Women', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/763897aa-7ca4-43c0-8bef-d167ec71a6f4_Women-5.webp', tags: ['Hood', 'Oversize', 'Hoodie'] },
  { id: 73, category: 'Womens Wear', name: 'Oversize Sweatshirt with Hood', fabric: '100% Cotton', gender: 'Women', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/f681b3fc-9074-4b02-b1ba-effaa3e57889_Women-6.webp', tags: ['Sweatshirt', 'Hood', 'Oversize'] },
  { id: 74, category: 'Womens Wear', name: 'Rugby Tee', fabric: 'Poly-Cotton', gender: 'Women', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/bb001000-41d4-43c3-90e5-f0cb9928e9ae_Women-7.webp', tags: ['Rugby', 'Tee', 'Striped'] },
  { id: 75, category: 'Womens Wear', name: 'Vintage Raglan Crew', fabric: '100% Cotton', gender: 'Women', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/95e9bae4-98c9-4f15-8c01-d110a2f20058_Women-8.webp', tags: ['Raglan', 'Crew', 'Vintage'] },
  { id: 76, category: 'Womens Wear', name: 'Terry PJ Set', fabric: 'Poly-Cotton', gender: 'Women', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/fd23c903-23ef-428b-80f3-8b70e3dfc281_Women-9.webp', tags: ['Terry', 'PJ Set', 'Lounge'] },
  { id: 77, category: 'Womens Wear', name: 'Bra & Biker Shorts', fabric: 'Modal Spandex', gender: 'Women', moq: '700 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/64cdab67-2df3-4f82-b216-2dc3d366c7cf_Women-10.webp', tags: ['Bra', 'Biker Shorts', 'Active'] },
  // Womens Wear — NEW batch 2 (from uploaded files)
  { id: 78, category: 'Womens Wear', name: 'Tie & Dye Women Resort Shorts', fabric: '100% Cotton', gender: 'Women', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/69554d9b-c1a6-4b8c-9168-d03f05353060_Frame-10.webp', tags: ['Shorts', 'Tie Dye', 'Resort'] },
  { id: 79, category: 'Womens Wear', name: 'Gold Lurex Tank Top', fabric: 'Poly Cotton Rayon', gender: 'Women', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/f879b132-ff1f-4568-a08b-5b431785cb77_Frame-11.webp', tags: ['Tank', 'Lurex', 'Gold'] },
  { id: 80, category: 'Womens Wear', name: 'Tie & Dye Rib Tank', fabric: 'Viscose Spandex', gender: 'Women', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/f3b93ae8-e7e8-4fac-b710-562e649b9f04_Frame-12.webp', tags: ['Tank', 'Tie Dye', 'Rib'] },
  { id: 81, category: 'Womens Wear', name: 'Womens Tank', fabric: 'Poly Spandex', gender: 'Women', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/862522b4-05c8-4fba-98fb-42806ca37f49_Frame-13.webp', tags: ['Tank', 'Cropped', 'Active'] },
  { id: 82, category: 'Womens Wear', name: 'Womens Tank', fabric: 'Poly Viscose Spandex', gender: 'Women', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/0c50916e-f2b7-4c1f-a64b-38aa8f8efee4_Frame-14.webp', tags: ['Tank', 'Cross Strap', 'Rib'] },
  { id: 83, category: 'Womens Wear', name: 'Womens Tank', fabric: 'Cotton Spandex', gender: 'Women', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/cc6f7a25-6814-497f-ad35-a1fa3d29b5cf_Frame-15.webp', tags: ['Tank', 'Sleeveless', 'Logo'] },
  { id: 84, category: 'Womens Wear', name: 'Crop Tee', fabric: 'Cotton Spandex', gender: 'Women', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/ea98dad5-84d1-4f74-af95-a2498aa1f1e6_Frame-16.webp', tags: ['Crop Tee', 'Short Sleeve', 'Print'] },
  { id: 85, category: 'Womens Wear', name: 'Terry Y/D Striped Shirt', fabric: '100% Cotton', gender: 'Women', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/3ae352f7-bbba-4948-b95e-8b177dc12396_Frame-17.webp', tags: ['Shirt', 'Terry', 'Y/D Striped', 'Polo'] },
  { id: 86, category: 'Womens Wear', name: 'Optic Wash Crop Tank', fabric: '100% Cotton', gender: 'Women', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/21287529-120c-4642-afd5-370837ae2d5a_Frame-18.webp', tags: ['Crop Tank', 'Optic Wash', 'Pineapple'] },
  { id: 87, category: 'Womens Wear', name: 'Womens Crop Tee With Discharge Print', fabric: '100% Cotton', gender: 'Women', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/d22ba67c-199a-4e1e-90d8-7b4e06c7be3e_Frame-19.webp', tags: ['Crop Tee', 'Discharge Print', 'Logo'] },
  // Womens Wear — NEW batch 3 (from uploaded files)
  { id: 88, category: 'Womens Wear', name: 'Striped Micro Shorts', fabric: '100% Cotton', gender: 'Women', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/5379d3c4-1f38-4c0f-9978-74afc9b613a2_Frame-20.webp', tags: ['Shorts', 'Striped', 'Micro'] },
  { id: 89, category: 'Womens Wear', name: 'V Neck Sweatshirt', fabric: 'Poly-Cotton', gender: 'Women', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/1eb2d257-1c93-493e-bf29-81fb56c9d787_Frame-22.webp', tags: ['Sweatshirt', 'V Neck', 'Grove'] },
  { id: 90, category: 'Womens Wear', name: 'Everyday Tank', fabric: 'Cotton Spandex', gender: 'Women', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/f447c739-cd96-4f16-a736-a3e929fd5fe1_Frame-23.webp', tags: ['Tank', 'Everyday', 'Rib'] },
  { id: 91, category: 'Womens Wear', name: 'Racer Back Tank', fabric: 'Cotton Spandex', gender: 'Women', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/2237a514-2d22-4efe-a2f5-8570d340002d_Frame-25.webp', tags: ['Tank', 'Racer Back', 'Contrast'] },
  { id: 92, category: 'Womens Wear', name: 'Daily Oversize Hoodie Garment Dyed', fabric: '100% Cotton', gender: 'Women', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/89861cb1-b850-4d50-96e4-b4d1313ec0b4_Frame-27.webp', tags: ['Hoodie', 'Oversize', 'Garment Dyed'] },
  { id: 93, category: 'Womens Wear', name: 'Biker Shorts', fabric: 'Modal Spandex', gender: 'Women', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/b1d390dd-f2ac-4555-a0b8-c6074b1214e0_Frame-29.webp', tags: ['Shorts', 'Biker', 'Active'] },
  { id: 94, category: 'Womens Wear', name: 'Garment Dyed With Enzyme Wash', fabric: '100% Cotton', gender: 'Women', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/f3aa4523-08e2-41e0-a50c-43423bc6e701_Frame-30.webp', tags: ['Sweatshirt', 'Garment Dyed', 'Enzyme Wash'] },
  { id: 95, category: 'Womens Wear', name: 'Classic Muscle Tank', fabric: 'Poly Viscose Spandex', gender: 'Women', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/ec2fc71f-5c06-4f80-b93a-60759e1e73c9_Frame-31.webp', tags: ['Tank', 'Muscle', 'Classic'] },
  { id: 96, category: 'Womens Wear', name: 'V Neck Sweatshirt', fabric: '100% Cotton', gender: 'Women', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/c39f87df-b9ec-4008-9a35-65d740c33e5b_Frame-32.webp', tags: ['Sweatshirt', 'V Neck', 'Grove'] },
  { id: 97, category: 'Womens Wear', name: 'Crop Boxy Tee', fabric: '100% Cotton', gender: 'Women', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/144f3129-0897-465d-b8e8-e8b891fb829b_Frame-33.webp', tags: ['Crop Tee', 'Boxy', 'Print'] },
  // Womens Wear — NEW batch 4 (from uploaded files)
  { id: 98, category: 'Womens Wear', name: 'Thermal Raglan Tee', fabric: 'Cotton Spandex', gender: 'Women', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/f6a8815c-c711-47b4-94f2-994233faf349_Frame-34.webp', tags: ['Raglan Tee', 'Thermal', 'Long Sleeve'] },
  { id: 99, category: 'Womens Wear', name: 'Striped Cotton Oversize Tee', fabric: 'Cotton Spandex', gender: 'Women', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/a03f9cc4-bbb0-4379-8d45-95fbc5847f03_Frame-35.webp', tags: ['Oversize Tee', 'Striped', 'Long Sleeve'] },
  { id: 100, category: 'Womens Wear', name: 'Striped CTN Resort Pant', fabric: 'Cotton Spandex', gender: 'Women', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/40d95f54-48dc-4db0-ad25-f093853add6e_Frame-36.webp', tags: ['Resort Pant', 'Striped', 'Relaxed'] },
  { id: 101, category: 'Womens Wear', name: 'Striped CTN Resort Shorts', fabric: 'Cotton Spandex', gender: 'Women', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/a83cb1e4-cd3f-4683-b82b-0596b07556b4_Frame-37.webp', tags: ['Resort Shorts', 'Striped', 'Relaxed'] },
  { id: 102, category: 'Womens Wear', name: 'Vacation Tee', fabric: '100% Cotton', gender: 'Women', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/689f24ed-e4ef-404a-894e-87b7ac779f4c_Frame-38.webp', tags: ['Tee', 'Vacation', 'Print'] },
  { id: 103, category: 'Womens Wear', name: 'Unisex Sweatshirt', fabric: '100% Cotton', gender: 'Women', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/79bd0f56-3c87-4e36-b15d-2b4e852b5979_Frame-39.webp', tags: ['Sweatshirt', 'Unisex', 'Ombre'] },
  { id: 104, category: 'Womens Wear', name: 'Oversize Hoodie with Emb Patches', fabric: '100% Cotton', gender: 'Women', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/2de9c244-a22c-4777-b178-e96411d6e939_Frame-40.webp', tags: ['Hoodie', 'Oversize', 'Emb Patches'] },
  { id: 105, category: 'Womens Wear', name: 'Striped CTN Everyday Tank', fabric: 'Cotton Spandex', gender: 'Women', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/2fae618d-1506-47fa-a9ce-08e1fb7d3e18_Frame-41.webp', tags: ['Tank', 'Everyday', 'Striped'] },
  { id: 106, category: 'Womens Wear', name: 'Rib Tank', fabric: 'Modal Spandex', gender: 'Women', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/5e1686e9-c40c-426c-b4f6-4988312c5828_Frame-42.webp', tags: ['Tank', 'Rib', 'Modal'] },
  { id: 107, category: 'Womens Wear', name: 'AOP Hoodie', fabric: '100% Cotton', gender: 'Women', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/a57a7d62-4266-47a5-bde0-e37d9fc0ae6a_Frame-43.webp', tags: ['Hoodie', 'AOP', 'Floral'] },
  // Kids Wear (NEW)
  { id: 108, category: 'Kids Wear', name: 'French Terry Overalls', fabric: '100% Cotton', gender: 'Kids', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/3ad88639-6548-47c9-9066-44e0703ef79b_Kids-1.webp', tags: ['Overalls', 'French Terry'] },
  { id: 109, category: 'Kids Wear', name: 'Zip Hoodie', fabric: '100% Cotton', gender: 'Kids', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/b7cb64b6-7d34-4809-8b97-d3cb125cb037_Kids-2.webp', tags: ['Hoodie', 'Zip'] },
  { id: 110, category: 'Kids Wear', name: 'Relaxed Fit Tshirt', fabric: '100% Cotton', gender: 'Kids', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/bb4d9cab-ca20-46d6-82ff-697f8fffa94c_Kids-3.webp', tags: ['T-Shirt', 'Relaxed Fit'] },
  { id: 111, category: 'Kids Wear', name: 'Striped Cotton Baby Set', fabric: 'Cotton Spandex', gender: 'Kids', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/1861ef72-d73f-4545-b013-d3ecbfcb4478_Kids-4.webp', tags: ['Baby Set', 'Striped', 'Cotton'] },
  { id: 112, category: 'Kids Wear', name: 'Striped Knit Sweater', fabric: '100% Cotton', gender: 'Kids', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/e647e63b-df07-4de9-8068-95cd43ae39ea_Kids-5.webp', tags: ['Sweater', 'Striped', 'Knit'] },
  { id: 113, category: 'Kids Wear', name: 'AOP Sleepsuit', fabric: '100% Cotton', gender: 'Kids', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/6997862e-0b38-4562-84c6-cf661245a20f_Kids-6.webp', tags: ['Sleepsuit', 'AOP'] },
  { id: 114, category: 'Kids Wear', name: 'Cotton Shorts', fabric: '100% Cotton', gender: 'Kids', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/b2b85337-9c47-4a23-94dd-1e0cc94ef64a_Kids-7.webp', tags: ['Shorts', 'Cotton'] },
  { id: 115, category: 'Kids Wear', name: 'Pajama Set', fabric: '100% Cotton', gender: 'Kids', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/6277cd6d-39e8-4d7f-beef-912c7dc6d9e5_Kids-8.webp', tags: ['Pajama Set', 'Sleepwear'] },
  { id: 116, category: 'Kids Wear', name: 'Sleepsack', fabric: '100% Cotton', gender: 'Kids', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/dd559f5d-f4ee-4e99-b3ff-631a41e8564a_Kids-9.webp', tags: ['Sleepsack', 'Sleepwear'] },
  { id: 117, category: 'Kids Wear', name: 'Sweatshirt & Jogger Set', fabric: '100% Cotton', gender: 'Kids', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/d9c2b0c1-b721-4921-a724-228dc297500f_Kids-10.webp', tags: ['Sweatshirt', 'Jogger', 'Set'] },
  // Inner Wear (NEW)
  { id: 118, category: 'Inner Wear', name: 'Vest / Singlet', fabric: '100% Cotton', gender: 'Men', moq: '1000 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/1fbb2dcd-2177-473e-bf40-708f37de5246_Others-1.webp', tags: ['Vest', 'Singlet', 'Men'] },
  { id: 119, category: 'Inner Wear', name: 'Boxer Brief', fabric: 'Poly Cotton (CVC)', gender: 'Men', moq: '1000 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/2fdbcf7e-74d2-4cbd-a724-d3ef17313e53_Others-2.webp', tags: ['Boxer', 'Brief', 'Men'] },
  { id: 120, category: 'Inner Wear', name: 'Brief', fabric: '100% Cotton', gender: 'Men', moq: '1000 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/a384cda7-a365-4e57-879f-50466eda70f1_Others-3.webp', tags: ['Brief', 'Men'] },
  { id: 121, category: 'Inner Wear', name: 'Undershirt', fabric: '100% Cotton', gender: 'Men', moq: '1000 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/cec855ed-89b8-4a2d-94f4-809df68e0bab_Others-4.webp', tags: ['Undershirt', 'Men'] },
  { id: 122, category: 'Inner Wear', name: 'Boxer Shorts', fabric: '100% Cotton', gender: 'Men', moq: '1000 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/6bfd2f17-f00d-474e-8c90-8459a889c320_Others-5.webp', tags: ['Boxer Shorts', 'Men'] },
  { id: 123, category: 'Inner Wear', name: 'Socks', fabric: '100% Cotton', gender: 'Unisex', moq: '1000 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/4249ea12-c83f-4d5e-885f-e5c7e8c9daf4_Others-6.webp', tags: ['Socks', 'Unisex'] },
  { id: 124, category: 'Inner Wear', name: 'Handkerchiefs', fabric: '100% Cotton', gender: 'Unisex', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/7f149be5-0abb-401d-b2c3-2a678a5607da_Others-8.webp', tags: ['Handkerchiefs', 'Unisex'] },
  // Home Textile (NEW)
  { id: 125, category: 'Home Textile', name: 'Cushions', fabric: '100% Cotton', gender: 'Home', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/7c7a5242-2554-497c-a4ea-ff1edafa4dae_Home-2.webp', tags: ['Cushions', 'Cushion Cover'] },
  { id: 126, category: 'Home Textile', name: 'Apron', fabric: '100% Cotton', gender: 'Home', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/5ba0edd5-4880-4309-a040-1afe622abe6a_Home-3.webp', tags: ['Apron', 'Kitchen'] },
  { id: 127, category: 'Home Textile', name: 'Runner', fabric: '100% Cotton', gender: 'Home', moq: '700 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/7e27097b-76bc-412a-93d1-45f573d7f263_Home-4.webp', tags: ['Runner', 'Table'] },
  { id: 128, category: 'Home Textile', name: 'Fouta Towels', fabric: '100% Cotton', gender: 'Home', moq: '700 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/72004657-bdf7-49d1-8dc3-0d7d751f6a8c_Home-5.webp', tags: ['Fouta Towels', 'Bath'] },
  { id: 129, category: 'Home Textile', name: 'Kitchen Towels, Pot Holders and Mitten Set', fabric: '100% Cotton', gender: 'Home', moq: '1000 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/368cd5d5-5c71-45e8-87cd-0a2677a5c6ce_Home-6.webp', tags: ['Kitchen Towels', 'Pot Holders', 'Aprons'] },
  { id: 130, category: 'Home Textile', name: 'Table Cloth', fabric: '100% Cotton', gender: 'Home', moq: '150 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/73152ed0-1cf2-438e-87c0-20cbec69e530_Home-7.webp', tags: ['Table Cloth', 'Dining'] },
  { id: 131, category: 'Home Textile', name: 'Kitchen and Table Linen', fabric: '100% Cotton', gender: 'Home', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/054bb004-f09e-45ad-830e-818fd563951e_Home-8.webp', tags: ['Kitchen Linen', 'Table Linen'] },
  { id: 132, category: 'Home Textile', name: 'Kitchen Towels', fabric: '100% Cotton', gender: 'Home', moq: '1000 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/30d23006-4b57-4202-a7b8-1b4363009398_Home-9.webp', tags: ['Kitchen Towels', 'Dining'] },
  // Sweater Knit (NEW)
  { id: 133, category: 'Sweater Knit', name: 'Full Zip Lined Sweater', fabric: '100% Cotton', gender: 'Unisex', moq: '250 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/311439ee-970d-4acc-827a-7a7189d8a5fb_Knit-1.webp', tags: ['Sweater', 'Full Zip', 'Lined'] },
  { id: 134, category: 'Sweater Knit', name: 'Crewneck', fabric: '100% Cotton', gender: 'Unisex', moq: '250 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/9ead9a3c-79a4-4c74-b59a-1d61452e85ec_Knit-2.webp', tags: ['Sweater', 'Crewneck', 'Knit'] },
  { id: 135, category: 'Sweater Knit', name: 'Cardigan', fabric: '100% Cotton', gender: 'Unisex', moq: '250 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/f84bb38b-98a5-4e67-9c2d-1976663a78c0_Knit-3.webp', tags: ['Sweater', 'Cardigan', 'Knit'] },
  { id: 136, category: 'Sweater Knit', name: 'Striped V Neck Sweater', fabric: '100% Cotton', gender: 'Unisex', moq: '250 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/82e7c851-ba94-4bab-9534-e27e06420ebe_Knit-4.webp', tags: ['Sweater', 'Striped', 'V Neck'] },
  { id: 137, category: 'Sweater Knit', name: 'Infinity Knit', fabric: '100% Cotton', gender: 'Unisex', moq: '250 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/dfeb58cf-0459-4e8e-a7c6-61c8bb686ba6_Knit-5.webp', tags: ['Sweater', 'Infinity Knit', 'Pattern'] },
  { id: 138, category: 'Sweater Knit', name: 'Winnie+Crew', fabric: '100% Cotton', gender: 'Unisex', moq: '250 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/7c8e709b-5f5d-46ae-941e-4c70e3e5d8a8_Knit-6.webp', tags: ['Sweater', 'Winnie+Crew', 'Set'] },
  { id: 139, category: 'Sweater Knit', name: 'Sweater Vest', fabric: '100% Cotton', gender: 'Unisex', moq: '250 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/9acfddd3-9e3b-458b-8a31-8c3301171925_Knit-7.webp', tags: ['Sweater', 'Vest', 'Sleeveless'] },
  // Woven (NEW)
  { id: 140, category: 'Woven', name: 'Y/D Striped Women Crop Shirts', fabric: '100% Cotton', gender: 'Women', moq: '1000 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/ef943da1-0783-4f5a-98a4-2e594c8a4f0e_Woven-1.webp', tags: ['Y/D Striped', 'Crop Shirt', 'Women'] },
  { id: 141, category: 'Woven', name: 'Y/D Striped Women Double Waist Resort Shorts', fabric: '100% Cotton', gender: 'Women', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/b5f1eb20-fd70-4ea9-80c5-f2e4f70c131f_Woven-2.webp', tags: ['Y/D Striped', 'Resort Shorts', 'Women'] },
  { id: 142, category: 'Woven', name: 'AOP Mens Beach Shirt', fabric: '100% Cotton', gender: 'Men', moq: '1000 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/8c429f46-030e-4fc7-a904-8f63976f8590_Woven-3.webp', tags: ['AOP', 'Beach Shirt', 'Men'] },
  { id: 143, category: 'Woven', name: 'AOP Mens Beach Shirt', fabric: '100% Cotton', gender: 'Men', moq: '1000 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/57683348-1d95-4939-921d-87a47c9bbfe2_Woven-4.webp', tags: ['AOP', 'Beach Shirt', 'Men'] },
  { id: 144, category: 'Woven', name: 'Women Resort Pant', fabric: '100% Cotton Seer Sucker', gender: 'Women', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/e552b127-5cfe-4ed5-a10f-fc9e65b638b9_Woven-5.webp', tags: ['Resort Pant', 'Women', 'Seer Sucker'] },
  { id: 145, category: 'Woven', name: 'AOP Women Crop Shirt with Shorts', fabric: 'Cotton Modal', gender: 'Women', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/22173fb4-9986-4116-b24d-648b0fd62a90_Woven-6.webp', tags: ['AOP', 'Crop Shirt', 'Shorts', 'Women'] },
  { id: 146, category: 'Woven', name: 'Women AOP PJ Set', fabric: 'Cotton Modal', gender: 'Women', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/f86256ba-65cb-4c0a-916f-4be1718f7ebf_Woven-7.webp', tags: ['AOP', 'PJ Set', 'Women'] },
  // Accessories (NEW)
  { id: 147, category: 'Accessories', name: 'Scrunchies 3 Pcs Pack', fabric: '100% Cotton', gender: 'Unisex', moq: '300 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/3d6d69f6-6826-4adf-a3f5-00f451c52566_Accessories-1.webp', tags: ['Scrunchies', 'Hair', 'Pack'] },
  { id: 148, category: 'Accessories', name: 'Woven Printed Towel with Bag', fabric: '100% Cotton', gender: 'Unisex', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/c323fb0c-4ee3-44ec-a089-caff7b21cb5b_Accessories-2.webp', tags: ['Woven', 'Towel', 'Bag', 'Printed'] },
  { id: 149, category: 'Accessories', name: 'Woven Bag', fabric: '100% Cotton', gender: 'Unisex', moq: '300 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/833fd0f8-6ec8-471c-9c12-1bab6ffead6a_Accessories-3.webp', tags: ['Woven', 'Bag', 'Drawstring'] },
  { id: 150, category: 'Accessories', name: 'Printed Scrunchies', fabric: '100% Cotton', gender: 'Unisex', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/a8ed3197-8a07-4332-9982-4c9d9eb02f17_Accessories-4.webp', tags: ['Scrunchies', 'Printed', 'Hair'] },
  { id: 151, category: 'Accessories', name: 'Printed Terry Beach Towel', fabric: '100% Cotton', gender: 'Unisex', moq: '1000 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/38e4c5f6-66e4-49d1-ad78-c609da317a24_Accessories-5.webp', tags: ['Terry', 'Beach Towel', 'Printed'] },
  { id: 152, category: 'Accessories', name: 'Quilted Terry Cloth Tote with Emb', fabric: '100% Cotton', gender: 'Unisex', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/efb87ac8-13ff-4758-924c-fa1f83beba23_Accessories-6.webp', tags: ['Quilted', 'Terry', 'Tote', 'Embroidery'] },
  { id: 153, category: 'Accessories', name: 'Quilted Terry', fabric: '100% Cotton', gender: 'Unisex', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/771a16d2-905b-4c36-ba28-1b0d7f422643_Accessories-7.webp', tags: ['Quilted', 'Terry', 'Tote'] },
  { id: 154, category: 'Accessories', name: 'Quilted Terry Towl Pouch', fabric: '100% Cotton', gender: 'Unisex', moq: '600 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/0c200d98-5e77-40ce-829a-bddf82e42f9a_Accessories-8.webp', tags: ['Quilted', 'Terry', 'Pouch', 'Towel'] },
  { id: 155, category: 'Accessories', name: 'Embroidery Patches', fabric: '100% Cotton', gender: 'Unisex', moq: '500 pcs', image: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/cf6a7f8b-c021-43cf-b608-38545bc0b266_Accessories-9.webp', tags: ['Embroidery', 'Patches', 'Decorative'] },
  // Fabrics (kept for Fabric tab)
  { id: 41, category: 'Fabrics', name: '100% Cotton Fabric', fabric: '100% Cotton', gender: 'All', moq: '200 kg', image: 'https://seyonfashions.com/images/fabrics1.jpg', tags: ['Cotton', 'Natural'] },
  { id: 42, category: 'Fabrics', name: 'Cotton Spandex Fabric', fabric: 'Cotton Spandex', gender: 'All', moq: '200 kg', image: 'https://seyonfashions.com/images/fabrics2.jpg', tags: ['Spandex', 'Stretch'] },
  { id: 43, category: 'Fabrics', name: 'Denim Fabric', fabric: 'Denim', gender: 'All', moq: '300 kg', image: 'https://seyonfashions.com/images/fabrics3.jpg', tags: ['Denim', 'Woven'] },
  { id: 44, category: 'Fabrics', name: 'Rayon Fabric', fabric: 'Rayon', gender: 'All', moq: '200 kg', image: 'https://seyonfashions.com/images/fabrics4.jpg', tags: ['Rayon', 'Soft'] },
  { id: 45, category: 'Fabrics', name: 'Modal Spandex Fabric', fabric: 'Modal Spandex', gender: 'All', moq: '200 kg', image: 'https://seyonfashions.com/images/fabrics5.jpg', tags: ['Modal', 'Stretch'] },
  { id: 46, category: 'Fabrics', name: 'Viscose Spandex Fabric', fabric: 'Viscose Spandex', gender: 'All', moq: '200 kg', image: 'https://seyonfashions.com/images/fabrics6.jpg', tags: ['Viscose', 'Blend'] },
  { id: 47, category: 'Fabrics', name: 'Interlock Fabric', fabric: '100% Cotton', gender: 'All', moq: '200 kg', image: 'https://seyonfashions.com/images/fabrics7.jpg', tags: ['Interlock', 'Knit'] },
  { id: 48, category: 'Fabrics', name: 'Jacquard Fabric', fabric: 'Poly-Cotton', gender: 'All', moq: '300 kg', image: 'https://seyonfashions.com/images/fabrics8.jpg', tags: ['Jacquard', 'Woven'] },
];