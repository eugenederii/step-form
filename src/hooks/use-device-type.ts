import { useWindowSize } from "usehooks-ts";
import { useMemo } from "react";

type DeviceType = "mobile" | "tablet" | "desktop" | null;

let cacheWidth = 0;
const screenPhone = 768;
const screenTablet = 1280;

export const useDeviceType = (): DeviceType => {
  const { width } = useWindowSize();

  return useMemo<DeviceType>(() => {
    if (width === 0 && cacheWidth === 0) {
      return null;
    }

    let _width = width;

    if (width === 0 && cacheWidth !== 0) {
      _width = cacheWidth;
    }

    cacheWidth = _width;

    if (_width <= screenPhone) {
      return "mobile";
    }

    if (_width <= screenTablet) {
      return "tablet";
    }

    return "desktop";
  }, [width]);
};
