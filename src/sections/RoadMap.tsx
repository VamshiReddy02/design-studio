import { useState } from "react";
import { motion } from "framer-motion";
import ProCards from "../components/ProCards";


const productDesignProcess = [
  {
    title: "Understand User Needs & Goals",
    date: "Phase 1",
    imgPath: "/images/phase1.png",
    logoPath: "/images/logo1.png",
    review: "Gathering user insights and aligning with product goals ensures meaningful and targeted outcomes.",
    responsibilities: [
      "Collaborated with UI/UX designers and stakeholders to identify user needs.",
      "Conducted research and gathered feedback to define core problems.",
      "Aligned product features with business goals.",
    ],
  },
  {
    title: "Plan & Architect the Solution",
    date: "Phase 2",
    imgPath: "/images/phase2.png",
    logoPath: "/images/logo2.png",
    review: "Strong architectural planning lays the foundation for scalable and maintainable products.",
    responsibilities: [
      "Designed scalable architecture suited to product requirements.",
      "Selected appropriate frameworks and technologies.",
      "Defined API contracts and integration points.",
    ],
  },
  {
    title: "Design the User Experience",
    date: "Phase 3",
    imgPath: "/images/phase3.png",
    logoPath: "/images/logo3.png",
    review: "UI/UX collaboration ensures intuitive and accessible interfaces across devices.",
    responsibilities: [
      "Converted wireframes into high-fidelity designs.",
      "Ensured consistent design language and accessibility standards.",
      "Validated designs with users and stakeholders.",
    ],
  },
  {
    title: "Develop Frontend & Backend Systems",
    date: "Phase 4",
    imgPath: "/images/phase4.png",
    logoPath: "/images/logo4.png",
    review: "Seamless integration of frontend and backend components results in robust applications.",
    responsibilities: [
      "Built responsive user interfaces using modern frameworks.",
      "Integrated backend APIs for dynamic functionality.",
      "Ensured smooth collaboration between frontend and backend teams.",
    ],
  },
  {
    title: "Optimize for Performance & Scalability",
    date: "Phase 5",
    imgPath: "/images/phase5.png",
    logoPath: "/images/logo5.png",
    review: "Performance tuning ensures fast, scalable experiences for users across platforms.",
    responsibilities: [
      "Reduced load times and optimized rendering performance.",
      "Implemented lazy loading and caching strategies.",
      "Monitored and improved system scalability.",
    ],
  },
  {
    title: "Test & Iterate",
    date: "Phase 6",
    imgPath: "/images/phase6.png",
    logoPath: "/images/logo6.png",
    review: "Continuous testing and iteration lead to refined and reliable products.",
    responsibilities: [
      "Conducted unit, integration, and usability tests.",
      "Collected user feedback and analytics post-deployment.",
      "Refined features based on test results and metrics.",
    ],
  },
  {
    title: "Launch & Maintain",
    date: "Phase 7",
    imgPath: "/images/phase7.png",
    logoPath: "/images/logo7.png",
    review: "Ongoing support and iteration keep the product aligned with evolving needs.",
    responsibilities: [
      "Deployed the product to production environments.",
      "Monitored real-world performance and addressed issues.",
      "Rolled out feature updates and enhancements regularly.",
    ],
  },
];

const RoadMap: React.FC = () => {
  const [visibleCardIndex, setVisibleCardIndex] = useState(0);

  const handleCardInView = (index: number) => {
    if (index + 1 > visibleCardIndex) {
      setVisibleCardIndex(index + 1);
    }
  };

  return (
    <section className="py-32 text-white">
      <div className="container mx-auto relative px-4">
        <h1 className="text-4xl font-extrabold text-center mb-24 tracking-tight">
          Roadmap
        </h1>

        <div className="relative">
          <motion.div
            style={{ height: `${visibleCardIndex * 310}px` }}
            className="absolute left-1/2 top-0 w-[2px] bg-white transform -translate-x-1/2 z-10 transition-all duration-500"
          />

          <div className="relative flex flex-col gap-32">
            {productDesignProcess.map((phase, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="flex w-full items-start min-h-[220px]"
                >
                  {/* Left side */}
                  <div className="w-1/2 flex justify-end pr-12">
                    {isLeft ? (
                      <ProCards
                        title={phase.title}
                        description={phase.review}
                        side="left"
                        onInView={() => handleCardInView(index)}
                      />
                    ) : (
                      <div className="invisible max-w-md w-full h-full p-6" />
                    )}
                  </div>

                  {/* Right side */}
                  <div className="w-1/2 flex justify-start pl-12">
                    {!isLeft ? (
                      <ProCards
                        title={phase.title}
                        description={phase.review}
                        side="right"
                        onInView={() => handleCardInView(index)}
                      />
                    ) : (
                      <div className="invisible max-w-md w-full h-full p-6" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
