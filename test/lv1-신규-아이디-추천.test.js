const fixtures = {
  caseOne: { args: "...!@BaT#*..y.abcdefghijklm", result: "bat.y.abcdefghi" },
  caseTwo: { args: "z-+.^.", result: "z--" },
  caseThree: { args: "=.=", result: "aaa" },
  caseFour: { args: "123_.def", result: "123_.def" },
  caseFive: { args: "abcdefghijklmn.p", result: "abcdefghijklmn" },
}

const solution = (new_id) => {
  let result = []
  const upperCaseRegex = /[A-Z]/g
  const lowerCaseRegex = /[a-z]/g
  const exploded = new_id.split("")

  exploded.forEach((char) => {
    let filteredChar = char
    if (!!char.match(upperCaseRegex)) {
      filteredChar = filteredChar.toLowerCase()
    }
    if (!filteredChar.match(lowerCaseRegex) && !(Number.isSafeInteger(parseInt(char)) || char === "-" || char === "_" || char === ".")) {
      filteredChar = null
    }
    if (filteredChar !== null) result.push(filteredChar)
  })

  const TWO_OR_MORE_PERIODS_REGEX = /(\.\.+)/g
  result = result.join("").replace(TWO_OR_MORE_PERIODS_REGEX, ".")

  let sliceStart = 0
  let sliceEnd = result.length
  if (result.charAt(0) === ".") sliceStart = 1
  if (result.charAt(result.length - 1) === ".") sliceEnd = result.length - 1
  result = result.slice(sliceStart, sliceEnd)

  if (result.length === 0) {
    result += "a"
  }
  if (result.length >= 16) {
    result = result.slice(0, 15)
  }
  if (result[result.length - 1] === ".") {
    result = result.slice(0, result.length - 1)
  }
  if (result.length <= 2) {
    const endChar = result[result.length - 1]
    while (result.length < 3) result += endChar
  }
  return result
}

describe("lv1-신규-아이디-추천", () => {
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
