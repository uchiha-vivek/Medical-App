import axios from 'axios';
import React, { useState } from 'react';

const Gemini: React.FC = () => {
    const [question, setQuestion] = useState<string>("");
    const [answer, setAnswer] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    async function generateResponse() {
        setLoading(true);
        try {
            const response = await axios({
                url: 'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=', 
                method: 'post',
                data: {
                    contents: [
                        { parts: [{ text: question }] }
                    ],
                    // parameters: {
                    //     max_tokens: 100,
                    //     temperature:0.7,
                    //     top_p: 0.9,
                    // }
                }
            });
            const generatedText = response.data.candidates[0].content.parts[0].text;
            setAnswer(generatedText);
        } catch (error) {
            console.error('Error generating response:', error);
            setAnswer('Error generating response. Please try again.');
        } finally {
            setLoading(false);
        }
    }

    // Function to format the answer
    const formatAnswer = (text: string) => {
        // Split text into sentences
        const sentences = text.split('. ');
        // Join sentences into paragraphs
        return sentences.map((sentence, index) => <p key={index}>{sentence.trim()}.</p>);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Ask Gemini</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Enter your question below and get a surprise response!
                    </p>
                </div>
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label htmlFor="question" className="sr-only">
                            Your Question
                        </label>
                        <input
                            id="question"
                            name="question"
                            type="text"
                            required
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                            placeholder="Enter your question"
                        />
                    </div>
                </div>
                <div>
                    <button
                        onClick={generateResponse}
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Surprise
                    </button>
                </div>
                {loading && (
                    <div className="flex justify-center mt-4">
                        <svg className="animate-spin h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </div>
                )}
                {answer && !loading && (
                    <div className="mt-6 p-4 bg-white rounded-md shadow-md">
                        <h3 className="text-lg font-medium text-gray-900">Response:</h3>
                        <div className="mt-2 text-gray-700">
                            {formatAnswer(answer)}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Gemini;
