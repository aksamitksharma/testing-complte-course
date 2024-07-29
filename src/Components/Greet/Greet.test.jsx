import { render, screen } from "@testing-library/react"
import { Greet } from "./Greet"


describe("Greet", ()=>{
    test("Greet loaded", ()=>{
        render(<Greet/>)
        const testElement = screen.getByText("Hello")
        expect(testElement).toBeInTheDocument()
    })
     
    describe("Nested", ()=>{
        test("Greet with name", ()=>{
            render(<Greet name="Amit"/>)
            const testElement = screen.getByText("Hello Amit")
            expect(testElement).toBeInTheDocument()
        })
    })
    
})

describe("Display", ()=>{
    it("Display India", ()=>{
        render(<Greet />)
        const testElement = screen.getByText("India")
        expect(testElement).toBeInTheDocument() 
    })
})
