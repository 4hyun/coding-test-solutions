const fixtures = {
  caseOne: {
    args: [
      ["classic", "pop", "classic", "classic", "pop"],
      [500, 600, 150, 800, 2500],
    ],
    result: [4, 1, 3, 0],
  },
}

function solution(genres, plays) {
  let answer = []
  let playedCountByGenreSorted
  const playsTotalByGenre = {}
  let songsByGenre = {}
  const countTotalGenrePlays = ([genre, plays, id], p = playsTotalByGenre) => (p[genre] ? (p[genre] += plays) : (p[genre] = plays))
  genres.forEach((genre, i) => {
    let song = [genre, plays[i], i]
    songsByGenre[genre] ? songsByGenre[genre].push(song) : (songsByGenre[genre] = [song])
    countTotalGenrePlays(song)
    return song
  })
  const compareGenreTotalFn = (a, b) => {
    if (a[1] > b[1]) return -1
    if (a[1] < b[1]) return 1
    if (a[1] == b[1] && a[0] > b[0]) return -1
    if (a[1] == b[1] && a[0] < b[0]) return 1
  }
  playedCountByGenreSorted = Object.entries(playsTotalByGenre).sort(compareGenreTotalFn)
  const compareSongPlaysFn = (a, b) => {
    if (a[1] > b[1]) return -1
    if (a[1] < b[1]) return 1
    if (a[1] == b[1] && a[2] > b[2]) return 1
    if (a[1] == b[1] && a[2] < b[2]) return -1
  }
  for (let genre in songsByGenre) {
    songsByGenre[genre].sort(compareSongPlaysFn)
  }

  playedCountByGenreSorted.forEach(([genre, total]) => {
    songsByGenre[genre].slice(0, 2).forEach((song) => answer.push(song[2]))
  })
  return answer
}

describe("lv3-베스트앨범", () => {
  it("Case One passes", () => {
    expect(solution(...fixtures.caseOne.args)).toStrictEqual(fixtures.caseOne.result)
  })
})
