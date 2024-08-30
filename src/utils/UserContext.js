import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Unknown",
});

export default UserContext;