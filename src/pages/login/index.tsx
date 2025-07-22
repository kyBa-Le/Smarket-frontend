function Login() {
    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden pt-[50px] pb-[50px]">
            <div className="grid lg:grid-cols-2 min-h-[500px]">
                {/* Left Side - Illustration */}
                <div 
                    style={
                        { 
                            backgroundImage: "url('https://i.pinimg.com/736x/8b/cb/72/8bcb72adb10dca204733f8d7c7e7adff.jpg')", 
                            backgroundRepeat: "no-repeat", 
                            backgroundPosition: "center" 
                        }} 
                    className="flex items-center justify-center p-8 bg-size-cover object-cover">
                </div>
                {/* Right Side - Login Form */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="max-w-md mx-auto w-full">
                        <h1 className="text-3xl font-bold text-brand-green mb-2">
                            Welcome Back
                        </h1>
                        <p className="text-gray-600 mb-8">LOGIN TO CONTINUE</p>
                        <form className="space-y-6">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Example@gmail.com"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none pr-12"
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                                <div className="text-right mt-2">
                                    <a
                                        href="#"
                                        className="text-sm text-gray-500 hover:text-brand-green"
                                    >
                                        Forgot Password ?
                                    </a>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-brand-green text-white py-3 rounded-lg font-medium hover:bg-brand-green-dark transition-colors"
                            >
                                LOGIN
                            </button>
                        </form>
                        <p className="text-center mt-6 text-sm text-gray-600">
                            NEW USER ?
                            <a
                                href="#"
                                className="text-brand-green hover:underline font-medium"
                            >
                                SIGN UP
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;