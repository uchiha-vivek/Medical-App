import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { FaUserCircle } from 'react-icons/fa';

interface Counselor {
  name: string;
  role: string;
  description: string;
  icon?: JSX.Element;
}

const counselors: Counselor[] = [
  {
    name: 'John Doe',
    role: 'Peer Counselor',
    description: 'Experienced peer counselor helping students with emotional support and guidance.',
    icon: <FaUserCircle size={50} />
  },
  {
    name: 'Jane Smith',
    role: 'Peer Counselor',
    description: 'Providing peer support and mental health resources for students.',
    icon: <FaUserCircle size={50} />
  },
  {
    name: 'Alice Johnson',
    role: 'Peer Counselor',
    description: 'Dedicated to student well-being and mental health awareness.',
    icon: <FaUserCircle size={50} />
  }
];

const Card: React.FC = () => {
  const [questions, setQuestions] = useState<{ [key: number]: string }>({});
  const [submitted, setSubmitted] = useState<{ [key: number]: boolean }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>, index: number) => {
    setQuestions({
      ...questions,
      [index]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent, index: number) => {
    e.preventDefault();
    console.log(`Question for counselor ${index}:`, questions[index]);
    setSubmitted({
      ...submitted,
      [index]: true,
    });
  };

  return (
    <div className="p-4">
      <Carousel>
        <CarouselContent>
          {counselors.map((counselor, index) => (
            <CarouselItem key={index} className="flex justify-center items-center">
              <div className="max-w-xs p-4 bg-white rounded-lg shadow-md text-center">
                <div className="flex justify-center items-center mb-4">
                  {counselor.icon}
                </div>
                <h2 className="text-xl font-semibold mt-4">{counselor.name}</h2>
                <p className="text-gray-600 mt-2">{counselor.role}</p>
                <p className="text-gray-500 mt-2">{counselor.description}</p>
                {submitted[index] ? (
                  <p className="text-green-500 mt-4">Question submitted!</p>
                ) : (
                  <form onSubmit={(e) => handleSubmit(e, index)} className="mt-4">
                    <textarea
                      value={questions[index] || ''}
                      onChange={(e) => handleInputChange(e, index)}
                      className="w-full p-2 border border-gray-300 rounded mt-1"
                      placeholder="Ask your question here..."
                      required
                    />
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4">
                      Submit Question
                    </button>
                  </form>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2" />
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2" />
      </Carousel>
    </div>
  );
}

export default Card;
