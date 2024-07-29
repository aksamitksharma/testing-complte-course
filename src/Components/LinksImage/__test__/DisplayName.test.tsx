import { fireEvent, render, screen } from "@testing-library/react";
import DisplayName from "../DisplayName";

describe("Display names", () => {
  test("should display names render", () => {
    render(<DisplayName displayName={[]} />);
    const textElement = screen.getByText(/Display Name Component/i);
    expect(textElement).toBeInTheDocument();
  });

  test("should list items render when names are passed", () => {
    const name = ["Amit", "Hridya", "Rayaansh"];
    render(<DisplayName displayName={name} />);
    const listElement = screen.getAllByRole("listitem");
    expect(listElement).toHaveLength(name.length);
  });

  test("should conditional true will render", () => {
    render(<DisplayName displayName={[]} />);
    const testElement = screen.getByText(/I am true/i);
    expect(testElement).toBeInTheDocument();
  });

  test("should conditional false will render", () => {
    // Rendering component with default state
    render(<DisplayName displayName={[]} />);
    
    // Expecting "I am false" not to be in the document initially
    expect(screen.queryByText(/I am false, hide the name/i)).not.toBeInTheDocument();
    // Manually updating the state to false
    const { rerender } = render(<DisplayName displayName={[]} />);
    rerender(<DisplayName displayName={[]} />);
    
    const testElement = screen.queryByText(/I am false, hide the name/i);
    expect(testElement).not.toBeInTheDocument();
});

test("should render when toggle button clicked",()=>{
    render(<DisplayName displayName={[]}/>)
    const textElement = screen.queryByText(/I am true, show you the name/i)
    expect(textElement).toBeInTheDocument()

    const textElement2 = screen.queryByText(/I am false, hide the name/i)
    expect(textElement2).not.toBeInTheDocument()

    const buttonElement = screen.getByRole("button", {name: "Toggle"})
    expect(buttonElement).toBeInTheDocument()
    fireEvent.click(buttonElement)

    const textElement3 = screen.queryByText(/I am true, show you the name/i)
    expect(textElement3).not.toBeInTheDocument()

    const textElement4 = screen.queryByText(/I am false, hide the name/i)
    expect(textElement4).toBeInTheDocument() 
})


});
