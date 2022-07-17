const fixtures = {
  caseOne: {
    args: [
      6,
      [
        [3, 6],
        [4, 3],
        [3, 2],
        [1, 3],
        [1, 2],
        [2, 4],
        [5, 2],
      ],
    ],
    result: 3,
  },
}

function solution(n, graph) {
  let answer = 0
  let dist = 0
  const root = 1
  const distFromRootByNode = { [root]: (() => dist)() }
  const nodesByDistFromRoot = { [dist]: [root] }
  const nodes = Array.from({ length: n }, (v, i) => i + 1)
  const touched = new Set([root])
  const adjacencyList = new Map()
  init()

  const queue = [root]
  while (queue.length > 0) {
    const currentNode = queue.shift()
    const connectedNodes = adjacencyList.get(currentNode)
    for (const node of connectedNodes) {
      if (!touched.has(node)) {
        setDist(distFromRootByNode[currentNode] + 1)
        logNodeDist(node, dist)
        touchNode(node)
        queue.push(node)
      }
    }
  }

  function init() {
    nodes.forEach(addNode)
    graph.forEach((edge) => addEdge(...edge))
  }
  function addNode(node) {
    addNode(node)
  }
  function logNodeDist(node, dist) {
    distFromRootByNode[node] = dist
    if (!(dist in nodesByDistFromRoot)) {
      nodesByDistFromRoot[dist] = []
    }
    nodesByDistFromRoot[dist].push(node)
  }
  function addNode(node) {
    adjacencyList.set(node, [])
  }
  function addEdge(lnode, rnode) {
    adjacencyList.get(lnode).push(rnode)
    adjacencyList.get(rnode).push(lnode)
  }
  function touchNode(node) {
    touched.add(node)
  }
  function setDist(currentDist) {
    dist = currentDist
  }
  answer = nodesByDistFromRoot[dist].length
  return answer
}

describe("lv3-가장-먼-노드", () => {
  it("Case One passes", () => {
    expect(solution(...fixtures.caseOne.args)).toStrictEqual(fixtures.caseOne.result)
  })
})
