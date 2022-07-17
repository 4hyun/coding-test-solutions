const fixtures = {
  caseOne: {
    args: [
      ["leo", "kiki", "eden"],
      ["eden", "kiki"],
    ],
    result: "leo",
  },
  caseTwo: {
    args: [
      ["marina", "josipa", "nikola", "vinko", "filipa"],
      ["josipa", "filipa", "marina", "nikola"],
    ],
    result: "vinko",
  },
  caseThree: {
    args: [
      ["mislav", "stanko", "mislav", "ana"],
      ["stanko", "ana", "mislav"],
    ],
    result: "mislav",
  },
}

function solution(participant, completion) {
  participant.sort()
  completion.sort()
  let answer
  for (let i = 0; i <= completion.length; i++) {
    const curP = participant[i]
    const curC = completion[i]
    if (curP === curC) continue
    if (curP !== curC) {
      answer = curP
      break
    }
  }
  // if not answer, answer is last participant
  if (!answer) answer = participant.pop()
  return answer
}

describe("lv1-완주하지-못한-선수", () => {
  it("Case One passes", () => {
    expect(solution(...fixtures.caseOne.args)).toStrictEqual(fixtures.caseOne.result)
  })

  it("Case Two passes", () => {
    expect(solution(...fixtures.caseTwo.args)).toStrictEqual(fixtures.caseTwo.result)
  })
  it("Case Three passes", () => {
    expect(solution(...fixtures.caseThree.args)).toStrictEqual(fixtures.caseThree.result)
  })
})
