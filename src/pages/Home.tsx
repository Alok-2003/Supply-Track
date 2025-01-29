import { Link } from 'react-router-dom';
import { Truck, Map, BarChart3, Leaf, Clock } from 'lucide-react';

export function Home() {
    const openInNewTab = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="min-h-screen bg-gray-800 text-white">
            {/* Hero Section */}
            <div className="relative bg-emerald-800 text-white">
                <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
                            Next-Gen Supply Chain Management
                        </h1>
                        <p className="mt-3 max-w-md mx-auto text-xl text-emerald-100 sm:text-2xl md:mt-5 md:max-w-3xl">
                            Real-time tracking, predictive analytics, and sustainability metrics in one powerful platform.
                        </p>
                        <div className="mt-10">
                            <Link
                                to="/map"
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-emerald-800 bg-white hover:bg-emerald-50 transition-colors"
                            >
                                <Map className="w-5 h-5 mr-2" />
                                Launch Interactive Map
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* ML Models Section */}
            <div className="mt-24 bg-gray-800 text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    Explore Our AI-Powered Models
                </h2>
                <p className="mt-3 text-lg text-gray-300">Enhance your logistics with machine learning-driven insights.</p>
                <div className="mt-10 flex flex-wrap justify-center gap-6">
                    <Button text="Maintenance Predictor" url="https://srmtruck1.streamlit.app/" />
                    <Button text="Frequency Visualization" url="https://l2-truckscheduling.streamlit.app/" />
                    <Button text="Truck Scheduling" url="https://srmcrew.streamlit.app/" />
                </div>
            </div>

            {/* Features Section */}
            <div className="py-24 bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                            Powerful Features for Modern Logistics
                        </h2>
                    </div>

                    <div className="mt-20">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            <Feature icon={<Map className="w-8 h-8 text-emerald-400" />} title="3D Visualization" description="Interactive 3D map with real-time vehicle tracking and route visualization." />
                            <Feature icon={<BarChart3 className="w-8 h-8 text-emerald-400" />} title="Analytics Dashboard" description="Comprehensive analytics for fleet performance and delivery metrics." />
                            <Feature icon={<Clock className="w-8 h-8 text-emerald-400" />} title="Real-time Updates" description="Live tracking and instant notifications for your entire fleet." />
                            <Feature icon={<Leaf className="w-8 h-8 text-emerald-400" />} title="Sustainability Metrics" description="Track and optimize your carbon footprint and fuel efficiency." />
                            <Feature icon={<Truck className="w-8 h-8 text-emerald-400" />} title="Fleet Management" description="Centralized control over your entire vehicle fleet and resources." />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

function Feature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <div className="flex flex-col items-center p-6 bg-gray-700 rounded-lg">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-emerald-600 text-white">
                {icon}
            </div>
            <h3 className="mt-4 text-lg font-medium text-white">{title}</h3>
            <p className="mt-2 text-base text-gray-300 text-center">{description}</p>
        </div>
    );
}

function Button({ text, url }: { text: string; url: string }) {
    return (
        <button
            onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
            className="cursor-pointer relative group overflow-hidden rounded-xl border-2 px-6 py-3 border-emerald-400 text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-lg"
        >
            <span className="font-bold text-lg relative z-10">{text}</span>
            <span className="absolute top-0 left-0 w-full bg-emerald-600 duration-500 group-hover:-translate-x-full h-full"></span>
            <span className="absolute top-0 left-0 w-full bg-emerald-600 duration-500 group-hover:translate-x-full h-full"></span>
            <span className="absolute top-0 left-0 w-full bg-emerald-600 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
            <span className="absolute delay-300 top-0 left-0 w-full bg-emerald-600 duration-500 group-hover:translate-y-full h-full"></span>
        </button>
    );
}
