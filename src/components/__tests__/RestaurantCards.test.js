import RestaurantCards from "../RestaurantCards"
import { render, screen } from "@testing-library/react"
import MOCK_DATA from "../mocks/resCardData.json"
import '@testing-library/jest-dom'

test("should render the restaurtant card component with the props", ()=>{
    render (<RestaurantCards resData={MOCK_DATA}/>)

    const resName= screen.getByText("Parihaar Bhojnalay");
    expect(resName).toBeInTheDocument();
});