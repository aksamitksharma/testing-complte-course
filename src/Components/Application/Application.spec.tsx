import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    const pgH = screen.getByRole("heading",{
        name: "Form"
    })
    expect(pgH).toBeInTheDocument()

    const secH = screen.getByRole("heading",{
        name: "Section"
    })
    expect(secH).toBeInTheDocument()

    const nameEle = screen.getByRole("textbox",{
        name: "Name"
    });
    expect(nameEle).toBeInTheDocument();

    const nameEle2 = screen.getByLabelText("Name")
    expect(nameEle2).toBeInTheDocument();

    const pName = screen.getByPlaceholderText("fullname")
    expect(pName).toBeInTheDocument();

    const byDisV = screen.getByDisplayValue("Amit")
    expect(byDisV).toBeInTheDocument();

    const byTestId = screen.getByTestId("nameid")
    expect(byTestId).toBeInTheDocument();

    const desc = screen.getByRole("textbox",{
        name: "Desc"
    })
    expect(desc).toBeInTheDocument()

    const comJob = screen.getByRole("combobox");
    expect(comJob).toBeInTheDocument();

    const terms = screen.getByRole("checkbox");
    expect(terms).toBeInTheDocument();

    const terms2 = screen.getByLabelText("Agree")
    expect(terms2).toBeInTheDocument();

    const btn = screen.getByRole("button")
    expect(btn).toBeInTheDocument()

    const pText = screen.getByText("All are mandatory")
    expect(pText).toBeInTheDocument()
    
  });

  test("new functions", ()=>{
    render(<Application />)
    const textEle = screen.getByText("Hello world")
    expect(textEle).toBeInTheDocument()

    const textEle2 = screen.getByText(/world/)
    expect(textEle2).toBeInTheDocument()

    const textEle3 = screen.getByText(/WORLD/i)
    expect(textEle3).toBeInTheDocument()

    const textEle4 = screen.getByText(/^hello world$/i)
    expect(textEle4).toBeInTheDocument()

  })

  test("func checking",()=>{
    render(<Application />)

    const funcText = screen.getByText((content)=>content.startsWith('Hello'))
    expect(funcText).toBeInTheDocument()

    const funcText2 = screen.getByText((content)=>content.endsWith('world'))
    expect(funcText2).toBeInTheDocument()
  })
});
