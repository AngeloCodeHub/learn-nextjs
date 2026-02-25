import os from 'node:os';

/**
 * 亂碼原因：通常是因為終端機編碼（如 Windows 的 CP950/GBK）與 Node.js 預設的 UTF-8 輸出不一致。
 * 解決方案：使用 JSON.stringify 將物件轉換為字串，可以避免終端機在處理原始字元時產生的編碼錯誤。
 */
// export const logNetworkInterfaces = () => {
//   console.log(JSON.stringify(os.networkInterfaces(), null, 2));
// };

// logNetworkInterfaces();


function fixEncoding(str: string): string {
  // Check if the string contains only single-byte characters (potential Latin1 misinterpretation)
  // and try to decode as Big5 (CP950) used in Traditional Chinese Windows.
  if (str.split('').every((c) => c.charCodeAt(0) < 256)) {
    try {
      const buffer = Buffer.from(str, 'binary');
      // const decoder = new TextDecoder('big5');
      const decoder = new TextDecoder('utf-8');
      return decoder.decode(buffer);
    } catch (error) {
      console.error('Encoding fix failed:', error);
    }
  }
  return str;
}

export function getOSInfo() {
  const networkInterfaces = os.networkInterfaces();
  const fixedNetworkInterfaces: Record<string, typeof networkInterfaces[keyof typeof networkInterfaces]> = {};

  for (const [key, value] of Object.entries(networkInterfaces)) {
    if (value) {
      fixedNetworkInterfaces[fixEncoding(key)] = value;
    }
  }

  return {
    freemem: os.freemem(),
    arch: os.arch(),
    cpus: os.cpus(),
    hostname: os.hostname(),
    loadavg: os.loadavg(),
    networkInterfaces: fixedNetworkInterfaces,
    platform: os.platform(),
    release: os.release(),
    uptime: os.uptime(),
    userInfo: os.userInfo(),
    type: os.type(),
    version: os.version(),
  };
}

