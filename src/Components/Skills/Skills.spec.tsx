import { render, screen } from "@testing-library/react"
import { Skills } from "./Skills"

describe("Skills", () => {
    const skills = ["Amit", "Hridya", "Rayaansh"]
    it("renders correctly", () => {
        render(<Skills skills={skills}/>)
        const listItems = screen.getByRole("list")
        expect(listItems).toBeInTheDocument()
    })

    it("renders all elements", ()=>{
        render(<Skills skills={skills}/>)
        const listAllItems = screen.getAllByRole("listitem")
        expect(listAllItems).toHaveLength(skills.length)
    })
})
