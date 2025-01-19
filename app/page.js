import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <header className="relative bg-gray-800  px-12">
        <div className="md:w-[80%] flex mx-auto">
          <div className="px-6 lg:px-12 flex flex-col justify-center gap-5">
            <h1 className="text-2xl md:text-4xl font-extrabold">
              Chat App - Chat with your Friends and more!
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-400">
              The simplest way to connect, chat, and collaborate with your friends.
            </p>
          </div>
          <div className="mt-6">
            <Image width={1000} height={100} alt="Chat picture" src={"Chat.svg"} />
          </div>
        </div>
        <div className="mx-48 pb-8 flex gap-5 my-[-40px]">
          <Link href={"/"} className="border-white border p-2 rounded-lg">View on Github</Link>
          <Link href="/chat" className="border-white border p-2 rounded-lg">Start Chatting</Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-36 bg-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black">
            Key Features
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
            {/* Feature 1 */}
            <div className="text-center bg-white p-4 rounded-lg shadow-lg py-8">
              <div className="text-blue-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 10H16M8 14H14M9 17V15M7 8H17V9.8M6 17H8V15M9 17V15M7 8H17V9.8"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Real-Time Messaging</h3>
              <p className="mt-2 text-black">
                Chat seamlessly with your friends and colleagues in real time.
              </p>
            </div>
            <div className="text-center bg-white p-4 rounded-lg shadow-lg py-8">
              <div className="text-blue-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20l9-5-9-5-9 5 9 5zm0-10l9-5-9-5-9 5 9 5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Group Chats</h3>
              <p className="mt-2 text-black">
                Create and join chats with your loved ones
              </p>
            </div>
            <div className="text-center bg-white p-4 rounded-lg shadow-lg py-8">
              <div className="text-blue-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10h1M2 10h.1M3 10h1M3 12h18M3 14h18M6 5h12m-6-1v6M3 21h18M9 20v2m6-2v2m-6-2h6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">File Sharing</h3>
              <p className="mt-2 text-black">
                Easily share photos, videos and documents
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pay Section */}
      <section className="pb-28 bg-gray-100 mx-auto">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-10">
            Pay once, use forever
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto md:w-[80%]">
            {/* Basic Plan */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-gray-700">Basic</h3>
              <p className="mt-4 text-gray-500">For individuals starting out</p>
              <p className="mt-6 text-4xl font-bold text-black">$49</p>
              <p className="text-gray-500 mt-2">One-time payment</p>
              <ul className="mt-6 space-y-3 text-gray-700">
                <li>✓ Basic features</li>
                <li>✓ 1 user account</li>
                <li>✓ Community support</li>
              </ul>
              <button className="mt-8 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Get Started
              </button>
            </div>

            {/* Pro Plan (Highlighted) */}
            <div className="bg-white p-6 rounded-lg shadow-md border-4 border-blue-500 text-center">
              <h3 className="text-xl font-semibold text-gray-700">Pro</h3>
              <p className="mt-4 text-gray-500">For growing teams and businesses</p>
              <p className="mt-6 text-4xl font-bold text-black">$99</p>
              <p className="text-gray-500 mt-2">One-time payment</p>
              <ul className="mt-6 space-y-3 text-gray-700">
                <li>✓ All Basic features</li>
                <li>✓ Up to 5 user accounts</li>
                <li>✓ Priority support</li>
              </ul>
              <button className="mt-8 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Get Pro
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-700">Enterprise</h3>
              <p className="mt-4 text-gray-500">For large organizations</p>
              <p className="mt-6 text-4xl font-bold text-black">$199</p>
              <p className="text-gray-500 mt-2">One-time payment</p>
              <ul className="mt-6 space-y-3 text-gray-700">
                <li>✓ All Pro features</li>
                <li>✓ Unlimited user accounts</li>
                <li>✓ Dedicated support</li>
              </ul>
              <button className="mt-8 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Get Enterprise
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-16 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold text-blue-400">
          Ready to Connect?
        </h2>
        <div className="mt-6">
          <Link className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition" href="/chat">
            Chat Now
          </Link>
        </div>
      </section>
    </div>
  );
}
