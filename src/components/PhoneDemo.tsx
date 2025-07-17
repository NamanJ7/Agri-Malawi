import React, { useState } from 'react';
import { Phone, Smartphone, MessageSquare, User, CreditCard, CheckCircle, ChevronRight } from 'lucide-react';

const PhoneDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'payment' | 'ussd'>('payment');
  const [screen, setScreen] = useState<'login' | 'dashboard' | 'payment' | 'success'>('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [amount, setAmount] = useState('48');
  const [ussdCode, setUssdCode] = useState('');
  const [ussdResponse, setUssdResponse] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      setScreen('dashboard');
      setLoginError('');
    } else {
      setLoginError('Please enter both username and password');
    }
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setScreen('success');
  };

  const handleUssdSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ussdCode === '*123#') {
      setUssdResponse('Welcome to AgriMalawi Payment\n1. Make Payment\n2. Check Balance\n3. Payment History\n4. Help');
    } else if (ussdCode === '1') {
      setUssdResponse('Select payment amount:\n1. Full payment (MWK 35,000)\n2. Partial payment\n3. Back to main menu');
    } else if (ussdCode === '1.1') {
      setUssdResponse('Confirm payment of MWK 35,000 (=$48):\n1. Confirm\n2. Cancel');
    } else if (ussdCode === '1.1.1') {
      setUssdResponse('Payment of MWK 35,000 successful!\nNext payment due: After harvest\nThank you for using AgriMalawi Pay.');
    } else if (ussdCode === '2') {
      setUssdResponse('Your current balance:\nAmount due: MWK 35,000\nDue date: Next harvest\nPayments made: 2/4');
    } else if (ussdCode === '3') {
      setUssdResponse('Payment History:\n1. 12/2023: MWK 35,000\n2. 06/2023: MWK 35,000\n3. Back to main menu');
    } else if (ussdCode === '4') {
      setUssdResponse('Need help?\nCall: 0888 123 456\nSMS: 0888 123 456\nEmail: support@agrimalawi.com\n5. Back to main menu');
    } else {
      setUssdResponse('Enter a USSD code:\n*123# - Access AgriMalawi Menu\n1 - Make Payment\n2 - Check Balance\n3 - Payment History\n4 - Help');
    }
  };

  const resetDemo = () => {
    setScreen('login');
    setUsername('');
    setPassword('');
    setAmount('48');
    setUssdCode('');
    setUssdResponse('');
    setLoginError('');
  };

  return (
    <section id="payment-section" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Will Farmers Pay?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our hybrid payment solution works for both smartphone users (57%) and 
            those without internet access, ensuring all farmers can participate.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="w-full md:w-1/2 lg:w-2/5 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Payment Options</h3>
            <p className="text-gray-600 mb-6">
              Farmers pay $48 twice a year, coinciding with their harvest seasons 
              when they have stable income. After two years, the solar pump belongs to them.
            </p>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h4 className="text-xl font-semibold mb-4">Payment Schedule</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="font-medium">Payment Amount:</span>
                  <span className="text-green-600 font-bold">$48 (MWK 35,000)</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="font-medium">Frequency:</span>
                  <span>Twice per year (after harvest)</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="font-medium">Total Duration:</span>
                  <span>2 years (4 payments)</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="font-medium">Total Cost:</span>
                  <span className="text-green-600 font-bold">$192 (MWK 140,000)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Monthly Income Impact:</span>
                  <span className="text-green-600">+$40-100</span>
                </div>
              </div>
            </div>
            
            <div className="flex mb-6">
              <button 
                className={`flex-1 py-3 px-4 font-medium ${activeTab === 'payment' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                onClick={() => setActiveTab('payment')}
              >
                <div className="flex items-center justify-center">
                  <Smartphone size={20} className="mr-2" />
                  <span>Online Platform</span>
                </div>
              </button>
              <button 
                className={`flex-1 py-3 px-4 font-medium ${activeTab === 'ussd' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                onClick={() => setActiveTab('ussd')}
              >
                <div className="flex items-center justify-center">
                  <MessageSquare size={20} className="mr-2" />
                  <span>SMS/USSD</span>
                </div>
              </button>
            </div>
            
            {activeTab === 'ussd' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-xl font-semibold mb-4">USSD Menu Guide</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ChevronRight size={20} className="text-green-600 mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium">*123#</span> - Main Menu
                      <ul className="mt-1 ml-6 text-sm text-gray-600">
                        <li>1. Make Payment</li>
                        <li>2. Check Balance</li>
                        <li>3. Payment History</li>
                        <li>4. Help</li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={20} className="text-green-600 mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium">Payment Menu (1)</span>
                      <ul className="mt-1 ml-6 text-sm text-gray-600">
                        <li>1.1 Full payment (MWK 35,000)</li>
                        <li>1.2 Partial payment</li>
                        <li>1.3 Back to main menu</li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={20} className="text-green-600 mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium">Balance Check (2)</span>
                      <ul className="mt-1 ml-6 text-sm text-gray-600">
                        <li>Shows amount due</li>
                        <li>Payment progress (e.g., 2/4)</li>
                        <li>Next payment date</li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={20} className="text-green-600 mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium">Payment History (3)</span>
                      <ul className="mt-1 ml-6 text-sm text-gray-600">
                        <li>Last 3 payments</li>
                        <li>Payment dates and amounts</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
          
          <div className="w-full md:w-1/2 lg:w-2/5">
            <div className="relative mx-auto" style={{maxWidth: "280px"}}>
              {/* Phone Frame */}
              <div className="relative border-8 border-gray-800 rounded-[36px] overflow-hidden shadow-xl aspect-[9/19] bg-white">
                {/* Phone Notch */}
                <div className="absolute top-0 inset-x-0 h-6 bg-gray-800 flex justify-center items-end">
                  <div className="w-16 h-4 bg-gray-800 rounded-b-xl"></div>
                </div>
                
                {/* Phone Screen */}
                <div className="pt-8 h-full flex flex-col bg-gray-100">
                  {/* Phone UI */}
                  <div className="flex-1 overflow-hidden flex flex-col">
                    {activeTab === 'payment' ? (
                      <>
                        {/* App Header */}
                        <div className="bg-green-600 text-white p-4 flex items-center justify-between">
                          <div className="flex items-center">
                            <Phone className="mr-2" size={18} />
                            <span className="font-semibold">AgriMalawi Pay</span>
                          </div>
                          {screen !== 'login' && (
                            <button 
                              onClick={resetDemo}
                              className="text-xs bg-white text-green-600 px-2 py-1 rounded"
                            >
                              Sign Out
                            </button>
                          )}
                        </div>
                        
                        {/* App Content */}
                        <div className="flex-1 p-4">
                          {screen === 'login' && (
                            <form onSubmit={handleLogin} className="h-full flex flex-col">
                              <h3 className="text-lg font-semibold mb-4">Farmer Login</h3>
                              {loginError && (
                                <div className="bg-red-100 text-red-600 p-2 rounded text-xs mb-4">
                                  {loginError}
                                </div>
                              )}
                              <div className="mb-3">
                                <label className="block text-xs mb-1">Username</label>
                                <div className="flex items-center border rounded overflow-hidden">
                                  <div className="bg-gray-200 p-2">
                                    <User size={16} />
                                  </div>
                                  <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="flex-1 p-2 text-sm outline-none"
                                    placeholder="Enter your username"
                                  />
                                </div>
                              </div>
                              <div className="mb-4">
                                <label className="block text-xs mb-1">Password</label>
                                <div className="flex items-center border rounded overflow-hidden">
                                  <div className="bg-gray-200 p-2">
                                    <CreditCard size={16} />
                                  </div>
                                  <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="flex-1 p-2 text-sm outline-none"
                                    placeholder="Enter your password"
                                  />
                                </div>
                              </div>
                              <button
                                type="submit"
                                className="bg-green-600 text-white py-2 rounded text-sm font-medium"
                              >
                                Login
                              </button>
                              <p className="text-xs text-center mt-3">
                                For demo, any username and password will work
                              </p>
                            </form>
                          )}
                          
                          {screen === 'dashboard' && (
                            <div className="h-full flex flex-col">
                              <h3 className="text-lg font-semibold mb-4">Payment Dashboard</h3>
                              <div className="bg-white rounded p-3 shadow-sm mb-3">
                                <div className="flex justify-between mb-1">
                                  <span className="text-xs text-gray-600">Next Payment:</span>
                                  <span className="text-xs font-semibold">After Harvest</span>
                                </div>
                                <div className="flex justify-between mb-1">
                                  <span className="text-xs text-gray-600">Amount Due:</span>
                                  <span className="text-xs font-semibold">$48 (MWK 35,000)</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-xs text-gray-600">Status:</span>
                                  <span className="text-xs font-semibold text-yellow-600">Upcoming</span>
                                </div>
                              </div>
                              <div className="bg-white rounded p-3 shadow-sm mb-4">
                                <div className="text-xs font-medium mb-2">Payment Progress</div>
                                <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                                  <div className="bg-green-600 h-2 rounded-full" style={{width: '50%'}}></div>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-xs">2/4 payments</span>
                                  <span className="text-xs">50% complete</span>
                                </div>
                              </div>
                              <div className="bg-white rounded p-3 shadow-sm mb-4">
                                <div className="text-xs font-medium mb-2">Recent Payments</div>
                                <div className="space-y-2">
                                  <div className="flex justify-between text-xs">
                                    <span>December 2023</span>
                                    <span className="text-green-600">MWK 35,000 paid</span>
                                  </div>
                                  <div className="flex justify-between text-xs">
                                    <span>June 2023</span>
                                    <span className="text-green-600">MWK 35,000 paid</span>
                                  </div>
                                </div>
                              </div>
                              <button
                                onClick={() => setScreen('payment')}
                                className="bg-green-600 text-white py-2 rounded text-sm font-medium mt-auto"
                              >
                                Make Payment
                              </button>
                            </div>
                          )}
                          
                          {screen === 'payment' && (
                            <form onSubmit={handlePayment} className="h-full flex flex-col">
                              <h3 className="text-lg font-semibold mb-4">Make Payment</h3>
                              <div className="mb-3">
                                <label className="block text-xs mb-1">Payment Amount</label>
                                <div className="flex items-center gap-2">
                                  <input
                                    type="text"
                                    value={`$${amount}`}
                                    className="w-1/2 p-2 text-sm border rounded outline-none bg-gray-50"
                                    readOnly
                                  />
                                  <input
                                    type="text"
                                    value="MWK 35,000"
                                    className="w-1/2 p-2 text-sm border rounded outline-none bg-gray-50"
                                    readOnly
                                  />
                                </div>
                              </div>
                              <div className="mb-3">
                                <label className="block text-xs mb-1">Payment Method</label>
                                <select className="w-full p-2 text-sm border rounded outline-none">
                                  <option>Airtel Money</option>
                                  <option>TNM Mpamba</option>
                                  <option>Bank Transfer</option>
                                </select>
                              </div>
                              <div className="mb-4">
                                <label className="block text-xs mb-1">Phone Number</label>
                                <input
                                  type="text"
                                  className="w-full p-2 text-sm border rounded outline-none"
                                  placeholder="Enter your phone number"
                                />
                              </div>
                              <button
                                type="submit"
                                className="bg-green-600 text-white py-2 rounded text-sm font-medium mt-auto"
                              >
                                Confirm Payment
                              </button>
                            </form>
                          )}
                          
                          {screen === 'success' && (
                            <div className="h-full flex flex-col items-center justify-center text-center">
                              <CheckCircle size={48} className="text-green-600 mb-4" />
                              <h3 className="text-lg font-semibold mb-2">Payment Successful!</h3>
                              <p className="text-xs text-gray-600 mb-4">
                                Your payment of MWK 35,000 ($48) has been received. Your next payment will be due after harvest.
                              </p>
                              <button
                                onClick={() => setScreen('dashboard')}
                                className="bg-green-600 text-white py-2 rounded text-sm font-medium w-full"
                              >
                                Return to Dashboard
                              </button>
                            </div>
                          )}
                        </div>
                      </>
                    ) : (
                      <>
                        {/* USSD UI */}
                        <div className="bg-black text-white h-full p-4 flex flex-col">
                          <div className="text-center mb-4">
                            <h3 className="text-sm font-normal mb-1">Mobile Network</h3>
                            <div className="text-xs opacity-70">USSD Service</div>
                          </div>
                          
                          <div className="flex-1 bg-gray-900 rounded p-3 mb-4 overflow-y-auto text-xs font-mono">
                            {ussdResponse ? (
                              <div className="whitespace-pre-line">{ussdResponse}</div>
                            ) : (
                              <div className="text-center opacity-70">Enter a USSD code below</div>
                            )}
                          </div>
                          
                          <form onSubmit={handleUssdSubmit} className="flex">
                            <input
                              type="text"
                              value={ussdCode}
                              onChange={(e) => setUssdCode(e.target.value)}
                              className="flex-1 bg-gray-800 text-white p-2 text-sm rounded-l outline-none"
                              placeholder="*123#"
                            />
                            <button
                              type="submit"
                              className="bg-green-600 text-white py-1 px-3 rounded-r text-sm"
                            >
                              Send
                            </button>
                          </form>
                          
                          <div className="text-xs text-center mt-3 opacity-70">
                            Try: *123#, 1, 1.1, 1.1.1
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoneDemo;