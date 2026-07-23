export const websiteQuery = `
*[_type=="websiteSettings"][0]
`;

export const roomsQuery = `
*[_type == "room"] | order(displayOrder asc) {
  _id,
  title,
  price,
  description,
  images,
  features,
  available,
  featured
}
`;

export const galleryQuery = `
*[_type=="gallery"] | order(displayOrder asc)
`;

export const reviewsQuery = `
*[_type=="review"] | order(displayOrder asc)
`;
