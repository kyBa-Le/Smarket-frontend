import ThemeLanguageSelector from "@/components/selector/ThemeLanguage";
import { Bell, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router";

type MainLayoutProps = {
    children: React.ReactNode;
}

export function MainLayout({children}: MainLayoutProps) {
    const navigate = useNavigate();

    function handleNavigation(path: string) {
        navigate(path)
    }

    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Login - SMarket</title>
            {/* Header */}
            <header className="bg-brand-green text-white">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between py-3">
                        {/* Logo */}
                        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavigation("/")}>
                            <div className="w-8 h-8 bg-white rounded" />
                            <span className="font-semibold text-lg">SMarket</span>
                        </div>
                        {/* Right side */}
                        <div className="flex items-center space-x-8">
                            <span className="font-semibold hidden md:inline text-sm flex justify-center items-center cursor-pointer"><span onClick={() => handleNavigation("/login")}>LOGIN</span> / <span onClick={() => handleNavigation("/register")}>REGISTER</span></span>
                            <ThemeLanguageSelector />
                        </div>
                    </div>
                </div>
            </header>
            {/* Search Section */}
            <section className="bg-brand-green py-4">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
                        {/* Search Bar */}
                        <div className="flex w-full lg:w-auto">
                            <select className="bg-white border border-r-0 border-gray-300 rounded-l-3xl px-4 py-2 text-sm focus:outline-none font-semibold">
                                <option>All Categories</option>
                            </select>
                            <input
                                type="text"
                                placeholder="Search anything..."
                                className="flex-1 lg:w-[20vw] px-4 py-2 border-t border-b border-gray-300 focus:outline-none"
                            />
                            <button className="bg-white px-4 py-2 border-l-0 rounded-r-3xl border border-gray-300 hover:bg-gray-50">
                                <svg
                                    className="w-5 h-5 text-gray-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2.5}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                        {/* Promotional Messages */}
                        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8 text-white text-xs">
                            <Bell />
                            <ShoppingCart />
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb */}
            <div className="container mx-auto px-4 py-4">
                
            </div>
            {/* Main Content */}
            <main className="container mx-auto px-4 pb-8">
                {children}
            </main>
            {/* Footer */}
            <footer className="bg-white border-t">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {/* Company Info */}
                        <div className="lg:col-span-1">
                            <h3 className="font-bold text-gray-900 mb-4">
                                SWOO - 1ST NYC TECH ONLINE MARKET
                            </h3>
                            <div className="space-y-2 text-sm text-gray-600">
                                <p>HOTLINE 24/7</p>
                                <p className="text-brand-green font-bold text-lg">
                                    (025) 3686 25 16
                                </p>
                                <p className="mt-4">
                                    257 Thatcher Road St, Brooklyn, Manhattan, NY 10092
                                </p>
                                <p>contact@swootechmart.com</p>
                            </div>
                        </div>
                        {/* Top Categories */}
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-4">TOP CATEGORIES</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>
                                    <a href="#" className="hover:text-brand-green">
                                        Laptops
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-brand-green">
                                        PC &amp; Computers
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-brand-green">
                                        Cell Phones
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-brand-green">
                                        Tablets
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-brand-green">
                                        Gaming &amp; VR
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Company */}
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-4">COMPANY</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>
                                    <a href="#" className="hover:text-brand-green">
                                        About Swoo
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-brand-green">
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-brand-green">
                                        Career
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-brand-green">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-brand-green">
                                        Sitemap
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Help Center */}
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-4">HELP CENTER</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>
                                    <a href="#" className="hover:text-brand-green">
                                        Customer Service
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-brand-green">
                                        Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-brand-green">
                                        Terms &amp; Condition
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-brand-green">
                                        Track Your Order
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-brand-green">
                                        FAQs
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Partner */}
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-4">PARTNER</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>
                                    <a href="#" className="hover:text-brand-green">
                                        Become Seller
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-brand-green">
                                        Affiliate
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-brand-green">
                                        Advertise
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-brand-green">
                                        Partnership
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Bottom Footer */}
                <div className="border-t bg-gray-50">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
                            <p>
                                © 2024 <span className="font-semibold">Shawontech</span>. All Rights
                                Reserved
                            </p>
                            <a href="#" className="text-blue-600 hover:underline mt-2 sm:mt-0">
                                Mobile Site
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )
}