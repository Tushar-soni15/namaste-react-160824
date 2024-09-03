import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResList.json"
import { BrowserRouter } from "react-router-dom";
import { act } from "react";
import "@testing-library/jest-dom"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
}); // here we are trying to make the similar fetch fn for JEST because jest does not runs on browser. It cant make an API call, because it runs on a browser like environment but not browser 

it("should render search for text input burger", async ()=>{
    await act(async ()=>{
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
            );
    })// this will throw an error saying fetch is not defined. Because fetch is given to us by browser not JS.

    const resCardBeforeSearch = screen.getAllByTestId("resCards");

    expect(resCardBeforeSearch.length).toBe(8);

    const searchBtn = screen.getByRole("button", {name: "Search"});

    expect(searchBtn).toBeInTheDocument();

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {target: {value: "Burger"}});

    fireEvent.click(searchBtn);

    const resCard = screen.getAllByTestId("resCards")

    expect(resCard.length).toBe(2);

});

it("should work to filter out top rated restaurants", async()=>{
    await act(async ()=>{
        render(<BrowserRouter>
            <Body/>
        </BrowserRouter>);
    })

    const resCardBeforeFilter = screen.getAllByTestId("resCards");

    expect(resCardBeforeFilter.length).toBe(8);

    const filterBtn = screen.getByRole("button", {name: "Get top rated restaurants"});
    
    expect(filterBtn).toBeInTheDocument();
    
    fireEvent.click(filterBtn);

    const resCardAfterFilter = screen.getAllByTestId("resCards")

    expect(resCardAfterFilter.length).toBe(7);
})