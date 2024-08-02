import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const StressQuery: React.FC = () => {
    const [question, setQuestion] = useState<string>('');
    const [response, setResponse] = useState<string>('');

    const handleQuery = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/ai/query', { question });
            setResponse(res.data);
            toast.success('Response received!');
        } catch (error) {
            toast.error('Failed to get response.');
            console.error(error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                        Ask about Stress
                    </h2>
                    <p className="mt-2 text-center text-sm leading-5 text-gray-600">
                        Enter your question below to receive expert advice on managing stress.
                    </p>
                </div>
                <form onSubmit={handleQuery} className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm">
                        <div>
                            <label htmlFor="question" className="block text-sm font-medium leading-5 text-gray-700">
                                Your Question
                            </label>
                            <input
                                id="question"
                                name="question"
                                type="text"
                                required
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm sm:leading-5"
                                placeholder="Enter your question"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                {response && (
                    <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-gray-900">Response</h3>
                        <p className="mt-2 text-gray-700">{response}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StressQuery;
