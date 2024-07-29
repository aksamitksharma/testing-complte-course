import { logRoles, render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Login page", () => {
    
    test("login button render", () => {
      render(<Login />);
    const lBtn = screen.getByRole("button", {
      name: "Login",
    });

    expect(lBtn).toBeInTheDocument();
  });

  test("start learning not in the document", () => {
    render(<Login />);

    const startLear = screen.queryByRole("button", {
      name: "Logout",
    });
    expect(startLear).not.toBeInTheDocument();

    const startLear2 = screen.queryByText("Start Learning");
      expect(startLear2).not.toBeInTheDocument();
  });

  test("now learning show eventually", async ()=>{
    const view=render(<Login />)
    // logRoles(view.container)
    const startLer = await screen.findByText("Now Learn")
    expect(startLer).toBeInTheDocument();

  })
});
