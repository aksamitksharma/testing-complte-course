import { act, render, renderHook } from "@testing-library/react"
import useCounter from "./UseCounter"

describe("useCounter hook",()=>{
    test("should render the initial count",()=>{
        const {result}=renderHook(useCounter)
        expect(result.current.count).toBe(0)
    })

    it("should accept render the same intial count",()=>{
        const {result} = renderHook(useCounter,{
            initialProps:{
                initialCount:10
            }
        })
        expect(result.current.count).toBe(10)
    })

    it("should increment the value",()=>{
        const {result} = renderHook(useCounter)
        act(()=>result.current.increment())
        expect(result.current.count).toBe(1)
    })

    it("should decrement the value",()=>{
        const {result} = renderHook(useCounter)
        act(()=>result.current.decrement())
        expect(result.current.count).toBe(-1)
    })
})


