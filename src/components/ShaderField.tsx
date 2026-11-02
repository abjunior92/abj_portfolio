import { useEffect, useState } from "react";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";

type ThemeName = "light" | "dark";

const field = {
  type: "waterPlane" as const,
  uAmplitude: 0,
  uDensity: 1.5,
  uFrequency: 0,
  uSpeed: 0.22,
  uStrength: 1.5,
  uTime: 8,
  range: "disabled" as const,
  positionX: 0,
  positionY: 0,
  positionZ: 0,
  rotationX: 50,
  rotationY: 0,
  rotationZ: -60,
  reflection: 0.1,
  shader: "defaults",
  wireframe: false,
  cAzimuthAngle: 180,
  cPolarAngle: 80,
  cDistance: 2.8,
  cameraZoom: 9.1,
  lightType: "3d" as const,
  grain: "on" as const,
  enableTransition: true,
};

const palettes: Record<
  ThemeName,
  {
    brightness: number;
    envPreset: "dawn" | "city";
    color1: string;
    color2: string;
    color3: string;
  }
> = {
  light: {
    brightness: 1.28,
    envPreset: "dawn",
    color1: "#7eafdf",
    color2: "#f4eef2",
    color3: "#d7e6de",
  },
  dark: {
    brightness: 1.05,
    envPreset: "city",
    color1: "#1a4f8c",
    // color2: "#8b939e",
    color2: "#44506b",
    color3: "#12151c",
  },
};

function readTheme(): ThemeName {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function readDensity() {
  const coarse = matchMedia(
    "(max-width: 720px), (prefers-reduced-data: reduce)",
  ).matches;
  if (coarse) return 1;
  return Math.min(window.devicePixelRatio || 1, 1.5);
}

export default function ShaderField() {
  const [theme, setTheme] = useState<ThemeName>(readTheme);
  const [animate, setAnimate] = useState<"on" | "off">(() =>
    matchMedia("(prefers-reduced-motion: reduce)").matches ? "off" : "on",
  );
  const [density] = useState(readDensity);
  const palette = palettes[theme];

  useEffect(() => {
    const root = document.documentElement;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const syncTheme = () => setTheme(readTheme());
    const syncMotion = () => setAnimate(motion.matches ? "off" : "on");
    const observer = new MutationObserver(syncTheme);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    motion.addEventListener("change", syncMotion);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", syncMotion);
    };
  }, []);

  return (
    <ShaderGradientCanvas
      style={{ position: "absolute", inset: 0 }}
      pixelDensity={density}
      fov={45}
      pointerEvents="none"
      lazyLoad={false}
    >
      <ShaderGradient
        {...field}
        animate={animate}
        brightness={palette.brightness}
        envPreset={palette.envPreset}
        color1={palette.color1}
        color2={palette.color2}
        color3={palette.color3}
      />
    </ShaderGradientCanvas>
  );
}
