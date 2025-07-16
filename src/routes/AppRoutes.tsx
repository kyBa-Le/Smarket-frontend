import { Suspense } from "react";
import { routes } from "./routeConfig";
import { useRoutes } from "react-router";
import { MainLayout } from "@/layouts/MainLayout";
import AdminLayout from "@/layouts/AdminLayout";
import { ProtectedRoute } from "./ProtectedRoute";

function mapRoutes(routeList = routes): any[] {

    return routeList.map(({ path, element: Component, children, isAdmin, isProtected}) => {

        const Layout = isAdmin ? AdminLayout : MainLayout;

        return (
            {
                path,
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        {
                            isProtected ?
                            <ProtectedRoute>
                                <Layout>
                                    <Component />
                                </Layout>
                            </ProtectedRoute>
                            : 
                            <Layout>
                                <Component />
                            </Layout>
                        }
                        
                    </Suspense>
                ),
                children: children ? mapRoutes(children): undefined
            }
        )
    });
}

export default function AppRoutes() {
    const routeElements = useRoutes(mapRoutes(routes));
    return routeElements;
}