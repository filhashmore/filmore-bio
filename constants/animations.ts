// Animation viewport configurations
export const VIEWPORT = {
  mobile: { once: true, margin: "-50px" as const },
  desktop: { once: true, margin: "-100px" as const },
};

// Transition configurations
export const TRANSITION = {
  mobile: { duration: 0.4, ease: "easeOut" as const },
  desktop: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  fast: { duration: 0.25, ease: "easeOut" as const },
  slow: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
};

// Common animation delays
export const STAGGER_DELAY = 0.1;

// Responsive breakpoints
export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
};
