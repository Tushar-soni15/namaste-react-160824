import appStore from "../../utils/appStore"
import Header from "../Header"
import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import '@testing-library/jest-dom'

test("header component login button render", ()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
    </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name: "Login"});

    expect(loginButton).toBeInTheDocument();
});

test("should have 0 cart items", ()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
    </BrowserRouter>
    )

    const cartItems = screen.getByText("Cart (0 items)");

    expect(cartItems).toBeInTheDocument();
});

test("should have cart irrespective of the items - using regex", ()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
    </BrowserRouter>
    )

    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
});

test("should have change login to logout n vica versa", ()=>{
    render(
    <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
    </BrowserRouter>
    )

    const LoginBtn = screen.getByRole("button", { name: "Login"});

    fireEvent.click(LoginBtn);

    const LogoutBtn = screen.getByRole("button", { name: "Logout"});

    expect(LogoutBtn).toBeInTheDocument();
});