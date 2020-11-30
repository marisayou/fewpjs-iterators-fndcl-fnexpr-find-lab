const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  const win = record.find(function(entry) {
    return entry.result === "W"
  })
  return win ? win.year : undefined
}
