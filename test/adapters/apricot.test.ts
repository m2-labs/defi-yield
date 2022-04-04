import { fetch } from "../../lib/adapters/apricot"
import { expectSupported } from "../support/tokens"

test("fetches the apricot rates", async () => {
  const rates = await fetch()

  expect(rates.protocol).toBe("apricot")
  expect(rates.rates.length).toBeTruthy()

  expect(rates.rates.find(({ asset }) => asset === "SOL")).toBeDefined()
  expect(rates.rates.find(({ asset }) => asset === "USDC")).toBeDefined()

  await expectSupported(rates.rates)
})
