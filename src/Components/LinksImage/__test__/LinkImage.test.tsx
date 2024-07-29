import LinkImage from "../LinksImage";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Link Image", () => {
  test("should render heading of page", () => {
    render(<LinkImage />);
    const headingElements = screen.getAllByRole("heading");
    headingElements.forEach((headingElement) => {
      expect(headingElement).toBeInTheDocument();
    });
  });

  test("should render input", () => {
    render(<LinkImage />);
    const inputElement = screen.getByPlaceholderText(/Enter name/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("should able to type in input", () => {
    render(<LinkImage />);
    const inputElement = screen.getByPlaceholderText(/Enter name/i);
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, { target: { value: "Amit" } });
    expect(inputElement).toHaveValue("Amit");
  });

 
  
  test("should able to blank input", () => {
    render(<LinkImage />);
    const inputElement = screen.getByPlaceholderText(
      /Enter name/i
    ) as HTMLInputElement;
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, { target: { value: "Amit" } });
    const buttonElement = screen.getByRole("button", {
      name: "Save",
    });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });

  test("should render profile image", () => {
    render(<LinkImage />);
    const imgElements = screen.getByAltText("profile-pic");
    expect(imgElements).toBeInTheDocument();
  });

  test("should be able to click button and copy input", () => {
    render(<LinkImage />);
    const inputElement = screen.getByPlaceholderText(
      /Enter name/i
    ) as HTMLInputElement;
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, { target: { value: "Amit" } });

    const buttonElement = screen.getByRole("button", { name: "Save" });
    fireEvent.click(buttonElement);

    const inputElement2 = screen.getByPlaceholderText(
      /Copy name/i
    ) as HTMLInputElement;
    expect(inputElement2.value).toBe("Amit");
  });

  test("should render DisplayName component", () => {
    render(<LinkImage />);
    const displayNameElement = screen.getByText(/Display Name Component/i);
    expect(displayNameElement).toBeInTheDocument();
});
});
