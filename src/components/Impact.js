import React, { useEffect, useRef, useState } from "react";

const Impact = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const impactRef = useRef(null);
  const [beneficiaries, setBeneficiaries] = useState(0);
  const [villages, setVillages] = useState(0);
  const [projects, setProjects] = useState(0);
  const [states, setStates] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        startCounting();
        observer.disconnect();
      }
    });

    if (impactRef.current) {
      observer.observe(impactRef.current);
    }
  }, [hasAnimated]);

  const startCounting = () => {
    const duration = 2500;
    const incrementBeneficiaries = Math.ceil(500000 / (duration / 40));
    const incrementVillages = Math.ceil(2500 / (duration / 40));
    const incrementProjects = Math.ceil(100 / (duration / 40));
    const incrementStates = Math.ceil(1000 / (duration / 40));

    let counterBeneficiaries = 0;
    let counterVillages = 0;
    let counterProjects = 0;
    let counterStates = 0;

    const animate = () => {
      counterBeneficiaries += incrementBeneficiaries;
      counterVillages += incrementVillages;
      counterProjects += incrementProjects;
      counterStates += incrementStates;

      setBeneficiaries((prev) =>
        prev < 500000 ? counterBeneficiaries : 500000
      );
      setVillages((prev) => (prev < 2500 ? counterVillages : 2500));
      setProjects((prev) => (prev < 100 ? counterProjects : 100));
      setStates((prev) => (prev < 1000 ? counterStates : 1000));

      if (
        counterBeneficiaries < 500000 ||
        counterVillages < 2500 ||
        counterProjects < 100 ||
        counterStates < 1000
      ) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  };

  return (
    <section
      id="impact"
      className="relative py-24 bg-gray-100 min-h-[500px]"
      ref={impactRef}
    >
      <div className="absolute top-6 left-0 right-0 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 py-8">
          Our Impact
        </h2>
      </div>

      <div className="container mx-auto px-4 relative top-32 flex justify-center items-center min-h-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full">
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-semibold text-green-600">
              {beneficiaries.toLocaleString()}+
            </h3>
            <p className="mt-3 text-lg md:text-xl font-medium text-gray-600">
              Students impacted globally
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-semibold text-green-600">
              {villages.toLocaleString()}+
            </h3>
            <p className="mt-3 text-lg md:text-xl font-medium text-gray-600">
              Online sessions on space & satellite education
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-semibold text-green-600">
              {projects.toLocaleString()}+
            </h3>
            <p className="mt-3 text-lg md:text-xl font-medium text-gray-600">
              Countries covered through online sessions
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-semibold text-green-600">
              {states.toLocaleString()}+
            </h3>
            <p className="mt-3 text-lg md:text-xl font-medium text-gray-600">
              Educators, principals, directors, and teachers engaged worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
