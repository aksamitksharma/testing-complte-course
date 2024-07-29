/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import { render, screen, waitFor } from "@testing-library/react";
import ApiCalling from "../ApiCalling";
import axios from "axios";

// Mocking axios module
jest.mock("axios");

const apiUrl = "https://jsonplaceholder.typicode.com/users";

describe("ApiCalling Component", () => {
    test("should render heading",async () => {
        
        render(<ApiCalling apiUrl={apiUrl} />);
        await waitFor(() => {
        const headingElement = screen.getByRole("heading", { name: /Api calling/i });
        expect(headingElement).toBeInTheDocument();
        })
    });

    test("should render user list after fetching data", async () => {
        // Mocking axios response
        (axios.get as jest.Mock).mockResolvedValueOnce({
            data: [
                { id: 1, name: "John Doe" },
                { id: 2, name: "Jane Doe" }
            ]
        });

        render(<ApiCalling apiUrl={apiUrl} />);

        // Wait for the user list to be displayed
        await waitFor(() => {
            const user0 = screen.getByTestId("users-0");
            const user1 = screen.getByTestId("users-1");

            expect(user0).toBeInTheDocument();
            expect(user1).toBeInTheDocument();
            expect(user0).toHaveTextContent("John Doe");
            expect(user1).toHaveTextContent("Jane Doe");
        });
    });

    test("should handle API error", async () => {
        // Mocking axios to reject
        (axios.get as jest.Mock).mockRejectedValueOnce(new Error("Network Error"));

        render(<ApiCalling apiUrl={apiUrl} />);

        // Wait for the error message to be displayed
        await waitFor(() => {
            const errorMessage = screen.getByText(/Error: Network Error/i);
            expect(errorMessage).toBeInTheDocument();
        });
    });

});
