import { expect } from "chai";
import example from "../src/index";

describe(`Test in TS`, () => {
  it(example.add.name, () => {
    expect(example.add(3, 5)).to.be.equals(8);
  });
  it(example.subtract.name, () => {
    expect(example.subtract(10, 2)).to.be.equals(8);
  });
  it(example.sum.name, () => {
    expect(example.sum(1, 2, 3, 4, 5)).to.be.equals(15);
  });
});
