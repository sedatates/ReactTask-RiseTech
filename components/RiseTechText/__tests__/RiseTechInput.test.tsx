import { cleanup, fireEvent, render } from "@testing-library/react";
import RiseTechText from "../index";

describe("RiseTechInput", () => {
  afterEach(cleanup);

  it("accepts text props", () => {
    const wrapper = render(<RiseTechText text="Deneme" />);

    expect(wrapper.getByText("Deneme")).toBeTruthy();
  });
});
