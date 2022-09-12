import { fetch } from "../../lib/adapters/01"
import { expectSupported } from "../support/tokens"

test("fetches the 01 rates", async () => {
  const rates = await fetch()

  expect(rates.protocol).toBe("01")
  expect(rates.rates.length).toBeTruthy()

  expect(rates.rates.find(({ token }) => token.symbol === "SOL")).toBeDefined()
  expect(rates.rates.find(({ token }) => token.symbol === "USDC")).toBeDefined()

  await expectSupported(rates.rates)
})

test("allows filtering tokens", async () => {
  const rates = await fetch({ tokens: ["USDC"] })

  expect(rates.protocol).toBe("01")
  expect(rates.rates.length).toBeTruthy()

  expect(
    rates.rates.find(({ token }) => token.symbol === "SOL")
  ).toBeUndefined()
  expect(rates.rates.find(({ token }) => token.symbol === "USDC")).toBeDefined()

  await expectSupported(rates.rates)
})
