import type { JSX } from "react";
import { Navigate } from "react-router";

interface ProtectedRouteProps {
    children: JSX.Element;
}

export function ProtectedRoute({children}: ProtectedRouteProps) {
    const isAuthenticated = true; //TODO: later add the authentication logic
    return isAuthenticated ? children : <Navigate to={"/login"} replace />
}