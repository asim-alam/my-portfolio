
import { useState, useEffect } from 'react';
import { Skeleton } from "@/components/ui/skeleton";

const quotes = [
  {
    text: "The true sign of intelligence is not knowledge but imagination.",
    author: "Albert Einstein"
  },
  {
    text: "The unexamined life is not worth living.",
    author: "Socrates"
  },
  {
    text: "Science is organized knowledge. Wisdom is organized life.",
    author: "Immanuel Kant"
  },
  {
    text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle"
  },
  {
    text: "The function of education is to teach one to think intensively and to think critically.",
    author: "Martin Luther King Jr."
  }
];

const QuoteDisplay = () => {
  const [currentQuote, setCurrentQuote] = useState<typeof quotes[0] | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomIndex]);
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center">
        <Skeleton className="h-5 w-full max-w-lg mx-auto mb-2" />
        <Skeleton className="h-5 w-2/3 mx-auto" />
        <Skeleton className="h-4 w-40 mx-auto mt-4" />
      </div>
    );
  }

  return (
    <blockquote className="max-w-2xl mx-auto">
      <p className="font-serif text-lg md:text-xl italic text-slate-300 mb-2">
        "{currentQuote?.text}"
      </p>
      <footer className="text-slate-400">— {currentQuote?.author}</footer>
    </blockquote>
  );
};

export default QuoteDisplay;
