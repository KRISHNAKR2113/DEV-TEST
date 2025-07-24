import React, { useEffect, useState, useRef } from "react";

interface CustomCursorProps {
  children: React.ReactNode;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ children }) => {
      const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(true); // Default to dark
  const [hoverType, setHoverType] = useState<string>("");
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const lastPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };

      // Calculate velocity for dynamic effects
      const newVelocity = {
        x: newPosition.x - lastPosition.current.x,
        y: newPosition.y - lastPosition.current.y,
      };
      setVelocity(newVelocity);
      lastPosition.current = newPosition;
      setMousePosition(newPosition);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

            const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      let hoverTypeDetected = "";

      // Enhanced hover type detection
      if (target.tagName === "BUTTON" || target.closest("button")) {
        setIsHovering(true);
        hoverTypeDetected = "button";
      } else if (target.tagName === "A" || target.closest("a")) {
        setIsHovering(true);
        hoverTypeDetected = "link";
      } else if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.closest("input") ||
        target.closest("textarea")
      ) {
        setIsHovering(true);
        hoverTypeDetected = "input";
      } else if (
        target.style.cursor === "pointer" ||
        target.classList.contains("clickable") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovering(true);
        hoverTypeDetected = "interactive";
      } else {
        setIsHovering(false);
        hoverTypeDetected = "";
      }

      setHoverType(hoverTypeDetected);

      // Enhanced background detection for dark theme
      let element = target;
      let isDark = true; // Default to dark since we're implementing dark theme

      // Check for dark theme class on document
      if (document.documentElement.classList.contains("dark")) {
        isDark = true;
      } else {
        while (element && element !== document.body) {
          const computedStyle = window.getComputedStyle(element);
          const bgColor = computedStyle.backgroundColor;

          if (bgColor && bgColor !== "rgba(0, 0, 0, 0)" && bgColor !== "transparent") {
            const rgb = bgColor.match(/\d+/g);
            if (rgb) {
              const [r, g, b] = rgb.map(Number);
              const brightness = (r * 299 + g * 587 + b * 114) / 1000;
              isDark = brightness < 128;
              break;
            }
          }

          // Check for specific dark/light background classes
          if (
            element.classList.contains("bg-black") ||
            element.classList.contains("bg-gray-900") ||
            element.classList.contains("bg-cloudone-navy")
          ) {
            isDark = true;
            break;
          } else if (
            element.classList.contains("bg-white") ||
            element.classList.contains("bg-gray-50")
          ) {
            isDark = false;
            break;
          }

          element = element.parentElement as HTMLElement;
        }
      }

      setIsDarkBackground(isDark);
    };

    document.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
    };
    }, []);

  // Helper functions for enhanced cursor effects
  const getMainCursorBackground = () => {
    if (isHovering) {
      switch (hoverType) {
        case "button":
          return "linear-gradient(135deg, rgba(229, 0, 43, 0.4) 0%, rgba(229, 0, 43, 0.1) 100%)";
        case "link":
          return "linear-gradient(135deg, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.1) 100%)";
        case "input":
          return "linear-gradient(135deg, rgba(34, 197, 94, 0.4) 0%, rgba(34, 197, 94, 0.1) 100%)";
        default:
          return "linear-gradient(135deg, rgba(146, 208, 80, 0.4) 0%, rgba(146, 208, 80, 0.1) 100%)";
      }
    }
    return isDarkBackground
      ? "linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)"
      : "linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 100%)";
  };

  const getCursorBorder = () => {
    if (isHovering) {
      switch (hoverType) {
        case "button":
          return "2px solid rgba(229, 0, 43, 0.6)";
        case "link":
          return "2px solid rgba(59, 130, 246, 0.6)";
        case "input":
          return "2px solid rgba(34, 197, 94, 0.6)";
        default:
          return "2px solid rgba(146, 208, 80, 0.6)";
      }
    }
    return isDarkBackground
      ? "1px solid rgba(255, 255, 255, 0.4)"
      : "1px solid rgba(0, 0, 0, 0.4)";
  };

  const getCursorShadow = () => {
    if (isHovering) {
      switch (hoverType) {
        case "button":
          return "0 8px 32px rgba(229, 0, 43, 0.4), 0 0 16px rgba(229, 0, 43, 0.3)";
        case "link":
          return "0 8px 32px rgba(59, 130, 246, 0.4), 0 0 16px rgba(59, 130, 246, 0.3)";
        case "input":
          return "0 8px 32px rgba(34, 197, 94, 0.4), 0 0 16px rgba(34, 197, 94, 0.3)";
        default:
          return "0 8px 32px rgba(146, 208, 80, 0.4), 0 0 16px rgba(146, 208, 80, 0.3)";
      }
    }
    return isDarkBackground
      ? "0 4px 16px rgba(255, 255, 255, 0.1)"
      : "0 4px 16px rgba(0, 0, 0, 0.1)";
  };

  return (
    <div className="cursor-none">
      {children}

      {/* Main Cursor - Simple Circle */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-all duration-300 ease-out ${
          isHovering ? "scale-125" : "scale-100"
        } ${isClicking ? "scale-90" : ""}`}
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
        }}
      >
                                {/* Enhanced Interactive Circle */}
        <div
          className="rounded-full transition-all duration-300 backdrop-blur-lg"
          style={{
            width: isHovering ? "24px" : "20px",
            height: isHovering ? "24px" : "20px",
            backdropFilter: "blur(16px)",
            background: getMainCursorBackground(),
            border: getCursorBorder(),
            boxShadow: getCursorShadow(),
          }}
        />

        {/* Dynamic Inner Elements */}
        {hoverType === "button" && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        )}

        {hoverType === "link" && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-3 h-0.5 bg-blue-400 rounded animate-pulse" />
          </div>
        )}

        {hoverType === "input" && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-3 bg-green-400 rounded animate-pulse" />
        )}

        {/* Velocity Indicator */}
        {Math.sqrt(velocity.x ** 2 + velocity.y ** 2) > 3 && (
          <div
            className="absolute inset-0 rounded-full border-2 border-red-400/50 animate-ping"
            style={{
              width: "28px",
              height: "28px",
              marginLeft: "-4px",
              marginTop: "-4px",
            }}
          />
        )}

        {/* Glass Inner Highlight */}
        <div
          className="absolute top-1 left-1 w-2 h-2 rounded-full transition-all duration-300"
          style={{
            background: isDarkBackground
              ? "linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, transparent 70%)"
              : "linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, transparent 70%)",
          }}
        />

        {/* Hover Glow Effect */}
        {isHovering && (
          <>
            <div className="absolute inset-0 rounded-full bg-cloudone-green/20 blur-md animate-pulse" />
            <div className="absolute -inset-2 rounded-full bg-cloudone-green/10 blur-xl animate-pulse" />
          </>
        )}

        {/* Click Ripple Effect */}
        {isClicking && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 rounded-full bg-cloudone-green/20 border border-cloudone-green/30 animate-ping backdrop-blur-sm" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-cloudone-green/15 animate-pulse backdrop-blur-sm" />
          </div>
        )}
      </div>

                  {/* Adaptive Glass Trailing Effect */}
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-500 ease-out opacity-30"
        style={{
          left: mousePosition.x - 6,
          top: mousePosition.y - 6,
        }}
      >
        <div
          className="w-3 h-3 rounded-full backdrop-blur-sm"
          style={{
            background: isDarkBackground
              ? "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)"
              : "linear-gradient(135deg, rgba(0, 0, 0, 0.15) 0%, rgba(113, 61, 255, 0.1) 100%)",
            border: isDarkBackground
              ? "1px solid rgba(255, 255, 255, 0.25)"
              : "1px solid rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(8px)",
          }}
        />
      </div>

      {/* Adaptive Secondary Glass Trail */}
      <div
        className="fixed pointer-events-none z-[9997] transition-all duration-700 ease-out opacity-20"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
        }}
      >
        <div
          className="w-2 h-2 rounded-full backdrop-blur-sm"
          style={{
            background: isDarkBackground
              ? "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.03) 100%)"
              : "linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(113, 61, 255, 0.05) 100%)",
            border: isDarkBackground
              ? "1px solid rgba(255, 255, 255, 0.2)"
              : "1px solid rgba(0, 0, 0, 0.15)",
            backdropFilter: "blur(6px)",
          }}
        />
      </div>
    </div>
  );
};

export default CustomCursor;
