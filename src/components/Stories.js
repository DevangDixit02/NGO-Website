import React, { useEffect, useState, useRef } from "react";

const storiesData = [
  {
    title: "Story 1",
    description: "This is a detailed story about how we helped a community in need. Our efforts have made a significant impact on their lives.",
    image: "https://images.unsplash.com/photo-1695042849689-f682ec337576?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D+1",
  },
  {
    title: "Story 2",
    description: "In this story, we showcase the journey of a young girl who achieved her dreams with our support. Her determination and courage inspire us all.",
    image: "https://images.unsplash.com/photo-1723822014779-7eee500ba09b?q=80&w=3253&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D+2",
  },
  {
    title: "Story 3",
    description: "This story highlights the challenges faced by marginalized families. We worked closely with them to provide essential resources and support.",
    image: "https://images.unsplash.com/photo-1652633490064-48479c95b97a?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D+3",
  },
  {
    title: "Story 4",
    description: "Our initiative in rural education has transformed lives. Here’s the story of how we brought learning opportunities to remote areas.",
    image: "https://images.unsplash.com/photo-1658653471356-5a9ca6e807d9?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D+4",
  },
  {
    title: "Story 5",
    description: "This inspiring tale narrates the life-changing experiences of individuals after receiving healthcare support from our foundation.",
    image: "https://images.unsplash.com/photo-1641656307774-285fb14a6ccb?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D+5",
  },
  {
    title: "Story 6",
    description: "We believe in empowering women. This story focuses on our programs that provide skills training and financial independence to women.",
    image: "https://images.unsplash.com/photo-1617361229436-9f156c1a3df7?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D+6",
  },
  {
    title: "Story 7",
    description: "This story emphasizes our commitment to environmental sustainability. Learn how we engage communities in conservation efforts.",
    image: "https://via.placeholder.com/300x200?text=Storyhttps://images.unsplash.com/photo-1716028329015-0763351939f2?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D+7",
  },
  {
    title: "Story 8",
    description: "Explore the impact of our health awareness campaigns through this story, showcasing successful initiatives in urban areas.",
    image: "https://images.unsplash.com/photo-1723982398691-4d2d67d00b06?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D+8",
  },
  {
    title: "Story 9",
    description: "The final story in this series highlights our response to natural disasters and the support we provided to affected communities.",
    image: "https://images.unsplash.com/photo-1534724364725-325f10a8e182?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D+9",
  },
];

const Stories = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const storiesPerSlide = 2.99;
  const storiesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (storiesRef.current) {
      observer.observe(storiesRef.current);
    }

    return () => {
      if (storiesRef.current) {
        observer.unobserve(storiesRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered && isVisible) {
        setCurrentStoryIndex((prevIndex) =>
          (prevIndex + 1) % Math.ceil(storiesData.length / storiesPerSlide)
        );
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered, isVisible]);

  const visibleStories = storiesData.slice(
    currentStoryIndex * storiesPerSlide,
    currentStoryIndex * storiesPerSlide + storiesPerSlide
  );

  const nextSlide = () => {
    setCurrentStoryIndex((prevIndex) =>
      (prevIndex + 1) % Math.ceil(storiesData.length / storiesPerSlide)
    );
  };

  const prevSlide = () => {
    setCurrentStoryIndex((prevIndex) =>
      (prevIndex - 1 + Math.ceil(storiesData.length / storiesPerSlide)) % Math.ceil(storiesData.length / storiesPerSlide)
    );
  };

  return (
    <section id="stories" className="py-12 bg-white" ref={storiesRef}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Our Stories</h2>
        <div className="relative mt-8 overflow-hidden">
          <div
            className={`flex transition-transform duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transform: `translateX(-${(currentStoryIndex * (100 / storiesPerSlide))}%)` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {storiesData.map((story, index) => (
              <div key={index} className="flex-shrink-0 p-4" style={{ maxWidth: '340px' }}>
                <div className="bg-gray-200 rounded-lg shadow-md p-6 h-[400px] cursor-pointer card">
                  <img src={story.image} alt={story.title} className="w-full h-40 object-cover rounded-md" />
                  <h3 className="mt-4 text-xl font-semibold">{story.title}</h3>
                  <p className="mt-2 text-gray-600">{story.description}</p>
                  <div className="overlay">
                    <h4 className="text-lg">Read More</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          {Array.from({ length: Math.ceil(storiesData.length / storiesPerSlide) }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentStoryIndex(idx)}
              className={`w-2 h-2 mx-1 rounded-full ${currentStoryIndex === idx ? 'bg-green-600' : 'bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;
