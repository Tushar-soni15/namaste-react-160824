import { useRouteError } from "react-router-dom"; // this is a hook.

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Oops !!</h1>
            <h2>There seems to be an error. Something is wrong.</h2>
            <h2>{err.status}: {err.statusText}</h2>
        </div>
    )
};

export default Error;