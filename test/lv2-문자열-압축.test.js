const fixtures = {
  caseOne: { args: ["aabbaccc"], result: 7 },
  caseTwo: { args: ["ababcdcdababcdcd"], result: 9 },
  caseThree: { args: ["abcabcdede"], result: 8 },
  caseFour: { args: ["abcabcabcabcdededededede"], result: 14 },
  caseFive: { args: ["xababcdcdababcdcd"], result: 17 },
}

const solution = () => {
  let result
  return result
}

describe("lv2-문자열-압축", () => {
  it("Case One passes", () => {
    expect(solution(fixtures.caseOne.args)).toBe(fixtures.caseOne.result)
  })

  it("Case Two passes", () => {
    expect(solution(fixtures.caseTwo.args)).toBe(fixtures.caseTwo.result)
  })

  it("Case Three passes", () => {
    expect(solution(fixtures.caseThree.args)).toBe(fixtures.caseThree.result)
  })

  it("Case Four passes", () => {
    expect(solution(fixtures.caseFour.args)).toBe(fixtures.caseFour.result)
  })

  it("Case Five passes", () => {
    expect(solution(fixtures.caseFive.args)).toBe(fixtures.caseFive.result)
  })
})
