export const fetchList = async () => {
  return new Promise((resolve, _) => {
    resolve([
      {
        id: 1,
        content: "밥먹기",
      },
      {
        id: 2,
        content: "책읽기",
      },
    ]);
  });
};
