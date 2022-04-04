import { fetch } from "../../lib/adapters/solend-stable"
import { expectSupported } from "../support/tokens"

test("fetches the solend rates", async () => {
  const rates = await fetch()

  expect(rates.protocol).toBe("solend-stable")
  expect(rates.rates.length).toBeTruthy()

  expect(rates.rates.find(({ asset }) => asset === "USDT")).toBeDefined()
  expect(rates.rates.find(({ asset }) => asset === "USDC")).toBeDefined()

  await expectSupported(rates.rates)
})
