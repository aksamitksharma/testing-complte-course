import { render, screen } from "@testing-library/react"
import Users from "./Users"
import axios from 'axios';

describe("Users",()=>{
    it("renders correctly",()=>{
        render(<Users />)
        const textElement = screen.getByText("Users")
        expect(textElement).toBeInTheDocument()
    })

    test("renders a list of users",async ()=>{
        render(<Users />)
        const users = await screen.findAllByRole("listitem")
        expect(users).toHaveLength(3)
    })



    jest.mock('axios');
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    
    test('loads and displays user', async () => {
      mockedAxios.get.mockResolvedValue({ data: { id: 1, name: 'John Doe' } });
    
      render(<Users />);
    
      await screen.findByText('John Doe');
      
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });
})