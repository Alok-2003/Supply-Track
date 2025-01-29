import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Truck, Map, BarChart3, Leaf, Clock, Globe, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
    const openInNewTab = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-emerald-600 to-emerald-800">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
                    <div className="text-center space-y-8">
                        <div className="flex justify-center mb-8">
                            <div className="animate-float p-4 rounded-full bg-emerald-500/20">
                                <Globe className="w-16 h-16 text-emerald-400" />
                            </div>
                        </div>
                        <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 to-emerald-400">
                            Next-Gen Supply Chain
                            <span className="block text-white">Management</span>
                        </h1>
                        <p className="mt-6 max-w-2xl mx-auto text-xl text-emerald-100 sm:text-2xl">
                            Revolutionize your logistics with AI-powered tracking, predictive analytics, and real-time sustainability metrics.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                            <Link
                                to="/map"
                                className="group inline-flex items-center px-8 py-4 text-lg font-semibold rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
                            >
                                <Map className="w-5 h-5 mr-2" />
                                Launch Interactive Map
                                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <button
                                onClick={() => openInNewTab('https://srmtruck1.streamlit.app/')}
                                className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-xl border-2 border-emerald-500/50 hover:border-emerald-500 text-emerald-400 hover:text-emerald-300 transition-all duration-300"
                            >
                                <BarChart3 className="w-5 h-5 mr-2" />
                                View Analytics
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 to-transparent"></div>
            </div>

            {/* ML Models Section */}
            <div className="relative py-24 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl font-bold text-white sm:text-5xl">
                            AI-Powered Solutions
                        </h2>
                        <p className="mt-3 text-xl text-gray-300 max-w-2xl mx-auto">
                            Harness the power of machine learning to optimize your logistics operations
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        <ModelCard
                            title="Maintenance Predictor"
                            description="Predict maintenance needs before they become issues"
                            url="https://srmtruck1.streamlit.app/"
                            icon={<Truck className="w-8 h-8" />}
                        />
                        <ModelCard
                            title="Frequency Visualization"
                            description="Visualize delivery patterns and optimize routes"
                            url="https://l2-truckscheduling.streamlit.app/"
                            icon={<Map className="w-8 h-8" />}
                        />
                        <ModelCard
                            title="Truck Scheduling"
                            description="AI-optimized scheduling for maximum efficiency"
                            url="https://srmcrew.streamlit.app/"
                            icon={<Clock className="w-8 h-8" />}
                        />
                        <ModelCard
                            title="Inventory Management"
                            description="Smart inventory tracking and predictions"
                            url="https://smart-inventory.streamlit.app/"
                            icon={<BarChart3 className="w-8 h-8" />}
                        />
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-24 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-white sm:text-5xl">
                            Powerful Features
                        </h2>
                        <p className="mt-4 text-xl text-gray-300">
                            Everything you need to manage modern logistics
                        </p>
                    </div>

                    <div className="mt-20">
                        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                            <Feature
                                icon={<Map className="w-8 h-8 text-emerald-400" />}
                                title="3D Visualization"
                                description="Interactive 3D map with real-time vehicle tracking and route visualization."
                            />
                            <Feature
                                icon={<BarChart3 className="w-8 h-8 text-emerald-400" />}
                                title="Analytics Dashboard"
                                description="Comprehensive analytics for fleet performance and delivery metrics."
                            />
                            <Feature
                                icon={<Clock className="w-8 h-8 text-emerald-400" />}
                                title="Real-time Updates"
                                description="Live tracking and instant notifications for your entire fleet."
                            />
                            <Feature
                                icon={<Leaf className="w-8 h-8 text-emerald-400" />}
                                title="Sustainability Metrics"
                                description="Track and optimize your carbon footprint and fuel efficiency."
                            />
                            <Feature
                                icon={<Truck className="w-8 h-8 text-emerald-400" />}
                                title="Fleet Management"
                                description="Centralized control over your entire vehicle fleet and resources."
                            />
                            <Feature
                                icon={<Globe className="w-8 h-8 text-emerald-400" />}
                                title="Global Coverage"
                                description="Worldwide tracking and management capabilities for international operations."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Feature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <div className="group p-8 rounded-2xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-emerald-900/50 group-hover:bg-emerald-900 transition-colors duration-300">
                    {icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-4 text-gray-300">{description}</p>
            </div>
        </div>
    );
}

function ModelCard({ icon, title, description, url }: { icon: React.ReactNode; title: string; description: string; url: string }) {
    return (
        <button
            onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
            className="group p-8 rounded-2xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1"
        >
            <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-emerald-900/50 group-hover:bg-emerald-900 text-emerald-400 transition-colors duration-300">
                    {icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    {title}
                </h3>
                <p className="mt-4 text-gray-300">{description}</p>
                <ArrowRight className="mt-6 w-6 h-6 text-emerald-400 transform group-hover:translate-x-1 transition-transform" />
            </div>
        </button>
    );
}

export default Home;
