import { type Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        animation: {
            "text-flicker-out-glow": "text-flicker-out-glow 0.375s linear  infinite both",
            "text-flicker-out-glow-dark": "text-flicker-out-glow-dark 0.375s linear infinite both"
        },
        keyframes: {
            "text-flicker-out-glow": {
                "0%": {
                    "text-shadow": "0.05em 0 0 #f0f0ff, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #FFFFF0"
                },
                "15": {
                    "text-shadow": "0.05em 0 0 #f0f0ff, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #FFFFF0"
                },
                "16%": {
                    "text-shadow": "-0.05em -0.025em 0 #f0f0ff, 0.025em 0.035em 0 #fc00ff, -0.05em -0.05em 0 #FFFFF0"
                },
                "49%": {
                    "text-shadow": "-0.05em -0.025em 0 #f0f0ff, 0.025em 0.035em 0 #fc00ff, -0.05em -0.05em 0 #FFFFF0"
                },
                "50%": {
                    "text-shadow": "0.05em 0.035em 0 #f0f0ff, 0.03em 0 0 #fc00ff, 0 -0.04em 0 #FFFFF0"
                },
                "99%": {
                    "text-shadow": "0.05em 0.035em 0 #f0f0ff, 0.03em 0 0 #fc00ff, 0 -0.04em 0 #FFFFF0"
                },
                "100%": {
                    "text-shadow": "-0.05em 0 0 #f0f0ff, -0.025em -0.04em 0 #fc00ff, -0.04em -0.025em 0 #FFFFF0"
                },
                to: {
                    opacity: "1"
                }
            },
            "text-flicker-out-glow-dark": {
              "0%": {
                  "text-shadow": "0.05em 0 0 #6e49e1, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #FFFFF0"
              },
              "15": {
                  "text-shadow": "0.05em 0 0 #6e49e1, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #FFFFF0"
              },
              "16%": {
                  "text-shadow": "-0.05em -0.025em 0 #6e49e1, 0.025em 0.035em 0 #fc00ff, -0.05em -0.05em 0 #FFFFF0"
              },
              "49%": {
                  "text-shadow": "-0.05em -0.025em 0 #6e49e1, 0.025em 0.035em 0 #fc00ff, -0.05em -0.05em 0 #FFFFF0"
              },
              "50%": {
                  "text-shadow": "0.05em 0.035em 0 #6e49e1, 0.03em 0 0 #fc00ff, 0 -0.04em 0 #FFFFF0"
              },
              "99%": {
                  "text-shadow": "0.05em 0.035em 0 #6e49e1, 0.03em 0 0 #fc00ff, 0 -0.04em 0 #FFFFF0"
              },
              "100%": {
                  "text-shadow": "-0.05em 0 0 #6e49e1, -0.025em -0.04em 0 #fc00ff, -0.04em -0.025em 0 #FFFFF0"
              },
              to: {
                  opacity: "1"
              }
          }

        }
    }
  },
  plugins: [],
} satisfies Config;
