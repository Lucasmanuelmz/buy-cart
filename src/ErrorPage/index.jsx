import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    return (
        <div className="error-page">
            <h3>Oops! Looks like something went wrong.</h3>
            <p>We apologize for the inconvenience, but it seems we've encountered
                an issue while processing your request. Our technical team has been
                notified and is working to resolve this issue as quickly as possible.</p>
            <p>Please try again later or contact us if the problem persists. We appreciate
                your understanding and patience.</p>
            <p>Best regards,</p>
            <p>Lucas Manuel</p>
            <p>
                <i>{error.statusText || error.message}</i></p>
        </div>
    )
}