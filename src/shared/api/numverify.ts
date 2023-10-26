export const checkPhone = async (phone: string) => {
  return await fetch(`${ import.meta.env.VITE_NUMVERIFY_API }&number=+7${ phone }`).then(res => res.json());
};