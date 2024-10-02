import type { Config } from "tailwindcss";

const config: Config = {
	mode: 'jit',
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		transform: {
			'preserve-3d': 'perspective(1000px)',
		  },
		  rotate: {
			'y-180': 'rotateY(180deg)',
		  },
		  backface: {
			hidden: 'backface-visibility: hidden',
		  },
  		colors: {
			 // Primary Colors
			 primary: {
				DEFAULT: '#6688cc', // Light Mode Primary
				dark: '#7ED321',    // Dark Mode Primary
			  },
			  // Secondary Colors
			  secondary: {
				DEFAULT: '#acbfe6', // Light Mode Secondary
				dark: '#646c79',    // Dark Mode Secondary
			  },
			  // Accent Color
			  accent: {
				light: '#182978',
				DEFAULT: '#182978',
				dark: '#1ba098'
			  },

			  // Neutral Colors
			  neutral: {
				light: '#F2F2F2',
				DEFAULT: '#F2F2F2',
				dark: '#1E1E1E',
				container: '#1E1E1E',
			  },

			  // Text Colors
			  text: {
				primary: {
				  light: '#333333',
				  dark: '#F2F2F2',
				},
				title: {
				  light: '#000000',
				  dark: '#FFFFFF',
				},
				paragraph: {
				  light: '#555555',
				  dark: '#CCCCCC',
				},
			  },

			  // Background Colors
			  background: {
				light: '#FFFFFF',
				dark: '#1f3044',
			  },

			  // Link Colors
			  link: {
				light: '#4A90E2',
				dark: '#7ED321',
			  },

			  // Hover Colors
			  hover: {
				light: '#fb9039',
				dark: '#fb9039',
			  },

			   // Alert Colors
			   alert: {
				success: '#7ED321',
				error: '#D0021B',
				warning: '#F5A623',
			  },

  			//background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			//primary: {
  				//DEFAULT: 'hsl(var(--primary))',
  				//foreground: 'hsl(var(--primary-foreground))'
  			//},
  			//secondary: {
  				//DEFAULT: 'hsl(var(--secondary))',
  				//foreground: 'hsl(var(--secondary-foreground))'
  			//},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			//accent: {
  				//DEFAULT: 'hsl(var(--accent))',
  				//foreground: 'hsl(var(--accent-foreground))'
  			//},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

/*
 // Custom Light Mode Colors
			 light: {
				background: '#F4F4F9', // Soft White
				secondaryBg: '#E5E5E5', // Light Gray
				primaryText: '#000000', // Black
				secondaryText: '#14213D', // Very Dark Blue
				accent1: '#4A4E69', // Muted Indigo
				accent2: '#9A8C98', // Soft Lavender Grey
				cta: '#FCA311', // Yellow-Orange
			  },
			  // Custom Dark Mode Colors
			  dark: {
				background: '#2A2A2E', // Dark Grey-Black
				primaryText: '#F2E9E4', // Off-White
				accent1: '#4A4E69', // Muted Indigo
				accent2: '#9A8C98', // Soft Lavender Grey
				cta: '#FCA311', // Yellow-Orange
			  },*/