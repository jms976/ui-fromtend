export const fetch1Sec = async () => {
  await new Promise((r) => setTimeout(r, 1000));

  return { message: '1초 데이터' };
};
