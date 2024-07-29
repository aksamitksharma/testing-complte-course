import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  test("render counter", () => {
    render(<Counter />);
    const counterEle = screen.getByRole("heading");
    expect(counterEle).toBeInTheDocument();

    const btnEle = screen.getByRole("button", {
      name: "Increment",
    });
    expect(btnEle).toBeInTheDocument();
  });

  test("renders a count 0", () => {
    render(<Counter />);
    const counterEle = screen.getByRole("heading");
    expect(counterEle).toHaveTextContent("0");
  });

  test("renders counter 1 when click on Increment", async () => {
    render(<Counter />);
    const incrementEle = screen.getByRole("button", {
      name: "Increment",
    });
    await userEvent.click(incrementEle);

    const counterEle = screen.getByRole("heading");
    expect(counterEle).toHaveTextContent("1");
  });

  test("renders counter twice when click on Increment", async () => {
    render(<Counter />);
    const incrementEle = screen.getByRole("button", {
      name: "Increment",
    });
    await userEvent.dblClick(incrementEle);

    const counterEle = screen.getByRole("heading");
    expect(counterEle).toHaveTextContent("2");
  });

  test("renders counter 10 when click on set button", () => {
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    userEvent.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);

    const setBtn = screen.getByRole("button", {
      name: "Set",
    });
    userEvent.click(setBtn);

    const counterEle = screen.getByRole("heading");
    expect(counterEle).toHaveTextContent("10");
  });

  test("renders tab one by one", async () => {
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    const incrementBtn = screen.getByRole("button", { name: "Increment" });
    const setBtn = screen.getByRole("button", { name: "Set" });

    await userEvent.tab();
    expect(incrementBtn).toHaveFocus();

    await userEvent.tab();
    expect(amountInput).toHaveFocus();

    await userEvent.tab();
    expect(setBtn).toHaveFocus();
  });
});
