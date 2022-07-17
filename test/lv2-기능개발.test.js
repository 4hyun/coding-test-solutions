const fixtures = {
  caseOne: {
    args: [
      [93, 30, 55],
      [1, 30, 5],
    ],
    result: [2, 1],
  },
  caseTwo: {
    args: [
      [95, 90, 99, 99, 80, 99],
      [1, 1, 1, 1, 1, 1],
    ],
    result: [1, 3, 2],
  },
}

function solution(progresses, speeds) {
  const answer = []
  let dailyDeployCount = 0
  let totalDeployCount = 0
  const STATUS = {
    IN_PROGRESS: "IN_PROGRESS",
    READY: "READY",
    DEPLOYED: "DEPLOYED",
  }
  // init tasks
  const tasks = progresses.map((p, i) => [i, p, STATUS.IN_PROGRESS])
  const logDeployCounts = (dailyDeployCount) => {
    answer.push(dailyDeployCount)
    totalDeployCount += dailyDeployCount
  }
  const resetDailyDeployCount = () => (dailyDeployCount = 0)
  const incrDailyDeployCount = () => dailyDeployCount++
  const deploy = (task) => {
    task[2] = STATUS.DEPLOYED
    incrDailyDeployCount()
  }
  // update progresses daily
  while (totalDeployCount < progresses.length) {
    tasks.forEach((_, i, arr) => {
      // [0] i
      // [1] progress
      // [2] status
      let cur = arr[i]
      if (cur[1] === 100 && cur[2] === STATUS.DEPLOYED) return
      cur[1] = 100 - cur[1] < speeds[i] ? 100 : cur[1] + speeds[i]
      if (cur[1] === 100) cur[2] = STATUS.READY
    })
    // deploy READY progresses
    // update dailyDeployCount
    tasks.forEach((_, i, arr) => {
      // [0] i
      // [1] progress
      // [2] status
      let cur = arr[i]
      const prev = i > 0 ? arr[i - 1] : null
      // handle first task item (prev == null)
      if (prev == null) {
        cur[2] === STATUS.READY && deploy(cur)
        return
      }
      // handle all other task items
      if (cur[2] === STATUS.READY && prev[2] === STATUS.DEPLOYED) deploy(cur)
    })

    if (dailyDeployCount > 0) {
      // log dailyDeployCount
      logDeployCounts(dailyDeployCount)
      // reset dailyDeployCount
      resetDailyDeployCount()
    }
  }

  return answer
}

describe("lv2-기능개발", () => {
  it("Case One passes", () => {
    expect(solution(...fixtures.caseOne.args)).toStrictEqual(fixtures.caseOne.result)
  })

  it("Case Two passes", () => {
    expect(solution(...fixtures.caseTwo.args)).toStrictEqual(fixtures.caseTwo.result)
  })
})
