import Contact from "../Contact"
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

describe("contact comp testes", ()=>{
    test("testing contact component is renedering properly or not", ()=>{
        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
        // assertion
        expect(heading).toBeInTheDocument();
    });
    
    test("Should load button in the document", ()=>{
        render(<Contact/>);
    
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
    
    test("Should have submit text in the doc", ()=>{
        render(<Contact/>);
    
        const submit = screen.getByText("Submit");
        expect(submit).toBeInTheDocument();
    });
    
    test("Should have atleast 2 input boxes on the component", ()=>{
        render(<Contact/>);
    
        const allInput = screen.getAllByRole("textbox");
    
        expect(allInput.length).toBe(2);
    });
});