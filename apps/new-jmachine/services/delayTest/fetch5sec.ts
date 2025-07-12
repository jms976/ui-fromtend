export const fetch5Sec = async () => {
  await new Promise((r) => setTimeout(r, 5000));

  return { message: '5초 데이터' };
};
