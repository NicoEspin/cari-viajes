export const LANDING_MOTION_REFRESH_EVENT = "landing-motion:refresh";

export function requestLandingMotionRefresh(reason = "layout-change") {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(
    new CustomEvent(LANDING_MOTION_REFRESH_EVENT, {
      detail: { reason },
    }),
  );
}
