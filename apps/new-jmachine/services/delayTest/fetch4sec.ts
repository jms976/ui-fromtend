export const fetch4Sec = async () => {
  await new Promise((r) => setTimeout(r, 4000));

  return { message: '4초 데이터' };
};
