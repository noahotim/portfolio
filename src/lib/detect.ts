export type ClientInfo = { browser: string; os: string; device: string };

type UAData = {
  brands?: { brand: string; version: string }[];
  platform?: string;
  mobile?: boolean;
};

export function detectClient(): ClientInfo {
  const nav =
    typeof navigator === "undefined"
      ? undefined
      : (navigator as Navigator & { userAgentData?: UAData });
  const ua = nav?.userAgent || "";
  const uad = nav?.userAgentData;

  let browser = "Unknown";
  let os = "Unknown";
  let device = /Mobi|Android|iPhone/i.test(ua) ? "Mobile" : "Desktop";

  if (uad && Array.isArray(uad.brands) && uad.brands.length) {
    const brand =
      uad.brands.find((b) => !/Not.?A.?Brand/i.test(b.brand)) || uad.brands[0];
    browser = `${brand.brand} ${String(brand.version).split(".")[0]}`.trim();
    os = uad.platform || os;
    device = uad.mobile ? "Mobile" : "Desktop";
  } else {
    const edge = ua.match(/Edg(?:e|A|iOS)?\/([\d.]+)/);
    const opera = ua.match(/OPR\/([\d.]+)/);
    const samsung = ua.match(/SamsungBrowser\/([\d.]+)/);
    const firefox = ua.match(/Firefox\/([\d.]+)/);
    const chrome = ua.match(/Chrome\/([\d.]+)/);
    const safari = ua.match(/Version\/([\d.]+).*Safari/);

    if (edge) browser = `Edge ${edge[1].split(".")[0]}`;
    else if (opera) browser = `Opera ${opera[1].split(".")[0]}`;
    else if (samsung) browser = `Samsung Internet ${samsung[1].split(".")[0]}`;
    else if (firefox) browser = `Firefox ${firefox[1].split(".")[0]}`;
    else if (chrome && !/Chromium/.test(ua)) browser = `Chrome ${chrome[1].split(".")[0]}`;
    else if (safari) browser = `Safari ${safari[1].split(".")[0]}`;

    if (/Windows NT 10/.test(ua)) os = "Windows 10/11";
    else if (/Windows NT/.test(ua)) os = "Windows";
    else if (/CrOS/.test(ua)) os = "ChromeOS";
    else if (/Android/.test(ua)) os = "Android";
    else if (/iPhone|iPad|iPod/.test(ua)) os = "iOS";
    else if (/Mac OS X|Macintosh/.test(ua)) os = "macOS";
    else if (/Linux/.test(ua)) os = "Linux";

    if (/iPad|Tablet/.test(ua)) device = "Tablet";
    else if (/Mobi/i.test(ua)) device = "Mobile";
  }

  return { browser, os, device };
}

export function trackUrl(base: string, source: string): string {
  const { browser, os, device } = detectClient();
  const params = new URLSearchParams({
    src: source,
    path: typeof window === "undefined" ? "/" : window.location.pathname,
    ref: typeof document === "undefined" ? "" : document.referrer || "",
    b: browser,
    o: os,
    d: device,
    ua: detectClientUa(),
  });
  return `${base}/api/track?${params.toString()}`;
}

function detectClientUa() {
  return typeof navigator === "undefined" ? "" : navigator.userAgent || "";
}
