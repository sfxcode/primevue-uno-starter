import { assert, expect, it, suite, test } from 'vitest'


test('Math.sqrt()', async() => {
  assert.equal(Math.sqrt(4), 2)
  assert.equal(Math.sqrt(2), Math.SQRT2)
  expect(Math.sqrt(144)).toStrictEqual(12)
  // await new Promise(resolve => setTimeout(resolve, 3000))
})

test('JSON', () => {
  const input = {
    foo: 'hello',
    bar: 'world',
  }

  const output = JSON.stringify(input)

  expect(input).toEqual({
    foo: 'hello',
    bar: 'world',
  })
  expect(output).toEqual('{"foo":"hello","bar":"world"}')
  assert.deepEqual(JSON.parse(output), input, 'matches original')
})

const hi = suite('suite')

hi.test('expect truthy', () => {
  expect({}).toBeTruthy()
  expect(null).not.toBeTruthy()
})

// Remove .skip to test async fail by timeout
test.skip('async with timeout', async() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 200)
  })
}, 100)

function callbackTest(name: string, doneValue: any) {
  let callbackAwaited = false

  it(`callback setup ${name}`, (done) => {
    setTimeout(() => {
      expect({}).toBeTruthy()
      callbackAwaited = true
      done(doneValue)
    }, 20)
  })

  it(`callback test ${name}`, () => {
    expect(callbackAwaited).toBe(true)
  })
}

callbackTest('success ', undefined)

callbackTest('success done(false)', false)
