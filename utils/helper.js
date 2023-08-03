export const getDiscountedPricePercentage = (
  originalPrice,
  discountedPrice
) => {
  const discount = originalPrice - discountedPrice;

  const discountedPercentage = (discount / originalPrice) * 100;

  return discountedPercentage.toFixed(0);
};
