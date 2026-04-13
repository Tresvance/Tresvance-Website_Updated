"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, animate, easeOut } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function ThreeDImageRing({
  images = [],
  rotation = 0,
  width = 320,
  perspective = 7000,
  imageDistance = 400,
  initialRotation = 0,
  animationDuration = 1.2,
  staggerDelay = 0.1,
  hoverOpacity = 0.5,
  draggable = true,
  ease = "easeOut",
  inertiaPower = 0.8,
  inertiaTimeConstant = 300,
  inertiaVelocityMultiplier = 20,
}) {
  const containerRef = useRef(null);
  const ringRef = useRef(null);

  const rotationY = useMotionValue(initialRotation);
  const startX = useRef(0);
  const currentRotationY = useRef(initialRotation);
  const isDragging = useRef(false);
  const velocity = useRef(0);
  const activePointerId = useRef(null);
  const animationRef = useRef(null); // ✅ NEW (prevents overlap)

  const [showImages, setShowImages] = useState(false);
  const [frontIndex, setFrontIndex] = useState(0);

  const angle = useMemo(() => 360 / Math.max(1, images.length), [images.length]);

  useEffect(() => setShowImages(true), []);

  useEffect(() => {
    const unsubscribe = rotationY.onChange((v) => {
      currentRotationY.current = v;
    });
    return () => unsubscribe();
  }, [rotationY]);

  // ✅ FIXED AUTO ROTATION (NO GLITCH)
  useEffect(() => {
  // 🚫 Prevent overlapping animations
  if (animationRef.current) return;

  const target = currentRotationY.current + angle;

  animationRef.current = animate(rotationY, target, {
    duration: 1.2,
    ease: "linear", // ✅ constant speed (IMPORTANT)
    onUpdate: (latest) => {
      currentRotationY.current = latest;

      const normalized = ((latest % 360) + 360) % 360;
      const newFront = Math.round(normalized / angle) % images.length;
      setFrontIndex((images.length - newFront) % images.length);
    },
    onComplete: () => {
      // ✅ allow next rotation only after finish
      animationRef.current = null;
    },
  });
}, [rotation]);

  const handleDragStart = (event) => {
    if (!draggable) return;

    const isTouch = !!event.touches;
    const clientX = isTouch ? event.touches[0].clientX : event.clientX;

    isDragging.current = true;
    startX.current = clientX;

    if (event.pointerId) activePointerId.current = event.pointerId;

    if (animationRef.current) animationRef.current.stop(); // ✅ stop auto animation
    velocity.current = 0;

    if (ringRef.current) ringRef.current.style.cursor = "grabbing";

    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", handleDragEnd);
    document.addEventListener("touchmove", handleDrag, { passive: false });
    document.addEventListener("touchend", handleDragEnd);
    document.addEventListener("pointermove", handleDrag);
    document.addEventListener("pointerup", handleDragEnd);
  };

  const handleDrag = (event) => {
    if (!isDragging.current) return;

    if (activePointerId.current && event.pointerId && event.pointerId !== activePointerId.current) return;

    if (event.type === "touchmove") event.preventDefault();

    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const deltaX = clientX - startX.current;
    startX.current = clientX;

    const deltaDeg = deltaX * 0.6;

    velocity.current = deltaDeg;
    currentRotationY.current += deltaDeg;
    rotationY.set(currentRotationY.current);

    const normalized = ((currentRotationY.current % 360) + 360) % 360;
    const newFront = Math.round(normalized / angle) % images.length;
    setFrontIndex((images.length - newFront) % images.length);
  };

  const handleDragEnd = () => {
    if (!isDragging.current) return;

    isDragging.current = false;
    activePointerId.current = null;

    if (ringRef.current) ringRef.current.style.cursor = "grab";

    document.removeEventListener("mousemove", handleDrag);
    document.removeEventListener("mouseup", handleDragEnd);
    document.removeEventListener("touchmove", handleDrag);
    document.removeEventListener("touchend", handleDragEnd);
    document.removeEventListener("pointermove", handleDrag);
    document.removeEventListener("pointerup", handleDragEnd);

    const initial = rotationY.get();
    const velocityBoost = velocity.current * inertiaVelocityMultiplier;
    const target = initial + velocityBoost;

    animate(initial, target, {
      type: "inertia",
      velocity: velocityBoost,
      power: inertiaPower,
      timeConstant: inertiaTimeConstant,
      restDelta: 0.5,
      modifyTarget: (t) => Math.round(t / angle) * angle,
      onUpdate: (latest) => {
        rotationY.set(latest);

        const normalized = ((latest % 360) + 360) % 360;
        const newFront = Math.round(normalized / angle) % images.length;
        setFrontIndex((images.length - newFront) % images.length);

        currentRotationY.current = latest;
      },
    });

    velocity.current = 0;
  };

  const handleArrowClick = (direction) => {
    const current = rotationY.get();
    const newRotation = current + direction * angle;

    if (animationRef.current) animationRef.current.stop();

    animate(rotationY, newRotation, {
      duration: 0.8,
      ease: easeOut,
      onUpdate: (latest) => {
        const normalized = ((latest % 360) + 360) % 360;
        const newFront = Math.round(normalized / angle) % images.length;
        setFrontIndex((images.length - newFront) % images.length);
      },
    });

    currentRotationY.current = newRotation;
  };

  const imageVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full overflow-hidden select-none relative flex flex-col items-center justify-center"
      onMouseDown={draggable ? handleDragStart : undefined}
      onTouchStart={draggable ? handleDragStart : undefined}
      onPointerDown={draggable ? handleDragStart : undefined}
    >
      <div
        style={{
          perspective: `${perspective}px`,
          width: `${width}px`,
          height: `${width * 1.3}px`,
          position: "relative",
        }}
      >
        <motion.div
          ref={ringRef}
          className="absolute w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            rotateY: rotationY,
            cursor: draggable ? "grab" : "default",
          }}
        >
          <AnimatePresence>
            {showImages &&
              images.map((imageUrl, index) => {
                const isFront = index === frontIndex;

                return (
                  <motion.div
                    key={index}
                    className="absolute w-full h-full rounded-lg shadow-lg overflow-hidden"
                    style={{
                      transformStyle: "preserve-3d",
                      backgroundImage: `url(${imageUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backfaceVisibility: "hidden",
                      rotateY: index * -angle,
                      z: imageDistance,
                      transformOrigin: `50% 50% -${imageDistance}px`,
                    }}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={imageVariants}
                    transition={{
                      delay: index * staggerDelay,
                      duration: animationDuration,
                      ease: easeOut,
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {isFront && (
                      <Link
                        to="/our-works"
                        className="absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </Link>
                    )}
                  </motion.div>
                );
              })}
          </AnimatePresence>
        </motion.div>
      </div>

      <br />

      <div className="flex space-x-6 mt-8">
        <button onClick={() => handleArrowClick(1)} className="p-3 bg-white shadow-md rounded-full hover:bg-gray-100">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button onClick={() => handleArrowClick(-1)} className="p-3 bg-white shadow-md rounded-full hover:bg-gray-100">
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default ThreeDImageRing;