export { shuffle, scoreCheck };

function shuffle(array) {
  let arr = [...array];
  let currentIndex = arr.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }
  return arr;
}

const scoreCheck = (
  pokemon,
  selectedArr,
  setScore,
  setBestScore,
  setSelected
) => {
  const selected = selectedArr.find((element) => element == pokemon);
  const score = selectedArr.length;
  if (selected) {
    setScore(0);
    setBestScore((prev) => {
      return score > prev ? score : prev;
    });
    setSelected([]);
  } else {
    setScore((prevScore) => prevScore + 1);
  }
};
