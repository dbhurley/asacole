// Vox Petra merch v2: mockups in public/merch/v2, linked to live Fourthwall products.
export type MerchItem = { slug: string; title: string; kind: string; image: string; width: number; height: number; href: string };

export const MERCH_ARTIST = "Asa Cole";
export const MERCH_HEADING = "Wear the road home.";
export const MERCH_SHOP_URL = "https://vox-petra-shop.fourthwall.com/collections/all";

export const merchItems: MerchItem[] = [
  {
    "slug": "asa-cole-dust-and-breath-tee",
    "title": "Dust and Breath Tee",
    "kind": "Tee",
    "image": "/merch/v2/asa-cole-dust-and-breath-tee.jpg",
    "width": 900,
    "height": 900,
    "href": "https://vox-petra-shop.fourthwall.com/products/asa-cole-dust-and-breath-tee"
  },
  {
    "slug": "asa-cole-hither-road-tee",
    "title": "Hither Road Tee",
    "kind": "Tee",
    "image": "/merch/v2/asa-cole-hither-road-tee.jpg",
    "width": 900,
    "height": 900,
    "href": "https://vox-petra-shop.fourthwall.com/products/asa-cole-hither-road-tee"
  }
];
