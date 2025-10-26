import React, { useState, useEffect } from 'react';
import { Cookie, ArrowLeft } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const accepted = localStorage.getItem('cookie_consent');
    if (!accepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
    setShowPolicy(false);
  };

  const handleLearnMore = () => {
    setShowPolicy(true);
  };

  const handleBackToBanner = () => {
    setShowPolicy(false);
  };

  if (showPolicy) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-zinc-900 via-neutral-800 to-gray-900 backdrop-blur-md z-50 flex items-center justify-center p-4">
        <div className="bg-zinc-950 text-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-xl">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={handleBackToBanner}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft size={20} />
                Back
              </button>
            </div>

            <div className="prose prose-invert max-w-none">
              <h1 className="text-2xl font-bold mb-6">Cookie Policy</h1>

              <h2 className="text-xl font-semibold mb-3">What are cookies?</h2>
              <p className="mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website.
                They are widely used to make websites work more efficiently and provide information to website owners.
              </p>

              <h2 className="text-xl font-semibold mb-3">How we use cookies</h2>
              <p className="mb-4">We use cookies for several purposes:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Essential cookies:</strong> Necessary for the website to function properly.</li>
                <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website.</li>
                <li><strong>Preference cookies:</strong> Remember your settings and preferences.</li>
                <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements.</li>
              </ul>

              <h2 className="text-xl font-semibold mb-3">Cookie categories</h2>
              <div className="space-y-4 mb-6">
                <div className="border border-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Strictly Necessary Cookies</h3>
                  <p className="text-sm">
                    These cookies are essential for the website to function and cannot be disabled.
                    They are usually set in response to actions you take such as setting privacy preferences or logging in.
                  </p>
                </div>
                <div className="border border-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Performance Cookies</h3>
                  <p className="text-sm">
                    These cookies help us understand how visitors interact with our website by collecting
                    and reporting information anonymously.
                  </p>
                </div>
                <div className="border border-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Functional Cookies</h3>
                  <p className="text-sm">
                    These cookies enable enhanced functionality and personalization, such as remembering
                    your preferences and settings.
                  </p>
                </div>
              </div>

              <h2 className="text-xl font-semibold mb-3">Managing cookies</h2>
              <p className="mb-4">
                You can control and manage cookies in various ways. Most browsers allow you to refuse or delete cookies.
                The methods for managing cookies vary from browser to browser.
              </p>

              <h2 className="text-xl font-semibold mb-3">Contact us</h2>
              <p className="mb-6">
                If you have any questions about our use of cookies, please contact us at <a href="mailto:info@privatecharterx.com" className="underline">info@privatecharterx.com</a>
              </p>

              <div className="flex gap-3 pt-4 border-t border-gray-700">
                <button
                  onClick={handleAccept}
                  className="px-6 py-2.5 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  Accept All Cookies
                </button>
                <button
                  onClick={handleBackToBanner}
                  className="px-6 py-2.5 border border-gray-600 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  Back to Banner
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-1 left-1 right-1 z-50 mx-1">
      {/* Glassmorphic Container */}
      <div className="relative backdrop-blur-xl bg-gradient-to-br from-gray-800/80 via-gray-700/70 to-gray-900/80 border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 flex items-center justify-between gap-6">
          {/* Left: Rotating Logo */}
          <div className="flex-shrink-0">
            <div className="relative w-16 h-16">
              {/* Rotating logo container */}
              <img
                src="https://i.ibb.co/DPF5g3Sk/iu42DU1.png"
                alt="PrivateCharterX"
                className="w-full h-full object-contain animate-spin-slow"
              />
            </div>
          </div>

          {/* Middle: Text Content */}
          <div className="flex-1 flex items-center gap-4">
            <Cookie size={24} className="text-white/90 flex-shrink-0 hidden sm:block" />
            <p className="text-sm font-light text-white/90 leading-relaxed">
              We use cookies to enhance your experience while prioritizing your privacy and data protection.
              By continuing to visit this site you agree to our use of cookies.
            </p>
          </div>

          {/* Right: Buttons */}
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={handleAccept}
              className="px-6 py-2.5 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Accept
            </button>
            <button
              onClick={handleLearnMore}
              className="px-6 py-2.5 border border-white/30 backdrop-blur-sm bg-white/5 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-200"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* CSS for slow rotation animation */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}
