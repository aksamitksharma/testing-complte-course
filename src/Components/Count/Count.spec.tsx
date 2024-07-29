import { render, screen } from "@testing-library/react"
import Count from "./Count"
import userEvent from "@testing-library/user-event"

describe("Count",()=>{
    test("render count",()=>{
        render(<Count count={10} />)
        const textElement = screen.getByText("Counter again")
        expect(textElement).toBeInTheDocument()
    })

    test("render function for increment & decrement", async ()=>{
        const incrementHandle = jest.fn()
        const decrementHandle = jest.fn()
        render(<Count count={0} handleInc={incrementHandle} handleDec={decrementHandle}/>)
        const incButton = screen.getByRole("button",{
            name:   "Increment"
        })
        const decButton = screen.getByRole("button",{
            name:   "Decrement"
        })
        userEvent.click(incButton);
        userEvent.click(decButton);

        expect(incrementHandle).toHaveBeenCalledTimes(1)
        expect(decrementHandle).toHaveBeenCalledTimes(1)
    })
})