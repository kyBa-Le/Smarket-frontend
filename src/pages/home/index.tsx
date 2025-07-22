import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CountertopsIcon from '@mui/icons-material/Countertops';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import PetsIcon from '@mui/icons-material/Pets';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import HeroImage from '../../assets/hero.png';

function Home() {
    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>SMarket</title>
            {/* Hero Section */}
            <section className="bg-[#F0E7D9] py-8 md:py-16 h-[500px]">
                <div className=" container mx-auto px-[50px]">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        {/* Left Content */}
                        <div className="lg:w-1/2 mb-8 lg:mb-0">
                            <h2 className="text-sm text-gray-600 mb-2">Babalax</h2>
                            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                                Nutri 7-In-1 Base
                                <br />
                                On Formula 400g
                            </h1>
                            <p className="text-gray-600 mb-6">
                                Lorem ipsum dolor sit
                                <br />
                                amet elit.
                            </p>
                            <button className="bg-brand-green text-white px-6 py-3 rounded-md font-semibold hover:bg-teal-600 transition-colors">
                                SHOP NOW
                            </button>
                        </div>
                        {/* Right Content - Product Image */}
                        <div className="lg:w-1/2 flex justify-center">
                            <div className="w-[80%] h-80 rounded-lg flex items-center justify-center text-gray-600" style={{ backgroundImage: `url(${HeroImage})` }}>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Most Popular Categories */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-brand-green">
                        Most popular categories
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6 justify-center">
                        {/* Category Items */}
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#E2F1F0] rounded-full flex items-center justify-center mb-2">
                                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center text-xs">
                                    <DevicesOtherIcon sx={{ color: "#20B2AA", backgroundColor: "#E2F1F0"}} />
                                </div>
                            </div>
                            <span className="text-xs text-center">
                                Electronic
                            </span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#E2F1F0] rounded-full flex items-center justify-center mb-2">
                                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center text-xs">
                                    <FastfoodIcon sx={{ color: "#20B2AA", backgroundColor: "#E2F1F0" }} />
                                </div>
                            </div>
                            <span className="text-xs text-center">Drink and Foods</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#E2F1F0] rounded-full flex items-center justify-center mb-2">
                                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center text-xs">
                                    <CountertopsIcon sx={{ color: "#20B2AA", backgroundColor: "#E2F1F0" }} />
                                </div>
                            </div>
                            <span className="text-xs text-center">Home and kitchen</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#E2F1F0] rounded-full flex items-center justify-center mb-2">
                                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center text-xs">
                                    <SelfImprovementIcon sx={{ color: "#20B2AA", backgroundColor: "#E2F1F0" }} />
                                </div>
                            </div>
                            <span className="text-xs text-center">Beauty and personal care</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#E2F1F0] rounded-full flex items-center justify-center mb-2">
                                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center text-xs">
                                    <SportsBaseballIcon sx={{ color: "#20B2AA", backgroundColor: "#E2F1F0" }} />
                                </div>
                            </div>
                            <span className="text-xs text-center">Sport & Outdoor</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#E2F1F0] rounded-full flex items-center justify-center mb-2">
                                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center text-xs">
                                    <PetsIcon sx={{ color: "#20B2AA", backgroundColor: "#E2F1F0" }} />
                                </div>
                            </div>
                            <span className="text-xs text-center">Pet Supplies</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#E2F1F0] rounded-full flex items-center justify-center mb-2">
                                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center text-xs">
                                    <VideogameAssetIcon sx={{ color: "#20B2AA", backgroundColor: "#E2F1F0" }} />
                                </div>
                            </div>
                            <span className="text-xs text-center">Games & Hobbies</span>
                        </div>
                    </div>
                </div>
            </section>
            {/* Promotional Banners */}
            <section className="py-8 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Left Banner */}
                        <div className="bg-[#5F81A2] rounded-lg p-[3.5rem] flex items-center">
                            <div className="flex-1">
                                <span className=" text-white px-2 py-1 rounded text-xs font-bold">
                                    BEST SELLER
                                </span>
                                <h3 className="text-2xl font-bold mt-2 mb-1">$69</h3>
                                <p className="text-sm text-white mb-4">
                                    3 Pack Cotton Rib Rompers
                                </p>
                                <button className="bg-white px-4 py-2 rounded font-semibold text-sm">
                                    Shop Now
                                </button>
                            </div>
                            <div style={{ backgroundImage: 'url("https://i.pinimg.com/736x/d2/c4/8d/d2c48d65329563d973973ec207c7ee37.jpg")' }} className="w-32 h-40 rounded flex items-center justify-center text-xs text-gray-600 ml-4 object-cover bg-cover">
                            </div>
                        </div>
                        {/* Right Banner */}
                        <div className="bg-[#F0E6D9] rounded-lg p-[3.5rem] flex items-center">
                            <div style={{ backgroundImage: 'url("https://i.pinimg.com/736x/29/be/70/29be706fc60b2cbcc9de2b59bef778f5.jpg")' }} className="w-24 h-24 bg-gray-300 rounded flex items-center justify-center text-xs text-gray-600 mr-4 object-cover bg-cover">
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold mb-1">10% OFF</h3>
                                <h4 className="font-semibold mb-2">for Diapers</h4>
                                <p className="text-sm text-gray-600">
                                    Earn 10% Cash back on Pampers/Huggies! Expire Now!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Top Sold Products */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-brand-green">
                        Top sold product in this month
                    </h2>
                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        <button className="bg-brand-green text-white px-4 py-2 rounded-full text-sm">
                            Best Seller
                        </button>
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">
                            Top Rated
                        </button>
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">
                            Pregnancy &amp; Postpartum
                        </button>
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">
                            Milk &amp; Foods
                        </button>
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">
                            Diapers &amp; Wipes
                        </button>
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">
                            Infant
                        </button>
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">
                            Strollers
                        </button>
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">
                            Baby Out
                        </button>
                    </div>
                    {/* Products Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {/* Product 1 */}
                        <div className="bg-white rounded-lg shadow-sm border p-4">
                            <div className="w-full h-32 bg-gray-300 rounded mb-3 flex items-center justify-center text-xs text-gray-600">
                                [Baby Bouncer Image]
                            </div>
                            <h4 className="text-sm font-medium mb-2 line-clamp-2">
                                Chicco Baby Bouncer Balloon up to a weight of 18 kg
                            </h4>
                            <div className="flex items-center mb-2">
                                <div className="flex text-yellow-400 text-xs">★★★★☆</div>
                                <span className="text-xs text-gray-500 ml-1">(4)</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="text-orange-500 font-bold">$129.00</span>
                                    <span className="text-gray-400 line-through text-sm ml-1">
                                        $149.00
                                    </span>
                                </div>
                                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                                    13% off
                                </span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">1,200 Purchased</p>
                        </div>
                        {/* Product 2 */}
                        <div className="bg-white rounded-lg shadow-sm border p-4">
                            <div className="w-full h-32 bg-gray-300 rounded mb-3 flex items-center justify-center text-xs text-gray-600">
                                [Baby Formula Image]
                            </div>
                            <h4 className="text-sm font-medium mb-2 line-clamp-2">
                                Gerber Lil Crunchies, Once Cookies
                            </h4>
                            <div className="flex items-center mb-2">
                                <div className="flex text-yellow-400 text-xs">★★★★★</div>
                                <span className="text-xs text-gray-500 ml-1">(5)</span>
                            </div>
                            <div className="text-gray-800 font-bold">$1,259.00</div>
                            <p className="text-xs text-gray-500 mt-1">83 Purchased</p>
                        </div>
                        {/* Product 3 */}
                        <div className="bg-white rounded-lg shadow-sm border p-4">
                            <div className="w-full h-32 bg-gray-300 rounded mb-3 flex items-center justify-center text-xs text-gray-600">
                                [High Chair Image]
                            </div>
                            <h4 className="text-sm font-medium mb-2 line-clamp-2">
                                Graco Slim Snacker High Chair Grey
                            </h4>
                            <div className="flex items-center mb-2">
                                <div className="flex text-yellow-400 text-xs">★★★★☆</div>
                                <span className="text-xs text-gray-500 ml-1">(4)</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="text-orange-500 font-bold">$29.00</span>
                                    <span className="text-gray-400 line-through text-sm ml-1">
                                        $49.00
                                    </span>
                                </div>
                                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                                    41% off
                                </span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">294 Purchased</p>
                        </div>
                        {/* Product 4 */}
                        <div className="bg-white rounded-lg shadow-sm border p-4">
                            <div className="w-full h-32 bg-gray-300 rounded mb-3 flex items-center justify-center text-xs text-gray-600">
                                [Baby Carrier Image]
                            </div>
                            <h4 className="text-sm font-medium mb-2 line-clamp-2">
                                Ergo Breeze baby carrier
                            </h4>
                            <div className="flex items-center mb-2">
                                <div className="flex text-yellow-400 text-xs">★★★★☆</div>
                                <span className="text-xs text-gray-500 ml-1">(4)</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="text-orange-500 font-bold">$79.00</span>
                                    <span className="text-gray-400 line-through text-sm ml-1">
                                        $99.00
                                    </span>
                                </div>
                                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                                    20% off
                                </span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">362 Purchased</p>
                        </div>
                        {/* Product 5 */}
                        <div className="bg-white rounded-lg shadow-sm border p-4">
                            <div className="w-full h-32 bg-gray-300 rounded mb-3 flex items-center justify-center text-xs text-gray-600">
                                [Baby Toy Image]
                            </div>
                            <h4 className="text-sm font-medium mb-2 line-clamp-2">
                                Sheep 49" Class FHD 1080
                            </h4>
                            <div className="flex items-center mb-2">
                                <div className="flex text-yellow-400 text-xs">★★★★☆</div>
                                <span className="text-xs text-gray-500 ml-1">(4)</span>
                            </div>
                            <div className="text-gray-800 font-bold">$49.00 - $99.00</div>
                            <p className="text-xs text-gray-500 mt-1">12 Purchased</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Category Sections */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-8 p-1 mx-auto">
                        {/* Bedroom Essentials */}
                        <div className="bg-[#E8F2F2] rounded-2xl p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold">
                                    <span className="text-teal-600">Bedroom</span> Essentials
                                </h2>
                                <button className="text-teal-600 text-sm font-medium hover:text-teal-700">View All</button>
                            </div>

                            {/* Category Icons */}
                            <div className="grid grid-cols-4 gap-4 mb-8">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-white rounded-xl mx-auto mb-3 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                                            <span className="text-xs text-gray-500">Image</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">Beach & Water</span>
                                </div>
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-white rounded-xl mx-auto mb-3 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                                            <span className="text-xs text-gray-500">Image</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">Trampolines</span>
                                </div>
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-white rounded-xl mx-auto mb-3 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                                            <span className="text-xs text-gray-500">Image</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">Ride ons</span>
                                </div>
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-white rounded-xl mx-auto mb-3 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                                            <span className="text-xs text-gray-500">Image</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">Outdoor Games</span>
                                </div>
                            </div>

                            {/* Featured Products */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-slate-600 h-[20vh] rounded-xl p-4 text-white relative overflow-hidden">
                                    <div className="relative z-10">
                                        <span className="bg-white text-slate-800 px-3 py-1 rounded-full text-xs font-semibold">OKO</span>
                                        <h3 className="font-bold mt-3 mb-1">Beeza Baby Carrier</h3>
                                        <div className="flex items-baseline gap-1 mb-4">
                                            <span className="text-xs opacity-80">PRICE JUST</span>
                                            <span className="text-2xl font-bold">$169</span>
                                        </div>
                                    </div>
                                    <div style={{ transform: 'translate(10px, -50%)' }}
                                        className="absolute top-[50%] right-[20px] transform- w-24 h-24">
                                        <div className="w-24 h-24 bg-gray-400 rounded-lg flex items-center justify-center object-cover bg-cover" style={{ backgroundImage: 'url("https://i.pinimg.com/736x/17/ef/a2/17efa28a5d3046582f839d67c47b0d7e.jpg")' }}>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-green-200 h-[20vh] rounded-xl p-4 relative overflow-hidden">
                                    <div className="relative z-10">
                                        <h3 className="font-bold text-gray-800 mb-2">Kindergo</h3>
                                        <p className="text-sm text-gray-700 mb-1">Uniq Balance</p>
                                        <p className="text-sm text-gray-700 mb-4">Bike</p>
                                        <button className="bg-gray-800 text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-gray-700 transition-colors">
                                            SHOP NOW
                                        </button>
                                    </div>
                                    <div
                                        style={{ transform: 'translate(10px, -50%)' }} 
                                        className="absolute top-[50%] right-[20px] transform- w-24 h-24">
                                            <div className="w-24 h-24 bg-gray-400 rounded-lg flex items-center justify-center bg-cover" style={{ backgroundImage: 'url("https://i.pinimg.com/736x/98/69/47/9869478a0649c41add1555db1dba0727.jpg")' }}>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feeding Essentials */}
                        <div className="bg-orange-50 rounded-2xl p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold">
                                    <span className="text-teal-600">Feeding</span> Essentials
                                </h2>
                                <button className="text-teal-600 text-sm font-medium hover:text-teal-700">View All</button>
                            </div>

                            {/* Category Icons */}
                            <div className="grid grid-cols-4 gap-4 mb-8">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-white rounded-xl mx-auto mb-3 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                                            <span className="text-xs text-gray-500">Image</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">Breast Feeding</span>
                                </div>
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-white rounded-xl mx-auto mb-3 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                                            <span className="text-xs text-gray-500">Image</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">Bottle Feeding</span>
                                </div>
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-white rounded-xl mx-auto mb-3 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                                            <span className="text-xs text-gray-500">Image</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">Pacifiers</span>
                                </div>
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-white rounded-xl mx-auto mb-3 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                                            <span className="text-xs text-gray-500">Image</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">Bibs</span>
                                </div>
                            </div>

                            {/* Featured Products */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-amber-100 h-[20vh] rounded-xl p-4 relative overflow-hidden">
                                    <div className="relative z-10">
                                        <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-800 mb-3 inline-block">
                                            PLUM
                                        </span>
                                        <h3 className="font-bold text-gray-800 mb-4">Baby High Chair</h3>
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-24 h-24">
                                        <div style={{ backgroundImage: 'url("https://i.pinimg.com/736x/c2/31/2b/c2312bb1b1e3772aead1e8f0c2a5d598.jpg")'}} className="w-24 h-24 bg-gray-400 rounded-lg flex items-center justify-center bg-cover object-cover">
                                            <span className="text-xs text-gray-600"></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-teal-200 h-[20vh] rounded-xl p-4 relative overflow-hidden">
                                    <div className="relative z-10">
                                        <h3 className="font-bold text-gray-800 mb-2">MEALTIME</h3>
                                        <p className="text-sm text-gray-700 font-medium">ESSENTIALS</p>
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-24 h-20">
                                        <div style={{ backgroundImage: 'url("https://i.pinimg.com/736x/e0/3c/70/e03c70921031c52d3b9279339df5c7a1.jpg")'}} className="w-24 h-20 bg-gray-400 rounded-lg flex items-center justify-center bg-cover object-cover">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* New Arrivals */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">
                            <span className="text-brand-green">New</span> Arrival
                        </h2>
                        <button className="text-brand-green text-sm">View All</button>
                    </div>
                    {/* Category Tabs */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        <button className="bg-brand-green text-white px-4 py-2 rounded-full text-sm">
                            Featured
                        </button>
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">
                            Pregnancy &amp; Postpartum
                        </button>
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">
                            Milk &amp; Foods
                        </button>
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">
                            Diapers &amp; Wipes
                        </button>
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">
                            Infant
                        </button>
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">
                            Strollers
                        </button>
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">
                            Baby Out
                        </button>
                    </div>
                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Product 1 */}
                        <div className="bg-white rounded-lg shadow-sm border p-4">
                            <div className="flex gap-1 mb-3">
                                <span className="bg-black text-white text-xs px-2 py-1 rounded">
                                    new
                                </span>
                                <span className="bg-black text-white text-xs px-2 py-1 rounded">
                                    hot
                                </span>
                            </div>
                            <div className="w-full h-40 bg-gray-300 rounded mb-3 flex items-center justify-center text-xs text-gray-600">
                                [Stroller Image]
                            </div>
                            <h4 className="font-medium mb-2">
                                KOKOO Stroller 3 in 1 Madrid Dark Grey Melange 2022
                            </h4>
                            <div className="flex items-center mb-2">
                                <div className="flex text-yellow-400 text-xs">★★★★★</div>
                            </div>
                            <div className="text-lg font-bold">$559.00</div>
                            <p className="text-xs text-gray-500">603 Purchased</p>
                        </div>
                        {/* Product 2 */}
                        <div className="bg-white rounded-lg shadow-sm border p-4">
                            <div className="w-full h-40 bg-gray-300 rounded mb-3 flex items-center justify-center text-xs text-gray-600">
                                [Scooter Image]
                            </div>
                            <h4 className="font-medium mb-2">
                                DYNAMIC SPORTS 650GT Electric Scooter - Yellow
                            </h4>
                            <div className="flex items-center mb-2">
                                <div className="flex text-yellow-400 text-xs">★★★★★</div>
                            </div>
                            <div className="flex gap-2 mb-2">
                                <span className="bg-black text-white text-xs px-2 py-1 rounded">
                                    new
                                </span>
                                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                                    Free Shipping
                                </span>
                            </div>
                            <div className="text-lg font-bold">$109.00</div>
                            <p className="text-xs text-gray-500">25 Pre-order</p>
                        </div>
                        {/* Product 3 */}
                        <div className="bg-white rounded-lg shadow-sm border p-4">
                            <div className="w-full h-40 bg-gray-300 rounded mb-3 flex items-center justify-center text-xs text-gray-600">
                                [Bottle Feeding Image]
                            </div>
                            <h4 className="font-medium mb-2">COMBE Bottle Feeding</h4>
                            <div className="flex items-center mb-2">
                                <div className="flex text-yellow-400 text-xs">★★★★★</div>
                            </div>
                            <div className="text-lg font-bold">$129.00</div>
                            <p className="text-xs text-gray-500">8 Purchased</p>
                        </div>
                        {/* Product 4 */}
                        <div className="bg-white rounded-lg shadow-sm border p-4">
                            <div className="w-full h-40 bg-gray-300 rounded mb-3 flex items-center justify-center text-xs text-gray-600">
                                [Travel Stroller Image]
                            </div>
                            <h4 className="font-medium mb-2">Toddler Travel Light Stroller</h4>
                            <div className="flex items-center mb-2">
                                <div className="flex text-yellow-400 text-xs">★★★★★</div>
                            </div>
                            <div className="text-lg font-bold">$39.00</div>
                            <p className="text-xs text-gray-500">50 Purchased</p>
                        </div>
                    </div>
                    {/* More Products */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                        {/* Product 5 */}
                        <div className="bg-white rounded-lg shadow-sm border p-4">
                            <div className="w-full h-40 bg-gray-300 rounded mb-3 flex items-center justify-center text-xs text-gray-600">
                                [Baby Formula Image]
                            </div>
                            <h4 className="font-medium mb-2">
                                POPPIES Baby Dry, 1-month Supply (Newborn)
                            </h4>
                            <div className="flex items-center mb-2">
                                <div className="flex text-yellow-400 text-xs">★★★★★</div>
                            </div>
                            <div className="text-lg font-bold">$159.00</div>
                            <p className="text-xs text-gray-500">249 Purchased</p>
                        </div>
                        {/* Product 6 */}
                        <div className="bg-white rounded-lg shadow-sm border p-4">
                            <div className="w-full h-40 bg-gray-300 rounded mb-3 flex items-center justify-center text-xs text-gray-600">
                                [Car Seat Image]
                            </div>
                            <h4 className="font-medium mb-2">
                                BABYLOGIN Cotton Baby Carrier Mini
                            </h4>
                            <div className="flex items-center mb-2">
                                <div className="flex text-yellow-400 text-xs">★★★★★</div>
                            </div>
                            <div className="text-lg font-bold">$109.00</div>
                            <p className="text-xs text-gray-500">67 Purchased</p>
                        </div>
                        {/* Product 7 */}
                        <div className="bg-white rounded-lg shadow-sm border p-4">
                            <div className="w-full h-40 bg-gray-300 rounded mb-3 flex items-center justify-center text-xs text-gray-600">
                                [Baby Food Image]
                            </div>
                            <h4 className="font-medium mb-2">
                                BOORAY BAR Osmanthus Chocolate Chip
                            </h4>
                            <div className="flex items-center mb-2">
                                <div className="flex text-yellow-400 text-xs">★★★★☆</div>
                            </div>
                            <div className="text-lg font-bold">$49.00</div>
                            <p className="text-xs text-gray-500">37 Purchased</p>
                        </div>
                        {/* Product 8 */}
                        <div className="bg-white rounded-lg shadow-sm border p-4">
                            <div className="w-full h-40 bg-gray-300 rounded mb-3 flex items-center justify-center text-xs text-gray-600">
                                [Baby Bodysuit Image]
                            </div>
                            <h4 className="font-medium mb-2">NOUS Infant Bodysuit</h4>
                            <div className="flex items-center mb-2">
                                <div className="flex text-yellow-400 text-xs">★★★★★</div>
                            </div>
                            <div className="text-lg font-bold">$19.00 - $39.00</div>
                            <p className="text-xs text-gray-500">33 Purchased</p>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Home;