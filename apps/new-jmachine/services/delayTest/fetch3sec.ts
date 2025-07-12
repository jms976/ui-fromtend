export const fetch3Sec = async () => {
  await new Promise((r) => setTimeout(r, 3000));

  return { message: '3초 데이터' };
};
