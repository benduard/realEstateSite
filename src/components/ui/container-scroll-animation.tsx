"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: [0.1, 0.3]
  });
  const [isMobile, setIsMobile] = React.useState(false);
  const [isTablet, setIsTablet] = React.useState(false);

  React.useEffect(() => {
    const checkDeviceSize = () => {
      setIsMobile(window.innerWidth <= 640);
      setIsTablet(window.innerWidth > 640 && window.innerWidth <= 1024);
    };
    checkDeviceSize();
    window.addEventListener("resize", checkDeviceSize);
    return () => {
      window.removeEventListener("resize", checkDeviceSize);
    };
  }, []);

  const scaleDimensions = () => {
    if (isMobile) return [0.6, 0.6];
    if (isTablet) return [0.65, 0.65];
    return [0.7, 0.7];
  };

  const rotate = useTransform(scrollYProgress, [-0.3, 0.15], [15, 0], { clamp: true });
  const scale = useTransform(scrollYProgress, [-0.3, 0.15], [1.5, 1], { clamp: true });
  const translate = useTransform(scrollYProgress, [-0.5, 0.15], [-1, -2], { clamp: true });

  return (
    <div
      className="min-h-[100vh] flex items-center justify-center relative p-2 sm:p-4 md:p-10 lg:p-20 pt-[20vh] sm:pt-[25vh] md:pt-[30vh]"
      ref={containerRef}
      style={{ position: 'relative' }}
    >
      <div
        className="py-5 sm:py-10 md:py-20 w-full relative"
        style={{
          perspective: "1500px",
          transformStyle: "preserve-3d",
          position: 'relative',
          backfaceVisibility: "hidden",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} scale={scale} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent, scale }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
        scale,
      }}
      className="div max-w-[90vw] sm:max-w-[85vw] md:max-w-[80vw] mx-auto text-center mb-6 sm:mb-8 px-4"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black dark:text-white max-w-full">
        {titleComponent}
      </h1>
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="w-[90vw] sm:w-[85vw] md:w-[80vw] max-w-[1200px] mx-auto aspect-[16/9] border-4 sm:border-8 border-[#222222] rounded-[20px] sm:rounded-[30px] shadow-2xl"
    >
      <motion.div 
        className="h-full w-full rounded-[16px] sm:rounded-[22px] bg-gray-100 dark:bg-zinc-900"
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}; 