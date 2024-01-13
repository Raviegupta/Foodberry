import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return (
        <div>
            <h1>oops!!</h1>
            <h1>This Page is not available!</h1>
            <h1>{err.status} : {err.statusText}</h1>
            {/* <h1>{err.data}</h1> */}
        </div>
    )
}

export default Error;